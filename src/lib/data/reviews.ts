export interface GuestReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  quote: string;
  context: string;
  stayType: string;
}

export const reviewsStats = {
  averageRating: "4.8",
  maxRating: "5.0",
  totalReviews: "651+",
  platform: "Google Verified Reviews",
  badge: "Exceptional Pilgrim Satisfaction",
};

export const guestReviews: GuestReview[] = [
  {
    id: "r-01",
    author: "Rajesh & Sunita Sharma",
    city: "Ahmedabad, Gujarat",
    rating: 5,
    date: "February 2026",
    quote: "The proximity to Mahakal Lok and the temple is unbeatable. We attended the 4:00 AM Bhasma Aarti and walked there in under 8 minutes without needing to fight for autos in the dark. The room was spotless, the bed was genuinely comfortable, and hot water was instant.",
    context: "Family Darshan Trip",
    stayType: "Stayed in 4-Bed AC Room",
  },
  {
    id: "r-02",
    author: "Dr. Arvind Joshi",
    city: "Pune, Maharashtra",
    rating: 5,
    date: "January 2026",
    quote: "Very peaceful and clean guest house. The staff guided us on the VIP darshan pass counter and arranged e-rickshaws for our elderly parents to Ram Ghat for evening aarti. Highly respectful and honest hospitality.",
    context: "Pilgrimage with Elderly Parents",
    stayType: "Stayed in 5-Bed Balcony Suite",
  },
  {
    id: "r-03",
    author: "Pradeep & Meenakshi Verma",
    city: "Lucknow, Uttar Pradesh",
    rating: 5,
    date: "March 2026",
    quote: "Usually budget guest houses near temples are noisy and poorly maintained, but Mahashivaya was an exceptional surprise. Clean white bedsheets, very quiet AC, and spotless modern bathroom. We felt safe and very well cared for.",
    context: "Spiritual Weekend Retreat",
    stayType: "Stayed in AC Double Room",
  },
  {
    id: "r-04",
    author: "Vikram Rathore",
    city: "Jaipur, Rajasthan",
    rating: 5,
    date: "February 2026",
    quote: "Booked directly on WhatsApp — response was immediate and courteous. Check-in was seamless even though our train arrived early morning. They kept our luggage safely while we went for morning temple darshan.",
    context: "Solo Darshan Trip",
    stayType: "Stayed in AC Double Room",
  },
];
