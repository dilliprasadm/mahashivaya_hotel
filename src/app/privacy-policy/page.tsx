import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, FileText, Phone } from "lucide-react";
import { hotelConfig } from "@/lib/constants/site";

export const metadata = {
  title: "Privacy Policy | Mahashivaya Guest House Ujjain",
  description: "Privacy Policy and guest information handling guidelines for Mahashivaya Guest House in Ujjain, Madhya Pradesh.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guest Privacy & Trust</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-stone-500 font-light mt-2">
            Last Updated: September 2026 • Mahashivaya Guest House, Begampura, Ujjain
          </p>
        </div>

        {/* Policy Body */}
        <div className="prose prose-stone max-w-none text-sm leading-relaxed text-stone-700 space-y-8">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              At <strong>Mahashivaya Guest House</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Guest House&rdquo;), we deeply respect the privacy of every pilgrim and guest who stays with us or contacts us via WhatsApp, phone, or our website. This Privacy Policy explains what personal information we collect, why we collect it, and how we safeguard your data in accordance with applicable laws in India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              2. Information We Collect
            </h2>
            <p>
              When you enquire about accommodation, reserve a room, or check in at our property in Begampura, Ujjain, we may collect the following details:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address (if provided), and permanent residential address.</li>
              <li><strong>Government Identification:</strong> A copy of valid government-issued photo identification (such as Aadhaar Card, Passport, Voter ID, or Driving License) required by law and local police guest registration regulations in Ujjain.</li>
              <li><strong>Stay Details:</strong> Arrival date, departure date, number of adult guests and children, room preferences, and special check-in requests.</li>
              <li><strong>Communication Records:</strong> WhatsApp messages, SMS, or phone records initiated when checking tariffs or confirming bookings.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              3. Purpose of Data Collection
            </h2>
            <p>We use your information strictly for legitimate hospitality and administrative purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>Processing your room enquiry, reservation confirmation, and pre-arrival communication.</li>
              <li>Complying with statutory guest register requirements mandated by local law enforcement and the district administration of Ujjain.</li>
              <li>Assisting you with temple timings, Bhasma Aarti wake-up calls, and trusted e-rickshaw coordination.</li>
              <li>Ensuring the safety, security, and peaceful stay of all guests on our premises.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              4. Non-Disclosure & Security of Data
            </h2>
            <p>
              We do <strong>not</strong> sell, lease, trade, or share your personal data with third-party marketing agencies or commercial telemarketers. Your data is accessible solely to authorized front desk personnel for reservation and check-in purposes. Physical registers and digital logs are stored securely.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              5. Third-Party Booking Portals
            </h2>
            <p>
              If you choose to reserve your accommodation through verified online travel platforms (such as MakeMyTrip, Booking.com, Agoda, or Goibibo), your transaction and payment details are governed by the respective platform&apos;s independent privacy policies. We only receive the guest and itinerary information necessary to honor your reservation upon your arrival.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              6. Contacting Us
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your guest records, please reach out directly:
            </p>
            <div className="p-5 rounded-xl bg-white border border-[#E8DFD2] space-y-1 text-xs text-stone-600">
              <p><strong>Property:</strong> Mahashivaya Guest House</p>
              <p><strong>Address:</strong> 99 Begampura Marg, Ravishankar Nagar, Near Godha Puliya, Suraj Nagar, Ujjain, MP 456006</p>
              <p><strong>Phone / WhatsApp:</strong> {hotelConfig.contact.phoneDisplay}</p>
              <p><strong>Email:</strong> {hotelConfig.contact.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
