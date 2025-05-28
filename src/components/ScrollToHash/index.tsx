// components/ScrollToHash.tsx (Client Component)
'use client';

import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    // Vérifier s'il y a une ancre dans l'URL au chargement
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return null;
}