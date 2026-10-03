
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
    title: "HIGH-TEMPERATURE PROTECTION",
    text: "Advanced plasma coatings designed to protect components exposed to demanding temperatures.",
  },
  {
    icon: "♢",
    title: "CORROSION RESISTANCE",
    text: "Protective coating solutions that help defend critical components against corrosion and degradation.",
  },
  {
    icon: "⚙",
    title: "WEAR PROTECTION",
    text: "Surface treatments designed to improve component durability and service life.",
  },
  {
    icon: "↗",
    title: "PROFESSIONAL WELDING",
    text: "Specialised welding expertise for efficient and reliable aircraft component repair.",
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
              PLASMA
              <br />
              <span>SPRAY</span>
            </h1>

            <p>
              Alpha Aircraft Systems provides high-performance plasma spray
              and professional welding solutions to protect aircraft
              components and equipment from high temperatures, corrosion,
              and wear.
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
              src="/Plasma.png"
              alt="Aircraft Plasma Spray System"
              width={750}
              height={550}
              priority
              className="hydraulicImage"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROTECTION BUILT FOR PERFORMANCE
      ===================================================== */}

      <section className="powerSection">

        {/* LEFT */}

        <div className="powerText">

          <h2>
            PROTECTION BUILT FOR PERFORMANCE
          </h2>

          <p>
            Alpha Aircraft Systems offers a high-performance solution that is
            a versatile and cost-efficient spraying-welding method for
            protecting aircraft components and equipment. These coatings are
            applied to both small and large aircraft components to protect
            them from high temperatures, corrosion, and wear.
          </p>

          <p>
            In the aerospace industry, we specialize in high performance
            plasma spraying and professional welding. If you&apos;re looking
            for a more efficient and safe way to fix your aircraft,
            you&apos;ve come to the right place.
          </p>

          <p>
            We&apos;re your one-stop-shop for all your spraying and welding
            needs. Our highly trained experts work with top-notch techniques.
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="powerImage">

          <Image
            src="/c20.jpg"
            alt="Aircraft Plasma Spray Equipment"
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
            FROM PROTECTION
            <br />
            TO PERFORMANCE
          </h2>

          <p>
            Specialised coating and welding solutions designed to protect
            aircraft components and maintain dependable performance.
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
            A closer look at the equipment, technical expertise and working
            environment behind Alpha Aircraft Systems&apos; hydraulic
            maintenance capabilities.
          </p>


          <div className="workCounter">

            <Image
              src="/warehouse-3.jpg"
              alt="Aircraft Plasma Spray Equipment"
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


            {/* =================================================
                SLIDER ARROWS
            ================================================= */}

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

