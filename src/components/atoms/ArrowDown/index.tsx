import Image from "next/image";

export const ArrowDown = () => {
  return (
    <div className="max-w-2xl mx-auto relative flex justify-center">
      <Image
        src="/icon/arrow_4.svg"
        alt="Flèche décorative"
        width={40}
        height={200}
      />
    </div>
  );
};
