"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useSyncExternalStore } from "react";
import {
  translations,
  defaultLanguage,
  t as translate,
} from "@/lib/i18n/translations";

type Theme = "light" | "dark" | "system";
type Language = "en" | "sw";

interface PreferencesState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  // Helper to get effective theme (resolves "system" to actual theme)
  getEffectiveTheme: () => "light" | "dark";
  // Translation function
  t: (key: string, vars?: Record<string, string>) => string;
}

// Create the store with persistence
const createPreferencesStore = () => {
  return create<PreferencesState>()(
    persist(
      (set, get) => ({
        theme: "system",
        language: defaultLanguage as Language,
        setTheme: (theme: Theme) => {
          set({ theme });
          // Apply theme immediately
          const effectiveTheme =
            theme === "system" ? get().getEffectiveTheme() : theme;
          if (typeof window !== "undefined") {
            document.documentElement.classList.toggle(
              "dark",
              effectiveTheme === "dark"
            );
          }
        },
        setLanguage: (lang: Language) => {
          set({ language: lang });
          if (typeof window !== "undefined") {
            document.documentElement.lang = lang;
          }
        },
        getEffectiveTheme: (): "light" | "dark" => {
          const { theme } = get();
          if (theme === "system") {
            if (typeof window === "undefined") return "light";
            const prefersDark = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches;
            return prefersDark ? "dark" : "light";
          }
          return theme;
        },
        t: (key: string, vars?: Record<string, string>) => {
          const { language } = get();
          return translate(language, key, vars);
        },
      }),
      {
        name: "preferences-store", // unique name for localStorage key
        storage: createJSONStorage(() => localStorage),
        // Initialize theme and language on load
        onRehydrateStorage: () => (state) => {
          if (state && typeof window !== "undefined") {
            const effectiveTheme = state.getEffectiveTheme();
            document.documentElement.classList.toggle(
              "dark",
              effectiveTheme === "dark"
            );
            document.documentElement.lang = state.language;
          }
        },
      }
    )
  );
};

export const usePreferencesStore = createPreferencesStore();

// Hooks for easier access
export const useTheme = () => {
  const theme = useSyncExternalStore(
    usePreferencesStore.subscribe,
    () => usePreferencesStore.getState().theme,
    () => "system" // SSR value
  );
  const setTheme = usePreferencesStore((state) => state.setTheme);
  const getEffectiveTheme = usePreferencesStore(
    (state) => state.getEffectiveTheme
  );

  // Get effective theme reactively
  const effectiveTheme = useSyncExternalStore(
    usePreferencesStore.subscribe,
    () => usePreferencesStore.getState().getEffectiveTheme(),
    () => "light" // SSR value
  );

  return {
    theme,
    setTheme,
    effectiveTheme,
    toggleTheme: () => {
      const current = usePreferencesStore.getState().theme;
      if (current === "light") {
        setTheme("dark");
      } else if (current === "dark") {
        setTheme("light");
      } else {
        // If system, toggle to opposite of current system preference
        const effective = getEffectiveTheme();
        setTheme(effective === "light" ? "dark" : "light");
      }
    },
  };
};

export const useLanguage = () => {
  const language = useSyncExternalStore(
    usePreferencesStore.subscribe,
    () => usePreferencesStore.getState().language,
    () => defaultLanguage // SSR value
  );
  const setLanguage = usePreferencesStore((state) => state.setLanguage);
  const t = useSyncExternalStore(
    usePreferencesStore.subscribe,
    () => usePreferencesStore.getState().t,
    () => (key: string, vars?: Record<string, string>) =>
      translate(defaultLanguage, key, vars) // SSR value
  );

  return {
    language,
    setLanguage,
    t,
    translations, // Export translations for language switcher
  };
};

// Re-export translations for components that need them
export { translations };
