import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", theme = "auto", size = "md" }: LogoProps) {
  const imgSize = size === "sm" ? 32 : size === "lg" ? 48 : 40;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none select-none transition-transform duration-300 hover:scale-[1.02] shrink-0 ${className}`}
      aria-label="Mahashivaya Guest House Homepage"
    >
      {/* Golden Official Emblem */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-[0_2px_10px_rgba(224,189,98,0.25)] ring-1 ring-[#B08D57]/40 group-hover:ring-[#E0BD62] group-hover:shadow-[0_4px_16px_rgba(224,189,98,0.4)] transition-all duration-300 overflow-hidden shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Mahashivaya Guest House Official Gold Logo"
          width={imgSize}
          height={imgSize}
          className="object-cover w-full h-full rounded-full transform transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* Typography Stack */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-[15px] sm:text-[18px] md:text-[20px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase leading-tight transition-colors duration-300 ${
            theme === "dark"
              ? "text-[#FAF8F3] group-hover:text-[#E0BD62]"
              : "text-[#1C1917] group-hover:text-[#775928]"
          }`}
        >
          Mahashivaya
        </span>
        <span className="font-sans text-[8px] sm:text-[9.5px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#B08D57] uppercase leading-tight mt-0.5">
          Guest House • Ujjain
        </span>
      </div>
    </Link>
  );
}
