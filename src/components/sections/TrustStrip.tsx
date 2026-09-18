"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Navigation, Landmark, Train, CheckCircle2, MapPin, ExternalLink, Clock, Sparkles } from "lucide-react";
import { reviewsStats } from "@/lib/data/reviews";
import { hotelConfig } from "@/lib/constants/site";

export default function TrustStrip() {
  return (
    <section className="relative w-full bg-[#12100E] text-[#FAF8F3] py-16 sm:py-20 border-y border-[#B08D57]/30 overflow-hidden z-20">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#B08D57]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#E0BD62]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#B08D57_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Sacred Context Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#E0BD62] uppercase">
              Prime Pilgrimage Proximity • Begampura, Ujjain
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400">
            <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>Closest peaceful guest house to Mahakal corridor</span>
          </div>
        </div>

        {/* 4 Creative Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 1: Google Pilgrim Trust Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative rounded-2xl bg-[#1A1714]/80 backdrop-blur-md border border-[#B08D57]/25 p-6 hover:border-[#E0BD62]/60 hover:bg-[#201D19] transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[#E0BD62]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E0BD62]" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  Verified
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3] tracking-tight group-hover:text-[#E0BD62] transition-colors">
                    {reviewsStats.averageRating}
                  </span>
                  <span className="text-lg text-stone-400 font-serif">/ 5.0</span>
                </div>
                <p className="font-serif text-sm text-stone-200 mt-1 font-medium">
                  {reviewsStats.totalReviews} Google Reviews
                </p>
              </div>

              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Ranked among Ujjain&apos;s most cherished family and devotee stays for spotlessness and peaceful courtyards.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E0BD62]">
              <span className="font-medium">Guest Rating Score</span>
              <span className="font-mono text-stone-400">96% Positive</span>
            </div>
          </motion.div>

          {/* Card 2: Mahakal Lok Corridor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative rounded-2xl bg-[#1A1714]/80 backdrop-blur-md border border-[#B08D57]/25 p-6 hover:border-[#E0BD62]/60 hover:bg-[#201D19] transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#B08D57]/15 border border-[#B08D57]/30 flex items-center justify-center text-[#E0BD62] group-hover:scale-110 transition-transform">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-[#E0BD62] bg-[#B08D57]/15 border border-[#B08D57]/30 px-2.5 py-0.5 rounded-full uppercase">
                  <Clock className="w-2.5 h-2.5" />
                  5 Min Walk
                </span>
              </div>

              <div>
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3] tracking-tight group-hover:text-[#E0BD62] transition-colors">
                  ~730 m
                </span>
                <p className="font-serif text-sm text-stone-200 mt-1 font-medium">
                  To Mahakal Lok Corridor
                </p>
              </div>

              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Stroll peacefully along ancient Begampura street right into the grand monumental corridor plaza.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E0BD62]">
              <span className="font-medium">Transit Option</span>
              <span className="text-stone-400">2 min E-Rickshaw</span>
            </div>
          </motion.div>

          {/* Card 3: Mahakaleshwar Jyotirlinga */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative rounded-2xl bg-[#1A1714]/80 backdrop-blur-md border border-[#B08D57]/25 p-6 hover:border-[#E0BD62]/60 hover:bg-[#201D19] transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#B08D57]/15 border border-[#B08D57]/30 flex items-center justify-center text-[#E0BD62] group-hover:scale-110 transition-transform">
                  <Landmark className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full uppercase">
                  3 AM Bhasma Aarti
                </span>
              </div>

              <div>
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3] tracking-tight group-hover:text-[#E0BD62] transition-colors">
                  ~980 m
                </span>
                <p className="font-serif text-sm text-stone-200 mt-1 font-medium">
                  To Mahakaleshwar Temple
                </p>
              </div>

              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Step out at dawn with zero transit rush. Arrive at Temple Gate No. 4 well ahead of sacred morning rituals.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E0BD62]">
              <span className="font-medium">Sanctum Access</span>
              <span className="text-stone-400">8 mins on foot</span>
            </div>
          </motion.div>

          {/* Card 4: Ujjain Railway Station */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="group relative rounded-2xl bg-[#1A1714]/80 backdrop-blur-md border border-[#B08D57]/25 p-6 hover:border-[#E0BD62]/60 hover:bg-[#201D19] transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#B08D57]/15 border border-[#B08D57]/30 flex items-center justify-center text-[#E0BD62] group-hover:scale-110 transition-transform">
                  <Train className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-stone-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full uppercase">
                  10 Min Ride
                </span>
              </div>

              <div>
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3] tracking-tight group-hover:text-[#E0BD62] transition-colors">
                  ~1.8 km
                </span>
                <p className="font-serif text-sm text-stone-200 mt-1 font-medium">
                  To Ujjain Railway Station
                </p>
              </div>

              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Direct and seamless arrival from Ujjain Junction. Auto-rickshaws and e-rickshaws drop you straight at our gate.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E0BD62]">
              <span className="font-medium">Convenience</span>
              <span className="text-stone-400">Luggage drop ready</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Interactive Navigation Ribbon */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#171411] via-[#1F1B17] to-[#171411] border border-[#B08D57]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-300">
            <div className="w-8 h-8 rounded-lg bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center text-[#E0BD62] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="leading-snug">
              <strong>99 Begampura Marg</strong>, Ravishankar Nagar, Near Godha Puliya, Ujjain (MP 456006)
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={hotelConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#B08D57]/50 text-xs font-semibold text-stone-200 hover:text-white transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E0BD62]" />
            </a>

            <Link
              href="/explore-ujjain"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Explore Distances</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
