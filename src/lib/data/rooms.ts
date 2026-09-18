export interface RoomPhoto {
  url: string;
  caption: string;
  category: "hero" | "bed" | "detail" | "bathroom" | "balcony" | "layout";
}

export interface RoomData {
  slug: string;
  id: string;
  name: string;
  categoryTag: string;
  tagline: string;
  headline: string;
  description: string;
  editorialNote: string;
  capacity: string;
  maxGuests: number;
  bedConfiguration: string;
  isAC: boolean;
  hasBalcony?: boolean;
  view: string;
  sizeSqFt: string;
  specs: { label: string; value: string }[];
  amenityList: string[];
  photos: RoomPhoto[];
  goodToKnow: string[];
}

export const roomsData: RoomData[] = [
  {
    slug: "ac-double-room",
    id: "01",
    name: "AC Double Room",
    categoryTag: "Quiet Sanctuary",
    tagline: "Ideal for couples, solo pilgrims, and pairs seeking quiet rest near Mahakal.",
    headline: "Sacred Intimacy & Modern Comfort",
    description: "Designed as a tranquil sanctuary after long hours of darshan at Mahakaleshwar and walking along the Shipra ghats. Features solid handcrafted teak furnishings, whisper-quiet split air conditioning, polished Kota stone flooring, and pristine high-thread-count white cotton linens.",
    editorialNote: "A room created for serene morning contemplation and restorative sleep between temple aartis.",
    capacity: "Up to 2 Guests",
    maxGuests: 2,
    bedConfiguration: "1 Solid Teak King / Double Bed",
    isAC: true,
    view: "Inner Verandah & Quiet Courtyard",
    sizeSqFt: "210 sq ft",
    specs: [
      { label: "Occupancy", value: "2 Adults (Child friendly)" },
      { label: "Bed Type", value: "King / Double Bed with Ortho Mattress" },
      { label: "Climate", value: "Individual Split AC + High-Speed Fan" },
      { label: "Bathroom", value: "Attached Sandstone Tile with 24/7 Hot Water" },
      { label: "Connectivity", value: "High-Speed Fiber Wi-Fi" },
      { label: "Power", value: "Bedside Universal Sockets & Mobile Charging" },
    ],
    amenityList: [
      "Split Air Conditioning",
      "Attached Western Style Bathroom",
      "24/7 Hot & Cold Running Water",
      "High-Thread-Count White Cotton Linen",
      "High-Speed Wi-Fi",
      "Solid Teak Bedside Table & Reading Lamp",
      "Wardrobe & Luggage Storage Niche",
      "Purified RO Drinking Water Available",
      "Daily Housekeeping & Fresh Towels",
      "Bhasma Aarti & Darshan Wake-Up Assistance",
    ],
    photos: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WOp4rbDumPCxwM7OEwy1YFOWgfuBYZQCqT8M0x8sxV9fvxCBKm190NpvSORzb9i7Wqwj5dsCS22budx7oXmrG5aUG-iR2S5bzZQ2iDS0MjVwFrkh4lVMZq4cpGE2f_exw8xIheQY0H3_mL7RmBpNXtg40r3HqVXza5lGEEhnvtJngQj66xyR1_E9sd0LB1v4mfzfy0JNl5z5qfzmhDfpYr_fz-VIoxiX_HNOsBaezMmPUh3LJFhwypWA",
        caption: "Front view of handcrafted teak wood double bed with crisp white duvet and traditional runner.",
        category: "hero",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1UB-y1uqP9KN15YQlqjcWEYe9OUOx8gIicHQDNGhWWpgt-ODaTzOWoPwATpYaNlU9mskUL73kq_-4nRlGyhg3uJON7MSPxC0CovsCVEjW__s2ATcx-WNdNFxQo_m3FEXktImguivMdKTEI_LxWVXwSL62c56wKJLgXpyjij1cFvH8U2emXMuFLbWYIgVFqtRbmwJXO1ypyh8F0ZZlWkD6cPTJtfhkGZLF8b_hlKKxfhdR1McYcv3QDsXm8",
        caption: "Angled view showing split air conditioning unit, smooth beige walls, and polished Kota stone floor.",
        category: "layout",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VwrVZbyLgyXUHtWCJvg0-KiG7Cx4FYjwrNTk5DtiYiR65HuI-znp2PRWOCMlG01ICJPwH10GDFySu6EDFy3ynOH6rKelqACC97CtxrqH6pttwqEvUyQG1XH42FxBR3zmC3QJRt1ioGsp-Dyk5RvmdcjHk-5WvahM0IVTsIJ6Y90nFzb10-66FLnPT9LH-U8dXVSlM2wB5ZuFQYVhd5sFx2yF8eAnjyKNFBjfuSziNc2Q_lj9csbLMmTg",
        caption: "Macro detail of crisp organic cotton bedding, fluffed pillows, and hand-block textile textures.",
        category: "bed",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WTfnV68SW6DAeqzs_1mLkKjABraczLEzE0WNBjwkdGztSzsBuyiaG52cv4FA9D6An6waqNy_uN_Sdf-Z8wGpPyqt6Mg_fquBjEHin5bXxiKdzUYym6yw91gAERitN7ypxePWUIrZgIpw7X-2D8Jj8LGG3k8X4rZnO59cZFyU3qBGJf6mmnqfND9GzEh8f6FmiTLmW1OaSvdut3s1vLQiShAx1oEjZQzs8lC5_zxuTSDBf-0kbDDLSm8zw",
        caption: "Teak wood bedside table with warm brass reading lamp and universal power socket.",
        category: "detail",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1Wua4bAZicqc6ZuaVgVzbnvIO2LQXxcmduf8JyiYs6WgHO8XxTA0TG4itIz6I_PIcXA1MWWpa5OQ0WCaNmDM-umSRsUQSn7tUqqYP-m5WOfGGi0PSFYCmZlXLiQSfqhRXzKiMacKrgsKOnFlpVlQChPigcXzs9aRNSgtROvJRgXrvvWJptTQ-0t952c3J9TJgOJm8yeaboARlAdo837nRJOIT1zJ2jGf-xXCAhRF3C9MoSAxH0KSR_NS4M",
        caption: "Opposite room perspective looking toward built-in wardrobe closet and luggage desk.",
        category: "layout",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VRG4YP2UCkvK0AQWGuLYt8AGjRHnhoENyLpgv6xAH-j49ri7aMENyBkUA4QKjmqzDfYlx3yXvx-umPaHpqHkdOl2cneSMTdsFct9F8sUgVwUY9L50sOu3sFIz_DD1RuyVZo3K7et2HKWMl5crNjQmk34YjPrh20kzS9N25ZCOlDiOox6GJz72maQQ6UMn_zYG9IfZp3Ky2jHYWFWMis2_G6AzsXvX1V0O11c7zC2nDZG8LQgmn6ts8Pr0",
        caption: "Carved wooden jharokha window niche with brass water carafe catching morning sunlight.",
        category: "detail",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ",
        caption: "Attached bathroom vanity with sandstone tiling, sparkling chrome taps, and fluffy ivory towels.",
        category: "bathroom",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1Un--HPbbt6Fuxm2PgLeqn1uK4Kt1i8lD-nxx8ZuzUo3kEgsXqXT3V6xciQkxFH9PtMfJ1QnPddM-BUCYOvUeMuHr_iqD_juJVReFQdt0ldYv82zwN_jcQYx1F6OxtM833hP57FWTS9KQLoc2YSYLl-Ioaii813xNKRyHJlP5Tt7B26q2XrYHCSI8Aos0oH8JsZCAWvovVGWL7sPopDpT5tKhdLDfc30R7dRlTA1nPLbAkUWAHuc5AcZYw",
        caption: "Shower stall with instant hot water mixer, clean glass partition, and herbal guest amenities.",
        category: "bathroom",
      },
    ],
    goodToKnow: [
      "Standard check-in: 12:00 PM • Standard check-out: 11:00 AM (Early check-in subject to availability)",
      "Strictly pure vegetarian property in reverence to Mahakal Dham",
      "Valid Government photo ID required at check-in for all guests",
      "Early morning wake-up call available for 3:00 AM Bhasma Aarti slots",
    ],
  },
  {
    slug: "4-bed-ac-room",
    id: "02",
    name: "4-Bed AC Room",
    categoryTag: "Family Retreat",
    tagline: "A practical, expansive choice for families and small groups travelling together.",
    headline: "Generous Family Harmony",
    description: "Configured specifically so four pilgrims can rest comfortably in the same spacious quarters without feeling cramped. Ample luggage clearances, multi-point charging, and a pristine bathroom make group mornings smooth and unhurried.",
    editorialNote: "Keeps families together under one roof with individual bed comfort after intense spiritual ceremonies.",
    capacity: "Up to 4 Guests",
    maxGuests: 4,
    bedConfiguration: "1 King Bed + 2 Twin Beds (or 4 Individual Berths)",
    isAC: true,
    view: "Verandah & City Skyline",
    sizeSqFt: "320 sq ft",
    specs: [
      { label: "Occupancy", value: "4 Adults + 1 Child" },
      { label: "Bed Type", value: "1 King Bed + 2 Single Beds" },
      { label: "Climate", value: "High-Capacity Split Air Conditioner" },
      { label: "Bathroom", value: "Attached Spacious Bathroom with Hot Water" },
      { label: "Connectivity", value: "High-Speed Wi-Fi for Multiple Devices" },
      { label: "Luggage", value: "Dedicated Multi-Suitcase Staging Area" },
    ],
    amenityList: [
      "High-Capacity Split Air Conditioning",
      "Attached Western Restroom with 24/7 Hot Water",
      "4 Individual Pillows & Crisp White Linens",
      "Multiple Bedside Charging Ports",
      "High-Speed Wi-Fi",
      "Spacious Teak Luggage Desk & Hanging Hooks",
      "Daily Housekeeping",
      "Complimentary Filtered RO Drinking Water",
      "Front Desk Assistance for Group Cabs & Temples",
    ],
    photos: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1U6e2TT7zdfy4o02YqBTUlk7kKYnwbYYahh22Sne03wm-KGzSORQPt7MrgMJI6Tks5jB-Yk1ZQP6N8CPOXo1UvboT2bUDDzA7c-dR37-XsQ1fhAGNKSOGI6HvHecplqMSr9IAhtactBSoK5qtaizQtcRJgrN4z3jwiqqb7861IERAJpn4mYoYNF93JjjKqpZvCu7DvlXQSG6NPu3dqC7gXe_0PiEGOubWaiB49kDF67uhdnAHSo_q8qMSc",
        caption: "Spacious four-guest layout with rich teak furnishings and soft morning courtyard illumination.",
        category: "hero",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WOp4rbDumPCxwM7OEwy1YFOWgfuBYZQCqT8M0x8sxV9fvxCBKm190NpvSORzb9i7Wqwj5dsCS22budx7oXmrG5aUG-iR2S5bzZQ2iDS0MjVwFrkh4lVMZq4cpGE2f_exw8xIheQY0H3_mL7RmBpNXtg40r3HqVXza5lGEEhnvtJngQj66xyR1_E9sd0LB1v4mfzfy0JNl5z5qfzmhDfpYr_fz-VIoxiX_HNOsBaezMmPUh3LJFhwypWA",
        caption: "Primary king bed with premium high-thread-count white bedsheets and calming headboard.",
        category: "bed",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ",
        caption: "Pristine attached bathroom with hot and cold mixer shower and hygienic stone finishes.",
        category: "bathroom",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1V1bNVvT5riendV_E4dV-XMd_ppK_t3CEaaqu_lgDVnjBrw3pYNTM9C_Tiusvl7M2eNvv9j9fYetB_7Ct0yQiwl115c5mtmwYczGyMaD6T38Z5jDxIZbdjg2sb1S54fG3Z9oeYEvvpHt83nBN3aPIkdWJH3MfospVwFVNudFB6W6yL25BID0CMxCOJW85mPRdOxLqwamLDYeXx7euYj6sG554sudotIFfrCZkE7BvtQ1pJ1lEouyWDZnA",
        caption: "Macro tactile detail of pristine folded sheets and aromatic brass incense burner.",
        category: "detail",
      },
    ],
    goodToKnow: [
      "Extra mattresses available on prior request for families with young children",
      "24-hour hot water ensures all four guests can bathe without waiting delays",
      "Front desk assists with e-rickshaw booking for the entire family to Mahakal Lok",
    ],
  },
  {
    slug: "5-bed-ac-room",
    id: "03",
    name: "5-Bed AC Room with Balcony",
    categoryTag: "Signature Balcony Suite",
    tagline: "Our most expansive multi-guest residence featuring a private sandstone carved balcony.",
    headline: "The Grand Sanctuary Suite",
    description: "The crown accommodation of Mahashivaya Guest House. Spanning a generous footprint with a private sun-drenched Indian sandstone carved balcony overlooking potted jasmine and marigolds. Tailored for larger families and multi-generational pilgrimages.",
    editorialNote: "Enjoy fresh morning air and temple bells ringing across Begampura from your private verandah.",
    capacity: "Up to 5 Guests (Family)",
    maxGuests: 5,
    bedConfiguration: "1 King Bed + 3 Single Beds",
    isAC: true,
    hasBalcony: true,
    view: "Private Sandstone Carved Balcony & Sacred City Vista",
    sizeSqFt: "410 sq ft",
    specs: [
      { label: "Occupancy", value: "5 Adults (Family Suite)" },
      { label: "Bed Type", value: "1 King Bed + 3 Individual Single Berths" },
      { label: "Balcony", value: "Private Sandstone Balcony with Seating" },
      { label: "Climate", value: "Dual Split AC Units for Uniform Cooling" },
      { label: "Bathroom", value: "Attached Deluxe Bathroom with High-Volume Geyser" },
      { label: "Special", value: "Large Sunlit Windows with Wooden Jharokha Shutters" },
    ],
    amenityList: [
      "Private Sandstone Carved Balcony with Outdoor Seating",
      "Dual Split Air Conditioning Units",
      "Attached Large Bathroom with Instant Hot Water Geyser",
      "5 Sets of Fresh White Linens & Fluffy Pillows",
      "Spacious Wardrobes with Safe Lockers",
      "High-Speed Wi-Fi",
      "Multiple Bedside USB / 3-Pin Charging Stations",
      "Complimentary Filtered Drinking Water",
      "Daily Room Cleaning & Trash Clearing",
      "Bhasma Aarti Advance Registration & Travel Guidance",
    ],
    photos: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VZiqfNDizW_QLEM-VWqctWcnLE9Vx_LOGfSH7aG4-VGaszk1AFyI-JTBgcXEqgcevQ1S6V1NYoMjJ3aUTLVPzXaZIVdtxOB0Jk0xMZcxq8dCaWRIxM5JgXn6Eg1HJYfXzN8TRplFf3-cl1gSbOulrxovPrvzGzTCqt24Hy6RnoEigdUlDwKUscnLk6pBfqwnSbIT2v24rLsc-Qwc5OihFukb6sbciW1yyABz2bpv46eiyGMMZWnVQaDp4",
        caption: "Sunlit interior looking onto the private Indian sandstone carved balcony with blooming marigolds.",
        category: "balcony",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WOp4rbDumPCxwM7OEwy1YFOWgfuBYZQCqT8M0x8sxV9fvxCBKm190NpvSORzb9i7Wqwj5dsCS22budx7oXmrG5aUG-iR2S5bzZQ2iDS0MjVwFrkh4lVMZq4cpGE2f_exw8xIheQY0H3_mL7RmBpNXtg40r3HqVXza5lGEEhnvtJngQj66xyR1_E9sd0LB1v4mfzfy0JNl5z5qfzmhDfpYr_fz-VIoxiX_HNOsBaezMmPUh3LJFhwypWA",
        caption: "Center sleeping zone with handcrafted teak beds and restful ambient warm lighting.",
        category: "bed",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VRG4YP2UCkvK0AQWGuLYt8AGjRHnhoENyLpgv6xAH-j49ri7aMENyBkUA4QKjmqzDfYlx3yXvx-umPaHpqHkdOl2cneSMTdsFct9F8sUgVwUY9L50sOu3sFIz_DD1RuyVZo3K7et2HKWMl5crNjQmk34YjPrh20kzS9N25ZCOlDiOox6GJz72maQQ6UMn_zYG9IfZp3Ky2jHYWFWMis2_G6AzsXvX1V0O11c7zC2nDZG8LQgmn6ts8Pr0",
        caption: "Carved wooden window niche framing peaceful sunrise light.",
        category: "detail",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ",
        caption: "Spotless bathroom interior with sandstone tiles, mirror vanity, and brass accents.",
        category: "bathroom",
      },
    ],
    goodToKnow: [
      "Our most requested suite — early direct booking on WhatsApp recommended",
      "Private balcony offers panoramic fresh air without street noise",
      "Dedicated assistance for elderly pilgrims and luggage handling",
    ],
  },
  {
    slug: "non-ac-double-room",
    id: "04",
    name: "Non-AC Double Room",
    categoryTag: "Honest Simplicity",
    tagline: "Clean, budget-conscious comfort featuring natural airflow and peaceful Ujjaini quiet.",
    headline: "Simple Rest, Pure Devotion",
    description: "An authentic, uncluttered room tailored for pilgrims seeking an honest, spotless, and peaceful place to sleep, freshen up, and store belongings while spending most of the day in devotion across Mahakal Lok, Ram Ghat, and Harsiddhi.",
    editorialNote: "Enjoy natural ventilation through high wooden shutters and Kota stone cool thermal properties.",
    capacity: "Up to 2 Guests",
    maxGuests: 2,
    bedConfiguration: "1 Comfortable Double Bed",
    isAC: false,
    view: "Quiet Courtyard Corridor",
    sizeSqFt: "190 sq ft",
    specs: [
      { label: "Occupancy", value: "2 Adults" },
      { label: "Bed Type", value: "Double Bed with High-Density Foam" },
      { label: "Ventilation", value: "High-Speed Ceiling Fan & Cross-Breeze Windows" },
      { label: "Bathroom", value: "Attached Clean Bathroom with 24/7 Hot Water" },
      { label: "Connectivity", value: "Free Wi-Fi Included" },
      { label: "Flooring", value: "Natural Kota Stone Floor" },
    ],
    amenityList: [
      "High-Speed Overhead Ceiling Fan",
      "Attached Western Restroom with 24/7 Hot Water",
      "Clean White Cotton Sheets & Pillows",
      "High-Speed Wi-Fi",
      "Bedside Charging Sockets",
      "Mirror & Storage Shelf",
      "Daily Housekeeping",
      "Filtered RO Drinking Water",
      "Luggage Storage Assistance",
    ],
    photos: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1U6e2TT7zdfy4o02YqBTUlk7kKYnwbYYahh22Sne03wm-KGzSORQPt7MrgMJI6Tks5jB-Yk1ZQP6N8CPOXo1UvboT2bUDDzA7c-dR37-XsQ1fhAGNKSOGI6HvHecplqMSr9IAhtactBSoK5qtaizQtcRJgrN4z3jwiqqb7861IERAJpn4mYoYNF93JjjKqpZvCu7DvlXQSG6NPu3dqC7gXe_0PiEGOubWaiB49kDF67uhdnAHSo_q8qMSc",
        caption: "Spotless, naturally lit bedroom interior with solid bed frame and traditional stone floor.",
        category: "hero",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VwrVZbyLgyXUHtWCJvg0-KiG7Cx4FYjwrNTk5DtiYiR65HuI-znp2PRWOCMlG01ICJPwH10GDFySu6EDFy3ynOH6rKelqACC97CtxrqH6pttwqEvUyQG1XH42FxBR3zmC3QJRt1ioGsp-Dyk5RvmdcjHk-5WvahM0IVTsIJ6Y90nFzb10-66FLnPT9LH-U8dXVSlM2wB5ZuFQYVhd5sFx2yF8eAnjyKNFBjfuSziNc2Q_lj9csbLMmTg",
        caption: "Freshly laundered white linen and textured bed runner.",
        category: "bed",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ",
        caption: "Pristine attached bathroom with hot water on demand.",
        category: "bathroom",
      },
    ],
    goodToKnow: [
      "Optimal during cooler winter months and budget-conscious pilgrimage itineraries",
      "Hot water is available 24/7 via geyser switch in bathroom",
      "Full access to guest house concierge, wi-fi, and purified water stations",
    ],
  },
  {
    slug: "2-single-bed-ac-room",
    id: "05",
    name: "2 Single Bed AC Room",
    categoryTag: "Pilgrim Companions",
    tagline: "Designed specifically for friends, relatives, or pilgrim companions preferring individual sleeping berths.",
    headline: "Dual Berths, Shared Pilgrimage",
    description: "Features two separate solid teak single beds placed side-by-side with dedicated reading lamps, charging sockets, and personal storage. Perfect for friends travelling together, temple volunteers, or parent-and-child pairs seeking individual sleeping spaces with crisp air conditioning.",
    editorialNote: "Balanced, efficient, and comfortable for two travellers with distinct sleeping rhythms.",
    capacity: "Up to 2 Guests",
    maxGuests: 2,
    bedConfiguration: "2 Separate Solid Single Beds",
    isAC: true,
    view: "Courtyard Garden Alcove",
    sizeSqFt: "220 sq ft",
    specs: [
      { label: "Occupancy", value: "2 Adults (Twin Sharing)" },
      { label: "Bed Type", value: "2 Individual Teak Single Beds" },
      { label: "Climate", value: "Individual Split AC + Ceiling Fan" },
      { label: "Bathroom", value: "Attached Restroom with Hot & Cold Shower" },
      { label: "Connectivity", value: "High-Speed Wi-Fi" },
      { label: "Storage", value: "Twin Wardrobe Hooks & Luggage Bench" },
    ],
    amenityList: [
      "Split Air Conditioning",
      "2 Individual Single Beds with Orthopedic Mattresses",
      "Attached Western Restroom with 24/7 Hot Water",
      "Individual Bedside Lamps & Power Points",
      "High-Speed Wi-Fi",
      "Daily Housekeeping & Fresh Towels",
      "Teak Luggage Rack",
      "Filtered RO Drinking Water",
      "Darshan Guidance & Morning Aarti Alarm Service",
    ],
    photos: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1VnM-WS243i2XbOp7h7mJHxTc-cOIIADSPZC0bIYQYcYkBYXDoSwcEa0iSJ1pJ6BaqYC-Sf3JboAjxm-T8XWbR3y9WVvQZtRKr_a2wmt2LKTjrh5Qi-eXHYhep5nhSVupgbPDQ1zk6f2xS1v72o3xJdomnY0WwZrpcm_a0sjMi9eCwTytI9yPK6AymQ5OsIGb9FXxtYhBDlbNLk2dIhg-DDa40q7ULCpK0PBNEzS3mkozRChuiTKOpI8yI",
        caption: "Bright twin bedroom interior with warm neutral tones, sheer curtains, and separate sleeping berths.",
        category: "hero",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WTfnV68SW6DAeqzs_1mLkKjABraczLEzE0WNBjwkdGztSzsBuyiaG52cv4FA9D6An6waqNy_uN_Sdf-Z8wGpPyqt6Mg_fquBjEHin5bXxiKdzUYym6yw91gAERitN7ypxePWUIrZgIpw7X-2D8Jj8LGG3k8X4rZnO59cZFyU3qBGJf6mmnqfND9GzEh8f6FmiTLmW1OaSvdut3s1vLQiShAx1oEjZQzs8lC5_zxuTSDBf-0kbDDLSm8zw",
        caption: "Individual reading lamp and bedside charging dock.",
        category: "detail",
      },
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ",
        caption: "Attached sandstone tiled bathroom with spotless chrome fixtures.",
        category: "bathroom",
      },
    ],
    goodToKnow: [
      "Each bed has its own dedicated switchboard and mobile charging point",
      "Quiet wing location ensures undisturbed sleep even if schedules differ",
      "Luggage rack can accommodate two large trolley bags comfortably",
    ],
  },
];
