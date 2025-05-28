import {
  getDictionary,
  Dictionary,
} from "@/app/[lang]/dictionaries";
import Image from "next/image";

interface HowItWorksProps {
  lang: "en" | "fr";
  steps: {
    label: string;
    title: string;
    description: string;
    objective: string;
  }[];
}

interface StepProps {
  label: string;
  title: string;
  description: string;
  objective: string;
  lang: "en" | "fr";
  stepNumber: number;
}

const LeftSideStep = ({
  label,
  title,
  description,
  objective,
  lang,
  stepNumber,
}: StepProps) => {
  return (
    <>
      {/* Étape côté gauche */}
      <div className="flex flex-col items-center md:flex-row gap-10 md:gap-24">
        <div className="flex-1">
          <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-content font-medium text-sm mb-6">
            {label}
          </div>
          <h2 className="text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {description}
          </p>

          <p className="text-lg font-medium">{objective}</p>
        </div>
        <div className="hidden md:block flex-1 mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light rounded-3xl transform translate-x-4 translate-y-4"></div>
            <div className="relative">
              <Image
                src={`/images/step${stepNumber}_${lang}.png`}
                alt={`Étape ${stepNumber} - ${title}`}
                width={900}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flèche décorative */}
      <div className="flex justify-center my-12 w-full">
        <Image
          src="/icon/arrow_7.svg"
          alt="Flèche décorative"
          width={80}
          height={230}
          className="relative right-10"
        />
      </div>
    </>
  );
};

const RightSideStep = ({
  label,
  title,
  description,
  objective,
  lang,
  stepNumber,
}: StepProps) => {
  return (
    <>
      {/* Étape côté droit */}
      <div className="flex flex-col items-center md:flex-row-reverse gap-10 md:gap-24">
        <div className="flex-1">
          <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-content font-medium text-sm mb-6">
            {label}
          </div>
          <h2 className="text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {description}
          </p>
          <p className="text-lg font-medium">{objective}</p>
        </div>
        <div className="hidden md:block flex-1 mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light transform translate-x-4 translate-y-4"></div>
            <div className="relative">
              <Image
                src={`/images/step${stepNumber}_${lang}.png`}
                alt={`Étape ${stepNumber} - ${title}`}
                width={600}
                height={400}
                className="border-2 border-gray-200 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flèche décorative */}
      <div className="relative flex justify-center my-12 w-full">
        <Image
          src="/icon/arrow_6.svg"
          alt="Flèche décorative"
          width={80}
          height={230}
          className="relative left-16"
        />
      </div>
    </>
  );
};

export const HowItWorks = async ({
  lang,
  steps,
}: HowItWorksProps) => {
  const dict: Dictionary = await getDictionary(lang);

  return (
    <section className="pt-36" id="howItWorks">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dict.howItWorks.title}
        </h2>

        {steps.map((step, index) => {
          const { label, title, description, objective } =
            step;
          const stepNumber = index + 1;
          const isEvenIndex = index % 2 === 0;

          if (isEvenIndex) {
            return (
              <div key={`step-${index}`}>
                <LeftSideStep
                  label={label}
                  title={title}
                  description={description}
                  objective={objective}
                  lang={lang}
                  stepNumber={stepNumber}
                />
              </div>
            );
          }

          return (
            <div key={`step-${index}`}>
              <RightSideStep
                label={label}
                title={title}
                description={description}
                objective={objective}
                lang={lang}
                stepNumber={stepNumber}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
