import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Functions, getFunctions } from 'firebase/functions';
import { Firestore, getFirestore } from 'firebase/firestore';
import { Auth, getAuth } from 'firebase/auth';
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';
// Your web app's Firebase configuration
const firebaseDevConfig: FirebaseOptions = {
  apiKey: "AIzaSyD2ksbnwn6JgSZN29mBxHJeNds1fcQBMAI",
  authDomain: "womi-dev.firebaseapp.com",
  projectId: "womi-dev",
  storageBucket: "womi-dev.firebasestorage.app",
  messagingSenderId: "31732473394",
  appId: "1:31732473394:web:03359247badf16d52e262b",
  measurementId: "G-X4XBJ1J6CY"
}

  // Your web app's Firebase configuration
const firebaseProdConfig: FirebaseOptions = {
  apiKey: "AIzaSyA6SwPDlyjyYhL5NxcCb_pI9wbONOAOVTU",
  authDomain: "womi-prod.firebaseapp.com",
  projectId: "womi-prod",
  storageBucket: "womi-prod.firebasestorage.app",
  messagingSenderId: "471398985500",
  appId: "1:471398985500:web:b59173d7b5afa377cc14d9",
  measurementId: "G-L28XBSJVRD"
};

const firebaseConfig = process.env.NEXT_PUBLIC_ENV_MODE === 'PROD' ? firebaseProdConfig : firebaseDevConfig;

const app: FirebaseApp = initializeApp(firebaseConfig);
const functions: Functions = getFunctions(app);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

// Initialiser Analytics de manière conditionnelle
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  // Vérifier si Analytics est supporté avant l'initialisation
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialisé avec succès');
    } else {
      console.log('Firebase Analytics n\'est pas supporté dans cet environnement');
    }
  }).catch(() => {
    return;
  });
}

// Configurer la langue de l'authentification en fonction de l'URL
const configureAuthLanguage = () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    
    // Vérifier si l'URL commence par /fr ou /en
    if (pathname.startsWith('/fr')) {
      auth.languageCode = 'fr';
    } else if (pathname.startsWith('/en')) {
      auth.languageCode = 'en';
    } else {
      // Langue par défaut - anglais
      auth.languageCode = 'en';
    }
    
    console.log(`Langue d'authentification configurée: ${auth.languageCode} (basée sur l'URL)`);
  }
};

// Exécuter la configuration de langue
configureAuthLanguage();

export { functions, db, auth, app, analytics }; 
