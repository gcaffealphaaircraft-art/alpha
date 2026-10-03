
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   PERFORMANCE CARDS
========================================================= */

const performanceCards = [
  {
    icon: "◉",
    title: "DETAILED INSPECTION",
    text: "Advanced borescope equipment provides detailed visual access to areas that are difficult to inspect externally.",
  },
  {
    icon: "♢",
    title: "ACCURATE MEASUREMENT",
    text: "Inspection technology designed to capture accurate measurements for better maintenance assessment.",
  },
  {
    icon: "⚙",
    title: "EXPERT ANALYSIS",
    text: "Extensively trained personnel bring technical experience and expertise to every inspection.",
  },
  {
    icon: "↗",
    title: "ON-SITE SUPPORT",
    text: "Professional borescope services available at your location to support maintenance requirements wherever needed.",
  },
];

/* =========================================================
   SLIDER IMAGES
========================================================= */

const sliderImages = [
  {
    src: "/A1.webp",
    alt: "Aircraft Hydraulic System",
  },
  {
    src: "/A2.webp",
    alt: "Aircraft APU System",
  },
  {
    src: "/A3.webp",
    alt: "Aircraft Hydraulic Equipment",
  },
  {
    src: "/A4.webp",
    alt: "Aircraft Maintenance",
  },
  {
    src: "/21.webp",
    alt: "Hydraulic Maintenance",
  },
  {
    src: "/22.webp",
    alt: "Aerospace Technology",
  },
  
  {
    src: "/24.webp",
    alt: "Aerospace Technology",
  },
  {
    src: "/15.webp",
    alt: "Aerospace Technology",
  },
  {
    src: "/16.webp",
    alt: "Aerospace Technology",
  },
  {
    src: "/17.webp",
    alt: "Aerospace Technology",
  },
  {
    src: "/18.webp",
    alt: "Aerospace Technology",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* =======================================================
     TWO CARDS PER SLIDE
  ======================================================= */

  const cardsPerSlide = 2;

  const totalSlides = Math.ceil(
    sliderImages.length / cardsPerSlide
  );

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= totalSlides - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return totalSlides - 1;
      }

      return prev - 1;
    });
  };

  return (
    <main className="site">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="heroContent">

          {/* HERO TEXT */}

          <div className="heroText">

            <h1>
              BORESCOPE
              <br />
              <span>SERVICES</span>
            </h1>

            <p>
              Advanced borescope inspection solutions providing accurate
              measurements and detailed visual assessment of aircraft
              components, wherever your maintenance requirements take you.
            </p>

            <div className="heroButtons">

              <a
              href="/contact"
              className="aboutButton"
            >
              CONTACT US

              <ArrowRight
                size={18}
                strokeWidth={1.8}
              />

            </a>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="heroImageArea">

            <Image
              src="/Aerospace_borescope.png"
              alt="Borescope inspection equipment"
              width={750}
              height={550}
              priority
              className="hydraulicImage"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PRECISION IN EVERY SYSTEM
      ===================================================== */}

      <section className="powerSection">

        {/* LEFT */}

        <div className="powerText">

          <h2>
            PRECISION IN EVERY SYSTEM
          </h2>

          <p>
            Alpha Aircraft Systems provides specialised borescope inspection
            services using advanced instruments designed to provide accurate
            measurements and detailed visual assessment of aircraft
            components.
          </p>

          <p>
            Our extensively trained personnel bring extensive experience and
            technical expertise to every inspection, helping identify
            conditions that may not be visible through conventional external
            examination.
          </p>

          <p>
            Whether you require support at your facility or elsewhere, our team
            can provide professional borescope services wherever your aircraft
            maintenance requirements take you. With a focus on accurate
            inspection and dependable technical support, we help operators make
            informed maintenance decisions.
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="powerImage">

          <Image
            src="/14.webp"
            alt="Aircraft hydraulic pipes"
            fill
            className="coverImage"
          />

          <div className="powerImageOverlay" />

        </div>

      </section>


      {/* =====================================================
          PERFORMANCE
      ===================================================== */}

      <section
        className="performance"
        id="solutions"
      >

        <div className="performanceBackgroundDots" />

        <div className="sectionHeading">

          <h2>
            FROM INSPECTION
            <br />
            TO INSIGHT
          </h2>

          <p>
            Advanced borescope technology delivering detailed visibility and
            accurate information for informed aircraft maintenance.
          </p>

        </div>


        <div className="performanceGrid">

          {performanceCards.map((card, index) => (

            <div
              className="performanceCard"
              key={index}
            >

              <div className="cardTop">

                <div className="cardIcon">
                  {card.icon}
                </div>

                <span className="cardNumber">
                  0{index + 1}
                </span>

              </div>

              <h3>
                {card.title}
              </h3>

              <p>
                {card.text}
              </p>

              {/* CARD ARROW */}

              <span className="cardArrow">
                <ArrowUpRight size={22} strokeWidth={1.8} />
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHERE THE WORK HAPPENS
      ===================================================== */}

      <section className="workSection">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="workLeft">

          <h2>
            WHERE THE WORK HAPPENS
          </h2>

          <p>
            A closer look at the equipment, inspection technology and technical
            expertise behind Alpha Aircraft Systems&apos; borescope
            capabilities.
          </p>

          <div className="workCounter">

            <Image
              src="/warehouse-3.jpg"
              alt="Aircraft inspection equipment"
              width={750}
              height={550}
              priority
            />

          </div>

        </div>


        {/* ===================================================
            RIGHT SLIDER
        =================================================== */}

        <div className="workRight">

          {/* IMAGE SLIDER */}

          <div className="twoCardSlider">

            <div
              className="twoCardTrack"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >

              {Array.from({
                length: totalSlides,
              }).map((_, slideIndex) => {

                const firstIndex =
                  slideIndex * cardsPerSlide;

                const firstCard =
                  sliderImages[firstIndex];

                const secondCard =
                  sliderImages[firstIndex + 1];

                return (

                  <div
                    className="twoCardSlide"
                    key={slideIndex}
                  >

                    {/* ===================================
                        CARD ONE
                    =================================== */}

                    {firstCard && (

                      <div className="imageCard">

                        <Image
                          src={firstCard.src}
                          alt={firstCard.alt}
                          fill
                          sizes="(max-width: 700px) 100vw, 40vw"
                          className="sliderCardImage"
                        />

                        <div className="imageCardOverlay" />

                        <div className="imageCardContent" />

                      </div>

                    )}


                    {/* ===================================
                        CARD TWO
                    =================================== */}

                    {secondCard && (

                      <div className="imageCard">

                        <Image
                          src={secondCard.src}
                          alt={secondCard.alt}
                          fill
                          sizes="(max-width: 700px) 100vw, 40vw"
                          className="sliderCardImage"
                        />

                        <div className="imageCardOverlay" />

                        <div className="imageCardContent" />

                      </div>

                    )}

                  </div>

                );

              })}

            </div>

          </div>


          {/* =================================================
              ABOUT BOTTOM
          ================================================= */}

          <div className="aboutBottom">

            <p>
              Discover the expertise behind Alpha Aircraft Systems.
            </p>

          </div>


          {/* =================================================
              SLIDER BOTTOM CONTROLS
          ================================================= */}

          <div className="sliderBottomControls">

            {/* ABOUT BUTTON */}

            <a
              href="/about"
              className="aboutButton"
            >
              ABOUT US

              <span>
                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                />
              </span>

            </a>


            {/* SLIDER ARROWS */}

            <div className="twoCardControls">

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft
                  size={28}
                  strokeWidth={1.5}
                />
              </button>


              {/* NEXT */}

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight
                  size={28}
                  strokeWidth={1.5}
                />
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

