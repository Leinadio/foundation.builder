import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function Video() {
  return (
    <HeroVideoDialog
      className="block dark:hidden"
      animationStyle="from-center"
      videoSrc="/videos/hero_en.mp4"
      thumbnailSrc="/videos/hero_en_thumbnail.png"
      thumbnailAlt="Dummy Video Thumbnail"
    />
  );
}
