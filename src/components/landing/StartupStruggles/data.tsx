import Image from "next/image";

export const data = [
  {
    title: "Manque de temps",
    content: (
      <div className="grid grid-cols-1 gap-6">
        <p className="text-sm md:text-lg">
          {
            "Entre les réunions, les deadlines et la gestion quotidienne, il devient impossible de se concentrer sur l'essentiel : développer son produit et sa vision."
          }
        </p>

        <Image
          src="/illu/late_1-destructive.svg"
          alt="Illustration représentant la gestion du temps et des rendez-vous"
          className="w-8/12 mx-auto block"
          objectFit="cover"
          width={1}
          height={1}
        />
      </div>
    ),
  },
  {
    title: "Complexité technique",
    content: (
      <div className="grid grid-cols-1 gap-6">
        <p className="text-sm md:text-lg">
          {
            "Les développeurs sont confrontés à des défis techniques complexes, notamment en matière de sécurité, de performance et d'intégration avec les autres services."
          }
        </p>

        <Image
          src="/illu/headache-destructive.svg"
          alt="Illustration représentant la gestion du temps et des rendez-vous"
          className="w-8/12 mx-auto block"
          objectFit="cover"
          width={1}
          height={1}
        />
      </div>
    ),
  },
  {
    title: "Ressources limitées",
    content: (
      <div className="grid grid-cols-1 gap-6">
        <p className="text-sm md:text-lg">
          {
            "Budget serré, équipe réduite, temps limité : chaque décision compte et il faut faire plus avec moins pour réussir à lancer son produit."
          }
        </p>

        <Image
          src="/illu/limited_ressource-destructive.svg"
          alt="Illustration représentant la gestion du temps et des rendez-vous"
          className="w-8/12 mx-auto block"
          objectFit="cover"
          width={1}
          height={1}
        />
      </div>
    ),
  },
];
