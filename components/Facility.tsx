"use client";

import { useEffect, useRef } from "react";

const facilities = [
  {
    image: "/Alpha-Aircrafts-Office.webp",
    title: "Alpha Aircraft Systems Headquarters",
    description:
      "A strategically located aerospace facility located at Hialeah, Florida, USA, integrating engineering, testing, repair, and logistics operations.",
  },
  {
    image: "/Alpha Team.JPG",
    title: "Experienced Aerospace Professionals",
    description:
      "A multidisciplinary team dedicated to delivering dependable aviation solutions and technical excellence.",
  },
  {
    image: "/Real APU Experts.webp",
    title: "Expertise You Can Trust",
    description:
      "Our leadership and engineering team bring extensive experience in APU maintenance, testing, and technical support.",
  },
  {
    image: "/Test Room (5).webp",
    title: "APU Test Cell & Control Room",
    description:
      "Dedicated testing infrastructure enables controlled performance evaluation and validation of auxiliary power units.",
  },
  {
    image: "/Test Room (2).jpg",
    title: "Advanced Performance Testing Environment",
    description:
      "Specialized test cell capabilities provide accurate diagnostics, validation, and certification support for APU systems.",
  },
  {
    image: "/MILESTONES6.webp",
    title: "Precision Maintenance Operations",
    description:
      "Every component undergoes rigorous inspection and servicing processes to meet the highest aviation standards.",
  },
  {
    image: "/Machinary.webp",
    title: "Advanced Test & Diagnostic Equipment",
    description:
      "State-of-the-art testing systems provide accurate performance analysis and reliability verification.",
  },
  {
    image: "/Machinary (1).webp",
    title: "Precision Engineering & Reverse Engineering Lab",
    description:
      "Advanced CAD modelling and dimensional analysis enable accurate component replication and engineering validation.",
  },
  {
    image: "/Machinary (2).webp",
    title: "3D Metrology & Inspection Center",
    description:
      "FARO Quantum ScanArm technology delivers high-precision measurement and aerospace-grade quality verification.",
  },
  {
    image: "/Machinary (3).webp",
    title: "Digital Component Scanning Facility",
    description:
      "High-resolution 3D scanning supports inspection, reverse engineering, and component performance assessment.",
  },
  {
    image: "/Accessory Room 4.webp",
    title: "Component Repair Workshop",
    description:
      "Skilled technicians perform precision maintenance, overhaul, and restoration of critical aerospace accessories.",
  },
  {
    image: "/Accessory Room 2.webp",
    title: "Accessory Assembly & Inspection Area",
    description:
      "Detailed assembly and quality verification processes ensure compliance with aerospace standards.",
  },
  {
    image: "/20.webp",
    title: "Inventory & Logistics Center",
    description:
      "Organized inventory management ensures fast turnaround times and dependable parts availability.",
  },
  {
    image: "/Purchase and Sales.webp",
    title: "Procurement & Customer Support Operations",
    description:
      "A specialized team ensures seamless sourcing, order management, and responsive customer coordination.",
  },
];

export default function FacilitiesPage() {
  // FIX: Proper TypeScript type
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("facility-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    cards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="facility-page">
      <section className="facility-section">
        <div className="facility-circle"></div>

        <div className="facility-container">
          {/* HEADER */}
          <div className="facility-header">
            <div className="facility-header-left">
              <h1>
                WORLD - CLASS MRO
                <strong>INFRASTRUCTURE</strong>
              </h1>

              <h2>Inside Alpha Aircraft Systems</h2>
            </div>

            <div className="facility-header-right">
              <div className="facility-header-line"></div>

              <p>
                Advanced engineering, testing, repair, and logistics
                capabilities under one integrated facility.
              </p>
            </div>
          </div>

          {/* FACILITY GRID */}
          <div className="facility-grid">
            {facilities.map((facility, index) => (
              <article
                key={facility.title}
                ref={(element: HTMLElement | null) => {
                  cardsRef.current[index] = element;
                }}
                className={`facility-card facility-card-${index + 1}`}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="facility-image"
                />

                <div className="facility-overlay"></div>

                <div className="facility-content">
                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}