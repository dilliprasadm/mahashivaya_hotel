export interface Destination {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  category: "Temples & Spirituality" | "Ghats & Rivers" | "History & Heritage" | "Markets & Local Life" | "Food & Flavours" | "Festivals & Events";
  distance: string;
  travelTime: string;
  tagline: string;
  description: string;
  highlight: string;
  bestTime: string;
  imageUrl: string;
  googleMapsUrl: string;
}

export const destinationsData: Destination[] = [
  {
    id: "mahakaleshwar",
    number: "01",
    name: "Mahakaleshwar Temple",
    shortDesc: "The abode of Lord Shiva",
    category: "Temples & Spirituality",
    distance: "980 m (1.2 km driving)",
    travelTime: "8-10 mins walk / e-rickshaw",
    tagline: "One of the 12 sacred Jyotirlingas, revered as the timeless king of time.",
    description: "The primary spiritual heart of Ujjain. It enshrines the unique south-facing (Dakshinmukhi) Swayambhu Jyotirlinga. Millions flock here for the world-renowned pre-dawn Bhasma Aarti, where the deity is worshipped with sacred holy ash.",
    highlight: "Daily Bhasma Aarti at 4:00 AM • Swayambhu Lingam • Underground sanctum",
    bestTime: "Early morning (Bhasma Aarti) or late evening (Shayan Aarti)",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VJlo1EnHrp0N68L2sAAj1ocGaM-OnG9p17u1NQ_Qs1x41tsXAQfvnhLIoZIV7ZdQkvGR2e0LJ05AGrAUueC-tnhhwu3rpgGItEV-NSu5cv2qzwvpw5gnB7YahVTJwCevB235Kh4vj7Bpe8BI-Y5En6G0fw03BTXq9r0ESArn9dGjKKECDu3PB7lWSalp-O0qVRZbguG-4Ahos9ViAtcO19f7KRmcKZBF_4Ti-FPGxx77T30krfuWq7sEE",
    googleMapsUrl: "https://maps.google.com/?q=Mahakaleshwar+Jyotirlinga+Ujjain",
  },
  {
    id: "ram-ghat",
    number: "02",
    name: "Ram Ghat",
    shortDesc: "A serene spiritual experience",
    category: "Ghats & Rivers",
    distance: "1.4 km",
    travelTime: "8 mins",
    tagline: "The most ancient bathing ghat on the holy waters of the sacred Shipra River.",
    description: "Revered since ancient times as the site where Lord Rama performed ancestral rituals. Every evening at sunset, hundreds of brass diyas float gently on the shimmering river during the grand Maha Aarti, accompanied by conch shells and devotional chanting.",
    highlight: "Evening Shipra Maha Aarti at dusk • Sacred holy dip • Peaceful ghat steps",
    bestTime: "Sunset (6:00 PM - 7:30 PM)",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1UFwle2AvR7vCPvoFea-2MoLPjaX7U4tzSeGU1JFaaaEGNx3YU0gqaXHM2vgQRryV3ZXsqjcjSAeGT4OzkYzBUfXONulamG9eP86kVgO9f_ITVUabDgE30s6BA_-OHer7y0Q42YNIzteJT_o_QBNHZ5_t866CjmIO337ZMTb_4sau1agiyorfEeP8dBoV_cLk5sZ2NGQr6pPdBOE4zQ27_VgFemOTjS5NiTlw_XuSJHQcnzVE6d3ZcRnZ8",
    googleMapsUrl: "https://maps.google.com/?q=Ram+Ghat+Shipra+River+Ujjain",
  },
  {
    id: "vedh-shala",
    number: "03",
    name: "Vedh Shala (Jantar Mantar)",
    shortDesc: "India's ancient observatory",
    category: "History & Heritage",
    distance: "3.6 km",
    travelTime: "12 mins",
    tagline: "Historic solar and stellar observatory erected by Maharaja Sawai Jai Singh II.",
    description: "Built in 1725 AD when Ujjain was the prime meridian of Indian astronomy and time calculation. Houses monumental masonry instruments (Samrat Yantra, Nadi Valaya, Digamsa Yantra) that still accurately measure planetary orbits, solstices, and solar time.",
    highlight: "Massive sundials • Ancient astronomical calculation center • Tropic of Cancer axis",
    bestTime: "Morning or mid-day under clear sunlight",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuIe6wKcYKyr9DN-svGNTGVTF5QE630eo4TXWctsrpowouFha1E5Z5nL57PJTBvyRVYh4Zhq9iZKSqHOtEY5OOx1bTk1bVcgaWVDYJlgO_1yXRMXVdNTUwppOgC-GDl1h-Cyt1ZqaNI8hl31exfX2suPlbz751ABYuyxE_8M7vJPTMWQuBKbKfGNlEiTFtB8FIj--ZMrjTELTwLAlZcTQQacM1KItn8QSUni9svJ5OVva9S8W87bdP",
    googleMapsUrl: "https://maps.google.com/?q=Vedh+Shala+Jantar+Mantar+Ujjain",
  },
  {
    id: "harsiddhi-temple",
    number: "04",
    name: "Harsiddhi Temple",
    shortDesc: "A symbol of divine Shakti",
    category: "Temples & Spirituality",
    distance: "1.2 km",
    travelTime: "7 mins",
    tagline: "One of the 51 revered Shaktipeeths where the elbow of Goddess Sati is believed to have fallen.",
    description: "Famous for its extraordinary pair of towering stone Deepstambhas (lamp pillars). During evening twilight, temple staff climb these 50-foot towers to ignite hundreds of flickering mustard-oil lamps, creating an ethereal spectacle of golden fire against the night sky.",
    highlight: "Twin 50-ft deepstambha lighting ritual at dusk • Ancient Shakti shrine • Deep devotional energy",
    bestTime: "Evening (6:30 PM - 8:00 PM for deepstambha illumination)",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XLvvdyU4mroG36b4kwKjdSloGcvD4Eper-3yGieR6wNoXsll3TmJBCa3z-w7x947lz8-qJUF6D0cQmOCwxsW4VPNkwt93iSsTkbzaNzapyJXy30lrIVwUtwNrFD34ZhW1JUaXj5igNWhs5oqEe9dNOoNgphXz_x4YgUTYV-WjIg2eyY6Q0EA3NHDxOP4uXipSmXB1cX_Z98x6PClXFEZKqZNI2UaQTkppkY27gnm2lvFw8hwFgkiFSNV8",
    googleMapsUrl: "https://maps.google.com/?q=Harsiddhi+Mata+Temple+Ujjain",
  },
  {
    id: "mahakal-lok",
    number: "05",
    name: "Mahakal Lok Corridor",
    shortDesc: "Grand majestic cultural corridor",
    category: "History & Heritage",
    distance: "730 m",
    travelTime: "5 mins walk / e-rickshaw",
    tagline: "Over 900 meters of sculpted sandstone, 108 ornamental pillars, and mythological murals.",
    description: "A monumental corridor surrounding the holy Rudrasagar lake. Featuring intricately chiseled red sandstone murals depicting Shiva Purana legends, the churning of the ocean (Samudra Manthan), illuminated fountains, and grand open promenades.",
    highlight: "108 grand carved sandstone pillars • Ethereal twilight uplighting • Rudrasagar lake view",
    bestTime: "Late afternoon through night (5:00 PM - 10:00 PM)",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WdRia1wbqt0H2EeLPmC3P3f5rURZbt0VhkCr-UDyOur-1g6NkYZX7dGet8ROlBJEj3CeALbJjG-mRANPsqV8B0hMwQUPpEVWbkLz-h2bVb6NcOeTGrw8sfiUqDLevsIpTEgrkjoNF_EBsKuXFHBBaMgxj7ggOcjS_WN7Vzsk9NU_9vaekQu9ZRtU-n-saLbrHbsT69chDB1JsrYUMDce_Cdj55XVg6-kmSq--vAS31tHo7Zqhs0phyXQ",
    googleMapsUrl: "https://maps.google.com/?q=Mahakal+Lok+Corridor+Ujjain",
  },
  {
    id: "kal-bhairav",
    number: "06",
    name: "Kal Bhairav Temple",
    shortDesc: "Guardian deity of the sacred city",
    category: "Temples & Spirituality",
    distance: "4.5 km",
    travelTime: "15 mins",
    tagline: "The fierce manifestation of Shiva revered as the sentinel and protector of Avantika.",
    description: "Perched on the banks of Shipra, this ancient temple features a rare tradition where devotees offer consecrated liquid prasad to the deity. Surrounding streets are filled with aromatic flower stalls, sacred vermillion vendors, and deep folk traditions.",
    highlight: "Ancient guardian protector shrine • Marigold offerings • Unique ritual practices",
    bestTime: "Morning (8:00 AM - 12:00 PM)",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XbCXqDj9pnLH7rxKgQW_8FT8XMcXn7qsq6j250T_zrPEwHxCWikcOC3sL50lDsObYsllfKkVl4ZJqHDDZSJZGlmmA7RMNLCCOFeBG_PAMo0tUAfIQ2CbcVgEQojPPU3T7KyYvlt7fPU7-i46x_zfozzSiPB4skLVUDGe5oiHXhUlGFKGE5Qdj9qboNT65TaWtuyCZK5qraAgaO5sbBitEvn8gsD9axQYsTikwH7KkqAs_hgxdCpX0jPII",
    googleMapsUrl: "https://maps.google.com/?q=Kal+Bhairav+Temple+Ujjain",
  },
];
