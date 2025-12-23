import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/providers";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angavu - Fanya Biashara Yako Iwe Angavu",
  description:
    "Record and manage your business sales and expenses with ease and transparency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !(function() {
                try {
                  const stored = localStorage.getItem('preferences-store');
                  let theme = 'system';
                  let language = 'sw';
                  
                  if (stored) {
                    const preferences = JSON.parse(stored);
                    if (preferences && preferences.state) {
                      theme = preferences.state.theme || 'system';
                      language = preferences.state.language || 'sw';
                    }
                  }
                  
                  // Apply theme immediately
                  let effectiveTheme = theme;
                  if (theme === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    effectiveTheme = prefersDark ? 'dark' : 'light';
                  }
                  document.documentElement.classList.toggle('dark', effectiveTheme === 'dark');
                  
                  // Apply language immediately
                  if (language) {
                    document.documentElement.lang = language;
                  }
                  
                  // Mark as initialized to show content
                  document.documentElement.setAttribute('data-theme-initialized', 'true');
                } catch (e) {
                  // Fallback to system theme on error
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', prefersDark);
                  document.documentElement.lang = 'sw';
                  document.documentElement.setAttribute('data-theme-initialized', 'true');
                }
              })();
            `,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
