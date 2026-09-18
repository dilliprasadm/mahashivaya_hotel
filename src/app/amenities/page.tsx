"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wind,
  Droplets,
  BedDouble,
  Wifi,
  Zap,
  Sparkles,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { amenitiesList } from "@/lib/data/amenities";
import { useBooking } from "@/lib/context/BookingContext";

export default function AmenitiesPage() {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#0B0A09] text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIe6wKcYKyr9DN-svGNTGVTF5QE630eo4TXWctsrpowouFha1E5Z5nL57PJTBvyRVYh4Zhq9iZKSqHOtEY5OOx1bTk1bVcgaWVDYJlgO_1yXRMXVdNTUwppOgC-GDl1h-Cyt1ZqaNI8hl31exfX2suPlbz751ABYuyxE_8M7vJPTMWQuBKbKfGNlEiTFtB8FIj--ZMrjTELTwLAlZcTQQacM1KItn8QSUni9svJ5OVva9S8W87bdP"
            alt="Hospitality textures of ivory linen and warm incense"
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
            <span>Dedicated Hospitality</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
            Thoughtful Amenities for a <br />
            <span className="italic text-[#E0BD62]">Better Stay</span>
          </h1>

          <p className="text-stone-300 font-light text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
            Every feature at Mahashivaya Guest House is chosen to serve the real needs of pilgrims in Ujjain: deep restorative sleep, immediate hot water for sacred baths, and heartfelt local assistance.
          </p>
        </div>
      </section>

      {/* 2. SENSORY SCROLL STORY CHAPTERS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col space-y-28">
        {/* Chapter 1: Restorative Sleep */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1VwrVZbyLgyXUHtWCJvg0-KiG7Cx4FYjwrNTk5DtiYiR65HuI-znp2PRWOCMlG01ICJPwH10GDFySu6EDFy3ynOH6rKelqACC97CtxrqH6pttwqEvUyQG1XH42FxBR3zmC3QJRt1ioGsp-Dyk5RvmdcjHk-5WvahM0IVTsIJ6Y90nFzb10-66FLnPT9LH-U8dXVSlM2wB5ZuFQYVhd5sFx2yF8eAnjyKNFBjfuSziNc2Q_lj9csbLMmTg"
                alt="High thread count white bedding and linen details"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div className="flex items-center space-x-2">
              <BedDouble className="w-4 h-4 text-[#775928]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Chapter 01 • Rejuvenating Rest
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Sanitized White Linens & Quiet Cooling
            </h2>

            <p className="text-stone-600 font-light text-base leading-relaxed">
              Darshan queues in Ujjain can demand hours of standing on sacred stone corridors. Returning to your room should feel like an oasis. We prepare our beds with freshly laundered 300+ thread count pure cotton sheets, supportive pillows, and whisper-quiet split air conditioning units that maintain a crisp, tranquil ambient climate.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Individually controlled split AC with silent nighttime sleep mode</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Daily fresh linen change and hypoallergenic bedding on request</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Handcrafted teak wood bed frames with cool natural Kota stone floors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Sacred Bathing & Hygiene */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-5 order-2 lg:order-1">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-[#775928]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Chapter 02 • Sacred Purity
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              24/7 Hot Water for Pre-Dawn Cleansing
            </h2>

            <p className="text-stone-600 font-light text-base leading-relaxed">
              The sacred Bhasma Aarti at Mahakaleshwar begins well before sunrise, requiring devotees to take a full purifying bath as early as 3:00 AM. Every attached bathroom is fitted with dedicated high-recovery geysers that deliver instant, steaming hot water round the clock without waiting or sharing.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Instant high-capacity electric geysers in all private attached baths</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Pristine natural sandstone tiling sanitized daily with medical-grade hygiene</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Fluffy ivory bath towels and fresh herbal Ayurvedic soaps provided</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ"
                alt="Spotless attached bathroom with sandstone vanity and chrome fittings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Chapter 3: Practical Modern Ease */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1WTfnV68SW6DAeqzs_1mLkKjABraczLEzE0WNBjwkdGztSzsBuyiaG52cv4FA9D6An6waqNy_uN_Sdf-Z8wGpPyqt6Mg_fquBjEHin5bXxiKdzUYym6yw91gAERitN7ypxePWUIrZgIpw7X-2D8Jj8LGG3k8X4rZnO59cZFyU3qBGJf6mmnqfND9GzEh8f6FmiTLmW1OaSvdut3s1vLQiShAx1oEjZQzs8lC5_zxuTSDBf-0kbDDLSm8zw"
                alt="Teak bedside nightstand with reading lamp and electrical charging point"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#775928]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Chapter 03 • Seamless Utility
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Bedside Charging & High-Speed Wi-Fi
            </h2>

            <p className="text-stone-600 font-light text-base leading-relaxed">
              We know pilgrims carry smartphones for electronic darshan slips, camera photos, and connecting with distant relatives. We placed multi-pin power sockets right at every bedside, paired with optical fiber Wi-Fi reaching every corner of the property.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Universal multi-plug outlets beside every sleeping berth</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Complimentary optical fiber Wi-Fi throughout all rooms and verandahs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Purified RO cold and room-temperature drinking water dispensers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Concierge & Sacred Guidance */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-5 order-2 lg:order-1">
            <div className="flex items-center space-x-2">
              <HeartHandshake className="w-4 h-4 text-[#775928]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Chapter 04 • Devoted Care
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Bhasma Aarti & Darshan Concierge
            </h2>

            <p className="text-stone-600 font-light text-base leading-relaxed">
              Navigating temple entry rules, queue timings, and mobile locker protocols in Ujjain can be bewildering. Our front desk hosts provide honest, verified guidance to ensure your darshan is peaceful, unhurried, and joyful.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>3:00 AM wake-up call service for registered Bhasma Aarti devotees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Secure luggage holding for early train arrivals or post-checkout darshan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#775928] shrink-0" />
                <span>Trusted e-rickshaw coordination directly to Mahakal Lok and Ram Ghat</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1XAzIoEJBa7XQ2LdAifbfmY4eWB1BkvTVtLHzOn9TgWnUz0pTWTIDT_RAJQ9LkFYHtEWpJGvLoe7ktxOlX8_mq8nKA8B5LGrnFKZHJStwq-PMcGaYmn0gy5U-no-EgEg_h4ds-ZkmasiUKAQTmXFnV6bNrgAeOvsBxbaLw-RM2Wp1WzrCAiQvKAEkG6gOQAguILKwG8E58lhHPoWbgnf4Xqwp-q4aJFMV7SMMwtnEuOwNGRF5aeV7rnAw"
                alt="Atmospheric verandah courtyard with lanterns at dusk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* 3. COMPLETE CHECKLIST GRID */}
      <section className="w-full py-20 bg-white border-t border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-2">
              Everything Included
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Summary of Property Amenities
            </h3>
            <p className="text-stone-600 font-light text-sm sm:text-base mt-3">
              Standard comforts available across Mahashivaya Guest House rooms and shared spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenitiesList.map((amenity) => (
              <div
                key={amenity.id}
                className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#775928] uppercase block mb-1">
                    {amenity.badge}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-stone-900">
                    {amenity.name}
                  </h4>
                  <p className="text-xs text-stone-600 font-light mt-2 leading-relaxed">
                    {amenity.tagline}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E8DFD2] text-[11px] text-stone-500">
                  {amenity.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING INVITATION CTA */}
      <section className="w-full py-20 bg-[#171513] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E0BD62] uppercase block mb-3">
            Experience Mahashivaya
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] font-normal">
            Ready to Plan Your Spiritual Stay?
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Reserve directly on WhatsApp or call our front desk to ensure the perfect room for your pilgrimage dates.
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
              Browse Rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
