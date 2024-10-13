"use client";
import React, { useState, useRef } from "react";
import styles from "./navbar2.module.css";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      gsap.to(menuRef.current, {
        height: "100vh", // Set height to full screen when open
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0, // Collapse the menu when closed
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      className={`${styles.main} w-screen z-20 absolute top-0 font-kodeMono  left-0`}
    >
      <div className={`${styles.navbar}`}>
        {/* Desktop Menu */}
        <div
          className={`${styles.desktopMenu} mt-8 mx-auto w-[70vw] flex justify-evenly items-center w-screen `}
        >
          <Link
            href="/"
            className={`${styles.navItem} text-white flex items-center justify-center hover:scale-110 transition-all h-10 w-max px-6`}
          >
            Home
          </Link>
          <Link
            href="/workshop"
            className={`${styles.navItem} text-white flex items-center justify-center hover:scale-110 transition-all h-10 w-max px-6 duration-300`}
          >
            Workshop
          </Link>
          <Link
            href="/events"
            className={`${styles.navItem} text-white flex items-center justify-center hover:scale-110 transition-all h-10 w-max px-6 duration-300`}
          >
            events
          </Link>
          <Link
            href="/lecture"
            className={`${styles.navItem} text-white flex items-center justify-center hover:scale-110 transition-all h-10 w-max px-6 duration-300`}
          >
            Lecture
          </Link>
          <Link
            href="/contact"
            className={`${styles.navItem} text-white flex items-center justify-center hover:scale-110 transition-all h-10 w-max px-6 duration-300`}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.hamburgerLine} ${isOpen ? 'bg-white' : 'bg-black'} `} />
          <div className={`${styles.hamburgerLine} ${isOpen ? 'bg-white' : 'bg-black'}  `} />
          <div className={`${styles.hamburgerLine} ${isOpen ? 'bg-white' : 'bg-black'}  `} />
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          onClick={toggleMenu}
          className={`${styles.menu} h-screen w-screen flex flex-col justify-evenly items-center `}
        >
          <Link
            href="/"
            className={`${styles.navItem} text-white hover:bg-slate-50 hover:bg-opacity-30 h-full flex-grow-0 flex items-center justify-center transition-all w-full px-6`}
          >
            Home
          </Link>
          <Link
            href="/workshop"
            className={`${styles.navItem} text-white hover:bg-slate-50 hover:bg-opacity-30 h-full flex-grow-0 flex items-center justify-center transition-all w-full px-6 duration-300`}
          >
            Workshop
          </Link>
          <Link
            href="/events"
            className={`${styles.navItem} text-white hover:bg-slate-50 hover:bg-opacity-30 h-full flex-grow-0 flex items-center justify-center transition-all w-full px-6 duration-300`}
          >
            Events
          </Link>
          <Link
            href="/lecture"
            className={`${styles.navItem} text-white hover:bg-slate-50 hover:bg-opacity-30 h-full flex-grow-0 flex items-center justify-center transition-all w-full px-6 duration-300`}
          >
            Lecture
          </Link>
          <Link
            href="/contact"
            className={`${styles.navItem} text-white hover:bg-slate-50 hover:bg-opacity-30 h-full flex-grow-0 flex items-center justify-center transition-all w-full px-6 duration-300`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
