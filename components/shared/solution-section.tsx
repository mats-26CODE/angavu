"use client";

import { useTranslation } from "@/hooks/use-translation";
import { TrendingUp, Receipt, BarChart3, FileCheck, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SolutionSection() {
  const { t } = useTranslation();

  const solutionPoints = [
    {
      icon: TrendingUp,
      text: t("landing.solution.whatItDoes.recordSales"),
    },
    {
      icon: Receipt,
      text: t("landing.solution.whatItDoes.trackExpenses"),
    },
    {
      icon: BarChart3,
      text: t("landing.solution.whatItDoes.viewTotals"),
    },
    {
      icon: FileCheck,
      text: t("landing.solution.whatItDoes.generateReports"),
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container w-full md:max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-primary mb-4">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
              <span>Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance">
              {t("landing.solution.title")}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto">
              {t("landing.solution.intro")}
            </p>
          </div>

          {/* Solution Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {solutionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className="group border-border hover:border-primary/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <CardContent className="p-6 md:p-8 lg:p-10 flex items-start gap-4 md:gap-6">
                    <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 flex items-center justify-center flex-shrink-0 transition-all shadow-sm">
                      <Icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary" />
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-foreground font-medium pt-2.5 md:pt-3">
                      {point.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 md:gap-4 rounded-full bg-primary/10 border border-primary/30 px-6 md:px-8 lg:px-10 py-3 md:py-4">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-foreground">
                {t("landing.solution.closing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
