"use client";

import { useTranslation } from "@/hooks/use-translation";
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ConfidenceSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      text: t("landing.confidence.benefits.knowYourBusiness"),
    },
    {
      icon: Shield,
      text: t("landing.confidence.benefits.traNotThreatening"),
    },
    {
      icon: Zap,
      text: t("landing.confidence.benefits.alwaysReady"),
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container w-full md:max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-primary mb-4">
              <Zap className="h-4 w-4 md:h-5 md:w-5" />
              <span>Confidence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance">
              {t("landing.confidence.title")}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto">
              {t("landing.confidence.intro")}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group border-border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
                >
                  <CardContent className="p-6 md:p-8 lg:p-10 text-center space-y-4 md:space-y-6">
                    <div className="mx-auto h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 flex items-center justify-center transition-all shadow-md">
                      <Icon className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary" />
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-foreground leading-relaxed">
                      {benefit.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary border border-primary/30 p-6 md:p-8 lg:p-10 xl:p-12 max-w-3xl shadow-lg shadow-primary/20">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-foreground">
                {t("landing.confidence.closing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
