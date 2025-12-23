import NavBar from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
