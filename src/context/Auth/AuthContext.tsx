'use client'

import { createContext, useContext } from 'react';
import { UserData } from '@/services/users';



interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
}