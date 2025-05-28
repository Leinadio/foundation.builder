import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface FounderStoryProps {
  intro: string;
  title: string;
  content: {
    intro: string;
    p1: string;
    p2: string;
    p3: string;
    doubts: string[];
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    signature: {
      name: string;
      title: string;
    };
  };
}

export const FounderStory = ({
  intro,
  title,
  content,
}: FounderStoryProps) => {
  return (
    <section>
      <div className="container mx-auto px-4 relative">
        <p className="text-xl text-center italic text-yellow-400 font-bold">
          {intro}
        </p>
        <div className="max-w-2xl mx-auto relative flex justify-end my-6">
          <Image
            src="/icon/arrow_2.svg"
            alt="Flèche décorative"
            width={100}
            height={230}
          />
        </div>
        <div className="relative"></div>
        <h2 className="text-3xl font-bold text-center mb-8">
          {title}
        </h2>
        <Card className="card shadow-xl max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>{content.intro}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{content.p1}</p>
            <p className="mb-4">{content.p2}</p>
            <p className="mb-4">{content.p3}</p>
            <ul className="blockquote p-4 rounded-lg mb-4">
              {content.doubts.map((doubt, index) => (
                <li key={index}>{doubt}</li>
              ))}
            </ul>
            <p className="mb-4">{content.p4}</p>
            <p className="mb-4">{content.p5}</p>
            <p className="mb-4 font-bold">{content.p6}</p>
            <p className="mb-4">{content.p7}</p>
            <p>{content.p8}</p>
          </CardContent>
          <CardFooter className="flex justify-end items-center gap-6">
            <div className="flex flex-col">
              <div className="text-lg font-bold text-right">
                {content.signature.name}
              </div>
              <div className="text-sm text-muted-foreground text-right">
                {content.signature.title}
              </div>
            </div>
            <Avatar className="w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
              <AvatarImage
                src="/images/portrait_2.png"
                alt="Daniel, créateur de WOMI"
                className="object-cover object-[center_10%]"
              />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
        <div className="max-w-2xl mx-auto relative flex justify-start my-6">
          <Image
            src="/icon/arrow_3.svg"
            alt="Flèche décorative"
            width={100}
            height={230}
          />
        </div>
      </div>
    </section>
  );
};
