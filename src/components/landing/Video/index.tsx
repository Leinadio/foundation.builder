import HeroVideoDialog from "@/components/ui/hero-video-dialog";

interface VideoProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}

export function Video({ videoSrc, thumbnailSrc, thumbnailAlt }: VideoProps) {
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
