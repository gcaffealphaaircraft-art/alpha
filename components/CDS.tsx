
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* =========================================================
   PERFORMANCE CARDS
========================================================= */

const performanceCards = [
  {
    icon: "◉",
    title: "SYSTEM SERVICING",
    text: "Professional servicing designed to maintain C.S.D. and pneumatic systems in dependable operating condition.",
  },
  {
    icon: "♢",
    title: "TROUBLESHOOTING",
    text: "Technical expertise to identify and address system issues efficiently and accurately.",
  },
  {
    icon: "⚙",
    title: "COMPONENT SUPPORT",
    text: "Experienced handling of component removal, installation and maintenance requirements.",
  },
  {
    icon: "↗",
    title: "OPERATIONAL TESTING",
    text: "Testing procedures focused on verifying system performance and operational reliability.",
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
     NEXT
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
     PREVIOUS
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
              C.S.D
              <br />
              <span>SYSTEMS</span>
            </h1>

            <p>
              Specialised maintenance, repair and testing solutions ensuring
              reliable performance of critical C.S.D. and pneumatic systems
              across diverse aircraft applications.
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
              src="/CSD.png"
              alt="C.S.D. System"
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
            Your aircraft&apos;s constant speed generator and pneumatic
            systems need maintenance, and Alpha Aircraft Systems can help.
            We know how things work because we help with a lot of important
            flight parts, so our techniques have come a long way.
          </p>

          <p>
            We are an excellent option for your CSD and Pneumatic systems
            because we have a deep understanding of their design and
            operation.
          </p>

          <p>
            Maintenance for these systems includes service, troubleshooting,
            component removal, and installation, and operational testing
            where we have a proven track record of productivity.
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="powerImage">

          <Image
            src="/19.webp"
            alt="Aircraft Hydraulic Pipes"
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
            FROM SYSTEMS
            <br />
            TO PERFORMANCE
          </h2>

          <p>
            Specialised maintenance and testing focused on keeping critical
            aircraft systems reliable and operational.
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

              {/* CARD ARROW ICON */}

              <span className="cardArrow">
                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                />
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
            A closer look at the equipment, technical processes and expertise
            behind Alpha Aircraft Systems&apos; C.S.D. and pneumatic system
            capabilities.
          </p>

          <div className="workCounter">

            <Image
              src="/warehouse-3.jpg"
              alt="Aircraft C.S.D. and pneumatic system equipment"
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
              SLIDER BOTTOM
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

              <ArrowRight
                size={18}
                strokeWidth={1.8}
              />

            </a>


            {/* SLIDER ARROWS */}

            <div className="twoCardControls">

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="sliderArrowBtn"
              >
                <ArrowLeft
                  size={22}
                  strokeWidth={1.8}
                />
              </button>


              {/* NEXT */}

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="sliderArrowBtn"
              >
                <ArrowRight
                  size={22}
                  strokeWidth={1.8}
                />
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

