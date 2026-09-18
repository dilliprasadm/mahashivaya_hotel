"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { hotelConfig } from "@/lib/constants/site";

function WhatsAppSymbolIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.2 1.25-1.68 1.32-.44.07-.99.1-3.05-.75-2.64-1.09-4.34-3.78-4.47-3.96-.13-.18-1.07-1.42-1.07-2.72 0-1.3.68-1.93.92-2.19.24-.26.53-.33.71-.33.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.57.8 1.95.87 2.09.07.14.12.31.02.5-.09.19-.14.31-.29.47-.14.17-.31.37-.44.5-.14.14-.29.3-.12.59.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.45.12.62-.07.17-.19.74-.86.94-1.15.2-.29.39-.24.66-.14.27.1.1.72 2.14 1.01.42.06.7.09.8.25.1.16.1.92-.14 1.6z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change & lock body scroll
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#171513]/96 backdrop-blur-xl border-b border-[#B08D57]/25 py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-[#0B0A09]/90 via-[#0B0A09]/50 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo with default home link */}
          <Logo theme="dark" />

          {/* Desktop Navigation Links (Home & Contact removed as requested) */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {hotelConfig.headerNavLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-[0.1em] uppercase transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? "text-[#E0BD62] font-semibold"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E0BD62] to-transparent"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-3.5">
            {/* WhatsApp Symbol Only (no text) with pulse indicator */}
            <a
              href={hotelConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] hover:bg-emerald-500/20 border border-white/15 hover:border-emerald-500/60 text-emerald-400 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm shrink-0"
              aria-label="Direct WhatsApp Message"
              title="Chat with us on WhatsApp"
            >
              <WhatsAppSymbolIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              {/* Subtle green active dot */}
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75 pointer-events-none" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none" />
            </a>

            {/* Book Your Stay -> Directly navigates to Contact Page */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#B08D57] to-[#C59A32] hover:from-[#C59A32] hover:to-[#E0BD62] text-[#0B0A09] text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_2px_12px_rgba(176,141,87,0.35)] hover:scale-[1.03] active:scale-[0.98] shrink-0"
            >
              <span className="hidden sm:inline">Book Your Stay</span>
              <span className="sm:hidden">Book</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white lg:hidden focus:outline-none transition-colors active:scale-95 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0BD62]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0B0A09]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 lg:hidden overflow-y-auto"
          >
            {/* Subtle background ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#B08D57]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Nav Items */}
            <div className="flex flex-col space-y-3 relative z-10 pt-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#B08D57] uppercase">
                  Explore Mahashivaya
                </span>
                <span className="text-[10px] text-stone-500 font-serif italic">
                  Jai Shri Mahakal
                </span>
              </div>

              {hotelConfig.headerNavLinks.map((link, idx) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-white/[0.08] text-[#E0BD62] font-semibold"
                          : "text-stone-200 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="text-xl sm:text-2xl font-serif tracking-wide">
                        {link.name}
                      </span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#E0BD62]" : "text-stone-600"}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t border-white/10 flex flex-col space-y-3.5 relative z-10 mt-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B08D57] to-[#C59A32] active:from-[#C59A32] active:to-[#E0BD62] text-[#0B0A09] text-xs font-bold tracking-wider uppercase text-center shadow-lg block transition-all"
              >
                Book Your Stay
              </Link>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={hotelConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 active:bg-emerald-500/25 text-emerald-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <WhatsAppSymbolIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${hotelConfig.contact.phone}`}
                  className="py-3 px-2 rounded-xl bg-white/10 border border-white/20 active:bg-white/15 text-stone-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Call Front Desk</span>
                </a>
              </div>

              <div className="text-center pt-2 text-[11px] text-stone-400 space-y-0.5">
                <p className="font-medium text-stone-300">99 Begampura Marg, Ujjain</p>
                <p className="text-[10px] text-[#B08D57]">~730m from Mahakal Lok Corridor • 24/7 Support</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
