"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from ".";
import { useAuth } from "@/context/Auth/AuthContext";
import { useRouter } from "next/navigation";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
/**
 * Composant visuel de la boîte de dialogue d'authentification
 */
export const ButtonAuth = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (analytics) {
      logEvent(analytics, "click_button_auth");
    }
    if (isAuthenticated) {
      setIsOpen(false);
      router.push(`/${lang}/app`);
      return;
    }
    setIsOpen(true);
  };

  return (
    <>
      <Button
        size="lg"
        className="w-full cursor-pointer"
        onClick={() => handleClick()}
      >
        {children}
      </Button>
      <AuthDialog
        isOpen={isOpen}
        onOpenChange={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};
