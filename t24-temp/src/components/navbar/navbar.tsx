"use client";
import React from "react";
import { NavElem } from "./navelem";

export const NavBar: React.FC = () => {
  const handleClick = (name: string) => {
    console.log(`${name} clicked!`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[99] flex justify-center py-4">
      <div className="flex space-x-8">
        <NavElem title="HOME" onClick={() => handleClick("HOME")} />
        <NavElem title="WORKSHOP" onClick={() => handleClick("WORKSHOP")} />
        <NavElem title="LECTURE" onClick={() => handleClick("LECTURE")} />
        <NavElem title="CONTACTS" onClick={() => handleClick("CONTACTS")} />
      </div>
    </nav>
  );
};
