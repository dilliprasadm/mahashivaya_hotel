import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBookingBar from "@/components/layout/MobileBookingBar";
import BookingModal from "@/components/booking/BookingModal";
import { BookingProvider } from "@/lib/context/BookingContext";

export const metadata: Metadata = {
  title: "Mahashivaya Guest House | Comfortable Stay in Ujjain near Mahakal",
  description: "Experience serene hospitality in Ujjain at Mahashivaya Guest House. Located in historic Begampura just 730m from Mahakal Lok and 980m from Mahakaleshwar Temple.",
  keywords: [
    "Mahashivaya Guest House",
    "Ujjain Guest House",
    "Guest House near Mahakal Ujjain",
    "Stay near Mahakal Lok Corridor",
    "Ujjain pilgrimage accommodation",
    "Guest House near Mahakaleshwar temple",
    "Best guest house in Ujjain",
    "Family room in Ujjain",
    "Bhasma Aarti stay Ujjain",
  ],
  authors: [{ name: "Mahashivaya Guest House" }],
  openGraph: {
    title: "Mahashivaya Guest House | Serene Pilgrimage Stay in Ujjain",
    description: "Peaceful rest, spotless rooms, 24/7 hot water, and authentic hospitality just 730m from Mahakal Lok Corridor.",
    url: "https://mahashivayaguesthouse.com",
    siteName: "Mahashivaya Guest House",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahashivaya Guest House | Stay Close to Mahakal",
    description: "Boutique guest house hospitality in Ujjain, minutes from Mahakaleshwar Jyotirlinga.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FAF8F3] text-[#1C1917] antialiased selection:bg-[#B08D57]/30 selection:text-[#1C1917]">
        <BookingProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            {/* <BookingModal /> - Popup commented out as requested for later use */}
            <MobileBookingBar />
          </SmoothScroll>
        </BookingProvider>
      </body>
    </html>
  );
}
