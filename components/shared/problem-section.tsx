"use client";

import { useTranslation } from "@/hooks/use-translation";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  const { t } = useTranslation();

  const painPoints = [
    {
      icon: AlertTriangle,
      text: t("landing.problem.painPoints.salesNotRecorded"),
    },
    {
      icon: AlertTriangle,
      text: t("landing.problem.painPoints.expensesUnknown"),
    },
    {
      icon: AlertTriangle,
      text: t("landing.problem.painPoints.noSummary"),
    },
    {
      icon: AlertTriangle,
      text: t("landing.problem.painPoints.incompleteRecords"),
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container w-full md:max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-destructive mb-4">
              <AlertTriangle className="h-4 w-4 md:h-5 md:w-5" />
              <span>Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance">
              {t("landing.problem.title")}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto">
              {t("landing.problem.intro")}
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className="group border-border hover:border-destructive/30 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-destructive/10 hover:-translate-y-1"
                >
                  <CardContent className="p-6 md:p-8 lg:p-10 flex items-start gap-4 md:gap-6">
                    <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-destructive" />
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground pt-1.5 md:pt-2">
                      {point.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-6 md:p-8 lg:p-10 xl:p-12 max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground">
                {t("landing.problem.closing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
