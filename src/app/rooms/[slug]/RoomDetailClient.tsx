"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Bed,
  Wind,
  ShowerHead,
  Sparkles,
  CheckCircle2,
  Maximize2,
  CalendarCheck,
  ShieldCheck,
  Info,
  Clock,
  Compass,
} from "lucide-react";
import { RoomData } from "@/lib/data/rooms";
import { useBooking } from "@/lib/context/BookingContext";
import Lightbox from "@/components/gallery/Lightbox";

interface RoomDetailClientProps {
  room: RoomData;
  otherRooms: RoomData[];
}

export default function RoomDetailClient({ room, otherRooms }: RoomDetailClientProps) {
  const { openBooking } = useBooking();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* 1. CINEMATIC ROOM HERO */}
      <section className="relative w-full min-h-[75vh] flex items-end justify-start bg-[#0B0A09] text-white overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={room.photos[0]?.url || "https://images.unsplash.com/photo-1590490360182-c33d57733427"}
            alt={room.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/40 to-[#0B0A09]/70" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-stone-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/rooms" className="hover:text-white transition-colors">
              Rooms
            </Link>
            <span>/</span>
            <span className="text-[#E0BD62] font-medium">{room.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#E0BD62] text-[11px] font-semibold tracking-widest uppercase mb-3 backdrop-blur-md">
                <span>{room.categoryTag}</span>
                {room.hasBalcony && <span>• Private Balcony</span>}
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight">
                {room.name}
              </h1>

              <p className="text-stone-300 font-light text-base sm:text-lg mt-4 leading-relaxed">
                {room.tagline}
              </p>
            </div>

            {/* Quick Actions in Hero */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={() => openBooking(room.name)}
                className="px-7 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(176,141,87,0.4)] hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Check Today&apos;s Price</span>
              </button>

              <button
                onClick={() => handleOpenLightbox(0)}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4 text-[#E0BD62]" />
                <span>View {room.photos.length} Photos</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS PILL BAR */}
      <section className="w-full bg-[#171513] text-[#FAF8F3] py-5 border-y border-[#B08D57]/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
            <div className="flex items-center space-x-2.5">
              <Users className="w-4 h-4 text-[#E0BD62]" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase">Capacity</span>
                <span className="font-medium text-white">{room.capacity}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Bed className="w-4 h-4 text-[#E0BD62]" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase">Bed Config</span>
                <span className="font-medium text-white truncate">{room.bedConfiguration}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Wind className="w-4 h-4 text-[#E0BD62]" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase">Climate</span>
                <span className="font-medium text-white">{room.isAC ? "Split AC" : "Ceiling Fan"}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <ShowerHead className="w-4 h-4 text-[#E0BD62]" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase">Bathroom</span>
                <span className="font-medium text-white">Attached + 24/7 Hot Water</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Maximize2 className="w-4 h-4 text-[#E0BD62]" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase">Room Size</span>
                <span className="font-medium text-white">{room.sizeSqFt}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Compass className="w-4 h-4 text-[#E0BD62]" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase">Proximity</span>
                <span className="font-medium text-white">730m to Mahakal Lok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-ANGLE PHOTO GALLERY STRIP */}
      <section className="w-full py-16 bg-[#FAF8F3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block">
                Visual Walkthrough
              </span>
              <h2 className="font-serif text-3xl font-normal text-stone-900 mt-1">
                Multi-Angle Room Views
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-light">
              Click any image to enlarge
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {room.photos.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => handleOpenLightbox(pIdx)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 cursor-pointer border border-[#E8DFD2] shadow-sm hover:shadow-lg transition-all"
              >
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs text-white line-clamp-2 italic font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SLEEPING & BATHROOM TACTILE SECTIONS */}
      <section className="w-full py-16 bg-white border-y border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sleep Experience */}
          <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#775928] uppercase">
                Restorative Living
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mt-2">
                The Sleeping Comfort
              </h3>
              <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
                Temple darshans often involve long hours standing and early awakenings. Our beds feature supportive orthopedic mattresses, 300+ thread count crisp white linens, and bedside reading lights with dedicated phone charging sockets.
              </p>
            </div>
            <ul className="space-y-2 mt-6 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775928]" />
                <span>Sanitized 100% Cotton White Sheets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775928]" />
                <span>Hypoallergenic Fluffy Pillows</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775928]" />
                <span>Universal Bedside Mobile Charging</span>
              </li>
            </ul>
          </div>

          {/* Bathroom Experience */}
          <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#775928] uppercase">
                Sacred Hygiene
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mt-2">
                Attached Bathroom & Hot Water
              </h3>
              <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
                A purifying bath before early morning darshan is central to Ujjain. Our attached bathrooms are meticulously cleaned with natural sandstone tiles, instant high-capacity water geysers, and spotless modern chrome fittings.
              </p>
            </div>
            <ul className="space-y-2 mt-6 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775928]" />
                <span>24/7 Dedicated Geyser Hot Water</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775928]" />
                <span>Fresh, Fluffy Ivory Bath Towels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775928]" />
                <span>Daily Restroom Sanitization Routine</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FULL AMENITIES CHECKLIST & GOOD TO KNOW */}
      <section className="w-full py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Amenity Checklist */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-2">
              Room Facilities
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-normal mb-6">
              Included Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {room.amenityList.map((amenity, aIdx) => (
                <div
                  key={aIdx}
                  className="p-3.5 rounded-xl bg-white border border-[#E8DFD2] flex items-center gap-3 text-sm text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good to Know / Policies */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-2">
              Helpful Information
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-normal mb-2">
              Good to Know
            </h3>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD2] space-y-4 text-xs text-stone-600">
              {room.goodToKnow.map((item, gIdx) => (
                <div key={gIdx} className="flex items-start gap-3">
                  <Info className="w-4 h-4 text-[#775928] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Booking Reminder Card */}
            <div className="p-6 rounded-2xl bg-[#171513] text-[#FAF8F3] border border-[#B08D57]/30 shadow-lg">
              <span className="text-[10px] font-semibold tracking-widest text-[#E0BD62] uppercase block mb-1">
                Direct Reservation Guarantee
              </span>
              <h4 className="font-serif text-xl text-white font-normal">
                Book Directly for Instant Confirmation
              </h4>
              <p className="text-xs text-stone-400 font-light mt-2 leading-relaxed">
                Connect on WhatsApp or call us to reserve this room directly with personalized check-in support.
              </p>
              <button
                onClick={() => openBooking(room.name)}
                className="w-full mt-4 py-3 rounded-xl bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reserve {room.name} Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OTHER ROOMS RECOMMENDATIONS */}
      {otherRooms.length > 0 && (
        <section className="w-full py-20 bg-white border-t border-[#E8DFD2]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block">
                  Other Options
                </span>
                <h3 className="font-serif text-3xl text-stone-900 font-normal mt-1">
                  Explore Other Accommodations
                </h3>
              </div>
              <Link
                href="/rooms"
                className="text-xs font-semibold text-[#775928] hover:text-[#B08D57] uppercase tracking-wider flex items-center gap-1"
              >
                <span>All Rooms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherRooms.slice(0, 3).map((r) => (
                <div
                  key={r.slug}
                  className="rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] overflow-hidden flex flex-col group hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.photos[0]?.url || "https://images.unsplash.com/photo-1590490360182-c33d57733427"}
                      alt={r.name}
                      fill
                      sizes="33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-[#775928] uppercase tracking-widest block mb-1">
                        {r.capacity}
                      </span>
                      <h4 className="font-serif text-xl text-stone-900 font-normal">
                        {r.name}
                      </h4>
                      <p className="text-xs text-stone-500 font-light mt-1.5 line-clamp-2">
                        {r.tagline}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#E8DFD2] flex items-center justify-between">
                      <Link
                        href={`/rooms/${r.slug}`}
                        className="text-xs font-semibold text-stone-800 hover:text-[#775928] uppercase tracking-wider"
                      >
                        View Room →
                      </Link>
                      <button
                        onClick={() => openBooking(r.name)}
                        className="text-xs font-bold text-[#775928] hover:underline cursor-pointer"
                      >
                        Check Price
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={room.photos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
