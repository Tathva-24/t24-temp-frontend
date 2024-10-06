"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { NavBar } from "../components/navbar/navbar";
import Image from "next/image";
import Landing from "@/components/ui/landing";

export default function Home() {
  return (
    <HeroHighlight>
      <NavBar />
      <Landing />
    </HeroHighlight>
  );
}
