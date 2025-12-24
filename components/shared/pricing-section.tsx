"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";

export function PricingSection() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background"
    >
      <div className="container w-full md:max-w-6xl mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
              <span>Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 text-balance">
              {t("landing.pricing.title")}
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="group relative bg-gradient-to-br from-primary/10 via-primary/5 to-card/80 backdrop-blur-sm rounded-3xl border-2 border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20" />
              <CardHeader className="text-center pb-6 md:pb-8 relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm md:text-base font-medium text-primary mb-4">
                  <Sparkles className="h-4 w-4" />
                  <span>{t("landing.pricing.freeTrial")}</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 md:mb-4 font-bold">
                  {t("landing.pricing.plan.name")}
                </CardTitle>
                <div className="space-y-1 mb-4 md:mb-6">
                  <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary">
                    {t("landing.pricing.plan.price")}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-5 relative z-10 pb-8 md:pb-10">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                    </div>
                    <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-foreground">
                      {t("landing.pricing.plan.allFeatures")}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full mt-8 md:mt-10 h-12 md:h-14 lg:h-16 text-base md:text-lg lg:text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
                  size="lg"
                >
                  <Link href="/sign-up">{t("landing.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground text-sm md:text-base lg:text-lg">
            {t("landing.pricing.noHiddenFees")}
          </p>
        </div>
      </div>
    </section>
  );
}
