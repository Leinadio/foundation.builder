"use client";

import { ReactNode } from "react";
import { Headline } from "@/components/shared/headline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface StatsProps {
  heading?: string;
  description?: string;
  stats?: Array<Stat>;
}

export function Stats({
  heading = "Platform performance insights",
  description = "Ensuring stability and scalability for all users",
  stats = [],
}: StatsProps) {
  const displayTitle = () => {
    if (heading) {
      return <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>;
    }
    return null;
  };

  const displayDescription = () => {
    if (description) {
      return <p>{description}</p>;
    }
    return null;
  };

  return (
    <section>
      <div className=" flex flex-col justify-center items-center">
        {!heading && !description && (
          <div className="flex flex-col gap-4">
            {displayTitle()}
            {displayDescription()}
          </div>
        )}
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat: Stat) => (
            <div key={stat.id} className="flex flex-col justify-center items-center gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}

export interface TestimonialsProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

export function Testimonials({
  title = "Rencontrez nos clients satisfaits",
  description = "Tous nos 1000+ clients sont satisfaits de nos services",
  badgeText = "TÉMOIGNAGES",
  testimonials = [],
  stats = [],
}: TestimonialsProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-16">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />

      {stats.length > 0 && <Stats stats={stats} />}

      {/* Testimonials Scroll */}
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} speed="slow" direction="right" />
        <InfiniteMovingCards speed="slow" items={testimonials} direction="left" />
      </div>
    </section>
  );
}
