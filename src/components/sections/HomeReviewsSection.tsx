"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { guestReviews, reviewsStats } from "@/lib/data/reviews";

export default function HomeReviewsSection() {
  return (
    <section className="w-full py-24 bg-[#FAF8F3] text-[#1C1917] overflow-hidden border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B08D57] uppercase">
                Guest Impressions
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight">
              Words from <span className="italic text-[#775928]">Our Pilgrims</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#E8DFD2] shadow-sm">
            <div className="flex text-[#B08D57]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B08D57]" />
              ))}
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-stone-900 block leading-tight">
                {reviewsStats.averageRating} / 5 Rating
              </span>
              <span className="text-[10px] text-stone-500 font-medium">
                {reviewsStats.totalReviews} Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guestReviews.map((review) => (
            <div
              key={review.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E8DFD2] shadow-sm flex flex-col justify-between relative group hover:border-[#B08D57]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#B08D57]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B08D57]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-light">
                    {review.date}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#B08D57]/20 mb-2" />

                <p className="text-stone-700 font-light text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8DFD2] mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-stone-900">
                    {review.author}
                  </h4>
                  <span className="text-xs text-stone-500 font-light block">
                    {review.city} • {review.context}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Stay
                  </span>
                  <span className="text-[10px] text-stone-400 block mt-1">
                    {review.stayType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
