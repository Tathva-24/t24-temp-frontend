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
      className="bg-[#CACDF8] hover:bg-white w-[10vw] h-[3vw] p-4 shadow-md cursor-pointer flex justify-center items-center text-center"
      onClick={onClick}
      style={{
        clipPath: "polygon(0 0, 75% 0%, 100% 30%, 100% 100%, 25% 100%, 0 70%)",
      }}
    >
      <h2 className="text-xl font-bold text-black text-center">{title}</h2>
    </div>
  );
};
