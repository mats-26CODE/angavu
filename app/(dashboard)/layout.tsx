"use client";

import NavBar from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Authentication is handled by middleware (lib/supabase/proxy.ts)
  // which redirects unauthenticated users to /login
  // The SessionProvider in the root layout syncs the Zustand store

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
