import { NextResponse } from 'next/server';
import { getPaymentConfirmationTemplate } from '../templates';
import resend from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const { email, name, productName, numReports, language = 'fr' } = await req.json();

    // Validation des paramètres
    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    if (!name) {
      return NextResponse.json({ error: 'Nom requis' }, { status: 400 });
    }

    if (!productName) {
      return NextResponse.json({ error: 'Nom du produit requis' }, { status: 400 });
    }

    if (numReports === undefined) {
      return NextResponse.json({ error: 'Nombre de rapports requis' }, { status: 400 });
    }

    // Obtenir le template d'email
    const { subject, html, text } = getPaymentConfirmationTemplate(
      name,
      productName,
      numReports,
      language as 'fr' | 'en'
    );

    // Envoyer l'email
    const data = await resend.emails.send({
      from: 'Womi <no-reply@womi-validateidea.com>',
      to: [email],
      subject,
      html,
      text,
    });

    console.log(`Email de confirmation de paiement envoyé à ${email} en ${language}:`, data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de confirmation de paiement:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email de confirmation de paiement" },
      { status: 500 }
    );
  }
} 