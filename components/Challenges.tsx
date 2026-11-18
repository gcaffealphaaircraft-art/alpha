
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const formatExhibitionDate = (
  value: string
): string =>
  value
    .replace(/\s*[–-]\s*/g, " – ")
    .replace(/,\s*(?=\d{4})/g, " ");

/* =========================================================
   EXHIBITION DATA
========================================================= */

const exhibitions = [
   {
    name: "Marrakech Airshow",
    location: "Royal Moroccan Air Force Base\nMarrakech, Morocco",
     date: "7–10 October 2026",
    image: "/marrakech-exhibition3.webp",
    cta: "EXPLORE",
    link: "/marrakech-airshow",
  },
  {
    name: "MRO Asia Pacific",
    location: "Singapore EXPO, Singapore",
    date: "22–24 September 2026",
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
    cta: "EXPLORE",
    link: "/mro-asia-pacific",
  },
  {
    name: "Aviation Africa",
    location: "Sarit Expo Centre in Nairobi, Kenya",
    date: "9–10 September 2026",
    image: "/Aviation Africa11.webp",
    cta: "EXPLORE",
    link: "/aviation-africa",
  },
  {
    name: "MRO Beer",
    location: "Istanbul Lutfi Kirdar International Convention and Exhibition Center",
    date: "17–18 June 2026",
    image: "/Alpha Aircraft Systems at MRO Beer 2026.jpeg",
    cta: "EXPLORE",
    link: "/mro-beer",
  },
  
  {
    name: "MRO South East Asia",
    location: "Hilton Kuala Lumpur, Kuala Lumpur, Malaysia",
    date: "13–14 May 2026",
    image: "/MRO South East_Asia.jpeg",
    cta: "EXPLORE",
    link: "/exhibition-mro-south-east-asia",
  },
  {
    name: "PB Expo",
    location: "Miami Beach Convention Center",
    date: "11–12 March 2026",
    image: "/Alpha Aircraft Systems at PB Expo 2026 (2).jpeg",
    cta: "EXPLORE",
    link: "/pbexpo",
  },
  {
    name: "MRO XPO India",
    location: "MRO XPO India",
    date: "11–12 March 2026",
    image: "/MRO.webp",
    cta: "EXPLORE",
    link: "/mro-xpo-india",
  },

  {
    name: "World Defense Show",
    location:
      "Riyadh International Convention & Exhibition Center",
    date: "9–10 February 2026",
    image: "/MRO2.webp",
    cta: "EXPLORE",
    link: "/exhibition-world-defense-show",
  },

  {
    name: "MRO Middle East",
    location:
      "Dubai World Trade Centre, UAE",
    date: "2–3 February 2026",
    image: "/MRO3.webp",
    cta: "EXPLORE",
    link: "/exhibition-mro-middle-east-2026",
  },

  {
    name: "Wings India",
    location:
      "Begumpet Airport, Hyderabad",
    date: "28–31 January 2026",
    image: "/MRO4.webp",
    cta: "EXPLORE",
    link: "/exhibition-wings-india",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Exhibitions() {
  const sectionRef = useRef<HTMLElement>(null);

  /* =======================================================
     GSAP
  ======================================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ===================================================
         LEFT CONTENT REVEAL
      =================================================== */

      gsap.from(".exhibition-intro", {
        x: -80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /* ===================================================
         RIGHT SLIDER REVEAL
      =================================================== */

      gsap.from(".exhibition-slider", {
        x: 80,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power4.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /* ===================================================
         CARD HOVER
      =================================================== */

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".exhibition-card"
        );

      cards.forEach((card) => {
        const image =
          card.querySelector(
            ".exhibition-image img"
          ) as HTMLElement | null;

        const content =
          card.querySelector(
            ".exhibition-card-content"
          ) as HTMLElement | null;

        const title =
          card.querySelector(
            ".exhibition-card-title"
          ) as HTMLElement | null;

        const button =
          card.querySelector(
            ".exhibition-card-button"
          ) as HTMLElement | null;

        if (
          !image ||
          !content ||
          !title ||
          !button
        ) {
          return;
        }

        /* ===============================================
           INITIAL STATE
        =============================================== */

        gsap.set(content, {
          y: 20,
        });

        gsap.set(title, {
          x: 0,
        });

        gsap.set(button, {
          y: 0,
          opacity: 1,
        });

        /* ===============================================
           MOUSE ENTER
        =============================================== */

        const handleEnter = () => {
          gsap.killTweensOf([
            image,
            content,
            title,
            button,
          ]);

          const tl = gsap.timeline();

          /* IMAGE */

          tl.to(
            image,
            {
              scale: 1.09,
              duration: 0.9,
              ease: "power3.out",
            },
            0
          );

          /* CONTENT */

          tl.to(
            content,
            {
              y: -12,
              duration: 0.55,
              ease: "power3.out",
            },
            0
          );

          /* TITLE */

          tl.to(
            title,
            {
              x: 6,
              duration: 0.45,
              ease: "power3.out",
            },
            0.05
          );

          /* CTA */

          tl.to(
            button,
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power3.out",
            },
            0.15
          );
        };

        /* ===============================================
           MOUSE LEAVE
        =============================================== */

        const handleLeave = () => {
          gsap.killTweensOf([
            image,
            content,
            title,
            button,
          ]);

          const tl = gsap.timeline();

          /* IMAGE */

          tl.to(
            image,
            {
              scale: 1,
              duration: 0.8,
              ease: "power3.inOut",
            },
            0
          );

          /* CONTENT */

          tl.to(
            content,
            {
              y: 20,
              duration: 0.5,
              ease: "power3.inOut",
            },
            0
          );

          /* TITLE */

          tl.to(
            title,
            {
              x: 0,
              duration: 0.4,
              ease: "power3.inOut",
            },
            0
          );

          /* CTA */

          tl.to(
            button,
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3.inOut",
            },
            0
          );
        };

        card.addEventListener(
          "mouseenter",
          handleEnter
        );

        card.addEventListener(
          "mouseleave",
          handleLeave
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      className="exhibition-section exhibition-home-section"
    >
      {/* =================================================
          LEFT CONTENT
      ================================================= */}

      <div className="exhibition-intro">

        {/* LABEL */}

        <div className="exhibition-label">
          EXHIBITIONS
        </div>

        {/* HEADING */}

        <h2>
          MEET US WHERE THE INDUSTRY CONNECTS
        </h2>

        {/* DESCRIPTION */}

        <p>
          Discover the exhibitions and industry
          events where Alpha Aircraft Systems
          showcases its MRO capabilities, connects
          with aviation professionals, and builds
          lasting partnerships across the aerospace
          industry.

          <br />
          <br />

          {/* ALL EXHIBITIONS CTA */}

          <Link
            href="/exhibition"
            className="hero-button hero-button-primary"
          >
            <span>
              ALL EXHIBITIONS
            </span>

            <ArrowUpRight
              size={28}
              strokeWidth={2.2}
            />
          </Link>
        </p>
      </div>

      {/* =================================================
          RIGHT SLIDER
      ================================================= */}

      <div className="exhibition-slider">

        {/* =================================================
            SWIPER
        ================================================= */}

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".exhibition-prev",
            nextEl: ".exhibition-next",
          }}
          slidesPerView={2}
          spaceBetween={20}
          speed={900}
          grabCursor={true}
          watchSlidesProgress={true}
          breakpoints={{
            /* MOBILE */

            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },

            /* SMALL TABLET */

            600: {
              slidesPerView: 1.3,
              spaceBetween: 18,
            },

            /* TABLET / DESKTOP */

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="exhibition-swiper"
        >
          {exhibitions.map((exhibition) => (
            <SwiperSlide
              key={exhibition.name}
            >
              <article
                className="exhibition-card"
              >

                {/* =====================================
                    IMAGE
                ===================================== */}

                <div className="exhibition-image">
                  <Image
                    src={exhibition.image}
                    alt={exhibition.name}
                    fill
                    sizes="
                      (max-width: 600px) 100vw,
                      (max-width: 768px) 65vw,
                      50vw
                    "
                    className="exhibition-img"
                  />
                </div>

                {/* =====================================
                    OVERLAY
                ===================================== */}

                <div className="exhibition-overlay" />

                {/* =====================================
                    CARD CONTENT
                ===================================== */}

                <div className="exhibition-card-content">

                  {/* TITLE */}

                  <h3 className="exhibition-card-title">
                    {exhibition.name}
                  </h3>

                  {/* META */}

                  <div className="exhibition-meta">
                    <span>
                      <MapPin
                        size={17}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      {exhibition.location}
                    </span>

                    <span>
                      <CalendarDays
                        size={17}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      {formatExhibitionDate(
                        exhibition.date
                      )}
                    </span>
                  </div>

                  {/* INDIVIDUAL CTA */}

                  <Link
                    href={exhibition.link}
                    className="exhibition-card-button"
                  >
                    <span>
                      {exhibition.cta}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                    />
                  </Link>

                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* =================================================
            BOTTOM ARROWS
        ================================================= */}

        <div className="exhibition-bottom-controls">

          <div className="slider-controls">

            {/* PREVIOUS */}

            <button
              className="
                exhibition-prev
                exhibition-arrow
              "
              aria-label="Previous exhibition"
              type="button"
            >
              <ArrowLeft
                size={42}
                strokeWidth={1.2}
              />
            </button>

            {/* NEXT */}

            <button
              className="
                exhibition-next
                exhibition-arrow
              "
              aria-label="Next exhibition"
              type="button"
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
