import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { initFirebaseAdmin } from '@/lib/firebase-admin'

const firebaseAdmin = initFirebaseAdmin()

export async function POST() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('firebase-session')?.value

    if (!sessionCookie) {
      return NextResponse.json({ isValid: false }, { status: 401 })
    }

    // Vérifier la validité du cookie de session
    await firebaseAdmin.verifySessionCookie(sessionCookie, true)
    return NextResponse.json({ isValid: true })
  } catch {
    return NextResponse.json({ isValid: false }, { status: 401 })
  }
} 