"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      {/* Hero Content */}
      <div className="container w-full md:max-w-6xl mx-auto px-4 py-20 md:py-20">
        <div className="space-y-10 flex flex-col items-center text-center">
          <div className="md:w-4xl space-y-6 md:space-y-4 flex flex-col items-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm md:text-base font-medium text-primary">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
              <span>Rekodi Sahihi, Amani ya Akili</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance leading-tight">
              {t("landing.headline")}
            </h1>
            <p className="w-3/4 text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground text-pretty">
              {t("landing.subheadline")}
            </p>
            {/* <p className="text-sm md:text-base text-muted-foreground">
              {t("landing.supportingText")}
            </p> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary rounded-full text-primary-foreground hover:bg-primary/90 text-base md:text-lg lg:text-xl py-6 md:py-7"
            >
              <Link href="/sign-up">{t("landing.cta")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 text-base md:text-lg lg:text-xl py-6 md:py-7"
            >
              <Link href="#how-it-works">{t("landing.secondaryCta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
