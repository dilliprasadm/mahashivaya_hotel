import React from "react";

export function MakeMyTripLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* make text in navy */}
      <text x="2" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="800" fill="#002B49">
        make
      </text>
      {/* red rounded badge with my */}
      <rect x="62" y="7" width="34" height="26" rx="5" fill="#EA2330" />
      <text x="67" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="900" fill="#FFFFFF">
        my
      </text>
      {/* trip text in navy */}
      <text x="101" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="800" fill="#002B49">
        trip
      </text>
    </svg>
  );
}

export function BookingComLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 170 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Booking.com text in official deep blue */}
      <text x="2" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="800" fill="#003580" letterSpacing="-0.5px">
        Booking
      </text>
      {/* Light blue dot */}
      <circle cx="106" cy="23" r="3.5" fill="#006CE4" />
      <text x="114" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="700" fill="#003580" letterSpacing="-0.5px">
        com
      </text>
    </svg>
  );
}

export function AgodaLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 5 Distinctive Colored Agoda Dots */}
      <circle cx="48" cy="8" r="4.2" fill="#E12827" />
      <circle cx="59" cy="5.5" r="4.2" fill="#F4AA00" />
      <circle cx="70" cy="5.5" r="4.2" fill="#4DA635" />
      <circle cx="81" cy="5.5" r="4.2" fill="#1472BA" />
      <circle cx="92" cy="8" r="4.2" fill="#7D2383" />
      {/* agoda wordmark */}
      <text x="35" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#222222" letterSpacing="-0.5px">
        agoda
      </text>
    </svg>
  );
}

export function GoibiboLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* go in bright orange */}
      <text x="2" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="26" fontWeight="900" fill="#F26722" letterSpacing="-0.5px">
        go
      </text>
      {/* ibibo in royal blue */}
      <text x="36" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#2D68C4" letterSpacing="-0.5px">
        ibibo
      </text>
    </svg>
  );
}

export function OtaBrandLogo({ id, className = "h-7 w-auto" }: { id: string; className?: string }) {
  switch (id) {
    case "makemytrip":
      return <MakeMyTripLogo className={className} />;
    case "booking":
      return <BookingComLogo className={className} />;
    case "agoda":
      return <AgodaLogo className={className} />;
    case "goibibo":
      return <GoibiboLogo className={className} />;
    default:
      return null;
  }
}
