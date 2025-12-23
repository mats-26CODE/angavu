"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, translations } from "@/lib/stores/preferences-store";
import { useTranslation } from "@/hooks/use-translation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sun, Moon, Monitor } from "lucide-react";
import Logo from "./logo";
import { useTheme } from "@/lib/stores/preferences-store";

const NavBar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  const dashboardLinks = [{ label: t("nav.dashboard"), href: "/dashboard" }];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("system");
    } else if (theme === "system") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    if (theme === "light") {
      return <Sun className="h-4 w-4" />;
    } else if (theme === "system") {
      return <Monitor className="h-4 w-4" />;
    } else {
      return <Moon className="h-4 w-4" />;
    }
  };

  const getThemeTitle = () => {
    if (theme === "light") {
      return "Light theme (click to switch)";
    } else if (theme === "system") {
      return "System theme (click to switch)";
    } else {
      return "Dark theme (click to switch)";
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container w-full md:max-w-6xl mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(translations).map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {
                    translations[lang as keyof typeof translations]
                      .languageLabel
                  }
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Link
            href="/login"
            className="ml-2 px-6 py-2 border border-primary/10 rounded-full text-sm font-medium hover:bg-muted"
          >
            {t("nav.login")}
          </Link>
          <Button
            asChild
            size="sm"
            className="ml-2 rounded-full text-sm font-medium hover:bg-muted"
          >
            <Link href="/sign-up">{t("nav.signup")}</Link>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={cycleTheme}
            title={getThemeTitle()}
          >
            {getThemeIcon()}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle - Mobile */}
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={cycleTheme}
            title={getThemeTitle()}
          >
            {theme === "light" ? (
              <Sun className="h-4 w-4" />
            ) : theme === "system" ? (
              <Monitor className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-20 h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(translations).map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {
                    translations[lang as keyof typeof translations]
                      .languageLabel
                  }
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full! sm:max-w-full! p-0">
              <SheetHeader className="px-6 pt-6 pb-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="px-6 pb-6 flex flex-col gap-4">
                {pathname === "/"
                  ? navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                      </a>
                    ))
                  : dashboardLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`text-base transition-colors py-2 ${
                          pathname === link.href
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                <div className="border-t pt-4 mt-4 space-y-4">
                  {/* Theme Toggle - Mobile Menu */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={cycleTheme}
                      title={getThemeTitle()}
                    >
                      {getThemeIcon()}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/login"
                      onClick={handleLinkClick}
                      className="w-full px-4 py-2 border border-primary/10 rounded-full text-xs 2xl:text-base font-normal hover:bg-muted text-center"
                    >
                      {t("nav.login")}
                    </Link>
                    <Link
                      href="/sign-up"
                      onClick={handleLinkClick}
                      className="w-full px-4 py-2 border border-primary/40 rounded-full bg-primary/40 text-primary-foreground text-xs 2xl:text-base font-normal hover:bg-primary/10 text-center"
                    >
                      {t("nav.signup")}
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <hr className="bg-linear-to-r h-0.5 from-transparent via-primary/20 to-transparent" />
    </nav>
  );
};

export default NavBar;
