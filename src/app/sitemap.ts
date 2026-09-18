import type { MetadataRoute } from "next";
import { roomsData } from "@/lib/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahashivayaguesthouse.com";

  const staticRoutes = [
    "",
    "/rooms",
    "/amenities",
    "/gallery",
    "/explore-ujjain",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const roomRoutes = roomsData.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...roomRoutes];
}
