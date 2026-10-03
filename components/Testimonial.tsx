"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Download,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type CertificateCard = {
  id: number;
  text: string;
  cta: string;
  image: string;
  pdf: string;
};

/* =========================================================
   DATA
========================================================= */

const cardsData: CertificateCard[] = [
  {
    id: 1,
    text: "DGCA, India",
    cta: "DOWNLOAD",
    image: "/FAMO-Certificate.webp",
    pdf: "/FAMO-Certificate.pdf",
  },
  {
    id: 2,
    text: "FAA Approved",
    cta: "DOWNLOAD",
    image: "/FAA-Approved.webp",
    pdf: "/FAA-Approved.pdf",
  },
  {
    id: 3,
    text: "EASA Approved",
    cta: "DOWNLOAD",
    image: "/EASA-Approved.webp",
    pdf: "/EASA-Approved.pdf",
  },
  {
    id: 4,
    text: "Certificate of Registration",
    cta: "DOWNLOAD",
    image: "/Certificate-of-Registration.webp",
    pdf: "/Certificate-of-Registration.pdf",
  },
  {
    id: 5,
    text: "ISO Certificate",
    cta: "DOWNLOAD",
    image: "/ISO-Certificate.webp",
    pdf: "/ISO-Certificate-1.pdf",
  },
];

/* =========================================================
   CREATE 3 COPIES
========================================================= */

const loopCards: CertificateCard[] = [
  ...cardsData,
  ...cardsData,
  ...cardsData,
];

/* =========================================================
   COMPONENT
========================================================= */

