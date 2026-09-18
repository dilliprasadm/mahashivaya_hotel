"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wind, Droplets, BedDouble, Wifi, Zap, Compass, Sparkles } from "lucide-react";

export default function HomeAmenitiesSection() {
  const highlights = [
    {
      icon: Wind,
      title: "Split Air Conditioning",
      desc: "Whisper-quiet climate cooling after afternoon temple queues.",
    },
    {
      icon: Droplets,
      title: "24/7 Hot & Cold Water",
      desc: "Instant electric geysers for early morning sacred cleansing baths.",
    },
    {
      icon: BedDouble,
      title: "Crisp Clean White Linen",
      desc: "Pure organic cotton sheets sanitized for deep, restorative sleep.",
    },
    {
      icon: Wifi,
      title: "High-Speed Wi-Fi",
      desc: "Reliable fiber optical internet across all guest rooms.",
    },
    {
      icon: Zap,
      title: "Bedside Charging Sockets",
      desc: "Universal power points right beside every single sleeping berth.",
    },
    {
      icon: Compass,
      title: "Darshan & Aarti Guidance",
      desc: "Local insights for Bhasma Aarti slots, timing, and e-rickshaws.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Amenity Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#B08D57]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B08D57] uppercase">
                Thoughtful Amenities
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
              Essential Comforts for <br />
              <span className="italic font-normal text-[#775928]">Your Pilgrimage</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              We focus on the comforts that matter most: quiet cooling, spotless beds, immediate hot water, and authentic guidance so your journey remains focused on devotion.
            </p>

            {/* Amenity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E8DFD2] hover:border-[#B08D57]/50 shadow-sm transition-all duration-300 flex items-start space-x-3.5 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2EE] text-[#775928] group-hover:bg-[#B08D57] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-stone-900 group-hover:text-[#775928] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 font-light mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explore Amenities CTA */}
            <div className="pt-3">
              <Link
                href="/amenities"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#775928] hover:text-[#B08D57] transition-colors group"
              >
                <span>Explore All Guest House Amenities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Room Angle Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1UB-y1uqP9KN15YQlqjcWEYe9OUOx8gIicHQDNGhWWpgt-ODaTzOWoPwATpYaNlU9mskUL73kq_-4nRlGyhg3uJON7MSPxC0CovsCVEjW__s2ATcx-WNdNFxQo_m3FEXktImguivMdKTEI_LxWVXwSL62c56wKJLgXpyjij1cFvH8U2emXMuFLbWYIgVFqtRbmwJXO1ypyh8F0ZZlWkD6cPTJtfhkGZLF8b_hlKKxfhdR1McYcv3QDsXm8"
                alt="Pristine air-conditioned bedroom interior at Mahashivaya Guest House"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
