"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { hotelConfig } from "@/lib/constants/site";

export default function MobileBookingBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#171513]/95 backdrop-blur-xl border-t border-[#B08D57]/30 px-4 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* WhatsApp */}
        <a
          href={hotelConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white/5 border border-emerald-500/30 text-emerald-400 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Call Now */}
        <a
          href={`tel:${hotelConfig.contact.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white/5 border border-[#B08D57]/30 text-[#E0BD62] active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call Now</span>
        </a>

        {/* Book / Check Availability -> Directly routes to /contact */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-[#B08D57] to-[#C59A32] text-[#0B0A09] active:scale-95 transition-all text-center shadow-md font-bold"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Book Stay</span>
        </Link>
      </div>
    </div>
  );
}
