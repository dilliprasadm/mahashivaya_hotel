"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Bed, Wind, ShowerHead, Sparkles } from "lucide-react";
import { roomsData } from "@/lib/data/rooms";
import { useBooking } from "@/lib/context/BookingContext";

export default function HomeRoomsTrack() {
  const { openBooking } = useBooking();
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 bg-[#171513] text-[#FAF8F3] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E0BD62]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#E0BD62] uppercase">
                Accommodations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Comfort in <span className="italic text-[#E0BD62]">Every Stay</span>
            </h2>
          </div>

          <Link
            href="/rooms"
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#E0BD62] uppercase hover:text-white transition-colors group"
          >
            <span>Explore All 5 Room Types</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal Rooms Grid / Track */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {roomsData.slice(0, 3).map((room) => (
            <div
              key={room.slug}
              className="group relative rounded-2xl bg-[#0B0A09] border border-white/10 hover:border-[#B08D57]/60 overflow-hidden transition-all duration-500 flex flex-col shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={room.photos[0]?.url || "https://images.unsplash.com/photo-1590490360182-c33d57733427"}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-transparent opacity-80" />

                {/* Capacity Badge */}
                <div className="absolute top-4 left-4 bg-[#0B0A09]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] font-medium text-stone-200 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#E0BD62]" />
                  <span>{room.capacity}</span>
                </div>

                {room.hasBalcony && (
                  <div className="absolute top-4 right-4 bg-[#B08D57] text-[#0B0A09] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Private Balcony</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase block mb-1">
                    {room.categoryTag}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#E0BD62] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-light mt-2 line-clamp-2 leading-relaxed">
                    {room.tagline}
                  </p>

                  {/* Micro Specs */}
                  <div className="grid grid-cols-2 gap-2 pt-4 pb-4 border-y border-white/10 my-4 text-xs text-stone-300">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span className="truncate">{room.bedConfiguration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span>{room.isAC ? "Split AC" : "Ceiling Fan"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShowerHead className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span>24/7 Hot Water</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Free Fast Wi-Fi</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="text-xs font-semibold text-stone-300 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1 group/link"
                  >
                    <span>View Room</span>
                    <ArrowRight className="w-3.5 h-3.5 group-link-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openBooking(room.name)}
                    className="px-4 py-2 rounded-lg bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Check Price
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0B0A09] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl text-white font-normal">
              Travelling with family or large group?
            </h4>
            <p className="text-xs text-stone-400 font-light mt-1">
              We offer 4-Bed and 5-Bed suites so your entire party stays comfortably together.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/rooms"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Browse All Rooms
            </Link>
            <button
              onClick={() => openBooking("Family Suite Enquiry")}
              className="px-5 py-2.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Enquire For Family
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
