export const translations = {
  sw: {
    languageLabel: "Swahili",
    nav: {
      brand: "Angavu",
      tagline: "Fanya Biashara Yako Iwe Angavu",
      login: "Ingia",
      signup: "Jisajili",
      dashboard: "Dashibodi",
      logout: "Toka",
    },
    footer: {
      tagline: "Angavu · Fanya Biashara Yako Iwe Angavu",
      description:
        "Chombo cha kurekodi na kusimamia mauzo na gharama za biashara yako kwa urahisi na uwazi.",
      company: "Kampuni",
      aboutUs: "Kuhusu Sisi",
      resources: "Rasilimali",
      helpCenter: "Kituo cha Msaada",
      termsOfService: "Vigezo vya Huduma",
      privacyPolicy: "Sera ya Faragha",
      connect: "Unganisha",
      copyright: "© 2025 Angavu. Haki zote zimehifadhiwa.",
      privacy: "Faragha",
      terms: "Vigezo",
      support: "Msaada",
    },
    landing: {
      tagline: "Angavu · Fanya Biashara Yako Iwe Angavu",
      headline: "Simamia {highlight} kwa urahisi.",
      highlight: "Biashara Yako",
      description:
        "Angavu inakusaidia kurekodi mauzo na gharama, kuzalisha ripoti za kila mwezi, na kuandaa kwa ajili ya TRA kwa urahisi na uwazi.",
      cta: "Anza Bure",
      secondaryCta: "Jifunze Zaidi",
    },
  },
  en: {
    languageLabel: "English",
    nav: {
      brand: "Angavu",
      tagline: "Make Your Business Transparent",
      login: "Login",
      signup: "Sign Up",
      dashboard: "Dashboard",
      logout: "Logout",
    },
    footer: {
      tagline: "Angavu · Make Your Business Transparent",
      description:
        "A tool to record and manage your business sales and expenses with ease and transparency.",
      company: "Company",
      aboutUs: "About Us",
      resources: "Resources",
      helpCenter: "Help Center",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      connect: "Connect",
      copyright: "© 2025 Angavu. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      support: "Support",
    },
    landing: {
      tagline: "Angavu · Make Your Business Transparent",
      headline: "Manage your {highlight} with ease.",
      highlight: "Business",
      description:
        "Angavu helps you record sales and expenses, generate monthly reports, and prepare for TRA with ease and transparency.",
      cta: "Get Started Free",
      secondaryCta: "Learn More",
    },
  },
};

export const defaultLanguage = "sw";

// Helper function to replace variables in translation strings
const replaceVariables = (value: string, vars: Record<string, string> = {}) => {
  if (typeof value !== "string") return value;
  return value.replace(/\{(\w+)}/g, (_, name) => vars?.[name] ?? `{${name}}`);
};

// Helper function to resolve nested keys (e.g., "nav.findJobs")
const resolveKey = (
  lang: keyof typeof translations,
  key: string
): string | undefined => {
  if (!key) return undefined;
  const parts = key.split(".");
  let current: unknown = translations[lang];
  for (const part of parts) {
    if (
      current &&
      typeof current === "object" &&
      Object.prototype.hasOwnProperty.call(current, part)
    ) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
};

// Translation function
export const t = (
  lang: keyof typeof translations,
  key: string,
  vars: Record<string, string> = {}
): string => {
  const resolved = resolveKey(lang, key);
  const value = resolved !== undefined ? resolved : key;
  return replaceVariables(
    typeof value === "string" ? value : String(value),
    vars
  );
};
