import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Clock, Phone, Sparkles } from "lucide-react";
import { hotelConfig } from "@/lib/constants/site";

export const metadata = {
  title: "Terms of Use & Guest Policies | Mahashivaya Guest House Ujjain",
  description: "Terms of use, stay policies, check-in and check-out guidelines, and guest house rules for Mahashivaya Guest House, Begampura, Ujjain.",
};

export default function TermsOfUsePage() {
  return (
    <div className="w-full bg-[#FAF8F3] text-[#1C1917] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#775928] uppercase tracking-wider hover:text-[#B08D57] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="pb-8 border-b border-[#E8DFD2] mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2EE] text-[#775928] text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>House Policies & Guidelines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal">
            Terms of Use & Guest Policies
          </h1>
          <p className="text-xs text-stone-500 font-light mt-2">
            Last Updated: September 2026 • Mahashivaya Guest House, Begampura, Ujjain, MP
          </p>
        </div>

        {/* Terms Body */}
        <div className="prose prose-stone max-w-none text-sm leading-relaxed text-stone-700 space-y-8">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              1. Welcome & Introduction
            </h2>
            <p>
              Welcome to <strong>Mahashivaya Guest House</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are honored to host you during your pilgrimage and journey in the sacred city of Avantika (Ujjain). By reserving accommodation, checking into our premises, or utilizing our direct communication channels (WhatsApp, phone, or website), you agree to comply with the house terms and stay guidelines set forth below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              2. Check-in & Check-out Timings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
              <div className="p-4 rounded-xl border border-[#B08D57]/20 bg-white/70 shadow-sm">
                <div className="flex items-center gap-2 text-[#775928] font-semibold text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Check-In Time</span>
                </div>
                <div className="font-serif text-2xl text-stone-900">12:00 PM</div>
                <p className="text-xs text-stone-500 mt-1">
                  Early check-in from 6:00 AM onwards is subject to room availability upon arrival or prior written arrangement.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#B08D57]/20 bg-white/70 shadow-sm">
                <div className="flex items-center gap-2 text-[#775928] font-semibold text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Check-Out Time</span>
                </div>
                <div className="font-serif text-2xl text-stone-900">11:00 AM</div>
                <p className="text-xs text-stone-500 mt-1">
                  Late check-out may be granted based on occupancy and must be coordinated with the front desk in advance.
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-500">
              *If you have early morning Bhasma Aarti darshan or late evening train arrivals, complimentary luggage storage is available at the front desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              3. Mandatory Government Identification
            </h2>
            <p>
              As per statutory government regulations and local Ujjain police mandates, <strong>every adult guest (18 years and older)</strong> staying at the guest house must present an original, valid government-issued photo ID with address proof at the time of check-in:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li><strong>Indian Nationals:</strong> Aadhaar Card, Passport, Voter ID Card, or Driving License. (PAN card is not accepted as address proof).</li>
              <li><strong>International Guests / NRIs:</strong> Valid Passport with valid Indian Visa or OCI card is mandatory.</li>
            </ul>
            <p className="text-xs text-stone-500">
              Failure to produce valid identification may result in the refusal of check-in without refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              4. Sacred Sanctity & Pure Vegetarian Atmosphere
            </h2>
            <p>
              Ujjain is a venerated tirtha and the sacred abode of Lord Mahakaleshwar. In reverence to the spiritual sanctity of our surroundings and out of respect for fellow devotees:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li><strong>Strictly Pure Vegetarian:</strong> Bringing, ordering, or consuming non-vegetarian food, seafood, or eggs on the guest house premises is strictly prohibited.</li>
              <li><strong>Zero Alcohol & Substance Policy:</strong> Possession, sale, or consumption of alcohol, narcotics, smoking, or tobacco products is strictly forbidden on the entire property.</li>
              <li><strong>Quiet Hours & Respect:</strong> Quiet hours are observed between 10:00 PM and 6:00 AM to facilitate restful sleep for pilgrims. Please keep television and conversation volumes low.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              5. Bhasma Aarti (3:00 AM) Advisory & Temple Protocol
            </h2>
            <p>
              Many devotees staying at Mahashivaya Guest House attend the world-renowned <strong>Bhasma Aarti</strong> at Shri Mahakaleshwar Jyotirlinga (which requires entry between 2:30 AM and 3:30 AM):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>Front desk and night personnel are alerted to assist with wake-up calls and trusted e-rickshaws to the temple gates.</li>
              <li>Please enter and leave quietly during midnight and dawn hours to ensure minimum disturbance to neighboring guest rooms.</li>
              <li>Our location in Begampura is approximately 730 m from Mahakal Lok Corridor and 980 m from the main temple sanctum.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              6. Reservations, Payments & Cancellations
            </h2>
            <p>
              To confirm your reservation, advance payment or formal confirmation via our official WhatsApp/Phone desk or approved travel platforms (MakeMyTrip, Booking.com, Agoda, Goibibo) is required.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li><strong>Accepted Modes:</strong> Unified Payments Interface (UPI - Google Pay, PhonePe, Paytm), Net Banking, and Indian Rupee cash.</li>
              <li><strong>Modifications:</strong> Requests to change dates are accommodated whenever feasible, subject to room availability and tariff differences.</li>
              <li><strong>Festival & High-Peak Seasons:</strong> Bookings during Shravan Maas, Mahashivratri, Kartik Mela, and long weekends are subject to strict advance confirmation and peak policy windows.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              7. Guest Belongings & Safety
            </h2>
            <p>
              While the premises are monitored with 24/7 CCTV surveillance in common areas, guests are advised to take personal care of cash, jewelry, and sacred ornaments. The management is not liable for loss, theft, or damage to personal items left unattended in rooms or vehicles parked outside.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              8. Property Care & Damages
            </h2>
            <p>
              Guests are kindly expected to treat all facilities, linen, electrical appliances, and fixtures with utmost care. Any damage caused to guest house property, whether intentional or accidental, may be assessed and charged to the guest&apos;s bill upon check-out.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              9. Contact & Inquiries
            </h2>
            <p>
              For any questions, stay arrangements, or clarifications regarding our policies, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFD2] space-y-2 text-stone-800 not-prose mt-4">
              <div className="font-serif text-base font-semibold text-stone-900">
                Mahashivaya Guest House Front Desk
              </div>
              <div className="text-xs text-stone-600 leading-relaxed">
                99 Begampura Marg, Ravishankar Nagar, Near Godha Puliya, Suraj Nagar, Ujjain, Madhya Pradesh 456006
              </div>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                <a
                  href={`tel:${hotelConfig.contact.phone}`}
                  className="inline-flex items-center gap-1.5 text-[#775928] hover:text-[#B08D57]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{hotelConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={hotelConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
