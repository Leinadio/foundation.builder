import {
  HeaderContainerProps,
  HeroRowAdvancedContainerProps,
  HeroRowContainerProps,
  HeroContainerProps,
  HeroVideoContainerProps,
  ProblemContainerProps,
  WithWithoutContainerProps,
  SuccessPathContainerProps,
  HowItWorkContainerProps,
  FeatureBentoGridContainerProps,
  ForWhoContainerProps,
  PricingContainerProps,
  FaqContainerProps,
  FooterContainerProps,
  ServicesContainerProps,
  TestimonialsContainerProps,
  StatsContainerProps,
  AboutContainerProps,
} from "@/blocks/landing-page";

type HeaderContainerBlock = {
  id?: string;
  component: "HeaderContainer";
  props: HeaderContainerProps;
};

type HeroRowAdvancedContainerBlock = {
  id?: string;
  component: "HeroRowAdvancedContainer";
  props: HeroRowAdvancedContainerProps;
};

type HeroRowContainerBlock = {
  id?: string;
  component: "HeroRowContainer";
  props: HeroRowContainerProps;
};

type HeroContainerBlock = {
  id?: string;
  component: "HeroContainer";
  props: HeroContainerProps;
};

type HeroVideoContainerBlock = {
  id?: string;
  component: "HeroVideoContainer";
  props: HeroVideoContainerProps;
};

type ProblemContainerBlock = {
  id?: string;
  component: "ProblemContainer";
  props: ProblemContainerProps;
};

type WithWithoutContainerBlock = {
  id?: string;
  component: "WithWithoutContainer";
  props: WithWithoutContainerProps;
};

type SuccessPathContainerBlock = {
  id?: string;
  component: "SuccessPathContainer";
  props: SuccessPathContainerProps;
};

type HowItWorkContainerBlock = {
  id?: string;
  component: "HowItWorkContainer";
  props: HowItWorkContainerProps;
};

type ImageComparisonContainerBlock = {
  id?: string;
  component: "ImageComparisonContainer";
  props: null;
};

type FeatureBentoGridContainerBlock = {
  id?: string;
  component: "BentoGridContainer";
  props: FeatureBentoGridContainerProps;
};

type ForWhoContainerBlock = {
  id?: string;
  component: "ForWhoContainer";
  props: ForWhoContainerProps;
};

type PricingContainerBlock = {
  id?: string;
  component: "PricingContainer";
  props: PricingContainerProps;
};

type FaqContainerBlock = {
  id?: string;
  component: "FaqContainer";
  props: FaqContainerProps;
};

type FooterContainerBlock = {
  id?: string;
  component: "FooterContainer";
  props: FooterContainerProps;
};

type ServicesContainerBlock = {
  id?: string;
  component: "ServicesContainer";
  props: ServicesContainerProps;
};

type TestimonialsContainerBlock = {
  id?: string;
  component: "TestimonialsContainer";
  props: TestimonialsContainerProps;
};

type StatsContainerBlock = {
  id?: string;
  component: "StatsContainer";
  props: StatsContainerProps;
};

type AboutContainerBlock = {
  id?: string;
  component: "AboutContainer";
  props: AboutContainerProps;
};

export type ComponentBlock =
  | HeaderContainerBlock
  | HeroRowAdvancedContainerBlock
  | HeroRowContainerBlock
  | HeroContainerBlock
  | HeroVideoContainerBlock
  | ProblemContainerBlock
  | WithWithoutContainerBlock
  | SuccessPathContainerBlock
  | HowItWorkContainerBlock
  | ImageComparisonContainerBlock
  | FeatureBentoGridContainerBlock
  | ForWhoContainerBlock
  | PricingContainerBlock
  | FaqContainerBlock
  | FooterContainerBlock
  | ServicesContainerBlock
  | TestimonialsContainerBlock
  | StatsContainerBlock
  | AboutContainerBlock;
