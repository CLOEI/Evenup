import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-8 min-h-[calc(100vh-68px)]">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight">
            Evenup
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-neutral-700">
            Split bills. Not friendships.
          </p>
        </div>

        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          No more awkward money talks. Track expenses, split costs fairly, and settle up with friends and family — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="text-lg" asChild>
            <Link href="/auth">Get Started</Link>
          </Button>
          <Button size="lg" variant="neutral" className="text-lg" asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        </div>

        <div className="pt-8 border-t-4 border-border mt-12">
          <p className="text-lg font-bold text-foreground mb-2">Open Source & Free</p>
          <p className="text-muted-foreground">
            Check it out on{" "}
            <a
              href="https://github.com/cloei/Evenup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:no-underline"
            >
              github.com/cloei/Evenup
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}