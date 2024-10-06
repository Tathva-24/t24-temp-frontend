"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { NavBar } from "../components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <HeroHighlight>
      <NavBar />
    </HeroHighlight>
  );
}
