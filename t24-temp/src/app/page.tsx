"use client";
import { HeroHighlight } from "../components/ui/hero-highlight";
// import { NavBar } from "../components/navbar/navbar"
import Landing from "@/components/ui/landing";

export default function Home() {
  return (
    <HeroHighlight>
      {/* <NavBar /> */}
      <Landing />
    </HeroHighlight>
  );
}
