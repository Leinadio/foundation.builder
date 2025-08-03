interface HeadlineProps {
  title: string;
  description: string;
  badge: string;
}

export function Component({ title, description, badge }: HeadlineProps) {
  return (
    <div className="flex flex-col gap-4 text-center mb-0">
      <p className="text-sm lg:text-lg text-primary font-semibold uppercase">{badge}</p>
      <h2 className="text-4xl lg:text-5xl font-semibold text-foreground">{title}</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
