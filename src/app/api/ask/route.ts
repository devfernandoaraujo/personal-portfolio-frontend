import { NextRequest } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FERNANDO_SYSTEM_PROMPT } from '@/lib/fernandoContext';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 10;
const bucket = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; retryInSec: number } {
  const now = Date.now();
  const entry = bucket.get(ip);
  if (!entry || now > entry.resetAt) {
    bucket.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryInSec: 0 };
  }
  if (entry.count >= MAX_PER_WINDOW) {
    return { allowed: false, retryInSec: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true, retryInSec: 0 };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: 'GEMINI_API_KEY not configured' }, { status: 500 });
  }

  let body: { question?: unknown; history?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const question = typeof body.question === 'string' ? body.question.trim() : '';
  if (question.length < 2 || question.length > 500) {
    return Response.json({ ok: false, error: 'Question must be 2–500 characters.' }, { status: 400 });
  }

  type HistoryItem = { role: 'user' | 'model'; content: string };
  const history: HistoryItem[] = Array.isArray(body.history)
    ? (body.history as HistoryItem[])
        .filter(
          (h): h is HistoryItem =>
            !!h && (h.role === 'user' || h.role === 'model') && typeof h.content === 'string'
        )
        .slice(-8)
    : [];

  const ip = getClientIp(req);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return Response.json(
      { ok: false, error: `Too many questions — try again in ${limit.retryInSec}s.` },
      { status: 429 }
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      function send(event: string, data: string) {
        controller.enqueue(
          encoder.encode(`event: ${event}\ndata: ${data.replace(/\n/g, '\\n')}\n\n`)
        );
      }

      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: 'gemini-2.0-flash',
          systemInstruction: FERNANDO_SYSTEM_PROMPT,
        });

        const chat = model.startChat({
          history: history.map((h) => ({ role: h.role, parts: [{ text: h.content }] })),
          generationConfig: { temperature: 0.6, maxOutputTokens: 400 },
        });

        const result = await chat.sendMessageStream(question);
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) send('token', text);
        }
        send('done', '');
      } catch (err) {
        console.error('[/api/ask] gemini call failed', err);
        send('error', "I'm having trouble answering right now — try the contact form.");
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}
