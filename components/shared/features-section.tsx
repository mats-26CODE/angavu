"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { TrendingUp, Receipt, FileText, Shield } from "lucide-react";

export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: TrendingUp,
      title: t("landing.features.recordSales.title"),
      description: t("landing.features.recordSales.description"),
    },
    {
      icon: Receipt,
      title: t("landing.features.trackExpenses.title"),
      description: t("landing.features.trackExpenses.description"),
    },
    {
      icon: FileText,
      title: t("landing.features.monthlyReports.title"),
      description: t("landing.features.monthlyReports.description"),
    },
    {
      icon: Shield,
      title: t("landing.features.traReady.title"),
      description: t("landing.features.traReady.description"),
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-10 lg:px-16 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 text-balance">
            {t("landing.features.title")}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto">
            {t("landing.features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card flex flex-col justify-between py-5 px-3 sm:py-6 sm:px-4 space-y-2 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader className="p-0">
                  <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
