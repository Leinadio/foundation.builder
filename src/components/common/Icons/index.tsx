import { Component } from "./component";

export enum Variant {
  ArrowDown1 = "arrow_down_1",
  ArrowDown2 = "arrow_down_2",
  ArrowDown3 = "arrow_down_3",
  ArrowDown4 = "arrow_down_4",
  ArrowDown5 = "arrow_down_5",
  ArrowDown6 = "arrow_down_6",
  ArrowDown7 = "arrow_down_7",
  ArrowDown8 = "arrow_down_8",
  ArrowDown9 = "arrow_down_9",
}

interface IconsProps {
  variant?: Variant;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function Icons({ variant, width, height, color, className }: IconsProps) {
  return <Component variant={variant} width={width} height={height} color={color} className={className} />;
}
