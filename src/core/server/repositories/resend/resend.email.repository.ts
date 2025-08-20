import { EmailRepository } from "@/core/server/ports/out/email.repository";
import { Resend } from "resend";

export class ResendEmailRepositoryImpl implements EmailRepository {
  private readonly resend: Resend;

  public constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY n'est pas définie dans les variables d'environnement");
    }
    this.resend = new Resend(apiKey);
  }

  public async sendVerificationEmail({
    email,
    name,
    url,
  }: {
    email: string;
    name: string;
    url: string;
  }): Promise<void> {
    await this.resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@example.com",
      to: [email],
      subject: "Vérifiez votre adresse email",
      html: this.getVerificationEmailTemplate({ name, url }),
    });
  }

  public async sendPasswordResetEmail({
    email,
    name,
    url,
  }: {
    email: string;
    name: string;
    url: string;
  }): Promise<void> {
    await this.resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@example.com",
      to: [email],
      subject: "Réinitialiser votre mot de passe",
      html: this.getPasswordResetEmailTemplate({ name, url }),
    });
  }

  private getVerificationEmailTemplate({ name, url }: { name: string; url: string }): string {
    return `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #333; text-align: center;">Vérification de votre adresse email</h2>
        <p>Bonjour ${name},</p>
        <p>Merci de vous être inscrit yeaah ! Pour finaliser votre inscription, veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${url}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Vérifier mon email
          </a>
        </div>
        <p>Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.</p>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;
  }

  private getPasswordResetEmailTemplate({ name, url }: { name: string; url: string }): string {
    return `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #333; text-align: center;">Réinitialisation de votre mot de passe</h2>
        <p>Bonjour ${name},</p>
        <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour créer un nouveau mot de passe :</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${url}" style="background-color: #dc3545; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Réinitialiser mon mot de passe
          </a>
        </div>
        <p>Si vous n'avez pas demandé cette réinitialisation, vous pouvez ignorer cet email.</p>
        <p>Ce lien expirera dans 24 heures.</p>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;
  }
}
