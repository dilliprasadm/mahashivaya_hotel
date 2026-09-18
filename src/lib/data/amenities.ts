export interface AmenityItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  detail: string;
}

export const amenitiesList: AmenityItem[] = [
  {
    id: "ac",
    name: "Split Air Conditioning",
    category: "Climate & Rest",
    tagline: "Quiet, individualized thermal comfort after walking under the Malwa sun.",
    description: "Modern, whisper-quiet split air conditioners with remote climate control in all AC rooms. Keeps the interior crisp and calming, whether you return from afternoon temple queues or a humid monsoon morning.",
    iconName: "Wind",
    badge: "Climate Comfort",
    detail: "Available in AC Double, 4-Bed AC, 5-Bed Balcony, and 2-Single Bed rooms.",
  },
  {
    id: "linen",
    name: "Crisp Clean White Linen",
    category: "Restorative Sleep",
    tagline: "High-thread-count organic cotton washed and sanitized for deep rejuvenation.",
    description: "We understand that temple darshan requires waking up as early as 3:00 AM for Bhasma Aarti. Our beds are dressed in freshly laundered 300+ thread count pure white sheets and supportive pillows.",
    iconName: "BedDouble",
    badge: "Sanitized Comfort",
    detail: "Daily sheet changes and hypoallergenic covers on request.",
  },
  {
    id: "water",
    name: "24/7 Hot & Cold Water",
    category: "Hygiene & Purity",
    tagline: "Instant high-capacity geysers for sacred pre-dawn cleansing baths.",
    description: "Taking a purifying holy bath before early morning darshan is a vital spiritual tradition in Ujjain. Our attached restrooms feature dedicated electric geysers delivering hot running water without interruption.",
    iconName: "Droplets",
    badge: "24/7 Availability",
    detail: "Tested pressure showers and clean mixer taps.",
  },
  {
    id: "wifi",
    name: "High-Speed Fiber Wi-Fi",
    category: "Connectivity",
    tagline: "Seamless high-bandwidth internet across all guest rooms and courtyard areas.",
    description: "Stay connected with family back home, share sacred photos of Ujjain, download temple gate passes, or manage work commitments with robust optical fiber Wi-Fi throughout the property.",
    iconName: "Wifi",
    badge: "Complimentary",
    detail: "Fast speeds suitable for video calls and darshan pass verification.",
  },
  {
    id: "charging",
    name: "Bedside Universal Charging",
    category: "Convenience",
    tagline: "Multiple 3-pin and USB charging points right beside every sleeping berth.",
    description: "Never stretch across the room to plug in your devices. Every single bed is equipped with bedside charging sockets to ensure your phone and power banks are fully charged for recording the city's sights.",
    iconName: "Zap",
    badge: "Thoughtful Design",
    detail: "Universal multi-plug compatible with all Indian and international adapters.",
  },
  {
    id: "housekeeping",
    name: "Impeccable Daily Hygiene",
    category: "Cleanliness",
    tagline: "A spotless sanctuary maintained to rigorous boutique hospitality standards.",
    description: "We maintain uncompromised hygiene: sanitized bathroom tiles, sparkling Kota stone floors, spotless waste clearance, and fresh towels provided daily with genuine care.",
    iconName: "Sparkles",
    badge: "Daily Service",
    detail: "Trained in-house staff attending to room maintenance every morning.",
  },
  {
    id: "concierge",
    name: "Darshan & Temple Concierge",
    category: "Guest Assistance",
    tagline: "Authentic local advice for Bhasma Aarti, VIP passes, and transit.",
    description: "Our front desk hosts have deep roots in Ujjain. We guide our guests on official temple timings, dress codes, queue protocols, reliable e-rickshaw drivers, and sacred rituals without commercial pressure.",
    iconName: "Compass",
    badge: "Local Knowledge",
    detail: "Assistance with official Mahakal temple protocols and luggage staging.",
  },
  {
    id: "ro-water",
    name: "Purified RO Drinking Water",
    category: "Health & Care",
    tagline: "Pure, multi-stage filtered drinking water available round the clock.",
    description: "Stay hydrated during your pilgrimage. Clean, cold and room-temperature RO-purified drinking water stations are accessible to all guests at all hours free of charge.",
    iconName: "ShieldCheck",
    badge: "Always Fresh",
    detail: "Eco-friendly refill stations reducing single-use plastic bottles.",
  },
];
