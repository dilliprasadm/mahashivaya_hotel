"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, Compass } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { hotelConfig } from "@/lib/constants/site";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0A09] text-stone-300 pt-20 pb-12 border-t border-[#B08D57]/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#B08D57]/40 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Logo theme="dark" />
            <p className="font-sans text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              A serene and comfortable sanctuary in Ujjain, nestled in historic Begampura just minutes from Mahakaleshwar Jyotirlinga and Mahakal Lok Corridor.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={hotelConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B08D57]/20 border border-white/10 hover:border-[#B08D57]/60 flex items-center justify-center text-stone-300 hover:text-[#E0BD62] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={hotelConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B08D57]/20 border border-white/10 hover:border-[#B08D57]/60 flex items-center justify-center text-stone-300 hover:text-[#E0BD62] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={hotelConfig.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B08D57]/20 border border-white/10 hover:border-[#B08D57]/60 flex items-center justify-center text-stone-300 hover:text-[#E0BD62] transition-all duration-300"
                aria-label="Tripadvisor"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-sm">
              {hotelConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-[#E0BD62] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase">
              Contact & Location
            </span>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${hotelConfig.contact.phone}`}
                className="flex items-center gap-2.5 text-stone-300 hover:text-[#E0BD62] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="font-mono">{hotelConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={hotelConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Available</span>
              </a>

              <a
                href={hotelConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-stone-400 hover:text-[#E0BD62] transition-colors pt-1 leading-relaxed"
              >
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-1" />
                <span>
                  99 Begampura Marg, Ravishankar Nagar, Near Godha Puliya, Suraj Nagar, Ujjain, MP 456006
                </span>
              </a>
            </div>
          </div>

          {/* Column 4: Book Your Stay & Sacred Om Watermark */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase block">
                Book Your Stay
              </span>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={hotelConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    • WhatsApp Enquiry
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${hotelConfig.contact.phone}`}
                    className="text-stone-400 hover:text-[#E0BD62] transition-colors"
                  >
                    • Direct Call ({hotelConfig.contact.phoneDisplay})
                  </a>
                </li>
                {hotelConfig.otas.map((ota) => (
                  <li key={ota.name}>
                    <a
                      href={ota.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-[#E0BD62] transition-colors cursor-pointer text-left inline-block"
                    >
                      • {ota.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sacred Om & Mahadev Mark matching Stitch screenshot */}
            <div className="pt-2 flex items-center gap-4 text-[#B08D57]/40">
              <span className="font-serif text-5xl select-none">ॐ</span>
              <div className="flex flex-col">
                <span className="font-serif text-sm tracking-widest text-[#B08D57]/70 uppercase">
                  हर हर महादेव
                </span>
                <span className="text-[10px] tracking-widest text-stone-400 uppercase">
                  Jai Shri Mahakal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Mahashivaya Guest House. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-stone-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-use" className="hover:text-stone-200 transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <span className="text-[#B08D57]">Designed with devotion for Ujjain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
