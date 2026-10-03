
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
    title: "3D LASER SCANNING",
    text: "State-of-the-art scanning technology for capturing detailed three-dimensional measurements of aircraft components.",
  },
  {
    icon: "♢",
    title: "PRECISION MEASUREMENT",
    text: "Highly accurate dimensional data for large, intricate and complex aircraft components.",
  },
  {
    icon: "⚙",
    title: "ENGINEERING INSIGHT",
    text: "Experienced engineers help identify potential issues through detailed scanning and measurement analysis.",
  },
  {
    icon: "↗",
    title: "TIME & COST EFFICIENCY",
    text: "Faster, more precise measurement methods that reduce the time and cost associated with traditional techniques.",
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
              AIRCRAFT
              <br />
              <span>SCANNING</span>
            </h1>

            <p>
              Advanced 3D scanning solutions delivering precise measurements
              of complex aircraft components while saving time, reducing
              costs, and improving inspection accuracy.
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
              src="/Aerospace_inspection_scanner_3D.png"
              alt="Aircraft 3D scanning equipment"
              width={750}
              height={550}
              priority
              className="hydraulicImage"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FROM OBJECT TO DATA
      ===================================================== */}

      <section className="powerSection">

        {/* LEFT */}

        <div className="powerText">

          <h2>
            FROM OBJECT TO DATA
          </h2>

          <p>
            Alpha Aircraft Systems uses state-of-the-art measurement
            techniques such as 3D laser scanning to provide precise and
            detailed measurements. We have the ability to quickly and
            accurately measure large and intricate aircraft components.
          </p>

          <p>
            We use cutting-edge 3D scanning to solve complex,
            time-consuming, and expensive issues in the aviation industry.
          </p>

          <p>
            Our services and scanning methods get you results that are way
            more precise than what you could get from traditional methods,
            saving you time and money. Plus, we use experienced engineers
            to spot any potential issues.
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="powerImage">

          <Image
            src="/A8.webp"
            alt="Aircraft engineering equipment"
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
            FROM SCANNING
            <br />
            TO INSIGHT
          </h2>

          <p>
            Advanced measurement technology delivering accurate data for
            smarter, faster and more efficient aircraft engineering.
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
            A closer look at the technology, equipment and engineering
            expertise behind Alpha Aircraft Systems&apos; aircraft scanning
            capabilities.
          </p>

          <div className="workCounter">

            <Image
              src="/warehouse-3.jpg"
              alt="Aircraft scanning and engineering equipment"
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

