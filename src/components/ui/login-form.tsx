"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Icônes SVG pour Google et Github
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface LoginFormProps {
  onLoginSubmit: (data: { email: string; password: string }) => Promise<void>;
  onGoogleAuth: () => Promise<void>;
  onGithubAuth: () => Promise<void>;
  isLoading: boolean;
}

export function LoginForm({ onLoginSubmit, onGoogleAuth, onGithubAuth, isLoading }: LoginFormProps) {
  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    onLoginSubmit(data);
  }

  function handleGoogleAuth() {
    onGoogleAuth();
  }

  function handleGithubAuth() {
    onGithubAuth();
  }

  return (
    <>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Bon retour !</h1>
        <p className="text-muted-foreground">Connectez-vous à votre compte</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Button type="button" variant="outline" className="w-full" onClick={handleGoogleAuth} disabled={isLoading}>
            <GoogleIcon />
            <span className="ml-2">Continuer avec Google</span>
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={handleGithubAuth} disabled={isLoading}>
            <GithubIcon />
            <span className="ml-2">Continuer avec Github</span>
          </Button>
        </div>

        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
          </div>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Mot de passe</Label>
            <Input
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Connexion..." : "Se connecter"}
          </Button>
          <div className="text-center">
            <Button
              asChild
              variant="link"
              size="sm"
              className="h-auto p-0 text-sm text-muted-foreground hover:text-primary underline-offset-4"
              disabled={isLoading}
            >
              <Link href="/forgot-password">{"Mot de passe oublié ?"}</Link>
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          {"Pas encore de compte ? "}
          <Link href="/sign-up" className="text-primary hover:underline">
            {"Créer un compte"}
          </Link>
        </div>
      </div>
    </>
  );
}
