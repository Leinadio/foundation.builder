import { CircleChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductHuntBadge } from "@/components/ui/producthunt-badge";
import { Icons, Variant } from "@/components/ui/icons";
import { AuthDialog } from "@/components/ui/auth-dialog";

export interface HeroProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  onLogin?: (data: { email: string; password: string }) => void;
  onRegister?: (data: { name: string; email: string; password: string; confirmPassword: string }) => void;
  authDialogOnOpenChange?: (open: boolean) => void;
  authDialogIsOpen?: boolean;
  authDialogIsLoading?: boolean;
  authDialogDefaultTab?: "login" | "register";
}

export function Hero({
  badge,
  title,
  description,
  buttonText,
  onLogin,
  onRegister,
  authDialogOnOpenChange,
  authDialogIsOpen,
  authDialogIsLoading,
  authDialogDefaultTab,
}: HeroProps) {
  return (
    <section className="px-8 pt-24 md:pt-56 justify-center text-center flex flex-col mx-auto max-w-5xl items-center gap-5">
      <Badge variant="default">{badge}</Badge>
      <ProductHuntBadge />
      <h1 className="text-4xl md:text-6xl font-semibold text-foreground">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
      <AuthDialog
        isOpen={authDialogIsOpen}
        defaultTab={authDialogDefaultTab}
        isLoading={authDialogIsLoading}
        onLogin={onLogin}
        onRegister={onRegister}
        onOpenChange={authDialogOnOpenChange}
      >
        <Button size="lg">
          {buttonText}
          <CircleChevronRight className="w-4 h-4" />
        </Button>
      </AuthDialog>
      <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-36 h-36 mt-6" />
    </section>
  );
}
