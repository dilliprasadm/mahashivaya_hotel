"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SpiritualStayIntro() {
  return (
    <section className="w-full py-24 lg:py-32 bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tactile Sensory Image with Gold Frame Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIe6wKcYKyr9DN-svGNTGVTF5QE630eo4TXWctsrpowouFha1E5Z5nL57PJTBvyRVYh4Zhq9iZKSqHOtEY5OOx1bTk1bVcgaWVDYJlgO_1yXRMXVdNTUwppOgC-GDl1h-Cyt1ZqaNI8hl31exfX2suPlbz751ABYuyxE_8M7vJPTMWQuBKbKfGNlEiTFtB8FIj--ZMrjTELTwLAlZcTQQacM1KItn8QSUni9svJ5OVva9S8W87bdP"
                alt="Tactile sensory hospitality detail of organic white linen and brass incense burner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Subtle floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#171513] text-[#FAF8F3] p-4 sm:p-5 rounded-xl border border-[#B08D57]/30 shadow-xl max-w-xs">
              <span className="font-serif text-lg text-[#E0BD62] block leading-tight">
                730 Metres
              </span>
              <span className="text-xs text-stone-300 font-light mt-1 block">
                Uninterrupted easy walk to the Mahakal Lok sacred corridor.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B08D57] uppercase">
                The Sanctuary at Begampura
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
              Where Sacred Devotion Meets <span className="italic font-normal text-[#775928]">Deep Comfort</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              Set within the historic lanes of Begampura, Mahashivaya Guest House was conceived as an unhurried haven for pilgrims. We believe sacred journeys deserve restful sleep, pristine hygiene, and honest hospitality.
            </p>

            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Whether rising at 3:00 AM for the revered pre-dawn Bhasma Aarti or returning after sunset aarti on Ram Ghat, our rooms offer spotless sanctuary, high-pressure hot water, and quiet, rejuvenating rest.
            </p>

            {/* Reassurance Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
              <div className="flex items-center space-x-2.5 text-sm font-medium text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span>5-8 Min Walk to Mahakal</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm font-medium text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span>24/7 Geyser Hot Water</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm font-medium text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span>Spotless Linen Guarantee</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm font-medium text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span>Pure Vegetarian Property</span>
              </div>
            </div>

            {/* Read About Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#775928] hover:text-[#B08D57] transition-colors group"
              >
                <span>Discover Our Hospitality Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
