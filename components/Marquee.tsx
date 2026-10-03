"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type CardData = {
  text: string;
  description: string;
  cta: string;
  link: string;
  image: string;
};

/* =========================================================
   CARD DATA
========================================================= */

const cardsData: CardData[] = [
  {
    text: "A.P.U. Overhaul & Repairs",
    description:
      "Specialization is all types of APU overhaul and repair",
    cta: "VIEW SERVICE",
    link:
      "/a-p-u-overhaul-repairs",
    image: "/1-APU.jpg",
  },

  {
    text: "Fuel Systems & Fuel Flow Transmitter",
    description:
      "Reliable and durable overhauling",
    cta: "VIEW SERVICE",
    link:
      "/fuel-systems-fuel-flow-transmitter",
    image: "/2-Fuel.jpg",
  },

  {
    text: "Plasma Spray & Professional Welding",
    description:
      "Cost-effective high-tech solutions",
    cta: "VIEW SERVICE",
    link:
      "/plasma-spray-professional-welding",
    image: "/3-Plasma.jpg",
  },

  {
    text: "Hydraulic Systems",
    description:
      "Long-lasting and reliable component overhaul",
    cta: "VIEW SERVICE",
    link:
      "/hydraulic-systems",
    image: "/4-Hydraulic.jpg",
  },

  {
    text: "C.S.D. & Pneumatic Systems",
    description:
      "Dealt with precision and accuracy",
    cta: "VIEW SERVICE",
    link:
      "/c-s-d-pneumatic-systems",
    image: "/5-CSD.jpg",
  },

  {
    text: "Aircraft Scanning",
    description:
      "CNN 3D scan measurements with FARO instrument",
    cta: "VIEW SERVICE",
    link:
      "/aircraft-scanning",
    image: "/6-Aircraft-Scanning.jpg",
  },

  {
    text: "Borescope Services",
    description:
      "Optimised instrument to take accurate measurements",
    cta: "VIEW SERVICE",
    link:
      "/borescope-services",
    image: "/7-Borescope.jpg",
  },
];

/* =========================================================
   CREATE 3 COPIES
========================================================= */

const loopCards: CardData[] = [
  ...cardsData,
  ...cardsData,
  ...cardsData,
];

/* =========================================================
   GET REAL CARD INDEX
========================================================= */

