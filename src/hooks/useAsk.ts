'use client';

import { useCallback, useRef, useState } from 'react';

type Turn = { role: 'user' | 'model'; content: string };

export function useAsk() {
  const [answer, setAnswer] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const historyRef = useRef<Turn[]>([]);
  const abortRef = useRef<AbortController | null>(null);

  const ask = useCallback(async (question: string) => {
    const q = question.trim();
    if (!q) return;

    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setAnswer('');
    setError(null);
    setIsStreaming(true);

    let accumulated = '';

    try {
      const resp = await fetch('/api/ask', {
        method: 'POST',
        signal: ctrl.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, history: historyRef.current }),
      });

      if (!resp.ok || !resp.body) {
        const j = await resp.json().catch(() => ({ error: 'Network error' }));
        throw new Error(j.error || `HTTP ${resp.status}`);
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const parts = buffer.split('\n\n');
        buffer = parts.pop() ?? '';

        for (const part of parts) {
          const lines = part.split('\n');
          const eventLine = lines.find((l) => l.startsWith('event: '));
          const dataLine = lines.find((l) => l.startsWith('data: '));
          if (!eventLine || !dataLine) continue;
          const event = eventLine.slice(7).trim();
          const data = dataLine.slice(6).replace(/\\n/g, '\n');

          if (event === 'token') {
            accumulated += data;
            setAnswer(accumulated);
          } else if (event === 'error') {
            throw new Error(data);
          }
        }
      }

      historyRef.current = [
        ...historyRef.current,
        { role: 'user' as const, content: q },
        { role: 'model' as const, content: accumulated },
      ].slice(-8);
    } catch (err) {
      if ((err as { name?: string }).name === 'AbortError') return;
      setError((err as Error).message);
    } finally {
      setIsStreaming(false);
    }
  }, []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    historyRef.current = [];
    setAnswer('');
    setError(null);
    setIsStreaming(false);
  }, []);

  return { ask, answer, isStreaming, error, history: historyRef.current, reset };
}
