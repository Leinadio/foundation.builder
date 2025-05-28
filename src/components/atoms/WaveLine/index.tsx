import Image from "next/image";

export const WaveLine = () => {
  return (
    <div className="w-full justify-center flex py-16">
      <Image
        src="/icon/wave_line.svg"
        alt="Ligne décorative"
        width={200}
        height={80}
        className="w-[400px]"
      />
    </div>
  );
};
