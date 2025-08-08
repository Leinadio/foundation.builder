import { Hero as HeroComponent, HeroProps } from "./components";

export function Hero(props: HeroProps) {
  return <HeroComponent {...props} />;
}
