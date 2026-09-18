"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { galleryItems, galleryCategories, GalleryImage } from "@/lib/data/gallery";
import Lightbox from "@/components/gallery/Lightbox";
import { useBooking } from "@/lib/context/BookingContext";

export default function GalleryPage() {
  const { openBooking } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems: GalleryImage[] =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxData = filteredItems.map((item) => ({
    url: item.imageUrl,
    title: item.title,
    caption: `${item.caption} (${item.locationTag})`,
  }));

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3] text-[#1C1917] overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#0B0A09] text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1XLvvdyU4mroG36b4kwKjdSloGcvD4Eper-3yGieR6wNoXsll3TmJBCa3z-w7x947lz8-qJUF6D0cQmOCwxsW4VPNkwt93iSsTkbzaNzapyJXy30lrIVwUtwNrFD34ZhW1JUaXj5igNWhs5oqEe9dNOoNgphXz_x4YgUTYV-WjIg2eyY6Q0EA3NHDxOP4uXipSmXB1cX_Z98x6PClXFEZKqZNI2UaQTkppkY27gnm2lvFw8hwFgkiFSNV8"
            alt="Deepstambha towers at Harsiddhi Temple in Ujjain at twilight"
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
            <span>Visual Anthology</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
            Feel Ujjain <br />
            <span className="italic text-[#E0BD62]">Through Our Lens</span>
          </h1>

          <p className="text-stone-300 font-light text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
            A photographic celebration of sacred temple spires, twilight river reflections, aromatic morning ghats, and the quiet comfort waiting for you at Mahashivaya Guest House.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="w-full bg-[#171513] py-6 border-y border-[#B08D57]/20 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 no-scrollbar">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#B08D57] text-[#0B0A09] shadow-[0_2px_12px_rgba(176,141,87,0.4)]"
                  : "bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ASYMMETRIC PHOTOGRAPHIC CHOREOGRAPHY */}
      <section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 text-xs text-stone-500 font-light">
          <span>
            Showing <strong className="font-semibold text-stone-900">{filteredItems.length}</strong> photographs in &ldquo;{selectedCategory}&rdquo;
          </span>
          <span>Click image for high-resolution full view</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = item.aspectRatio === "portrait";
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-[#171513] border border-[#E8DFD2] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isTall ? "sm:row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold tracking-wider text-[#E0BD62] uppercase border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <span className="flex items-center gap-1 text-[11px] text-[#E0BD62] font-medium mb-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    {item.locationTag}
                  </span>
                  <h3 className="font-serif text-lg text-white font-normal group-hover:text-[#E0BD62] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light mt-1 line-clamp-2 italic opacity-90">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CLOSING INVITATION CTA */}
      <section className="w-full py-20 bg-[#171513] text-white text-center border-t border-[#B08D57]/20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E0BD62] uppercase block mb-3">
            Ujjain Beckons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] font-normal">
            Capture Your Own Sacred Memories
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Stay just minutes from Mahakal Lok and Ram Ghat. Check availability directly for your pilgrimage dates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => openBooking()}
              className="px-8 py-3.5 rounded-full bg-[#B08D57] hover:bg-[#C59A32] text-[#0B0A09] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book Your Stay
            </button>
            <Link
              href="/explore-ujjain"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Explore Ujjain Landmarks
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={lightboxData}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
