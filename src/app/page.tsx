import { Hero } from "@/components/features/landing/Hero";
import { CheckoutButton } from "@/components/common/CheckoutButton";
import { HowItWork } from "@/components/features/landing/HowItWork";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { Pricing } from "@/components/features/landing/Pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <CheckoutButton
        priceId={"price_1RBkNPGqH2dPvOOjPLZAStnB"}
        amount={10}
        successUrl={"http://localhost:3000/"}
        cancelUrl={"http://localhost:3000/"}
      />
      <HowItWork />
      <Feature />
      <Pricing />
    </div>
  );
}

// TODO: Chercher des composants Landing Page sur V0x
// TODO: Schématiser sur excalidraw le DI-Container-Client et DI-Container-Server
