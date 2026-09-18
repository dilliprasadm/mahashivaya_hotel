"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, Clock, ShieldCheck, Zap, ChevronDown } from "lucide-react";
import AmbientHeroCanvas from "@/components/motion/AmbientHeroCanvas";
import { hotelConfig } from "@/lib/constants/site";
import { useBooking } from "@/lib/context/BookingContext";

export default function HeroSection() {
  const { openBooking } = useBooking();

  const [checkInDate, setCheckInDate] = useState("");
  const [duration, setDuration] = useState("2 Nights");
  const [guestCount, setGuestCount] = useState("2 Guests");

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    openBooking(`${guestCount} Stay (${duration})`);
  };

  return (
    <section className="relative w-full min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#0B0A09]">
      {/* Background Image Layer with Cinematic Dusk Courtyard */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuApOoheBDRCpuIigbRCbLgtSNhlbfgrMcqqliCfGDp7jR7f5tFgJ2HsyxmBuMOdH61nbyx27WAWrwNXjxjSDVuzyVnRa1YMJCeRWgyh5V5suKyrrtik1nq61illXNAKXO7gq96SPBzBdpJyBKRPieOPc1m7TGAVxohsGF6s1abLEqstrFRi-JOx0Iv-QeIC9co4O7JBdQfCDcmehelRFnWkUgQkM7z2IhzvGMGV1DPtMlayOMFmwz9M"
          alt="Mahashivaya Guest House Evening Courtyard Vista in Ujjain"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/95 via-[#0B0A09]/75 to-[#0B0A09]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]/60" />
      </div>

      {/* Lightweight Three.js Golden Particle Embers */}
      <AmbientHeroCanvas />

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-6 text-white"
          >
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-3 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#E0BD62] animate-pulse" />
              <span className="font-sans text-[11px] tracking-[0.25em] text-[#E0BD62] uppercase font-semibold">
                MAHASHIVAYA GUEST HOUSE • UJJAIN
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] lg:leading-[80px] tracking-tight text-[#FAF8F3] font-normal">
              Stay Close to <br />
              <span className="italic text-[#E0BD62] font-normal">Mahakal</span>
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-stone-300 max-w-xl font-light leading-relaxed">
              A warm and comfortable stay in Ujjain, just minutes from Mahakaleshwar Temple and Mahakal Lok. Experience peaceful rest and genuine sacred hospitality.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] font-sans text-xs font-semibold tracking-wider uppercase shadow-[0_4px_20px_rgba(176,141,87,0.4)] transition-all duration-300 flex items-center space-x-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Your Stay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={hotelConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center space-x-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Location highlight */}
            <div className="flex items-center space-x-2.5 pt-4 text-stone-300 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-[#E0BD62] shrink-0" />
              <span className="tracking-wide">
                Begampura, Ujjain, Madhya Pradesh • <strong className="text-white font-medium">730m from Mahakal Lok</strong>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Direct Availability Checking Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-end"
          >
            <div className="w-full max-w-md bg-[#171513]/95 backdrop-blur-2xl p-7 sm:p-8 rounded-2xl border border-[#B08D57]/30 shadow-2xl text-stone-200 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase block">
                    Direct Enquiries
                  </span>
                  <h2 className="font-serif text-2xl text-[#FAF8F3] font-normal mt-0.5">
                    Check Availability
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center font-serif text-sm font-bold text-[#E0BD62]">
                  MS
                </div>
              </div>

              <form onSubmit={handleQuickCheck} className="flex flex-col space-y-4 pt-5">
                {/* Arrival Date */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                    Planned Arrival Date
                  </label>
                  <div className="relative flex items-center bg-white/5 border border-white/10 focus-within:border-[#B08D57] rounded-xl px-3.5 py-3 transition-colors">
                    <Calendar className="w-4 h-4 text-[#B08D57] mr-2.5 shrink-0" />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-transparent text-xs text-white focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Duration & Guests */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                      Stay Duration
                    </label>
                    <div className="relative flex items-center bg-white/5 border border-white/10 focus-within:border-[#B08D57] rounded-xl px-3 py-3 transition-colors">
                      <Clock className="w-4 h-4 text-[#B08D57] mr-2 shrink-0" />
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer [color-scheme:dark]"
                      >
                        <option value="1 Night">1 Night</option>
                        <option value="2 Nights">2 Nights</option>
                        <option value="3 Nights">3 Nights</option>
                        <option value="4+ Nights">4+ Nights</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                      Guests
                    </label>
                    <div className="relative flex items-center bg-white/5 border border-white/10 focus-within:border-[#B08D57] rounded-xl px-3 py-3 transition-colors">
                      <Users className="w-4 h-4 text-[#B08D57] mr-2 shrink-0" />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer [color-scheme:dark]"
                      >
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5 Guests (Family)">5 Guests (Family)</option>
                        <option value="Group (6+)">Group (6+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#FAF8F3] hover:bg-[#E0BD62] text-[#0B0A09] font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                  >
                    <span>Check Today&apos;s Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Trust cues */}
                <div className="flex items-center justify-center space-x-4 pt-1 text-[11px] text-stone-400">
                  <span className="inline-flex items-center space-x-1">
                    <Zap className="w-3.5 h-3.5 text-[#E0BD62]" />
                    <span>Instant Confirmation</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E0BD62]" />
                    <span>Direct Guest Care</span>
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center text-stone-400">
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium mb-2">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#B08D57]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
