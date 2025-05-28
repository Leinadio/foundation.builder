import { ButtonAuth } from "@/components/AuthDialog/button-auth";
import { Button } from "@/components/ui/button";
// import { auth } from "firebase-admin";
import { LogOut } from "lucide-react";
import UserAvatar from "@/components/UserAvatar";
import { useDictionary } from "@/context/Dictionnary/DictionnaryContext";
import Link from "next/link";

interface UserSectionItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface UserSectionProps {
  loading: boolean;
  isAuthenticated: boolean;
  displayName?: string;
  email?: string;
  photoURL?: string;
  locale: string;
  setIsOpen: (isOpen: boolean) => void;
  userSectionItems: UserSectionItem[];
}

export default function UserSection(props: UserSectionProps) {
  const {
    loading,
    isAuthenticated,
    displayName,
    email,
    photoURL,
    locale,
    userSectionItems,
  } = props;
  const { dictionary } = useDictionary();
  if (loading) {
    return (
      <div className="flex items-center space-x-4 py-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-40 bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <ButtonAuth lang={locale}>Login</ButtonAuth>;
  }

  const displayUserAvatar = () => {
    if (!displayName || !email || !photoURL) {
      return null;
    }
    return <UserAvatar photoURL={photoURL} displayName={displayName} />;
  };

  const displayUserSectionItems = () => {
    if (!userSectionItems) {
      return null;
    }

    return userSectionItems.map((item: UserSectionItem) => (
      <Link
        key={item.title}
        href={item.href}
        className="flex items-start justify-start p-2 hover:bg-gray-100 rounded-md"
      >
        {item.icon}
        {item.title}
      </Link>
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 p-2">
        {displayUserAvatar()}
        <div>
          <p className="text-sm font-medium">{displayName || "Mon compte"}</p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
      </div>

      {displayUserSectionItems()}

      <Button
        variant="ghost"
        className="flex items-start justify-start p-2 w-full text-red-600 hover:bg-red-50 rounded-md"
        onClick={async () => {
          // await fetch("/api/auth/session", { method: "DELETE" });
          // await auth.signOut();
          // setIsOpen(false);
        }}
      >
        <LogOut className="mr-2 h-5 w-5" />
        {dictionary.appSidebar?.logout}
      </Button>
    </div>
  );
}
