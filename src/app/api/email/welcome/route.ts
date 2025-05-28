import { NextResponse } from 'next/server';
import { getWelcomeEmailTemplate } from '../templates';
import resend from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const { email, name, isNewUser = true, language = 'fr' } = await req.json();

    // Validation des paramètres
    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    if (!name) {
      return NextResponse.json({ error: 'Nom requis' }, { status: 400 });
    }

    // Obtenir le template d'email
    const { subject, html, text } = getWelcomeEmailTemplate(
      name,
      isNewUser,
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

    console.log(`Email de bienvenue envoyé à ${email} en ${language}:`, data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de bienvenue:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email de bienvenue" },
      { status: 500 }
    );
  }
} 