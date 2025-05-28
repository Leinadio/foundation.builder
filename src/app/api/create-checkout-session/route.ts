import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialisation de Stripe avec la clé API secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-03-31.basil', // Version compatible
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      priceId, 
      cancelUrl,
      userId
    } = body;
    
    // Vérification des paramètres
    if (!priceId) {
      console.error('PriceId manquant');
      return NextResponse.json({ error: 'PriceId est requis' }, { status: 400 });
    }
    
    if (!userId) {
      console.error('UserId manquant');
      return NextResponse.json({ error: 'UserId est requis' }, { status: 400 });
    }
    
    // Création d'une session de paiement Stripe
    // Note: même si le mode est spécifié comme 'subscription', nous utilisons 'payment'
    // pour garantir que c'est toujours un paiement unique
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment', // Toujours utiliser 'payment' pour les paiements uniques
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      client_reference_id: userId, // Ajouter l'ID de l'utilisateur
      payment_method_options: {
        card: {
          request_three_d_secure: 'any',
        },
      },
    });

    if (session && session.url) {
      console.log('Session Stripe créée:', { id: session.id, url: session.url });
      return NextResponse.json({ sessionId: session.id, url: session.url });
    } else {
      console.error('URL de session Stripe manquante');
      return NextResponse.json({ error: 'URL de session non disponible' }, { status: 500 });
    }
  } catch (error) {
    console.error('Erreur lors de la création de la session Stripe:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session de paiement' },
      { status: 500 }
    );
  }
} 