"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { Store, Briefcase, Building2, FileText, Shield, CheckCircle2 } from "lucide-react";

export function WhoIsForSection() {
  const { t } = useTranslation();

  const items = [
    { icon: Building2, text: t("landing.whoIsFor.items.smes") },
    { icon: Store, text: t("landing.whoIsFor.items.shopOwners") },
    { icon: Briefcase, text: t("landing.whoIsFor.items.services") },
    { icon: FileText, text: t("landing.whoIsFor.items.informal") },
  ];

  const complianceStatements = [
    { icon: Shield, text: t("landing.trustCompliance.statements.noTaxEvasion") },
    { icon: Shield, text: t("landing.trustCompliance.statements.noBankConnection") },
    { icon: Shield, text: t("landing.trustCompliance.statements.helpsRecords") },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/20">
      <div className="container w-full md:max-w-6xl mx-auto px-4">
        {/* Who It's For Section */}
        <div className="mb-20 md:mb-24 lg:mb-28">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 text-balance">
              {t("landing.whoIsFor.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm flex flex-col justify-between py-6 px-4 space-y-3 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  <CardContent className="p-0 text-center space-y-4 md:space-y-6">
                    <div className="mx-auto h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 flex items-center justify-center transition-all shadow-md">
                      <Icon className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trust & Compliance Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-primary mb-4">
              <Shield className="h-4 w-4 md:h-5 md:w-5" />
              <span>Trust & Compliance</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance">
              {t("landing.trustCompliance.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {complianceStatements.map((statement, index) => {
              const Icon = statement.icon;
              return (
                <Card
                  key={index}
                  className="group border-border hover:border-primary/30 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="p-6 md:p-8 lg:p-10 text-center space-y-3 md:space-y-4">
                    <div className="mx-auto h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                    </div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-muted-foreground leading-relaxed">
                      {statement.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
