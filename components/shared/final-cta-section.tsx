"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SubscribeCard } from "./subscribe-card";

export function FinalCTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
      <div className="container w-full md:max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main CTA */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance">
              {t("landing.finalCta.title")}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-3xl mx-auto">
              {t("landing.finalCta.subtitle")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary rounded-full text-primary-foreground hover:bg-primary/90 px-8 md:px-10 lg:px-12 py-6 md:py-7 lg:py-8 text-lg md:text-xl lg:text-2xl shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              <Link href="/sign-up">
                {t("landing.finalCta.cta")}
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
              </Link>
            </Button>
          </div>

          {/* Subscribe Card */}
          <div className="pt-8 border-t border-border/50">
            <div className="max-w-md mx-auto">
              <SubscribeCard
                showHeader={false}
                className="bg-transparent border-0 p-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