export default function WhatIfSection() {
  /* =======================================================
     REFS
  ======================================================= */

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const cardsRef = useRef<
    (HTMLDivElement | null)[]
  >([]);

  const imagesRef = useRef<
    (HTMLImageElement | null)[]
  >([]);

  const currentIndex =
    useRef<number>(cardsData.length);

  const isAnimating =
    useRef<boolean>(false);

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  /* =======================================================
     STATE
  ======================================================= */

  const [activeIndex, setActiveIndex] =
    useState<number>(0);

  /* =======================================================
     REAL INDEX
  ======================================================= */

  const getRealIndex = useCallback(
    (index: number): number => {
      return (
        ((index % cardsData.length) +
          cardsData.length) %
        cardsData.length
      );
    },
    []
  );

  /* =======================================================
     UPDATE SLIDER
  ======================================================= */

  const updateSlider = useCallback(
    (animate = true): void => {
      const index = currentIndex.current;

      cardsRef.current.forEach(
        (card, i) => {
          if (!card) return;

          const position = i - index;

          gsap.to(card, {
            x: position * 380,
            duration: animate ? 0.9 : 0,
            ease: "power4.inOut",
            overwrite: true,
          });

          const image =
            imagesRef.current[i];

          if (!image) return;

          gsap.to(image, {
            scale:
              i === index ? 1.08 : 1,
            yPercent:
              i === index ? -4 : 0,
            duration: animate ? 1.2 : 0,
            ease: "power3.out",
            overwrite: true,
          });
        }
      );
    },
    []
  );

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = useCallback((): void => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    currentIndex.current += 1;

    setActiveIndex(
      getRealIndex(currentIndex.current)
    );

    updateSlider(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current =
      setTimeout(() => {
        if (
          currentIndex.current >=
          cardsData.length * 2
        ) {
          currentIndex.current =
            cardsData.length;

          setActiveIndex(
            getRealIndex(
              currentIndex.current
            )
          );

          updateSlider(false);
        }

        isAnimating.current = false;
      }, 920);
  }, [getRealIndex, updateSlider]);

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = useCallback(
    (): void => {
      if (isAnimating.current) return;

      isAnimating.current = true;

      currentIndex.current -= 1;

      setActiveIndex(
        getRealIndex(currentIndex.current)
      );

      updateSlider(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current =
        setTimeout(() => {
          if (
            currentIndex.current <
            cardsData.length
          ) {
            currentIndex.current =
              cardsData.length * 2 - 1;

            setActiveIndex(
              getRealIndex(
                currentIndex.current
              )
            );

            updateSlider(false);
          }

          isAnimating.current = false;
        }, 920);
    },
    [getRealIndex, updateSlider]
  );

  /* =======================================================
     DOWNLOAD PDF
  ======================================================= */

  const downloadPDF = useCallback(
    (
      pdfUrl: string,
      certificateName: string
    ): void => {
      const link =
        document.createElement("a");

      link.href = pdfUrl;

      link.download =
        `${certificateName
          .replace(/\s+/g, "-")
          .toLowerCase()}.pdf`;

      link.target = "_blank";

      link.rel =
        "noopener noreferrer";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    },
    []
  );

  /* =======================================================
     INITIAL SETUP + GSAP
  ======================================================= */

  useEffect(() => {
    const cards = cardsRef.current;
    const images = imagesRef.current;

    currentIndex.current =
      cardsData.length;

    setActiveIndex(
      getRealIndex(
        currentIndex.current
      )
    );

    /* =====================================================
       GSAP CONTEXT
    ===================================================== */

    const ctx = gsap.context(() => {
      /* ===================================================
         INITIAL SLIDER
      =================================================== */

      updateSlider(false);

      /* ===================================================
         CERTIFICATES HEADING
      =================================================== */

      const heading =
        sectionRef.current?.querySelector(
          ".what-if-heading"
        );

      const headingChars =
        gsap.utils.toArray<HTMLElement>(
          ".what-if-char"
        );

      if (
        heading &&
        headingChars.length
      ) {
        gsap.set(heading, {
          perspective: 1600,
          transformStyle:
            "preserve-3d",
        });

        gsap.set(headingChars, {
          y: 120,
          z: -180,
          opacity: 0,
          rotateX: -65,
          rotateY: 12,
          scale: 0.88,
          transformOrigin:
            "50% 100%",
          transformPerspective: 1600,
          force3D: true,
        });

        gsap.to(headingChars, {
          y: 0,
          z: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 2,
          stagger: {
            each: 0.14,
            from: "start",
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            end: "top 25%",
            scrub: 4,
            invalidateOnRefresh: true,
          },
        });
      }

      /* ===================================================
         CARD ENTRANCE
      =================================================== */

      gsap.fromTo(
        cards,
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
    }, sectionRef);

    /* =====================================================
       KEYBOARD
    ===================================================== */

    const keyboardHandler = (
      event: KeyboardEvent
    ): void => {
      const target =
        event.target;

      if (
        target instanceof
          HTMLInputElement ||
        target instanceof
          HTMLTextAreaElement ||
        target instanceof
          HTMLSelectElement
      ) {
        return;
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        event.preventDefault();
        nextSlide();
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        event.preventDefault();
        previousSlide();
      }
    };

    window.addEventListener(
      "keydown",
      keyboardHandler
    );

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      window.removeEventListener(
        "keydown",
        keyboardHandler
      );

      ctx.revert();

      gsap.killTweensOf(cards);

      gsap.killTweensOf(images);

      if (timeoutRef.current) {
        clearTimeout(
          timeoutRef.current
        );

        timeoutRef.current = null;
      }

      isAnimating.current = false;
    };
  }, [
    getRealIndex,
    nextSlide,
    previousSlide,
    updateSlider,
  ]);

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section id="certifications"
      ref={sectionRef}
      className="what-if-sectionss"
    >
      <div className="what-if-container">

        <div className="what-if-box">

          {/* =================================================
              HEADING
          ================================================= */}

          <div className="what-if-heading">

            <h2>
              <span className="milestone-heading-line">

                {"CERTIFICATES"
                  .split("")
                  .map(
                    (
                      char,
                      index
                    ) => (
                      <span
                        key={`certificate-${index}`}
                        className="what-if-char"
                      >
                        {char ===
                        " "
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

          <div className="what-if-slider">

            <div className="what-if-track">

              {loopCards.map(
                (
                  card,
                  index
                ) => {

                  const realIndex =
                    getRealIndex(
                      index
                    );

                  const isActive =
                    activeIndex ===
                    realIndex;

                  return (
                    <div
                      key={`${card.id}-${index}`}
                      ref={(
                        element
                      ) => {
                        cardsRef.current[
                          index
                        ] =
                          element;
                      }}
                      className={`what-if-card ${
                        isActive
                          ? "is-active"
                          : ""
                      }`}
                    >

                      <div className="what-if-card-inner">

                        {/* =================================
                            IMAGE
                        ================================= */}

                        <Image
                          ref={(
                            element
                          ) => {
                            imagesRef.current[
                              index
                            ] =
                              element;
                          }}
                          src={
                            card.image
                          }
                          alt={
                            card.text
                          }
                          fill
                          sizes="
                            (max-width: 768px) 85vw,
                            (max-width: 1200px) 50vw,
                            380px
                          "
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
                            CONTENT
                        ================================= */}

                        <div className="what-if-content">

                          <p className="what-if-main-text">
                            {
                              card.text
                            }
                          </p>

                          {/* =================================
                              DOWNLOAD CTA - ALWAYS VISIBLE
                          ================================= */}

                          <button
                            type="button"
                            className="what-if-download-cta"
                            onClick={(
                              event
                            ) => {
                              event.stopPropagation();

                              downloadPDF(
                                card.pdf,
                                card.text
                              );
                            }}
                          >
                            <span>
                              {
                                card.cta
                              }
                            </span>

                            <Download
                              size={
                                16
                              }
                              strokeWidth={
                                1.5
                              }
                            />
                          </button>

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

          {/* =================================================
              ARROWS
          ================================================= */}

          <div className="what-if-arrows">

            <button
              type="button"
              onClick={
                previousSlide
              }
              className="what-if-arrow"
              aria-label="Previous certificate"
            >
              <ArrowLeft
                size={42}
                strokeWidth={
                  1.2
                }
              />
            </button>

            <button
              type="button"
              onClick={
                nextSlide
              }
              className="what-if-arrow"
              aria-label="Next certificate"
            >
              <ArrowRight
                size={42}
                strokeWidth={
                  1.2
                }
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}