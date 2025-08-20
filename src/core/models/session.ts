export type Session = {
  id: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  token: string;
  ipAddress?: string | null;
  userAgent?: string | null;
};

export function isValidSession(session: Session): boolean {
  return session.expiresAt > new Date();
}
