"use client";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBoxAlignRightFilled,
  TablerIcon,
  IconTerminal2,
  IconEaseInOut,
  IconCurrencyDollar,
  IconCloud,
  IconRouteAltLeft,
  IconHelp,
  IconAdjustmentsBolt,
  IconHeart,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Headline } from "@/components/shared/headline";
import { FeatureHoverItem, FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { ReactNode } from "react";

export const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

export const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  const widths = ["70%", "85%", "60%", "95%", "75%", "65%"]; // Largeurs prédéfinies

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: widths[i],
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

export const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

export const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

export const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular, Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

type SkeletonName = "SkeletonOne" | "SkeletonTwo" | "SkeletonThree" | "SkeletonFour" | "SkeletonFive";

export const skeletonMap: Record<SkeletonName, React.ComponentType> = {
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  SkeletonFive,
};

export interface BentoGridItemData {
  title: string;
  description: string;
  skeleton: SkeletonName;
  className?: string;
  icon?: TablerIcon;
}

export interface FeatureBentoGridProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  bentoItems?: BentoGridItemData[];
  hoverFeatures?: FeatureHoverItem[];
}

const defaultHoverFeatures: FeatureHoverItem[] = [
  {
    title: "Built for developers",
    description: "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: IconTerminal2,
  },
  {
    title: "Ease of use",
    description: "It's as easy as using an Apple, and as expensive as buying one.",
    icon: IconEaseInOut,
  },
  {
    title: "Pricing like no other",
    description: "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: IconCurrencyDollar,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: IconCloud,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: IconRouteAltLeft,
  },
  {
    title: "24/7 Customer Support",
    description: "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: IconHelp,
  },
  {
    title: "Money back guarantee",
    description: "If you donot like EveryAI, we will convince you to like us.",
    icon: IconAdjustmentsBolt,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: IconHeart,
  },
];

const defaultBentoItems: BentoGridItemData[] = [
  {
    title: "AI Content Generation",
    description: "Experience the power of AI in generating unique content.",
    skeleton: "SkeletonOne",
    className: "md:col-span-1",
    icon: IconClipboardCopy,
  },
  {
    title: "Automated Proofreading",
    description: "Let AI handle the proofreading of your documents.",
    skeleton: "SkeletonTwo",
    className: "md:col-span-1",
    icon: IconFileBroken,
  },
  {
    title: "Contextual Suggestions",
    description: "Get AI-powered suggestions based on your writing context.",
    skeleton: "SkeletonThree",
    className: "md:col-span-1",
    icon: IconSignature,
  },
  {
    title: "Sentiment Analysis",
    description: "Understand the sentiment of your text with AI analysis.",
    skeleton: "SkeletonFour",
    className: "md:col-span-2",
    icon: IconTableColumn,
  },
  {
    title: "Text Summarization",
    description: "Summarize your lengthy documents with AI technology.",
    skeleton: "SkeletonFive",
    className: "md:col-span-1",
    icon: IconBoxAlignRightFilled,
  },
];

export function FeatureBentoGrid({
  title = "What you can do with AI",
  description = "AI is a powerful tool that can help you with your work.",
  badgeText = "AI",
  bentoItems = defaultBentoItems,
  hoverFeatures = defaultHoverFeatures,
}: FeatureBentoGridProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-24">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />
      <BentoGrid>
        {bentoItems.map((item, i) => {
          const SkeletonComponent = skeletonMap[item.skeleton];
          const IconComponent: TablerIcon | undefined = item.icon;

          return (
            <BentoGridItem
              key={i}
              title={item.title}
              description={<span className="text-sm">{item.description}</span>}
              header={<SkeletonComponent />}
              icon={IconComponent ? <IconComponent className="h-4 w-4 text-neutral-500" /> : undefined}
              className={item.className || ""}
            />
          );
        })}
      </BentoGrid>
      <FeaturesSectionWithHoverEffects features={hoverFeatures} />
    </section>
  );
}
