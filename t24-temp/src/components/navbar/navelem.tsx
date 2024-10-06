"use client";

import React from "react";

interface NavElemProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export const NavElem: React.FC<NavElemProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="bg-[#CACDF8] hover:bg-white w-[10vw] h-[2.5vw] p-4 shadow-md cursor-pointer flex justify-center items-center text-center transition-colors duration-100"
      onClick={onClick}
      style={{
        clipPath: "polygon(0 0, 90% 0%, 100% 40%, 100% 100%, 10% 100%, 0 60%)",
      }}
    >
      <h2 className="text-xl font-bold text-black text-center">{title}</h2>
    </div>
  );
};
