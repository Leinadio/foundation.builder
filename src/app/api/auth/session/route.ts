import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { initFirebaseAdmin } from '@/lib/firebase-admin'

const firebaseAdmin = initFirebaseAdmin()

// Durée de validité du cookie de session (5 jours)
const SESSION_EXPIRES_IN = 60 * 60 * 24 * 5 * 1000

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json()

    if (!idToken) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 400 })
    }

    // Créer un cookie de session
    const sessionCookie = await firebaseAdmin.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRES_IN
    })

    // Configurer les options du cookie
    const cookieStore = await cookies()
    cookieStore.set({
      name: 'firebase-session',
      value: sessionCookie,
      maxAge: SESSION_EXPIRES_IN / 1000, // maxAge est en secondes
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax'
    })

    return NextResponse.json({ status: 'success' })
  } catch {
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session' },
      { status: 401 }
    )
  }
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.delete('firebase-session')
  return NextResponse.json({ status: 'success' })
} 