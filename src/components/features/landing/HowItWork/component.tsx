import Image from "next/image";

export function HowItWork() {
  return (
    <section className="pt-36" id="howItWorks">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">{"Comment ça marche ?"}</h2>

        {/* Étape 1 */}
        <div className="flex flex-col items-center md:flex-row gap-10 md:gap-24">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground font-medium text-sm mb-6">
              {"Étape 1"}
            </div>
            <h2 className="text-4xl font-bold mb-6">{"Créer un projet"}</h2>
            <p className="text-gray-600 text-lg mb-8">
              {
                'Pas besoin d\'avoir un business plan en tête, ni même un concept parfaitement clair. Vous pouvez entrer une simple idée, une intuition, une envie — comme "une app pour échanger des vêtements entre voisins" ou "une solution pour aider les freelances à mieux gérer leurs revenus".'
              }
            </p>

            <p className="text-lg font-medium">
              {"🎯 Objectif : Démarrer sans pression, que vous soyez débutant ou expérimenté."}
            </p>
          </div>
          <div className="hidden md:block flex-1 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-light rounded-3xl transform translate-x-4 translate-y-4"></div>
              <div className="relative">
                <Image
                  src={`/images/step1_fr.png`}
                  alt="Étape 1 - Description de votre projet"
                  width={900}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flèche décorative après Étape 1 */}
        <div className=" flex justify-center my-12 w-full">
          <Image
            src="/icon/arrow_7.svg"
            alt="Flèche décorative"
            width={80}
            height={230}
            className="relative right-10"
          />
        </div>

        {/* Étape 2 */}
        <div className="flex flex-col items-center md:flex-row-reverse gap-10 md:gap-24">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground font-medium text-sm mb-6">
              {"Étape 2"}
            </div>
            <h2 className="text-4xl font-bold mb-6">{"Analyser votre projet"}</h2>
            <p className="text-gray-600 text-lg mb-8">
              {
                "Dès que votre idée est saisie, l'IA se met au travail. Elle réfléchit comme un analyste business, un expert produit, un marketer et un investisseur réunis. Elle identifie votre segment de marché, le profil des clients potentiels, la problématique que vous résolvez et la pertinence de votre solution."
              }
            </p>
            {/* <p className="text-gray-600 text-lg mb-8">
            {dict.howItWorks.steps.step2.description2}
          </p> */}
            <p className="text-lg font-medium">
              {
                "💡 En quelques secondes, vous avez une vision complète de votre projet, bien au-delà d'un simple brainstorming."
              }
            </p>
          </div>
          <div className="hidden md:block flex-1 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-light transform translate-x-4 translate-y-4"></div>
              <div className="relative">
                <Image
                  src={`/images/step2_fr.png`}
                  alt="Étape 2 - Analyse de votre projet"
                  width={600}
                  height={400}
                  className="border-2 border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flèche décorative après Étape 2 */}
        <div className="relative flex justify-center my-12 w-full">
          <Image src="/icon/arrow_6.svg" alt="Flèche décorative" width={80} height={230} className="relative left-16" />
        </div>

        {/* Étape 3 */}
        <div className="flex flex-col items-center md:flex-row gap-10 md:gap-24">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground font-medium text-sm mb-6">
              {"Étape 3"}
            </div>
            <h2 className="text-4xl font-bold mb-6">{"Développer votre projet"}</h2>
            {/* <p className="text-gray-600 text-lg mb-8">
            {dict.howItWorks.steps.step3.description1}
          </p> */}
            <p className="text-gray-600 text-lg mb-8">
              {
                "Chaque section du rapport est claire, structurée et conçue pour être actionnable. Vous pouvez relire, comparer, ajuster mentalement ou à l'écrit. Besoin d'une nouvelle perspective ? Générez une autre version à partir d'un angle différent, d'une autre niche ou d'un problème connexe."
              }
            </p>
            <p className="text-lg font-medium">
              {"🧠 C'est comme un outil de réflexion rapide, pensé pour vous aider à clarifier, itérer et avancer."}
            </p>
          </div>
          <div className="hidden md:block flex-1 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-light transform translate-x-4 translate-y-4"></div>
              <div className="relative">
                <Image
                  src={`/images/step3_fr.png`}
                  alt="Étape 2 - Analyse de votre projet"
                  width={600}
                  height={400}
                  className="border-2 border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flèche décorative après Étape 3 */}
        <div className="relative flex justify-center my-12 w-full">
          <Image
            src="/icon/arrow_7.svg"
            alt="Flèche décorative"
            width={80}
            height={230}
            className="relative right-11"
          />
        </div>
      </div>
    </section>
  );
}
