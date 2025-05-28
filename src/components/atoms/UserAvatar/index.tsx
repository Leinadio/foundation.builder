import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface UserAvatarProps {
  photoURL?: string | null;
  displayName?: string | null;
}

export default function UserAvatar(props: UserAvatarProps) {
  const { photoURL, displayName } = props;

  const getUserInitials: () => string = (): string => {
    if (!displayName) return "U";
    const nameParts: string[] = displayName.split(" ");
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`;
    }
    return nameParts[0][0] || "U";
  };

  if (!photoURL) {
    return (
      <Avatar className="h-8 w-8">
        <AvatarFallback>{getUserInitials()}</AvatarFallback>
      </Avatar>
    );
  }
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={photoURL} alt={displayName || "Utilisateur"} />
      <AvatarFallback>{getUserInitials()}</AvatarFallback>
    </Avatar>
  );
}
