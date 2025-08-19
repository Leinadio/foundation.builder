import { EmailPortIn } from "@/core/ports/in/email.port";
import { EmailRepository } from "@/core/ports/out/email.repository";

export class EmailService implements EmailPortIn {
  private readonly emailRepository: EmailRepository;

  public constructor(emailRepository: EmailRepository) {
    this.emailRepository = emailRepository;
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
    return this.emailRepository.sendVerificationEmail({ email, name, url });
  }

  public async sendPasswordResetEmail({
    email,
    url,
    name,
  }: {
    email: string;
    url: string;
    name: string;
  }): Promise<void> {
    return this.emailRepository.sendPasswordResetEmail({ email, name, url });
  }
}
