import { Timeline } from "@/components/ui/timeline";
import { Headline } from "@/components/ui/headline";
import Image from "next/image";
import { ReactNode } from "react";

export interface StartupStrugglesItemImage {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export interface StartupStrugglesItem {
  title: string;
  paragraphs: string[];
  image: StartupStrugglesItemImage;
}

export interface StartupStrugglesProps {
  title?: ReactNode;
  description?: string;
  badge?: { text: string; isBadge: boolean };
  color?: string;
  fromColor?: string;
  viaColor?: string;
  data?: StartupStrugglesItem[];
}

export function StartupStruggles({
  title = (
    <>
      <span className="text-red-600">85%</span> des startups échouent car les{" "}
      <span className="text-red-600">fondateurs abandonnent</span>
    </>
  ),
  description = "Entre la technique, le business et les deadlines... Il y a tant de choses à gérer qu'on finit par perdre de vue l'essentiel.",
  badge = { text: "RÉALITÉ DU TERRAIN", isBadge: true },
  color = "red",
  fromColor = "red-600",
  viaColor = "red-900",
  data = [
    {
      title: "Manque de temps",
      paragraphs: [
        "Entre les réunions, les deadlines et la gestion quotidienne, il devient impossible de se concentrer sur l'essentiel : développer son produit et sa vision.",
      ],
      image: {
        src: "/illu/late_1-destructive.svg",
        alt: "Illustration représentant la gestion du temps et des rendez-vous",
        className: "w-8/12 mx-auto block",
        width: 1,
        height: 1,
      },
    },
    {
      title: "Complexité technique",
      paragraphs: [
        "Les développeurs sont confrontés à des défis techniques complexes, notamment en matière de sécurité, de performance et d'intégration avec les autres services.",
      ],
      image: {
        src: "/illu/headache-destructive.svg",
        alt: "Illustration représentant la gestion du temps et des rendez-vous",
        className: "w-8/12 mx-auto block",
        width: 1,
        height: 1,
      },
    },
    {
      title: "Ressources limitées",
      paragraphs: [
        "Budget serré, équipe réduite, temps limité : chaque décision compte et il faut faire plus avec moins pour réussir à lancer son produit.",
      ],
      image: {
        src: "/illu/limited_ressource-destructive.svg",
        alt: "Illustration représentant la gestion du temps et des rendez-vous",
        className: "w-8/12 mx-auto block",
        width: 1,
        height: 1,
      },
    },
  ],
}: StartupStrugglesProps) {
  const timelineData = data.map((entry) => {
    const paragraphs = entry.paragraphs.map((text) => text);
    return {
      title: entry.title,
      content: (
        <div className="grid grid-cols-1 gap-6">
          {paragraphs.map((text, idx) => (
            <p key={`p-${idx}`} className="text-sm md:text-lg">
              {text}
            </p>
          ))}
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            className={entry.image.className}
            objectFit="cover"
            width={entry.image.width ?? 1}
            height={entry.image.height ?? 1}
          />
        </div>
      ),
    };
  });
  return (
    <section className="flex flex-col gap-20 md:gap-24">
      <Headline title={title} description={description} badge={badge} color={color} />

      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} fromColor={fromColor} viaColor={viaColor} />
      </div>
    </section>
  );
}
