'use client'

import { useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { AuthContext } from './AuthContext';
import { getUser, UserData } from '@/services/users';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '@/lib/firebase';

interface AuthProviderProps {
  children: ReactNode;
}

// export async function setSessionCookie(idToken: string) {
//   // Appel à votre API pour créer le cookie de session
//   const response = await fetch('/api/auth/session', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ idToken }),
//   })
  
//   return response.ok
// }

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const userRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        setUser(prev => ({
          ...prev,
          ...doc.data() as UserData
        }));
      }
    });
    return () => unsubscribe();
  }, [user?.uid]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setIsAuthenticated(true);
        // const idToken = await currentUser.getIdToken()
        // await setSessionCookie(idToken)
        const userData: UserData | undefined = await getUser(currentUser.uid);
        const user: UserData = {
          email: currentUser.email || '',
          workflows: userData?.workflows || [],
          emailVerified: currentUser.emailVerified,
          displayName: currentUser.displayName || '',
          photoURL: currentUser.photoURL || '',
          usedReports: userData?.usedReports || 0,
          purchasedReports: userData?.purchasedReports || 0,
          uid: currentUser.uid,
        }
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
