"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Bed, Wind, ShowerHead, Sparkles, CheckCircle2 } from "lucide-react";
import { roomsData } from "@/lib/data/rooms";
import { useBooking } from "@/lib/context/BookingContext";

export default function RoomsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* 1. Cinematic Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#0B0A09] text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1U6e2TT7zdfy4o02YqBTUlk7kKYnwbYYahh22Sne03wm-KGzSORQPt7MrgMJI6Tks5jB-Yk1ZQP6N8CPOXo1UvboT2bUDDzA7c-dR37-XsQ1fhAGNKSOGI6HvHecplqMSr9IAhtactBSoK5qtaizQtcRJgrN4z3jwiqqb7861IERAJpn4mYoYNF93JjjKqpZvCu7DvlXQSG6NPu3dqC7gXe_0PiEGOubWaiB49kDF67uhdnAHSo_q8qMSc"
            alt="Mahashivaya Guest House Boutique Bedrooms in Ujjain"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/60 to-[#0B0A09]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B08D57]/40 text-[#E0BD62] text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0BD62]" />
            <span>Curated Accommodations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
            Comfort in <span className="italic text-[#E0BD62]">Every Stay</span>
          </h1>

          <p className="text-stone-300 font-light text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
            From intimate sanctuaries for couples and solo devotees to expansive multi-bed residences with private balconies for large families. Spotless hygiene, quiet air, and thoughtful pilgrim hospitality in Ujjain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#E0BD62]">
            <span>• 730m from Mahakal Lok</span>
            <span>• 24/7 Hot Running Water</span>
            <span>• High-Speed Wi-Fi</span>
            <span>• Daily Housekeeping</span>
          </div>
        </div>
      </section>

      {/* 2. Room Discovery Sections (Alternating Editorial Grid) */}
      <div className="py-20 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col space-y-24">
        {roomsData.map((room, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={room.slug}
              id={room.slug}
              className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#E8DFD2] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              {/* Background Watermark Numeral */}
              <div className="absolute top-4 right-6 font-serif text-[120px] sm:text-[160px] font-bold text-[#B08D57]/5 select-none pointer-events-none leading-none">
                {room.id}
              </div>

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                {/* Visual Column */}
                <div className={`lg:col-span-7 relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={room.photos[0]?.url || "https://images.unsplash.com/photo-1590490360182-c33d57733427"}
                      alt={room.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Badges on Image */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-[#171513]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-medium text-white flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#E0BD62]" />
                        {room.capacity}
                      </span>
                      {room.hasBalcony && (
                        <span className="bg-[#B08D57] text-[#0B0A09] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          Private Balcony
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {room.photos.slice(1, 4).map((p, pIdx) => (
                      <div key={pIdx} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#E8DFD2]">
                        <Image
                          src={p.url}
                          alt={p.caption}
                          fill
                          sizes="20vw"
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Information Column */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-[#775928] uppercase">
                        {room.categoryTag}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-[11px] font-medium text-stone-500">
                        {room.sizeSqFt}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
                      {room.name}
                    </h2>

                    <p className="text-sm sm:text-base text-stone-600 font-light mt-3 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Specification Highlights */}
                    <div className="grid grid-cols-2 gap-3 pt-5 pb-5 border-y border-[#E8DFD2] my-5 text-xs text-stone-700">
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[#775928] shrink-0" />
                        <span className="truncate">{room.bedConfiguration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-[#775928] shrink-0" />
                        <span>{room.isAC ? "Split AC Unit" : "Natural Air + Fan"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShowerHead className="w-4 h-4 text-[#775928] shrink-0" />
                        <span>Attached Bath + Geyser</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Daily Housekeeping</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => openBooking(room.name)}
                      className="px-6 py-3 rounded-full bg-[#171513] hover:bg-[#B08D57] text-[#FAF8F3] hover:text-[#0B0A09] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                    >
                      Check Today&apos;s Price
                    </button>

                    <Link
                      href={`/rooms/${room.slug}`}
                      className="px-6 py-3 rounded-full bg-[#FAF2EE] hover:bg-[#E8DFD2] text-stone-800 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group/btn"
                    >
                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-btn-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
