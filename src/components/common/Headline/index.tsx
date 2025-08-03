import { Component } from "./component";

interface HeadlineProps {
  title: string;
  description: string;
  badge: string;
}

export const Headline = ({ title, description, badge }: HeadlineProps) => {
  return <Component title={title} description={description} badge={badge} />;
};
