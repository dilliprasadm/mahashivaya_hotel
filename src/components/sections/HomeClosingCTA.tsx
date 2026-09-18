"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { hotelConfig } from "@/lib/constants/site";

export default function HomeClosingCTA() {

  return (
    <section className="relative w-full py-28 lg:py-36 bg-[#0B0A09] text-white overflow-hidden">
      {/* Panoramic Dusk River / Temple Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida/AEtjO1WdRia1wbqt0H2EeLPmC3P3f5rURZbt0VhkCr-UDyOur-1g6NkYZX7dGet8ROlBJEj3CeALbJjG-mRANPsqV8B0hMwQUPpEVWbkLz-h2bVb6NcOeTGrw8sfiUqDLevsIpTEgrkjoNF_EBsKuXFHBBaMgxj7ggOcjS_WN7Vzsk9NU_9vaekQu9ZRtU-n-saLbrHbsT69chDB1JsrYUMDce_Cdj55XVg6-kmSq--vAS31tHo7Zqhs0phyXQ"
          alt="Atmospheric twilight at Mahakal Lok in Ujjain"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/70 to-[#0B0A09]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Overline Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B08D57]/40 text-[#E0BD62] text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E0BD62]" />
          <span>Plan Your Journey</span>
        </div>

        {/* Grand Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
          Stay with Us. <br />
          <span className="italic text-[#E0BD62] font-normal">Explore Sacred Ujjain.</span>
        </h2>

        <p className="text-stone-300 font-light text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
          A comfortable stay, a divine journey and memories that last a lifetime. Reach out directly or check online availability in just moments.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_25px_rgba(176,141,87,0.45)] hover:scale-105 active:scale-95 flex items-center space-x-2.5 cursor-pointer"
          >
            <span>Book Your Stay</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={hotelConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Location & Trust Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#B08D57]" />
            Begampura, Ujjain • 730m to Mahakal Lok
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#E0BD62]" />
            Best Tariff Guaranteed on Direct Enquiries
          </span>
        </div>
      </div>
    </section>
  );
}
