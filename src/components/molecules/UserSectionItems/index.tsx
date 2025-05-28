import React from "react";
import UserSectionItem, {
  UserSectionItemProps,
} from "@/components/atoms/UserSectionItem";

interface UserSectionItemsProps {
  items: Omit<UserSectionItemProps, "onClick">[];
  onItemClick?: () => void;
}

export default function UserSectionItems({
  items,
  onItemClick,
}: UserSectionItemsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item) => (
        <UserSectionItem
          key={item.title}
          title={item.title}
          href={item.href}
          icon={item.icon}
          onClick={onItemClick}
        />
      ))}
    </>
  );
}