const getRealIndex = (index: number): number => {
  return (
    ((index % cardsData.length) +
      cardsData.length) %
    cardsData.length
  );
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhatIfSection() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const sliderRef =
    useRef<HTMLDivElement | null>(null);

  const cardsRef =
    useRef<(HTMLDivElement | null)[]>([]);

  const currentIndex =
    useRef<number>(cardsData.length);

  const isAnimating =
    useRef<boolean>(false);

  const [activeIndex, setActiveIndex] =
    useState<number>(0);

  /* =========================================================
     UPDATE SLIDER
  ========================================================= */

  const updateSlider = useCallback(
    (animate = true): void => {
      const index = currentIndex.current;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const position = i - index;

        gsap.to(card, {
          x: position * 380,
          duration: animate ? 0.9 : 0,
          ease: "power4.inOut",
          overwrite: true,
        });
      });
    },
    []
  );

  /* =========================================================
     NEXT SLIDE
  ========================================================= */

  const nextSlide = useCallback((): void => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    currentIndex.current += 1;

    setActiveIndex(
      getRealIndex(currentIndex.current)
    );

    updateSlider(true);

    window.setTimeout(() => {
      if (
        currentIndex.current >=
        cardsData.length * 2
      ) {
        currentIndex.current =
          cardsData.length;

        updateSlider(false);

        setActiveIndex(
          getRealIndex(
            currentIndex.current
          )
        );
      }

      isAnimating.current = false;
    }, 920);
  }, [updateSlider]);

  /* =========================================================
     PREVIOUS SLIDE
  ========================================================= */

  const previousSlide =
    useCallback((): void => {
      if (isAnimating.current) return;

      isAnimating.current = true;

      currentIndex.current -= 1;

      setActiveIndex(
        getRealIndex(
          currentIndex.current
        )
      );

      updateSlider(true);

      window.setTimeout(() => {
        if (
          currentIndex.current <
          cardsData.length
        ) {
          currentIndex.current =
            cardsData.length * 2 - 1;

          updateSlider(false);

          setActiveIndex(
            getRealIndex(
              currentIndex.current
            )
          );
        }

        isAnimating.current = false;
      }, 920);
    }, [updateSlider]);

  /* =========================================================
     INITIAL SETUP
  ========================================================= */

  useEffect(() => {
    currentIndex.current =
      cardsData.length;

    updateSlider(false);

    /* =====================================================
       HEADING
    ===================================================== */

    const heading =
      document.querySelector(
        ".what-if-heading"
      );

    const headingChars =
      document.querySelectorAll(
        ".what-if-char"
      );

    if (heading) {
      gsap.set(heading, {
        perspective: 1400,
      });
    }

    gsap.set(headingChars, {
      y: 100,
      z: -120,
      opacity: 0,
      rotateX: -35,
      rotateY: 8,
      scale: 0.92,
      transformOrigin: "50% 100%",
      transformPerspective: 1400,
      force3D: true,
    });

    const headingTween = gsap.to(
      headingChars,
      {
        y: 0,
        z: 0,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 2,

        stagger: {
          each: 0.12,
          from: "start",
        },

        ease: "power2.out",

        scrollTrigger: {
          trigger: ".what-if-heading",
          start: "top 85%",
          end: "top 30%",
          scrub: 6,
          invalidateOnRefresh: true,
        },
      }
    );

    /* =====================================================
       CARD ENTRANCE
    ===================================================== */

    gsap.fromTo(
      cardsRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        delay: 0.35,
        ease: "power4.out",
      }
    );

    /* =====================================================
       KEYBOARD
    ===================================================== */

    const keyboardHandler = (
      event: KeyboardEvent
    ): void => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener(
      "keydown",
      keyboardHandler
    );

    const cards =
      cardsRef.current;

    return () => {
      window.removeEventListener(
        "keydown",
        keyboardHandler
      );

      gsap.killTweensOf(cards);

      gsap.killTweensOf(
        headingChars
      );

      headingTween.scrollTrigger?.kill();
      headingTween.kill();
    };
  }, [
    nextSlide,
    previousSlide,
    updateSlider,
  ]);

  /* =========================================================
     JSX
  ========================================================= */

  return (
    <section
      ref={sectionRef}
      className="what-if-section"
    >
      <div className="what-if-container">

        <div className="what-if-box">

          {/* =================================================
              HEADING
          ================================================= */}

          <div className="what-if-heading">
            <h2>
              <span className="milestone-heading-line">
                {"SERVICES".split("").map(
                  (char, index) => (
                    <span
                      key={`service-char-${index}`}
                      className="what-if-char"
                    >
                      {char === " "
                        ? "\u00A0"
                        : char}
                    </span>
                  )
                )}
              </span>
            </h2>
          </div>

          {/* =================================================
              SLIDER
          ================================================= */}

          <div
            ref={sliderRef}
            className="what-if-slider"
          >
            <div className="what-if-track">

              {loopCards.map(
                (card, index) => (

                  <div
                    key={`${card.text}-${index}`}
                    ref={(element) => {
                      cardsRef.current[index] =
                        element;
                    }}
                    className={`what-if-card ${
                      getRealIndex(
                        activeIndex
                      ) ===
                      getRealIndex(index)
                        ? "is-active"
                        : ""
                    }`}
                  >

                    <div className="what-if-card-inner">

                      {/* =================================
                          IMAGE
                      ================================= */}

                      <Image
                        src={card.image}
                        alt={card.text}
                        width={800}
                        height={1000}
                        className="what-if-image"
                        priority={
                          index <
                          cardsData.length
                        }
                      />

                      {/* =================================
                          OVERLAY
                      ================================= */}

                      <div className="what-if-overlay" />

                      {/* =================================
                          DIRECT CONTENT
                          NO HOVER
                      ================================= */}

                      <div className="what-if-content">

                        <p className="what-if-main-text">
                          {card.text}
                        </p>

                        <p className="what-if-hover-text">
                          {card.description}
                        </p>

                        <Link
                          href={card.link}
                          className="what-if-card-cta"
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <span>
                            {card.cta}
                          </span>

                          <ArrowRight
                            size={16}
                            strokeWidth={1.5}
                          />
                        </Link>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>
          </div>

          {/* =================================================
              ARROWS
          ================================================= */}

          <div className="what-if-arrows">

            <button
              type="button"
              onClick={previousSlide}
              className="what-if-arrow"
              aria-label="Previous slide"
            >
              <ArrowLeft
                size={42}
                strokeWidth={1.2}
              />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="what-if-arrow"
              aria-label="Next slide"
            >
              <ArrowRight
                size={42}
                strokeWidth={1.2}
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}