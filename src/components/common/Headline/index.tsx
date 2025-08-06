import { Component } from "./component";
import { ReactNode } from "react";

interface HeadlineProps {
  title: ReactNode;
  description: string;
  badge: {
    text: string;
    isBadge: boolean;
  };
  color?: string;
}

export const Headline = ({ title, description, badge, color }: HeadlineProps) => {
  return <Component title={title} description={description} badge={badge} color={color} />;
};
