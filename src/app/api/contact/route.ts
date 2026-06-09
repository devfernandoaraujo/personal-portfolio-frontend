import { NextRequest } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { FieldValue } from 'firebase-admin/firestore';

const RATE_WINDOW_MS = 60_000;
const recent = new Map<string, number>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(req: NextRequest) {
  let body: { name?: unknown; email?: unknown; message?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const honeypot = typeof body.website === 'string' ? body.website.trim() : '';

  if (honeypot.length > 0) {
    return Response.json({ ok: true, id: 'noop' });
  }

  if (name.length < 2 || name.length > 100) {
    return Response.json({ ok: false, error: 'Name looks off — keep it 2–100 characters.' }, { status: 400 });
  }
  if (!isEmail(email) || email.length > 254) {
    return Response.json({ ok: false, error: 'That email address looks invalid.' }, { status: 400 });
  }
  if (message.length < 10 || message.length > 4000) {
    return Response.json({ ok: false, error: 'Tell me a bit more (10–4000 characters).' }, { status: 400 });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const last = recent.get(ip) ?? 0;
  if (now - last < RATE_WINDOW_MS) {
    return Response.json(
      { ok: false, error: 'You just sent a message — give it a minute and try again.' },
      { status: 429 }
    );
  }
  recent.set(ip, now);

  try {
    const db = adminDb();
    const doc = await db.collection('messages').add({
      name,
      email,
      message,
      ip,
      userAgent: req.headers.get('user-agent'),
      referer: req.headers.get('referer'),
      createdAt: FieldValue.serverTimestamp(),
      status: 'new',
    });

    return Response.json({ ok: true, id: doc.id });
  } catch (err) {
    console.error('[/api/contact] persist failed', err);
    return Response.json(
      { ok: false, error: 'Something went wrong on my end. Try again in a minute?' },
      { status: 500 }
    );
  }
}
