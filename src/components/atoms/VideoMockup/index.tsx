export const VideoMockup = ({ lang }: { lang: string }) => {
  return (
    <>
      <div className="w-[90vw] max-w-6xl mx-auto mockup-window border shadow-2xl bg-base-100 border-base-300">
        <div className="p-4 border-t border-base-300">
          <video
            src="/videos/hero_en.mp4"
            autoPlay
            muted
            loop
            controls
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {lang === "fr" ? (
          <span className="text-sm text-gray-500 italic">
            Vidéo en anglais
          </span>
        ) : null}
      </div>
    </>
  );
};
