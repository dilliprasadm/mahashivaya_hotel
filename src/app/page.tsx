import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import SpiritualStayIntro from "@/components/sections/SpiritualStayIntro";
import HomeRoomsTrack from "@/components/sections/HomeRoomsTrack";
import HomeAmenitiesSection from "@/components/sections/HomeAmenitiesSection";
import HomeExploreUjjain from "@/components/sections/HomeExploreUjjain";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeClosingCTA from "@/components/sections/HomeClosingCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Cinematic Dusk Hero Scene with Golden Embers */}
      <HeroSection />

      {/* 2. Trust & Verified Proximity Strip */}
      <TrustStrip />

      {/* 3. The Spiritual Stay Sanctuary Introduction */}
      <SpiritualStayIntro />

      {/* 4. Curated Rooms Discovery Track */}
      <HomeRoomsTrack />

      {/* 5. Thoughtful Amenities for Pilgrims */}
      <HomeAmenitiesSection />

      {/* 6. Iconic Destinations & Explore Ujjain */}
      <HomeExploreUjjain />

      {/* 7. Verified Guest Impressions & Pilgrim Quotes */}
      <HomeReviewsSection />

      {/* 8. Closing Booking Journey & Direct CTA */}
      <HomeClosingCTA />
    </div>
  );
}
