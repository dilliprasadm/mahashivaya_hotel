"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxItem {
  url: string;
  caption?: string;
  title?: string;
}

interface LightboxProps {
  isOpen: boolean;
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#0B0A09]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 text-xs text-stone-300">
            <span className="font-mono text-[#E0BD62]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            {currentItem?.title && (
              <>
                <span className="text-white/20">•</span>
                <span className="font-medium text-white truncate max-w-xs sm:max-w-md">
                  {currentItem.title}
                </span>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Container with Navigation Arrows */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#B08D57] text-white hover:text-[#0B0A09] border border-white/10 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
            <Image
              src={currentItem.url}
              alt={currentItem.caption || currentItem.title || "Gallery Photograph"}
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#B08D57] text-white hover:text-[#0B0A09] border border-white/10 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption Bar */}
        {currentItem?.caption && (
          <div className="w-full max-w-3xl mx-auto text-center z-10">
            <p className="text-xs sm:text-sm text-stone-300 font-light italic leading-relaxed">
              {currentItem.caption}
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
