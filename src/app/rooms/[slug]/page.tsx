import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { roomsData } from "@/lib/data/rooms";
import RoomDetailClient from "./RoomDetailClient";

export function generateStaticParams() {
  return roomsData.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found | Mahashivaya Guest House",
    };
  }

  return {
    title: `${room.name} | Mahashivaya Guest House Ujjain`,
    description: `${room.headline} - ${room.tagline}. Located 730m from Mahakal Lok in Ujjain.`,
    openGraph: {
      title: `${room.name} | Mahashivaya Guest House Ujjain`,
      description: room.description,
      images: [room.photos[0]?.url || ""],
    },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const otherRooms = roomsData.filter((r) => r.slug !== slug);

  return <RoomDetailClient room={room} otherRooms={otherRooms} />;
}
