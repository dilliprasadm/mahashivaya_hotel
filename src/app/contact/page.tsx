"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  Train,
  Bus,
  Navigation,
} from "lucide-react";
import { hotelConfig } from "@/lib/constants/site";
import { OtaBrandLogo } from "@/components/ui/OtaLogos";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* =========================================================================
         HERO SECTION (Commented out as requested - directly showing Get In Touch)
         =========================================================================
      <section className="relative w-full min-h-[75vh] flex items-center justify-center bg-[#0B0A09] text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1VJlo1EnHrp0N68L2sAAj1ocGaM-OnG9p17u1NQ_Qs1x41tsXAQfvnhLIoZIV7ZdQkvGR2e0LJ05AGrAUueC-tnhhwu3rpgGItEV-NSu5cv2qzwvpw5gnB7YahVTJwCevB235Kh4vj7Bpe8BI-Y5En6G0fw03BTXq9r0ESArn9dGjKKECDu3PB7lWSalp-O0qVRZbguG-4Ahos9ViAtcO19f7KRmcKZBF_4Ti-FPGxx77T30krfuWq7sEE"
            alt="Temple bell archway framing the Mahakaleshwar temple complex at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/95 via-[#0B0A09]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B08D57]/40 text-[#E0BD62] text-[11px] font-semibold tracking-[0.25em] uppercase w-fit backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0BD62]" />
                <span>Contact Us</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
                Let&apos;s Stay <br />
                <span className="italic text-[#E0BD62]">Connected</span>
              </h1>

              <p className="text-stone-300 font-light text-base sm:text-lg max-w-xl leading-relaxed">
                Reach out in the way that&apos;s most convenient for you. We&apos;re always happy to help with your stay in Ujjain.
              </p>
            </div>
          </div>
        </div>
      </section>
      ========================================================================= */}

      {/* 1. GET IN TOUCH / CHOOSE YOUR PREFERRED WAY (Directly shown at top) */}
      <section className="w-full pt-32 pb-20 bg-white border-b border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Breadcrumb & Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF2EE] border border-[#B08D57]/30 text-[#775928] text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#775928]" />
                <span>Get in Touch</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal">
                Choose Your Preferred Way
              </h1>
            </div>
            <div className="text-left md:text-right">
              <span className="font-serif text-xl sm:text-2xl italic text-[#775928] block">
                Same City, Deeper Connections
              </span>
              <span className="text-xs text-stone-500 font-light mt-0.5 block">
                Prompt guest support for reservations & temple guidance
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: WhatsApp */}
            <a
              href={hotelConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] hover:border-emerald-500/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-stone-900 font-normal group-hover:text-emerald-700 transition-colors">
                  Chat on WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 leading-relaxed">
                  Get quick answers, check availability and plan your stay instantly with our reservation desk.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFD2] flex items-center justify-between text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <span>Start Direct Chat</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Call Now */}
            <a
              href={`tel:${hotelConfig.contact.phone}`}
              className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] hover:border-[#B08D57] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/15 text-[#775928] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-stone-900 font-normal group-hover:text-[#775928] transition-colors">
                  Call Now
                </h3>
                <p className="font-mono text-base font-semibold text-[#775928] mt-1">
                  {hotelConfig.contact.phoneDisplay}
                </p>
                <p className="text-xs text-stone-600 font-light mt-1">
                  Available 9 AM – 9 PM for direct reservations and local assistance.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFD2] flex items-center justify-between text-xs font-bold text-[#775928] uppercase tracking-wider">
                <span>Call Front Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Get Directions */}
            <a
              href={hotelConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8DFD2] hover:border-blue-500/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-stone-900 font-normal group-hover:text-blue-700 transition-colors">
                  Get Directions
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 leading-relaxed">
                  Find us easily on Google Maps. We are located near Godha Puliya in Begampura.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFD2] flex items-center justify-between text-xs font-bold text-blue-700 uppercase tracking-wider">
                <span>Open Google Maps</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OUR LOCATION: RIGHT IN THE HEART OF UJJAIN */}
      <section className="w-full py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Address Column */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase">
                Our Location
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                Right in the Heart of Ujjain
              </h2>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Mahashivaya Guest House is conveniently located close to the sacred Mahakaleshwar Temple, making it easy for you to explore the city&apos;s spiritual and cultural landmarks.
              </p>

              <div className="p-5 rounded-xl bg-white border border-[#E8DFD2] shadow-sm flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#775928] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-stone-900">
                    Official Property Address
                  </h4>
                  <p className="text-xs text-stone-600 font-light mt-1 leading-relaxed">
                    99 Begampura Marg, Ravishankar Nagar, Near Godha Puliya, Suraj Nagar, Ujjain, Madhya Pradesh 456006
                  </p>
                </div>
              </div>
            </div>

            {/* Center Map Schematic Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#E8DFD2] shadow-md flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between border-b border-[#E8DFD2] pb-3">
                <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Transit & Landmark Schematic
                </span>
                <span className="text-[11px] text-[#775928] font-mono">GPS Verified</span>
              </div>

              {/* Transit Hubs */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E8DFD2] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Train className="w-4 h-4 text-[#775928]" />
                    <span className="font-medium text-stone-800">Ujjain Railway Station</span>
                  </div>
                  <span className="font-mono text-stone-600 font-semibold">2.5 km | 10 mins</span>
                </div>

                <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E8DFD2] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Bus className="w-4 h-4 text-[#775928]" />
                    <span className="font-medium text-stone-800">Ujjain Bus Stand</span>
                  </div>
                  <span className="font-mono text-stone-600 font-semibold">2.0 km | 8 mins</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#171513] text-[#FAF8F3] flex items-center justify-between border border-[#B08D57]/40 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E0BD62]" />
                    <span className="font-serif font-medium text-white text-sm">Mahashivaya Guest House</span>
                  </div>
                  <span className="text-[11px] text-[#E0BD62] font-semibold uppercase">You Are Here</span>
                </div>

                <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E8DFD2] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Navigation className="w-4 h-4 text-[#775928]" />
                    <span className="font-medium text-stone-800">Mahakaleshwar Temple & Lok</span>
                  </div>
                  <span className="font-mono text-stone-600 font-semibold">730m - 980m | 5 mins</span>
                </div>
              </div>

              <a
                href={hotelConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#FAF2EE] hover:bg-[#E8DFD2] text-stone-900 text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Atmospheric Diya Visual */}
            <div className="lg:col-span-3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1XLvvdyU4mroG36b4kwKjdSloGcvD4Eper-3yGieR6wNoXsll3TmJBCa3z-w7x947lz8-qJUF6D0cQmOCwxsW4VPNkwt93iSsTkbzaNzapyJXy30lrIVwUtwNrFD34ZhW1JUaXj5igNWhs5oqEe9dNOoNgphXz_x4YgUTYV-WjIg2eyY6Q0EA3NHDxOP4uXipSmXB1cX_Z98x6PClXFEZKqZNI2UaQTkppkY27gnm2lvFw8hwFgkiFSNV8"
                alt="Glowing temple diya lamp illuminating carved stone"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6">
                <p className="font-serif text-lg text-white font-normal leading-snug">
                  Find Your Way to a More Meaningful Stay
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALSO AVAILABLE ON (With Original Color Brand Logos) */}
      <section className="w-full py-20 bg-white border-y border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-2">
              Book Your Stay
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Also Available On
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-light mt-2">
              Choose your preferred platform to check availability, compare rates and book your stay with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelConfig.otas.map((ota) => (
              <a
                key={ota.name}
                href={ota.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-7 rounded-2xl bg-white border border-[#E8DFD2] hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center group min-h-[220px]"
              >
                {/* Original Color Brand Logo */}
                <div className="h-14 flex items-center justify-center w-full px-2">
                  <OtaBrandLogo id={ota.id} className="h-8 sm:h-9 w-auto max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="my-2">
                  <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">
                    {ota.badge}
                  </span>
                  <p className="text-xs text-stone-500 font-light mt-1 line-clamp-2">
                    {ota.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#775928] group-hover:text-[#B08D57] uppercase tracking-wider pt-3 border-t border-[#E8DFD2] w-full justify-center">
                  <span>Book on {ota.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEARBY PLACES: YOU'RE NEVER FAR FROM THE DIVINE */}
      <section className="w-full py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#775928] uppercase block mb-1">
                Nearby Places
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                You&apos;re Never Far from the Divine.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 font-light">
              Stay close to Ujjain&apos;s most revered and popular attractions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white border border-[#E8DFD2] overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VJlo1EnHrp0N68L2sAAj1ocGaM-OnG9p17u1NQ_Qs1x41tsXAQfvnhLIoZIV7ZdQkvGR2e0LJ05AGrAUueC-tnhhwu3rpgGItEV-NSu5cv2qzwvpw5gnB7YahVTJwCevB235Kh4vj7Bpe8BI-Y5En6G0fw03BTXq9r0ESArn9dGjKKECDu3PB7lWSalp-O0qVRZbguG-4Ahos9ViAtcO19f7KRmcKZBF_4Ti-FPGxx77T30krfuWq7sEE"
                  alt="Mahakaleshwar Temple"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-semibold text-stone-900">
                  Mahakaleshwar Temple
                </h4>
                <span className="text-xs text-[#775928] font-mono mt-0.5 block">
                  980 m | 8 mins walk
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E8DFD2] overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XLvvdyU4mroG36b4kwKjdSloGcvD4Eper-3yGieR6wNoXsll3TmJBCa3z-w7x947lz8-qJUF6D0cQmOCwxsW4VPNkwt93iSsTkbzaNzapyJXy30lrIVwUtwNrFD34ZhW1JUaXj5igNWhs5oqEe9dNOoNgphXz_x4YgUTYV-WjIg2eyY6Q0EA3NHDxOP4uXipSmXB1cX_Z98x6PClXFEZKqZNI2UaQTkppkY27gnm2lvFw8hwFgkiFSNV8"
                  alt="Harsiddhi Temple"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-semibold text-stone-900">
                  Harsiddhi Temple
                </h4>
                <span className="text-xs text-[#775928] font-mono mt-0.5 block">
                  1.2 km | 7 mins
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E8DFD2] overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UFwle2AvR7vCPvoFea-2MoLPjaX7U4tzSeGU1JFaaaEGNx3YU0gqaXHM2vgQRryV3ZXsqjcjSAeGT4OzkYzBUfXONulamG9eP86kVgO9f_ITVUabDgE30s6BA_-OHer7y0Q42YNIzteJT_o_QBNHZ5_t866CjmIO337ZMTb_4sau1agiyorfEeP8dBoV_cLk5sZ2NGQr6pPdBOE4zQ27_VgFemOTjS5NiTlw_XuSJHQcnzVE6d3ZcRnZ8"
                  alt="Ram Ghat"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-semibold text-stone-900">
                  Ram Ghat (Shipra)
                </h4>
                <span className="text-xs text-[#775928] font-mono mt-0.5 block">
                  1.4 km | 8 mins
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E8DFD2] overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIe6wKcYKyr9DN-svGNTGVTF5QE630eo4TXWctsrpowouFha1E5Z5nL57PJTBvyRVYh4Zhq9iZKSqHOtEY5OOx1bTk1bVcgaWVDYJlgO_1yXRMXVdNTUwppOgC-GDl1h-Cyt1ZqaNI8hl31exfX2suPlbz751ABYuyxE_8M7vJPTMWQuBKbKfGNlEiTFtB8FIj--ZMrjTELTwLAlZcTQQacM1KItn8QSUni9svJ5OVva9S8W87bdP"
                  alt="Ujjain Railway Station"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-semibold text-stone-900">
                  Ujjain Junction Station
                </h4>
                <span className="text-xs text-[#775928] font-mono mt-0.5 block">
                  1.8 km | 10 mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAKE UJJAIN PART OF YOUR STORY: CLOSING BANNER */}
      <section className="relative w-full py-24 bg-[#0B0A09] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1UFwle2AvR7vCPvoFea-2MoLPjaX7U4tzSeGU1JFaaaEGNx3YU0gqaXHM2vgQRryV3ZXsqjcjSAeGT4OzkYzBUfXONulamG9eP86kVgO9f_ITVUabDgE30s6BA_-OHer7y0Q42YNIzteJT_o_QBNHZ5_t866CjmIO337ZMTb_4sau1agiyorfEeP8dBoV_cLk5sZ2NGQr6pPdBOE4zQ27_VgFemOTjS5NiTlw_XuSJHQcnzVE6d3ZcRnZ8"
            alt="Twilight waters of holy Shipra river with floating diyas"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/60 to-[#0B0A09]/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="font-serif text-3xl italic text-[#B08D57]/70 block mb-2">
            Stay, Explore, Pray, Belong
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F3] font-normal">
            Make Ujjain Part of Your Story
          </h2>
          <p className="text-stone-300 font-light text-sm sm:text-base mt-4 max-w-xl mx-auto">
            We&apos;re here to make your stay comfortable, peaceful and memorable. Connect directly with our front desk today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={hotelConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Reservation</span>
            </a>
            <a
              href={`tel:${hotelConfig.contact.phone}`}
              className="px-8 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 82697 57720</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
