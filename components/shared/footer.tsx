"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";
import Logo from "./logo";
import { useTranslation } from "@/hooks/use-translation";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-muted/30 border-t border-border">
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-20">
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 flex flex-col">
            <Logo />
            <p className="text-sm text-muted-foreground line-clamp-3 w-2/3">
              {t("footer.description")}
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-us"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.helpCenter")}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.termsOfService")}
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.privacyPolicy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t("footer.connect")}
            </h3>

            <div className="space-y-2">
              <div className="space-y-3 md:space-y-0 md:flex md:gap-3 mt-2">
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  aria-label="Twitter"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <X className="size-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  aria-label="LinkedIn"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <TbBrandLinkedin className="size-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  aria-label="Facebook"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <TbBrandFacebook className="size-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  aria-label="Instagram"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <TbBrandInstagram className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
