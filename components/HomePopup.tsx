"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./HomePopup.css";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="home-popup-overlay"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="home-popup"
        role="dialog"
        aria-modal="true"
        aria-label="MRO Europe 2026 event announcement"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="home-popup-close"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
        >
          &times;
        </button>

        <Image
          src="/mro-europe-popup.jpg"
          alt="Alpha Aircraft Systems at MRO Europe, Amsterdam, 28–29 October 2026"
          width={1080}
          height={1620}
          priority
          className="home-popup-image"
          sizes="(max-width: 600px) 92vw, 480px"
        />
      </div>
    </div>
  );
}