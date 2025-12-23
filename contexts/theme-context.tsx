import React, { ReactNode, useEffect } from "react";
import { useTheme as useThemeStore } from "@/lib/stores/preferences-store";

// Re-export useTheme for backward compatibility
export { useTheme } from "@/lib/stores/preferences-store";

// Provider component that initializes theme on mount and handles system theme changes
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, effectiveTheme } = useThemeStore();

  // Apply theme on mount and when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle(
        "dark",
        effectiveTheme === "dark"
      );
    }
  }, [effectiveTheme]);

  // Listen for system theme changes when theme is "system"
  useEffect(() => {
    if (theme === "system" && typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };

      // Set initial state
      document.documentElement.classList.toggle("dark", mediaQuery.matches);

      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [theme]);

  // This provider doesn't need to provide context anymore
  // but we keep it for backward compatibility
  return <>{children}</>;
};
