import React from "react";

export const HandDrawnStar = ({ className = "w-6 h-6 text-yellow-400" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export const HandDrawnSparkle = ({ className = "w-5 h-5 text-amber-400" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className={className}
  >
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
  </svg>
);

export const UnderlineDoodle = ({ className = "text-pink-400" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 10"
    fill="none"
    preserveAspectRatio="none"
    className={`w-full h-2 ${className}`}
  >
    <path
      d="M3 5 C 20 2, 40 8, 60 4 C 80 1, 90 7, 97 3"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CircleDoodle = ({ className = "text-blue-400" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    preserveAspectRatio="none"
    className={`absolute inset-0 w-full h-full -z-10 ${className}`}
  >
    <path
      d="M 50,5 C 20,5 5,25 5,50 C 5,75 25,95 50,95 C 75,95 95,75 95,50 C 95,25 70,5 45,8"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDoodle = ({ className = "text-indigo-400" }: { className?: string }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 25 C 15 10, 35 12, 42 22" />
    <path d="M35 25 L 42 22 L 39 15" />
  </svg>
);

export const LoopDoodle = ({ className = "text-emerald-400" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 30"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M 5,15 C 20,5 30,5 35,15 C 40,25 30,25 45,15 C 55,5 55,25 58,15" />
  </svg>
);

export const SpeechBubbleDoodle = ({ className = "text-black" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 5 H90 C95 5, 95 10, 95 15 V40 C95 45, 95 48, 90 48 H40 L25 55 V48 H10 C5 48, 5 45, 5 40 V15 C5 10, 5 5, 10 5 Z" fill="#ffffff" />
  </svg>
);

export const HighlightMarker = ({ className = "text-yellow-200" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 40"
    fill="none"
    preserveAspectRatio="none"
    className={`absolute -z-10 h-full w-full opacity-60 ${className}`}
  >
    <path
      d="M5 20 C 50 15, 100 25, 195 18"
      stroke="currentColor"
      strokeWidth="26"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckDoodle = ({ className = "text-green-500" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6L9 17L4 12" />
  </svg>
);
