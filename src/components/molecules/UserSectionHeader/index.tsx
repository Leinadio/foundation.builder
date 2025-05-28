import React from "react";
import UserAvatar from "@/components/atoms/UserAvatar";

interface User {
  displayName?: string;
  email?: string;
  photoURL?: string;
}

interface UserSectionHeaderProps {
  user: User | null;
}

export default function UserSectionHeader({
  user,
}: UserSectionHeaderProps) {
  if (
    !user?.displayName ||
    !user?.email ||
    !user?.photoURL
  ) {
    return null;
  }

  return (
    <div className="flex items-center space-x-3 p-2">
      <UserAvatar
        photoURL={user.photoURL}
        displayName={user.displayName}
      />
      <div>
        <p className="text-sm font-medium">
          {user.displayName || "Mon compte"}
        </p>
        <p className="text-xs text-muted-foreground">
          {user.email}
        </p>
      </div>
    </div>
  );
}
