import { App, cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getFirebaseApp(): App {
  if (getApps().length > 0) return getApp();

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON is not set');

  const json = raw.startsWith('{') ? raw : Buffer.from(raw, 'base64').toString();
  return initializeApp({ credential: cert(JSON.parse(json)) });
}

export function adminDb() {
  return getFirestore(getFirebaseApp());
}
