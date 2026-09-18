"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import { destinationsData } from "@/lib/data/destinations";

export default function HomeExploreUjjain() {
  const topPlaces = destinationsData.slice(0, 4);

  return (
    <section className="w-full py-24 bg-[#171513] text-[#FAF8F3] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E0BD62]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#E0BD62] uppercase">
                Explore Ujjain
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Iconic Destinations <span className="italic text-[#E0BD62]">Near Us</span>
            </h2>
          </div>

          <Link
            href="/explore-ujjain"
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#E0BD62] uppercase hover:text-white transition-colors group"
          >
            <span>View Interactive City Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Landmark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPlaces.map((place) => (
            <Link
              key={place.id}
              href="/explore-ujjain"
              className="group relative rounded-2xl bg-[#0B0A09] border border-white/10 hover:border-[#B08D57]/60 overflow-hidden transition-all duration-500 flex flex-col shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={place.imageUrl}
                  alt={place.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/20 to-transparent" />

                {/* Distance Badge */}
                <div className="absolute top-3 right-3 bg-[#0B0A09]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-medium text-[#E0BD62] flex items-center gap-1">
                  <Navigation className="w-3 h-3" />
                  <span>{place.distance}</span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#B08D57] uppercase block mb-1">
                    {place.number} • {place.category}
                  </span>
                  <h3 className="font-serif text-lg text-white font-normal group-hover:text-[#E0BD62] transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {place.shortDesc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-stone-400 border-t border-white/10 mt-4">
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                    {place.travelTime}
                  </span>
                  <span className="text-[#E0BD62] font-medium group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Atmospheric Quote Strip */}
        <div className="mt-14 py-8 px-6 sm:px-12 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.07] to-white/[0.04] border border-white/10 text-center relative overflow-hidden">
          <p className="font-serif text-lg sm:text-2xl text-[#FAF8F3] italic font-normal max-w-2xl mx-auto">
            &ldquo;In Ujjain, time stands still before the Lord of Time.&rdquo;
          </p>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#B08D57] uppercase mt-2 block">
            Sacred Geography of Avantika
          </span>
        </div>
      </div>
    </section>
  );
}
