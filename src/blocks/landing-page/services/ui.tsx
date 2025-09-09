import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Headline } from "@/components/shared/headline";

export interface ServiceFeature {
  text: string;
}

export interface ServiceDeliverable {
  text: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  timeline: string;
  description: string;
  features: ServiceFeature[];
  deliverables: ServiceDeliverable[];
  price: string;
  priceNote: string;
  buttonText: string;
}

export interface ServicesProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  services?: Service[];
  customSolutionTitle?: string;
  customSolutionDescription?: string;
  customSolutionButtonText?: string;
}

const defaultServices: Service[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Product Strategy",
    timeline: "2-4 weeks",
    description:
      "From market research to user personas, we help you build products that matter. Our strategic approach ensures your product meets real user needs.",
    features: [
      { text: "Market Research & Analysis" },
      { text: "User Personas & Journey Mapping" },
      { text: "Competitive Analysis" },
      { text: "Product Roadmap Development" },
    ],
    deliverables: [{ text: "Strategy Document" }, { text: "User Research Report" }, { text: "Roadmap & Timeline" }],
    price: "Starting at $5,000",
    priceNote: "Custom quotes available",
    buttonText: "Get Started →",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3zM7 7h10v10H7z" />
      </svg>
    ),
    title: "Design",
    timeline: "3-6 weeks",
    description:
      "Beautiful, functional designs that create memorable user experiences. We focus on both aesthetics and usability to create designs that convert.",
    features: [
      { text: "UI/UX Design" },
      { text: "Interactive Prototyping" },
      { text: "Design System Creation" },
      { text: "Usability Testing" },
    ],
    deliverables: [{ text: "Design System" }, { text: "Interactive Prototypes" }, { text: "Design Specifications" }],
    price: "Starting at $8,000",
    priceNote: "Custom quotes available",
    buttonText: "Get Started →",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
    title: "Web Development",
    timeline: "6-12 weeks",
    description:
      "Robust, scalable applications built with modern technologies and frameworks. We ensure your application is fast, secure, and maintainable.",
    features: [
      { text: "Frontend Development" },
      { text: "Backend Development" },
      { text: "API Integration" },
      { text: "Performance Optimization" },
    ],
    deliverables: [{ text: "Source Code" }, { text: "Technical Documentation" }, { text: "Deployment Guide" }],
    price: "Starting at $15,000",
    priceNote: "Custom quotes available",
    buttonText: "Get Started →",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3zM7 7h10v10H7z" />
      </svg>
    ),
    title: "Marketing",
    timeline: "Ongoing",
    description:
      "Strategic growth initiatives to scale your product and maximize impact. We use data-driven approaches to optimize your marketing efforts.",
    features: [
      { text: "SEO Strategy & Implementation" },
      { text: "Analytics & Performance Tracking" },
      { text: "A/B Testing & Optimization" },
      { text: "Content Marketing Strategy" },
    ],
    deliverables: [{ text: "Marketing Plan" }, { text: "Analytics Dashboard" }, { text: "Performance Reports" }],
    price: "Starting at $3,000/mo",
    priceNote: "Custom quotes available",
    buttonText: "Get Started →",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            {service.icon}
          </div>
          <div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <Badge variant="secondary" className="mt-1">
              {service.timeline}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-sm">{"What's included:"}</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Deliverables:</h4>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map((deliverable, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {deliverable.text}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="block">
        <div className="pt-4 border-t">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold">{service.price}</div>
            <div className="text-sm text-muted-foreground">{service.priceNote}</div>
            <Button className="w-full mt-4">
              {service.buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function CustomSolutionCard({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <Card className="col-span-2 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
      <CardContent className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{description}</p>
        <Button size="lg" variant="outline">
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}

export function Services({
  title = "Comprehensive Digital Solutions",
  description = "Transparent pricing for world-class digital solutions tailored to your specific business needs and growth objectives.",
  badgeText = "Our Services",
  services = defaultServices,
  customSolutionTitle = "Need a custom solution?",
  customSolutionDescription = "We offer tailored packages combining multiple services for comprehensive digital transformation.",
  customSolutionButtonText = "Schedule Consultation →",
}: ServicesProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-16">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <CustomSolutionCard
        title={customSolutionTitle}
        description={customSolutionDescription}
        buttonText={customSolutionButtonText}
      />
    </section>
  );
}
