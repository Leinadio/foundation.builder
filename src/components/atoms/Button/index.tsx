import { Button as ShadButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ComponentProps<typeof ShadButton> {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({ loading, children, className, ...rest }: ButtonProps) {
  return (
    <ShadButton className={cn("gap-2", className)} disabled={loading || rest.disabled} {...rest}>
      {loading && <Loader2 className="animate-spin h-4 w-4" />}
      {children}
    </ShadButton>
  );
}
