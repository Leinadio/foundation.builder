import React from "react";
import Link from "next/link";

export interface UserSectionItemProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function UserSectionItem({
  title,
  href,
  icon,
  onClick,
}: UserSectionItemProps) {
  return (
    <Link
      href={href}
      className="flex items-start justify-start p-2 hover:bg-gray-100 rounded-md"
      onClick={onClick}
    >
      {icon}
      {title}
    </Link>
  );
}
