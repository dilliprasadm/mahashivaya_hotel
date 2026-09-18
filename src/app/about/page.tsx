"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Compass,
} from "lucide-react";
import { useBooking } from "@/lib/context/BookingContext";
import { hotelConfig } from "@/lib/constants/site";

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#0B0A09] text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1XAzIoEJBa7XQ2LdAifbfmY4eWB1BkvTVtLHzOn9TgWnUz0pTWTIDT_RAJQ9LkFYHtEWpJGvLoe7ktxOlX8_mq8nKA8B5LGrnFKZHJStwq-PMcGaYmn0gy5U-no-EgEg_h4ds-ZkmasiUKAQTmXFnV6bNrgAeOvsBxbaLw-RM2Wp1WzrCAiQvKAEkG6gOQAguILKwG8E58lhHPoWbgnf4Xqwp-q4aJFMV7SMMwtnEuOwNGRF5aeV7rnAw"
            alt="Verandah courtyard of Mahashivaya Guest House in Ujjain at golden hour dusk"
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
            <span>The Mahashivaya Ethos</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
            A Home Born from <br />
            <span className="italic text-[#E0BD62]">Devotion</span>
          </h1>

          <p className="text-stone-300 font-light text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
            Nestled in historic Begampura just minutes from the sacred Mahakal Lok corridor, Mahashivaya Guest House offers peaceful shelter, spotless rest, and heartfelt pilgrimage hospitality in Ujjain.
          </p>
        </div>
      </section>

      {/* 2. THE STORY & CHARACTER */}
      <section className="w-full py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD2]">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V1bNVvT5riendV_E4dV-XMd_ppK_t3CEaaqu_lgDVnjBrw3pYNTM9C_Tiusvl7M2eNvv9j9fYetB_7Ct0yQiwl115c5mtmwYczGyMaD6T38Z5jDxIZbdjg2sb1S54fG3Z9oeYEvvpHt83nBN3aPIkdWJH3MfospVwFVNudFB6W6yL25BID0CMxCOJW85mPRdOxLqwamLDYeXx7euYj6sG554sudotIFfrCZkE7BvtQ1pJ1lEouyWDZnA"
                  alt="Tactile textures of white linen sheets and brass incense burner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Our Perspective
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Pilgrimage Hospitality, Refined and Honest
              </h2>

              <p className="text-stone-600 font-light text-base leading-relaxed">
                Traveling to Ujjain is a deeply personal journey. Pilgrims arrive with prayerful hearts, seeking communion with Lord Mahakaleshwar, seeking solace along the Shipra river, and absorbing the spiritual energy of one of the world&apos;s most ancient sacred centers.
              </p>

              <p className="text-stone-600 font-light text-base leading-relaxed">
                We believe accommodation during this journey should not be an afterthought of noisy corridors or compromised cleanliness. At Mahashivaya, we uphold an atmosphere of calm reverence: quiet rooms, spotless white cotton linens, reliable hot water, and helpful guidance for early morning Bhasma Aarti.
              </p>

              <div className="pt-2 border-l-2 border-[#B08D57] pl-4 italic text-stone-700 font-serif text-lg">
                &ldquo;We treat our guests not merely as hotel occupants, but as honored pilgrims arriving at our doorstep.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="w-full py-20 bg-white border-y border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-2">
              Our Values
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              What Guides Our Service
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#775928] border border-[#E8DFD2] flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-stone-900 font-normal">
                  Sacred Cleanliness (Saucha)
                </h4>
                <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
                  Pristine hygiene is central to spiritual living. We maintain sanitized bathrooms, daily laundered white sheets, and spotless floors so you feel refreshed at every return.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-6 block">
                Daily Rigorous Upkeep
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#775928] border border-[#E8DFD2] flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-stone-900 font-normal">
                  Proximity Without Commotion
                </h4>
                <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
                  Located just 730 meters from Mahakal Lok in Begampura, you can walk to the corridor in 5 to 8 minutes, yet remain nestled in a peaceful residential pocket away from main road horns.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-6 block">
                730m to Mahakal Lok
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#775928] border border-[#E8DFD2] flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-stone-900 font-normal">
                  Authentic Assistance
                </h4>
                <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
                  No hidden commissions or commercial tours. We provide straight, honest advice on darshan protocols, official token desks, fair-rate e-rickshaws, and peaceful places to visit.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-6 block">
                Pilgrim-Centric Guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING INVITATION CTA */}
      <section className="w-full py-20 bg-[#171513] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E0BD62] uppercase block mb-3">
            Welcome to Ujjain
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] font-normal">
            Make Mahashivaya Your Sanctuary
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Experience comfortable, peaceful pilgrimage hospitality in the heart of Ujjain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => openBooking()}
              className="px-8 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book Your Stay
            </button>
            <Link
              href="/rooms"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              View Rooms & Suites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
