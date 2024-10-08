"use client";
import { useRef } from "react";
import Navbar from "../navbar/navbar";
import styles from "./landing.module.css";

export default function Landing() {
  const tathvaTextRef = useRef<HTMLHeadingElement | null>(null);
  const comingSoonTextRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className={styles.main}>
      {/* Navbar */}
      <Navbar />

      <div className={styles.landing}>
        <div className={styles.item1}>
          <h1 ref={tathvaTextRef} className={styles.letters}>
            Tathva&apos;24
          </h1>

          <h2 ref={comingSoonTextRef} className={styles.letters}>
            Coming Soon
          </h2>
        </div>

        {/* Event Dates */}
        <div className={styles.item2}>
          <h1>24 OCT</h1>
          <h1>25 OCT</h1>
          <h1>26 OCT</h1>
        </div>
      </div>
    </div>
  );
}
