import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export interface HeroVideoProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}

export function HeroVideo({ videoSrc, thumbnailSrc, thumbnailAlt }: HeroVideoProps) {
  return (
    <HeroVideoDialog
      className="block"
      animationStyle="from-center"
      videoSrc={videoSrc}
      thumbnailSrc={thumbnailSrc}
      thumbnailAlt={thumbnailAlt}
    />
  );
}
