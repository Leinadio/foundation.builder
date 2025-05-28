// lib/firebase-admin.ts
import { initializeApp, getApps } from 'firebase-admin/app'
import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import { ServiceAccount } from 'firebase-admin'

// Configuration à partir des variables d'environnement
const serviceAccountConfig: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
}

// Initialisation de Firebase Admin
export function initFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp({
      credential: admin.credential.cert(serviceAccountConfig)
    });
  }
  return getAuth()
}