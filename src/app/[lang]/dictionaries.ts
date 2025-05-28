import "server-only";

export type Dictionary = {
  navbar: {
    howItWorks: string;
    whatYouGet: string;
    pricing: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    description: string;
    ctaText: string;
  };
  howItWorks: {
    title: string;
    steps: {
      step1: {
        label: string;
        title: string;
        description1: string;
        description2: string;
        objective: string;
      };
      step2: {
        label: string;
        title: string;
        description1: string;
        description2: string;
        objective: string;
      };
      step3: {
        label: string;
        title: string;
        description1: string;
        description2: string;
        objective: string;
      };
      step4: {
        label: string;
        title: string;
        description1: string;
        description2: string;
        objective: string;
      };
    };
  };
  features: {
    title: string;
    items: {
      marketSegment: string;
      problem: string;
      solution: string;
      businessModel: string;
      acquisition: string;
      valueProposition: string;
      risks: string;
      validationScore: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    featuresIncluded: string;
    featuresNotIncluded: string;
    plans: {
      discovery: {
        title: string;
        price: string;
        period: string;
      };
      plus: {
        title: string;
        price: string;
        period: string;
      };
      pro: {
        title: string;
        price: string;
        period: string;
      };
    };
    completeReport: {
      popular: string;
      oneTimePayment: string;
      title: string;
      price: string;
      period: string;
      description: string;
      guarantee: string;
      benefits: {
        title: string;
        items: string[];
      };
    };
    orChooseSubscription: string;
    billingToggle: {
      monthly: string;
      annual: string;
      discount: string;
    };
    startingPlan: string;
    subscriptionPlan: string;
    perMonth: string;
    discoveryDescription: string;
    discoveryFeatures: string[];
    startFree: string;
    noCard: string;
    plusDescription: string;
    plusFeatures: string[];
    proDescription: string;
    proFeatures: string[];
    subscribe: string;
    subscribeOneTimePayment: string;
    subscribeAnnual: string;
    oneTimePaymentPrice: string;
    plusAnnualPrice: string;
    proAnnualPrice: string;
    plusAnnualDiscount: string;
    proAnnualDiscount: string;
    nonRefundable: string;
  };
  faq: {
    title: string;
    questions: {
      q1: {
        question: string;
        answer: string;
      };
      q2: {
        question: string;
        answer: string;
      };
      q3: {
        question: string;
        answer: string;
      };
      q4: {
        question: string;
        answer: string;
      };
      q5: {
        question: string;
        answer: string;
      };
    };
  };
  whatYouGet: {
    title: string;
    subtitle: string;
    description: string;
    listTitle: string;
    items: {
      audience: {
        title: string;
        description: string;
      };
      marketAnalysis: {
        title: string;
        description: string;
      };
      realProblem: {
        title: string;
        description: string;
      };
      adaptedSolution: {
        title: string;
        description: string;
      };
      businessModel: {
        title: string;
        description: string;
      };
      acquisition: {
        title: string;
        description: string;
      };
      valueProposition: {
        title: string;
        description: string;
      };
      competition: {
        title: string;
        description: string;
      };
      risks: {
        title: string;
        description: string;
      };
      validationScore: {
        title: string;
        description: string;
      };
    };
  };
  story: {
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
  };
  footer: {
    legal: {
      title: string;
      links: string[];
    };
    contact: {
      title: string;
      email: string;
    };
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  planChoice: {
    title: string;
    options: Array<{
      title: string;
      description: string;
    }>;
  };
  targetProfiles: {
    title: string;
    description: string;
    profiles: {
      developers: {
        title: string;
        question: string;
        action: string;
      };
      students: {
        title: string;
        question: string;
        action: string;
      };
      freelancers: {
        title: string;
        question: string;
        action: string;
      };
      entrepreneurs: {
        title: string;
        question: string;
        action: string;
      };
      curious: {
        title: string;
        question: string;
        action: string;
      };
    };
  };
  appSidebar: {
    createReport: string;
    reports: string;
    available: string;
    myReports: string;
    noReports: string;
    faq: string;
    contact: string;
    logout: string;
    dashboard: string;
    buyReports: string;
    toast: {
      logoutSuccess: string;
    };
  };
  support: {
    title: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    error: string;
    sending: string;
  };
};

type Locale = "en" | "fr";

const dictionaries: Record<
  Locale,
  () => Promise<Dictionary>
> = {
  en: () =>
    import("./dictionaries/en.json").then(
      (module) => module.default
    ),
  fr: () =>
    import("./dictionaries/fr.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (
  locale: string
): Promise<Dictionary> => {
  // Normalize locale to match our dictionary keys
  const normalizedLocale = locale.split("-")[0] as Locale;
  // Fallback to 'fr' if the locale is not supported
  const finalLocale = (
    dictionaries[locale as Locale]
      ? locale
      : normalizedLocale
  ) as Locale;

  return dictionaries[finalLocale]();
};
