"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Navigation,
  Sparkles,
  ExternalLink,
  Flame,
  Waves,
  ShoppingBag,
  UtensilsCrossed,
  Landmark,
  Calendar,
} from "lucide-react";
import { destinationsData } from "@/lib/data/destinations";
import { useBooking } from "@/lib/context/BookingContext";
import { hotelConfig } from "@/lib/constants/site";

export default function ExploreUjjainPage() {
  const { openBooking } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { name: "Temples & Spirituality", icon: Landmark },
    { name: "Ghats & Rivers", icon: Waves },
    { name: "History & Heritage", icon: Calendar },
    { name: "Markets & Local Life", icon: ShoppingBag },
    { name: "Food & Flavours", icon: UtensilsCrossed },
    { name: "Festivals & Events", icon: Flame },
  ];

  const filteredDestinations =
    selectedCategory === "All"
      ? destinationsData
      : destinationsData.filter((d) => d.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* 1. CINEMATIC HERO (Matching Stitch screenshot) */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0A09] text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1VJlo1EnHrp0N68L2sAAj1ocGaM-OnG9p17u1NQ_Qs1x41tsXAQfvnhLIoZIV7ZdQkvGR2e0LJ05AGrAUueC-tnhhwu3rpgGItEV-NSu5cv2qzwvpw5gnB7YahVTJwCevB235Kh4vj7Bpe8BI-Y5En6G0fw03BTXq9r0ESArn9dGjKKECDu3PB7lWSalp-O0qVRZbguG-4Ahos9ViAtcO19f7KRmcKZBF_4Ti-FPGxx77T30krfuWq7sEE"
            alt="Majestic golden hour architectural view of Mahakaleshwar temple complex in Ujjain"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/95 via-[#0B0A09]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B08D57]/40 text-[#E0BD62] text-[11px] font-semibold tracking-[0.25em] uppercase w-fit backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0BD62]" />
                <span>Explore Ujjain</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
                More Than a Destination. <br />
                <span className="italic text-[#E0BD62] font-normal">A Divine Experience.</span>
              </h1>

              <p className="text-stone-300 font-light text-base sm:text-lg max-w-xl leading-relaxed">
                Step into a city where faith, history and timeless traditions come alive. Explore Ujjain&apos;s sacred temples, vibrant culture, serene ghats and unique experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#itinerary"
                  className="px-7 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <span>Plan Your Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openBooking()}
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Book Stay Near Sights
                </button>
              </div>

              <div className="flex items-center space-x-2 pt-4 text-xs text-stone-300">
                <MapPin className="w-4 h-4 text-[#E0BD62]" />
                <span>Mahakaleshwar Jyotirlinga • Begampura, Ujjain, Madhya Pradesh</span>
              </div>
            </div>

            {/* Right Column: Sacred Vertical Flourish matching Stitch design */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center text-right space-y-4 select-none">
              <div className="space-y-1.5 border-r-2 border-[#B08D57] pr-4 text-xs tracking-[0.3em] uppercase text-stone-300 font-medium">
                <div className="text-[#E0BD62]">FAITH</div>
                <div>HERITAGE</div>
                <div>CULTURE</div>
                <div>PEOPLE</div>
                <div>EXPERIENCES</div>
              </div>

              <span className="font-serif text-3xl italic text-[#B08D57]/70 pr-4 pt-6 block">
                Har Har Mahakal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DISCOVER UJJAIN: CATEGORY PILLS */}
      <section className="w-full py-16 bg-white border-b border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-1">
                Discover Ujjain
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                A City of Eternal Stories
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 font-light max-w-md">
              From ancient temples to bustling markets, from spiritual rituals to cultural heritage, Ujjain offers experiences that stay with you forever.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(isSelected ? "All" : cat.name)}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer ${
                    isSelected
                      ? "bg-[#171513] text-[#FAF8F3] border-[#B08D57] shadow-lg"
                      : "bg-[#FAF8F3] hover:bg-white text-stone-800 border-[#E8DFD2]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      isSelected
                        ? "bg-[#B08D57] text-[#0B0A09]"
                        : "bg-white text-[#775928] group-hover:bg-[#B08D57]/20"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider leading-tight">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ICONIC DESTINATIONS GRID */}
      <section id="itinerary" className="w-full py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-1">
                Must-Visit Places
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Iconic Destinations in Ujjain
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-light">
              Verified Distances from Mahashivaya
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="rounded-2xl bg-white border border-[#E8DFD2] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={dest.imageUrl}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Distance Pill */}
                  <div className="absolute top-3 right-3 bg-[#0B0A09]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] font-medium text-[#E0BD62] flex items-center gap-1">
                    <Navigation className="w-3 h-3" />
                    <span>{dest.distance}</span>
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-semibold text-[#E0BD62] uppercase tracking-widest block">
                      {dest.number} • {dest.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-stone-900 font-normal group-hover:text-[#775928] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-light mt-1 italic">
                      {dest.tagline}
                    </p>

                    <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
                      {dest.description}
                    </p>

                    <div className="mt-4 p-3 rounded-lg bg-[#FAF8F3] border border-[#E8DFD2] text-xs text-stone-600 space-y-1">
                      <div>
                        <strong className="text-stone-800">Highlight:</strong> {dest.highlight}
                      </div>
                      <div>
                        <strong className="text-stone-800">Best Timing:</strong> {dest.bestTime}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 mt-5 border-t border-[#E8DFD2] flex items-center justify-between">
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#775928]" />
                      {dest.travelTime}
                    </span>

                    <a
                      href={dest.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#775928] hover:text-[#B08D57] uppercase tracking-wider group/link"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 group-link-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A JOURNEY THROUGH TIME (Timeline Section from Stitch screenshot) */}
      <section className="w-full py-24 bg-[#171513] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Timeline List */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E0BD62] uppercase">
                Chronicle of Avantika
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                A Journey Through Time
              </h2>

              <div className="relative pl-6 space-y-8 border-l border-[#B08D57]/40 pt-2">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#B08D57] ring-4 ring-[#171513]" />
                  <h4 className="font-serif text-lg text-white font-semibold">Ancient Ujjain</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
                    A prominent capital city in the ancient Avanti kingdom, blessed by saints and scholars.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#B08D57] ring-4 ring-[#171513]" />
                  <h4 className="font-serif text-lg text-white font-semibold">Medieval Glory</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
                    Center of learning, Sanskrit poetry, astronomy under Raja Vikramaditya and Jai Singh II.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#B08D57] ring-4 ring-[#171513]" />
                  <h4 className="font-serif text-lg text-white font-semibold">Spiritual Significance</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
                    Home to one of the 12 sacred Jyotirlingas and site of the legendary Kumbh Simhastha.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#B08D57] ring-4 ring-[#171513]" />
                  <h4 className="font-serif text-lg text-white font-semibold">Modern Sanctuary</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
                    The grand Mahakal Lok corridor welcomes pilgrims into seamless spiritual discovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Central Arched Doorway Visual */}
            <div className="lg:col-span-4 relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#B08D57]/30 shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XbCXqDj9pnLH7rxKgQW_8FT8XMcXn7qsq6j250T_zrPEwHxCWikcOC3sL50lDsObYsllfKkVl4ZJqHDDZSJZGlmmA7RMNLCCOFeBG_PAMo0tUAfIQ2CbcVgEQojPPU3T7KyYvlt7fPU7-i46x_zfozzSiPB4skLVUDGe5oiHXhUlGFKGE5Qdj9qboNT65TaWtuyCZK5qraAgaO5sbBitEvn8gsD9axQYsTikwH7KkqAs_hgxdCpX0jPII"
                  alt="Devotee walking through ancient temple carved doorway in Ujjain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-center lg:text-left">
              <span className="text-5xl text-[#B08D57]/30 font-serif leading-none select-none">“</span>
              <p className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] italic font-normal leading-snug">
                In Ujjain, past and present walk together.
              </p>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                The same bells that echoed centuries ago still awaken the ghats each morning, carrying prayers across the Shipra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UJJAIN AT A GLANCE (Route Visualization from Stitch screenshot) */}
      <section className="w-full py-20 bg-white border-b border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Explore Easily
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Ujjain at a Glance
              </h2>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Discover key places, distances and how to plan your visit effortlessly from Mahashivaya Guest House. Our central location in Begampura ensures you spend less time in traffic and more time in peaceful contemplation.
              </p>

              <a
                href={hotelConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171513] text-[#FAF8F3] hover:bg-[#B08D57] hover:text-[#0B0A09] text-xs font-semibold uppercase tracking-wider transition-colors w-fit shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Distance Summary Table */}
            <div className="lg:col-span-7 bg-[#FAF8F3] p-6 sm:p-8 rounded-2xl border border-[#E8DFD2]">
              <span className="text-[11px] font-semibold tracking-wider text-[#775928] uppercase block mb-4">
                Approximate Distance from Mahashivaya Guest House
              </span>

              <div className="divide-y divide-[#E8DFD2] text-xs">
                {hotelConfig.keyDistances.map((d, i) => (
                  <div key={i} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFD2] flex items-center justify-center text-[#775928]">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-stone-900 text-sm">{d.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-stone-900 text-sm block">
                        {d.distance}
                      </span>
                      <span className="text-[10px] text-stone-500">{d.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCES IN UJJAIN */}
      <section className="w-full py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-2">
              Experiences in Ujjain
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Feel the Spirit of the City
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-light mt-2">
              Beyond temples, Ujjain offers unique moments that make your pilgrimage truly memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#FAF2EE] text-[#775928] flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5" />
                </span>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  Attend Bhasma Aarti
                </h4>
                <p className="text-xs text-stone-600 font-light mt-2 leading-relaxed">
                  A once-in-a-lifetime divine ritual performed at 4:00 AM with sacred sacred holy ash.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-4 block">
                Pre-Dawn Aarti
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#FAF2EE] text-[#775928] flex items-center justify-center mb-4">
                  <Waves className="w-5 h-5" />
                </span>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  Take a Holy Dip
                </h4>
                <p className="text-xs text-stone-600 font-light mt-2 leading-relaxed">
                  Purify the soul at the sacred Ram Ghat on the holy Shipra River during sunrise.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-4 block">
                At Ram Ghat
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#FAF2EE] text-[#775928] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </span>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  Explore Local Markets
                </h4>
                <p className="text-xs text-stone-600 font-light mt-2 leading-relaxed">
                  Discover authentic Maheshwari and Chanderi fabrics, brass murtis, and natural attar.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-4 block">
                Begampura & Bada Sarafa
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#FAF2EE] text-[#775928] flex items-center justify-center mb-4">
                  <UtensilsCrossed className="w-5 h-5" />
                </span>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  Taste Local Flavours
                </h4>
                <p className="text-xs text-stone-600 font-light mt-2 leading-relaxed">
                  Enjoy authentic Malwa culinary delights: Poha-Jalebi, Dal Bafla, and rabri.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#775928] uppercase tracking-wider pt-4 border-t border-[#E8DFD2] mt-4 block">
                Authentic Malwa Cuisine
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLAN YOUR JOURNEY CLOSING BANNER */}
      <section className="w-full py-24 bg-[#0B0A09] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E0BD62] uppercase block mb-3">
            Plan Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F3] font-normal">
            Stay with Us. <br />
            <span className="italic text-[#E0BD62]">Explore Ujjain.</span>
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base mt-4 max-w-xl mx-auto">
            A comfortable stay, a divine journey and memories that last a lifetime. Book directly or connect with us on WhatsApp.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => openBooking()}
              className="px-8 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book Your Stay
            </button>
            <a
              href={hotelConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
