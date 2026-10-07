"use client";

import Image from "next/image";
import { useEffect } from "react";

type HomePopupProps = {
  onClose: () => void;
};

export default function HomePopup({ onClose }: HomePopupProps) {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="home-popup-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        aria-label="Marrakech Airshow announcement"
        aria-modal="true"
        className="home-popup-dialog"
        role="dialog"
      >
        <button
          aria-label="Close announcement"
          autoFocus
          className="home-popup-close"
          onClick={onClose}
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <Image
          alt="Alpha Aircraft Systems at the Marrakech Airshow, Booth M8, October 7 and 8"
          className="home-popup-image"
          height={1408}
          priority
          src="/Alpha Aircraft Systems provides first-class APU services.webp"
          width={1122}
        />
      </section>
    </div>
  );
}
