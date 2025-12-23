"use client";

import { useTranslation } from "@/hooks/use-translation";
import {
  Building2,
  BarChart3,
  FileCheck,
  Shield,
  ArrowRight,
} from "lucide-react";

export function HowItWorksSection() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Building2,
      number: "1",
      title: t("landing.howItWorks.step1.title"),
      description: t("landing.howItWorks.step1.description"),
    },
    {
      icon: BarChart3,
      number: "2",
      title: t("landing.howItWorks.step2.title"),
      description: t("landing.howItWorks.step2.description"),
    },
    {
      icon: FileCheck,
      number: "3",
      title: t("landing.howItWorks.step3.title"),
      description: t("landing.howItWorks.step3.description"),
    },
    {
      icon: Shield,
      number: "4",
      title: t("landing.howItWorks.step4.title"),
      description: t("landing.howItWorks.step4.description"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center text-foreground mb-16 md:mb-20 lg:mb-24 text-balance">
          {t("landing.howItWorks.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 relative">
                  {step.number}
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                )}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-4">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
