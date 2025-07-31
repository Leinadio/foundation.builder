import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleChevronRight } from "lucide-react";
import { AuthDialog } from "@/components/common/AuthDialog";

export function Hero() {
  return (
    <section className="hero pt-4 md:pt-48 flex justify-center items-center">
      <div className="hero-content text-center">
        <div className="max-w-3xl flex-col flex-1">
          <a
            href="https://www.producthunt.com/posts/womi?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-womi"
            target="_blank"
            className="justify-center items-center flex mb-6"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=960432&theme=light&t=1746203235854"
              alt="Womi - Test&#0032;your&#0032;business&#0032;idea&#0032;before&#0032;wasting&#0032;time&#0032;&#0040;or&#0032;money&#0041; | Product Hunt"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            {"Testez votre idée de business avant de perdre du temps (ou de l'argent)"}
          </h1>
          <p className="py-6 text-xl text-gray-800">
            {
              "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle."
            }
          </p>
          <AuthDialog>
            <Button>
              {"Testez votre idée"}
              <CircleChevronRight className="w-4 h-4" />
            </Button>
          </AuthDialog>
          <div className="max-w-2xl mx-auto relative flex justify-center mt-12">
            <Image src="/icon/arrow_4.svg" alt="Flèche décorative" width={40} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
