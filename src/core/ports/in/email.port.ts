export interface EmailPortIn {
  sendVerificationEmail({ email, name, url }: { email: string; name: string; url: string }): Promise<void>;
  sendPasswordResetEmail({ email, name, url }: { email: string; name: string; url: string }): Promise<void>;
}
