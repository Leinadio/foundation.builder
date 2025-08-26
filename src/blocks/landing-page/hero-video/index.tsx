import { HeroVideo, HeroVideoProps } from "@/blocks/landing-page/hero-video/ui";

export type HeroVideoContainerProps = HeroVideoProps;

export function HeroVideoContainer(props: HeroVideoProps) {
  return <HeroVideo {...props} />;
}
