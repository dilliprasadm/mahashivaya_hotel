"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface BookingContextType {
  isOpen: boolean;
  selectedRoom: string | null;
  openBooking: (roomName?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const openBooking = (roomName?: string) => {
    if (roomName) {
      setSelectedRoom(roomName);
    }
    // Popup commented for later use as requested; navigates directly to contact page
    // setIsOpen(true);
    router.push("/contact");
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedRoom(null);
  };

  return (
    <BookingContext.Provider value={{ isOpen, selectedRoom, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
