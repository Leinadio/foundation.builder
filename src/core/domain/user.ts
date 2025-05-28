export type User = {
  id: string;
  email: string;
  name: string;
};

export function isValidUser(user: User): boolean {
  return user.email.includes("@");
}
