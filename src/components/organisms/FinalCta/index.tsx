import { ButtonAuth } from "@/components/AuthDialog/button-auth";
import { CircleChevronRight } from "lucide-react";

interface FinalCtaProps {
  title: string;
  description: string;
  ctaText: string;
  lang: string;
}

export const FinalCta = ({
  title,
  description,
  ctaText,
  lang,
}: FinalCtaProps) => {
  return (
    <section className="py-16 text-primary-content">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="py-6 text-xl">{description}</p>
            <ButtonAuth lang={lang}>
              {ctaText}
              <CircleChevronRight className="w-4 h-4" />
            </ButtonAuth>
          </div>
        </div>
      </div>
    </section>
  );
};
