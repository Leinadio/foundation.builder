export type User = {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  purchasedReports: number;
  updatedAt: string;
  usedReports: number;
};

export function isValidUser(user: User): boolean {
  return user.email.includes("@");
}
