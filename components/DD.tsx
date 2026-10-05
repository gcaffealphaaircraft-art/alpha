
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   EXHIBITION DATA
========================================================= */

const exhibition = {
  name: "MRO ASIA PACIFIC",

  date: "September 22–24, 2026",

  location: "Singapore EXPO, Singapore",

  heroImage: "/hero.png",

  aboutImage: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (6).jpeg",

  description:
    "The energy across the exhibition floor at MRO Asia-Pacific was exceptional. Beyond discussing the latest advancements in aircraft systems, maintenance, and fleet reliability, the highlight of our time in Singapore was reconnecting with long-time industry friends, partners, and colleagues from across the Asia-Pacific region. Taking the time to catch up, exchange ideas face-to-face, and forge new relationships reminded us why this vibrant region continues to drive global aviation forward.",

  highlights: [
    "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
    "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (3).jpeg",
    "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (4).jpeg",
    "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (5).jpeg",
    "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (6).jpeg",
  ],

  video: "/Alpha-Aircraft-Systems-Facility-at-Hialeah.mp4",
};


/* =========================================================
   PAGE
========================================================= */

export default function ExhibitionPage() {
  const alphaExhibitionPageRef =
    useRef<HTMLDivElement>(null);


  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useEffect(() => {
    const page = alphaExhibitionPageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {

      /* ===================================================
         HERO
      =================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(
          ".alpha-exhibition-hero-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          }
        )

        .from(
          ".alpha-exhibition-hero-line",
          {
            width: 0,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.6"
        )

        .from(
          ".alpha-exhibition-info-card",
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.35"
        );


      /* ===================================================
         ABOUT CONTENT
      =================================================== */

      gsap.from(
        ".alpha-exhibition-about-content",
        {
          scrollTrigger: {
            trigger: ".alpha-exhibition-about",
            start: "top 75%",
            once: true,
          },

          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }
      );


      /* ===================================================
         ABOUT IMAGE
      =================================================== */

      gsap.from(
        ".alpha-exhibition-about-image",
        {
          scrollTrigger: {
            trigger: ".alpha-exhibition-about",
            start: "top 75%",
            once: true,
          },

          x: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }
      );


      /* ===================================================
         HIGHLIGHTS HEADING
      =================================================== */

      gsap.from(
        ".alpha-exhibition-highlights-heading",
        {
          scrollTrigger: {
            trigger: ".alpha-exhibition-highlights",
            start: "top 75%",
            once: true,
          },

          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        }
      );


      /* ===================================================
         GALLERY
      =================================================== */

      gsap.from(
        ".alpha-exhibition-gallery-item",
        {
          scrollTrigger: {
            trigger: ".alpha-exhibition-gallery",
            start: "top 80%",
            once: true,
          },

          y: 70,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );


      /* ===================================================
         CTA
      =================================================== */

      gsap.from(
        ".alpha-exhibition-cta-content",
        {
          scrollTrigger: {
            trigger: ".alpha-exhibition-cta",
            start: "top 80%",
            once: true,
          },

          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

    }, page);


    return () => {
      ctx.revert();
    };

  }, []);


  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <main
      ref={alphaExhibitionPageRef}
      className="alpha-exhibition-page"
    >

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="alpha-exhibition-hero">

        {/* HERO BACKGROUND */}

        <div className="alpha-exhibition-hero-background">

          <Image
            src={exhibition.heroImage}
            alt={exhibition.name}
            fill
            priority
            sizes="100vw"
          />

        </div>


        {/* HERO OVERLAY */}

        <div className="alpha-exhibition-hero-overlay" />


        {/* HERO CONTENT */}

        <div className="alpha-exhibition-container alpha-exhibition-hero-inner">

          {/* HERO TITLE */}

          <div className="alpha-exhibition-hero-heading">

            <h1 className="alpha-exhibition-hero-title">
              EXHIBITIONS
            </h1>

            <span className="alpha-exhibition-hero-line" />

          </div>


          {/* INFO CARD */}

          <div className="alpha-exhibition-info-card">

            <h2 className="alpha-exhibition-info-title">
              {exhibition.name}
            </h2>


            {/* DATE */}

            <div className="alpha-exhibition-info-row">

              <div className="alpha-exhibition-info-icon">

                <CalendarDays
                  size={25}
                  strokeWidth={1.7}
                />

              </div>

              <span>
                {exhibition.date}
              </span>

            </div>


            {/* LOCATION */}

            <div className="alpha-exhibition-info-row">

              <div className="alpha-exhibition-info-icon">

                <MapPin
                  size={25}
                  strokeWidth={1.7}
                />

              </div>

              <span>
                {exhibition.location}
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT EXHIBITION
      ===================================================== */}

      <section className="alpha-exhibition-about">

        <div className="alpha-exhibition-container alpha-exhibition-about-grid">

          {/* LEFT CONTENT */}

          <div className="alpha-exhibition-about-content">

            <div className="alpha-exhibition-section-label">

              <span />

              <p>
                ABOUT THE EXHIBITION
              </p>

            </div>


            <h2 className="alpha-exhibition-about-title">

              CONNECTING AVIATION

              <br />

              EXPERTISE AND OPPORTUNITY

            </h2>


            <p className="alpha-exhibition-about-description">
              {exhibition.description}
            </p>


            <span className="alpha-exhibition-about-bottom-line" />

          </div>


          {/* RIGHT IMAGE */}

          <div className="alpha-exhibition-about-image">

            <div className="alpha-exhibition-about-image-wrapper">

              <Image
                src={exhibition.aboutImage}
                alt="Alpha Aircraft Systems Exhibition"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXHIBITION HIGHLIGHTS — FULL WIDTH
      ===================================================== */}

      <section className="alpha-exhibition-highlights">

        {/* =================================================
            FULL WIDTH HEADING
        ================================================= */}

        <div className="alpha-exhibition-highlights-heading">

          <div className="alpha-exhibition-section-label">

            <span />

            <p>
              EXHIBITION HIGHLIGHTS
            </p>

          </div>


          <h2 className="alpha-exhibition-highlights-title">

            A LOOK INSIDE

            <br />

            {exhibition.name}

          </h2>

        </div>


        {/* =================================================
            FULL WIDTH GALLERY
        ================================================= */}

        <div className="alpha-exhibition-gallery">

          {exhibition.highlights.map(
            (image, index) => (

              <div
                key={`${image}-${index}`}
                className={`
                  alpha-exhibition-gallery-item
                  alpha-exhibition-gallery-${index + 1}
                `}
              >

                <div className="alpha-exhibition-gallery-image">

                  <Image
                    src={image}
                    alt={`${exhibition.name} highlight ${index + 1}`}
                    fill
                    sizes="100vw"
                  />


                  {/* IMAGE OVERLAY */}

                  <div className="alpha-exhibition-gallery-overlay" />

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          VIDEO CTA SECTION
      ===================================================== */}

      <section className="alpha-exhibition-cta">

        {/* BACKGROUND VIDEO */}

        <video
          className="alpha-exhibition-cta-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >

          <source
            src={exhibition.video}
            type="video/mp4"
          />

        </video>


        {/* VIDEO OVERLAY */}

        <div className="alpha-exhibition-cta-overlay" />


        {/* CTA CONTENT */}

        <div className="alpha-exhibition-cta-content">

          <h2 className="alpha-exhibition-cta-title">

            THE NEXT CONNECTION STARTS

            <br />

            WITH A CONVERSATION

          </h2>


          <div className="alpha-exhibition-cta-buttons">

            {/* EXPLORE */}

            <Link
              href="/a-p-u-overhaul-repairs"
              className="
                hero-button hero-button-primary
              "
            >

              <span>
                EXPLORE CAPABILITIES
              </span>

              <ArrowRight
                size={22}
                strokeWidth={2}
              />

            </Link>


            {/* CONTACT */}

            <Link style={{ color: "white"}}
              href="/contact"
              className="
                hero-button hero-button-outline
              "
            >

              <span>
                CONTACT US
              </span>

              <ArrowRight
                size={22}
                strokeWidth={2}
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
