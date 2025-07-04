import { betterAuth } from "better-auth";
import { Resend } from "resend";
import { Pool } from "pg";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@example.com",
        to: [user.email],
        subject: "Réinitialiser votre mot de passe",
        html: getPasswordResetEmailTemplate(user.name || "Utilisateur", url),
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@example.com",
        to: [user.email],
        subject: "Vérifiez votre adresse email",
        html: getVerificationEmailTemplate(user.name || "Utilisateur", url),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
});

function getVerificationEmailTemplate(name: string, verificationUrl: string): string {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
      <h2 style="color: #333; text-align: center;">Vérification de votre adresse email</h2>
      <p>Bonjour ${name},</p>
      <p>Merci de vous être inscrit ! Pour finaliser votre inscription, veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Vérifier mon email
        </a>
      </div>
      <p>Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.</p>
      <p>Cordialement,<br>L'équipe</p>
    </div>
  `;
}

function getPasswordResetEmailTemplate(name: string, resetUrl: string): string {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
      <h2 style="color: #333; text-align: center;">Réinitialisation de votre mot de passe</h2>
      <p>Bonjour ${name},</p>
      <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour créer un nouveau mot de passe :</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background-color: #dc3545; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Réinitialiser mon mot de passe
        </a>
      </div>
      <p>Si vous n'avez pas demandé cette réinitialisation, vous pouvez ignorer cet email.</p>
      <p>Ce lien expirera dans 24 heures.</p>
      <p>Cordialement,<br>L'équipe</p>
    </div>
  `;
}
