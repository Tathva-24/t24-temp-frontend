"use client";
import Navbar2 from "@/components/Navbar2/Navbar2";
import { HeroHighlight } from "../components/ui/hero-highlight";

import Landing from "@/components/ui/landing";

export default function Home() {
  return (
    <div className="w-screen justify-center items-center overflow-x-hidden ">
    <HeroHighlight >
      <Landing />
    </HeroHighlight>
    </div>
    
  );
}
