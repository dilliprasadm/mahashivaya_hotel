"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { useBooking } from "@/lib/context/BookingContext";
import { hotelConfig } from "@/lib/constants/site";

export default function BookingModal() {
  const { isOpen, selectedRoom, closeBooking } = useBooking();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBooking();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeBooking]);

  const whatsappMessage = selectedRoom
    ? encodeURIComponent(`Namaste, I would like to enquire about booking the ${selectedRoom} at Mahashivaya Guest House, Ujjain.`)
    : encodeURIComponent("Namaste, I would like to enquire about room availability and tariffs at Mahashivaya Guest House, Ujjain.");

  const directWhatsappUrl = `https://wa.me/${hotelConfig.contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-[#0B0A09]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#171513] text-[#FAF8F3] border border-[#B08D57]/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B08D57]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-300 hover:text-white transition-colors duration-200 focus:outline-none"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/50 flex items-center justify-center text-[#E0BD62] font-serif font-bold text-sm">
                MS
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase block">
                  Mahashivaya Reservations
                </span>
                <h3 className="font-serif text-2xl text-[#FAF8F3] font-normal">
                  Choose How You&apos;d Like to Book
                </h3>
              </div>
            </div>

            {/* Selected Room Notification */}
            {selectedRoom && (
              <div className="mt-4 p-3 rounded-lg bg-[#B08D57]/15 border border-[#B08D57]/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E0BD62]" />
                  <span className="text-xs text-stone-200">
                    Selected Accommodation: <strong className="text-[#E0BD62] font-medium">{selectedRoom}</strong>
                  </span>
                </div>
              </div>
            )}

            {/* DIRECT BOOKING SECTION */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold tracking-widest text-[#B08D57] uppercase">
                  Direct & Personalized (Recommended)
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Instant Response
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-emerald-500/30 hover:border-emerald-500/70 hover:bg-white/[0.09] transition-all duration-300 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-medium text-white text-[15px] flex items-center gap-1">
                      Chat on WhatsApp
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <p className="text-xs text-stone-400 mt-0.5 leading-snug">
                      Quick answers, best direct rate & instant room confirmation.
                    </p>
                  </div>
                </a>

                {/* Call Now */}
                <a
                  href={`tel:${hotelConfig.contact.phone}`}
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#B08D57]/30 hover:border-[#B08D57]/70 hover:bg-white/[0.09] transition-all duration-300 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B08D57]/20 text-[#E0BD62] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-medium text-white text-[15px] flex items-center gap-1">
                      Call Front Desk
                    </span>
                    <p className="text-xs text-[#E0BD62] font-mono mt-0.5">
                      {hotelConfig.contact.phoneDisplay}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Speak directly with our reservation team.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* ONLINE TRAVEL PORTALS SECTION */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase block mb-3">
                Book Via Verified Travel Portals
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {hotelConfig.otas.map((ota) => (
                  <a
                    key={ota.name}
                    href={ota.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#B08D57]/50 transition-all duration-200 flex flex-col items-center justify-center text-center group"
                  >
                    <span className="text-sm font-medium text-stone-200 group-hover:text-[#E0BD62] transition-colors">
                      {ota.name}
                    </span>
                    <span className="text-[10px] text-stone-400 flex items-center gap-1 mt-1">
                      Book Now <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Reassurance Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
              <span>Direct bookings include flexible arrival support & Bhasma Aarti advisory</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
