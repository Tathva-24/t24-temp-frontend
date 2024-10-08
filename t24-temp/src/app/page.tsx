// @ts-ignore

"use client";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { Analytics } from "@vercel/analytics/react";
import Landing from "@/components/ui/landing";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroHighlight>
        <Analytics />
        <Landing />
      </HeroHighlight>
    </div>
  );
}
