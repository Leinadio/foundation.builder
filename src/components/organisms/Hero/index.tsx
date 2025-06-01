import { ProductHuntBadge } from "@/components/atoms/ProductHuntBadge";
import { ButtonAuth } from "@/components/AuthDialog/button-auth";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";

export interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  lang: string;
}

export const Hero = ({
  title,
  description,
  ctaText,
  lang,
}: HeroProps) => {
  return (
    <section className="hero pt-4 md:pt-48">
      <div className="hero-content text-center">
        <div className="max-w-3xl mx-auto flex-col flex-1 items-center justify-center">
          <ProductHuntBadge />
          <h1 className="text-3xl md:text-5xl font-bold">
            {title}
          </h1>
          <p className="py-6 text-xl">{description}</p>
          <ButtonAuth lang={lang}>
            {ctaText}
            <CircleChevronRight className="w-4 h-4" />
          </ButtonAuth>
          <div className="max-w-2xl mx-auto relative flex justify-center mt-12 mb-12">
            <Image
              src="/icon/arrow_4.svg"
              alt="Flèche décorative"
              width={40}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
