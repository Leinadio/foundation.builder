// lib/auth.ts
import { cookies } from 'next/headers'
import { initFirebaseAdmin } from './firebase-admin'

// Initialiser Firebase Admin une seule fois au niveau du module
const firebaseAdmin = initFirebaseAdmin()

// Interface pour le résultat du décodage du cookie
interface DecodedClaim {
  uid: string
  [key: string]: unknown
}

// Cache simple pour les sessions vérifiées (cookie -> {timestamp, decodedClaim})
const sessionCache: Map<string, {timestamp: number, decodedClaim: DecodedClaim}> = new Map()
// Durée de validité du cache en millisecondes (par exemple 5 minutes)
const CACHE_TTL = 5 * 60 * 1000

export interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  emailVerified: boolean
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    // Récupération du cookie de session
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('firebase-session')?.value
    
    if (!sessionCookie) {
      // Pas de cookie de session trouvé
      return null
    }
    
    // Vérifier si nous avons ce cookie en cache et s'il est encore valide
    const now = Date.now()
    const cachedSession = sessionCache.get(sessionCookie)
    let decodedClaim
    
    if (cachedSession && (now - cachedSession.timestamp) < CACHE_TTL) {
      // Utiliser la session en cache
      decodedClaim = cachedSession.decodedClaim
    } else {
      // Vérifier la session avec Firebase
      decodedClaim = await firebaseAdmin.verifySessionCookie(sessionCookie, true)
      // Mettre en cache le résultat
      sessionCache.set(sessionCookie, {
        timestamp: now,
        decodedClaim
      })
    }
    
    // Récupération des informations utilisateur complètes
    const user = await firebaseAdmin.getUser(decodedClaim.uid)

    if (!user || !user.email) {
      return null
    }
    
    // Retourner un objet utilisateur formaté
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      emailVerified: user.emailVerified
    }
  } catch {
    return null
  }
}