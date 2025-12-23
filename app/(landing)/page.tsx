import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Angavu · Fanya Biashara Yako Iwe Angavu
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Angavu inakusaidia kurekodi mauzo na gharama, kuzalisha ripoti za kila
          mwezi, na kuandaa kwa ajili ya TRA kwa urahisi na uwazi.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/sign-up">Anza Bure</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">Ingia</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
