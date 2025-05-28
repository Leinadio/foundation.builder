import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

// Initialisation de Stripe avec la clé API secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Fonction pour déterminer le nom du produit basé sur le priceId
const getProductName = (priceId: string | undefined, language: 'fr' | 'en' = 'fr') => {
  if (language === 'fr') {
    if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_RAPPORT_UNIQUE) {
      return 'Rapport unique';
    } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_BUNDLE) {
      return 'Pack Standard (5 rapports)';
    } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_PLAN_PREMIUM_BUNDLE) {
      return 'Pack Premium (10 rapports)';
    }
    return 'Achat sur Womi';
  } else {
    // Traductions en anglais
    if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_RAPPORT_UNIQUE) {
      return 'Single Report';
    } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_BUNDLE) {
      return 'Standard Bundle (5 reports)';
    } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_PLAN_PREMIUM_BUNDLE) {
      return 'Premium Bundle (10 reports)';
    }
    return 'Purchase on Womi';
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature');

    if (!sig || !endpointSecret) {
      return NextResponse.json({ error: 'Signature ou secret manquant' }, { status: 400 });
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
      console.error('Erreur de signature webhook:', err);
      return NextResponse.json({ error: 'Signature invalide' }, { status: 400 });
    }
    
    // Gérer l'événement de paiement réussi
    if (event.type === 'checkout.session.completed') {
      const session = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ['line_items']
        }
      );
      // const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.client_reference_id;
      const priceId = session.line_items?.data[0]?.price?.id;

      if (!userId) {
        console.error('ID utilisateur manquant dans la session');
        return NextResponse.json({ error: 'ID utilisateur manquant' }, { status: 400 });
      }

      // Récupérer l'utilisateur dans Firestore
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        console.error('Utilisateur non trouvé:', userId);
        return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
      }

      const userData = userDoc.data();

      // Déterminer le nombre de rapports à ajouter selon le produit acheté
      let reportsToAdd = 0;
      if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_RAPPORT_UNIQUE) {
        reportsToAdd = 1;
      } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_BUNDLE) {
        reportsToAdd = 5;
      } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_PLAN_PREMIUM_BUNDLE) {
        reportsToAdd = 10;
      }

      // Mettre à jour le nombre de rapports disponibles
      const currentReports = userData.purchasedReports || 0;
      await updateDoc(userRef, {
        purchasedReports: currentReports + reportsToAdd,
        updatedAt: new Date().toISOString()
      });

      // Envoyer l'email de confirmation de paiement
      if (userData.email) {
        try {
          // Déterminer la langue de l'utilisateur
          const userLanguage = userData.language || 'fr';
          const language = userLanguage === 'en' ? 'en' : 'fr';
          
          const productName = getProductName(priceId, language);
          const userName = userData.displayName || userData.email.split('@')[0] || 'Utilisateur';
          
          // Appeler l'API d'envoi d'email de confirmation de paiement
          const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email/payment-confirmation`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userData.email,
              name: userName,
              productName: productName,
              numReports: reportsToAdd,
              language: language
            }),
          });
          
          if (!emailResponse.ok) {
            console.error(`Erreur lors de l'envoi de l'email de confirmation: ${emailResponse.status}`);
          } else {
            console.log(`Email de confirmation envoyé à ${userData.email} en ${language}`);
          }
        } catch (emailError) {
          console.error("Erreur lors de l'envoi de l'email de confirmation:", emailError);
          // On continue même si l'envoi d'email échoue
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.log('Erreur lors du traitement du webhook:', error);
    return NextResponse.json(
      { error: 'Erreur lors du traitement du webhook' },
      { status: 500 }
    );
  }
} 