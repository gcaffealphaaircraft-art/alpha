"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ExhibitionItem = {
  title: string;
  image: string;
  location: string;
  address?: string;
  date: string;
  description?: string;

  // UNIQUE CTA FOR EVERY EXHIBITION
  ctaUrl: string;
  ctaText?: string;
};

type ExhibitionYear = {
  [year: number]: ExhibitionItem[];
};


/* =========================================================
   EXHIBITION DATA
========================================================= */

const exhibitionData: ExhibitionYear = {

  /* =======================================================
     2026
  ======================================================= */

  2026: [
    
    {
      title: "MRO Asia Pacific",
      image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
      location: "Singapore EXPO, Singapore",
      address:
        "Singapore EXPO, Singapore",
      date: "September 22–24, 2026",
      description:
        "The energy across the exhibition floor at MRO Asia-Pacific was exceptional. Beyond discussing the latest advancements in aircraft systems, maintenance, and fleet reliability, the highlight of our time in Singapore was reconnecting with long-time industry friends, partners, and colleagues from across the Asia-Pacific region.",

      ctaUrl:
        "/mro-asia-pacific",
      ctaText: "EXPLORE",
    },
{
      title: "Aviation Africa",
      image: "/Aviation Africa11.webp",
      location: "Sarit Expo Centre in Nairobi, Kenya Stand No. 59",
      address:
        "Sarit Expo Centre in Nairobi, Kenya Stand No. 59",
      date: "September 9–10, 2026",
      description:
        "Aviation AFRICA 2026 was a memorable experience for Alpha Aircraft Systems. From our Stand 59 at the Sarit Expo Centre in Nairobi, we had the opportunity to meet aviation professionals from across Africa and beyond, reconnect with old friends and build new relationships within the region’s growing aviation community.",

      ctaUrl:
        "/aviation-africa",
      ctaText: "EXPLORE",
    },
    
    {
      title: "MRO BEER ",
      image:
        "/Alpha Aircraft Systems at MRO Beer 2026-Istanbul.jpeg",
      location: "Istanbul, Turkey (hosted at the Istanbul Lutfi Kirdar International Convention and Exhibition Center)",
      address:
        "Istanbul Lutfi Kirdar International Convention and Exhibition Center",
      date: "June 17–18, 2026",
      description:
        "MRO BEER gave Alpha Aircraft Systems the opportunity to connect with the aviation and MRO community across the Baltics and Eastern Europe. More than a platform for industry discussions, the event opened doors to new conversations, new relationships and a growing network within a region with tremendous aviation potential.",

      ctaUrl:
        "/mro-beer",
      ctaText: "EXPLORE",
    },
    {
      title: "MRO South East Asia",
      image:
        "/MRO South East_Asia.jpeg",
      location: "Hilton Kuala Lumpur, Kuala Lumpur, Malaysia",
      address:
        "Hilton Kuala Lumpur, Kuala Lumpur, Malaysia",
      date: "May 13–14, 2026",
      description:
        "MRO Southeast Asia in Kuala Lumpur gave Alpha Aircraft Systems another valuable opportunity to connect with the region’s aviation and MRO community.",

      ctaUrl:
        "/exhibition-mro-south-east-asia",
      ctaText: "EXPLORE",
    },
    {
      title: "PB EXPO",
      image:
        "/Alpha Aircraft Systems at PB Expo 2026 (2).jpeg",
      location: "Miami Beach Convention Center",
      address:
        "Miami Beach Convention Center",
      date: "March 11–12, 2026",
      description:
        "PB Expo 2026 brought together the aviation community to explore the technologies and ideas shaping the future of the industry.",

      ctaUrl:
        "/pbexpo",
      ctaText: "EXPLORE",
    },
    {
      title: "MRO XPO India",
      image:
        "/Alpha-Aircraft-Systems-at-MRO-XPO-at-Indian-Airforce-Stall-1.webp",
      location: "ICC, Dwarka, New Delhi",
      address:
        "India International Convention & Expo Centre, Dwarka, New Delhi, India",
      date: "11–12 March, 2026",
      description:
        "Glimpses from MRO XPO India, where leaders and professionals from across the Indian aviation and MRO industry came together to exchange ideas, build partnerships, and explore the future of aircraft maintenance and support.",

      ctaUrl:
        "/mro-xpo-india",
      ctaText: "EXPLORE",
    },

    {
      title: "World Defense Show",
      image:
        "/MRO2.webp",
      location:
        "Riyadh International Convention and Exhibition Center",
      address:
        "Riyadh International Convention and Exhibition Center",
      date: "09-10 February, 2025",
      description:
        "Extending a sincere appreciation to the aviation professionals who took the time to connect with us at the World Defense Show, Riyadh. Mr. Shubhesh Thakore from Alpha Aircraft Systems had the opportunity to engage in meaningful conversations with Harab Alharabi, Ron Taylo and Amyr Qureshi.",

      ctaUrl:
        "/exhibition-world-defense-show",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Middle East",
      image:
        "/MRO3.webp",
      location:
        "Dubai World Trade Centre, UAE",
      address:
        "Dubai World Trade Centre, UAE",
      date: "2-3 February, 2026",
      description:
        "A valuable exchange of insights and perspectives at MRO Middle East, Dubai. It was a privilege to engage with the global MRO community and be part of conversations shaping the future of aircraft maintenance and support worldwide.",

      ctaUrl:
        "/exhibition-mro-middle-east-2026",

      ctaText: "EXPLORE",
    },

    {
      title: "Wings India",
      image:
        "/Alpha-Aircraft-Systems-at-Wings-India-2026-11.webp",
      location:
        "Begumpet Airport, Hyderabad",
      address:
        "Begumpet Airport, Hyderabad",
      date: "28-31 January, 2026",
      description:
        "Grateful for the conversations, insights, and collaborations at Wings India 2026. Our first aviation event of the year, it was a privilege to engage with the ecosystem shaping the future of Indian aviation and aerospace growth.",

      ctaUrl:
        "/exhibition-wings-india",

      ctaText: "EXPLORE",
    },
  ],


  /* =======================================================
     2025
  ======================================================= */

  2025: [

    {
      title: "MRO Europe",
      image:
        "/Alpha-exhibition-in-london-scaled.jpg",
      location:
        "Excel London, London",
      address:
        "Excel London, London",
      date: "15-16 Oct, 2025",
      description:
        "Grateful for the connections, ideas, and innovations at AeroEngines Europe. It is always great to be part of the conversations shaping the future of aviation.",

      ctaUrl:
        "/exhibition-mro-london-2025",

      ctaText: "EXPLORE",
    },

    {
      title: "Aero India",
      image:
        "/Alpha-Aircraft-Systems-at-Aero-Engines-Hamburg-Germany.jpg",
      location:
        "Bengaluru, India",
      address:
        "Air Force Station Yelahanka, Bengaluru, Karnataka, India",
      date: "2025",
      description:
        "Exploring aerospace technologies and building meaningful industry connections.",

      ctaUrl:
        "/exhibition-aero-engines",

      ctaText: "EXPLORE",
    },

    {
      title: "Paris Air Show",
      image:
        "/International-Paris-Air-Show-2 (1).webp",
      location:
        "Le Bourget, Pairs",
      address:
        "Le Bourget, Pairs",
      date: "16-22 June, 2025",
      description:
        "International Pairs Air Show will be remembered as a milestone. It was in this event that we signed an agreement with RSR Aviation Services to establish an APU facility in India by second quarter of 2026. This will make our presence in Asia-Pacific stronger.",

      ctaUrl:
        "/exhibition-paris-air-show",

      ctaText: "EXPLORE",
    },

    {
      title: "EBACE 2025",
      image:
        "/EBACE-2025.webp",
      location:
        "Palexpo Convention Centre, Geneva, Switzerland",
      address:
        "Palexpo Convention Centre, Geneva, Switzerland",
      date: "20-22 May, 2025",
      description:
        "It was our first participation in EBACE and the aviation community gripped us. It was an awesome event. EBACE landed us to new markets and provided us valued connections.",

      ctaUrl:
        "/exhibition-ebace-2025",

      ctaText: "EXPLORE",
    },

    {
      title: "PB Expo 2025",
      image:
        "/PB-Expo-2025-scaled.webp",
      location:
        "Miami Beach Convention Center, Florida",
      address:
        "Miami Beach Convention Center, Florida",
      date: "27-28 Feb, 2025",
      description:
        "The first exhibition of 2025 that too in Miami. It was brilliant! We had bouquet of offerings for maintenance and overhauling of APUs and aircraft accessories.",

      ctaUrl:
        "/pb-expo-2025",

      ctaText: "EXPLORE",
    },
  ],


  /* =======================================================
     2024
  ======================================================= */

  2024: [

    {
      title: "Singapore Air Show",
      image:
        "/Singapore-Air-Show-scaled.webp",
      location:
        "Changi Exhibition Centre, Singapore",
      address:
        "Changi Exhibition Centre, Singapore",
      date: "20-25 Feb, 2024",
      description:
        "Singapore Airshow was our first grand exhibition of the year. We had an exclusive coverage of the show and witnessed the grandeur and innovations of the aviation industry.",

      ctaUrl:
        "/exhibition-singapore-air-show",

      ctaText: "EXPLORE",
    },

    {
      title: "HAI Heli Expo",
      image:
        "/HAI-Heli-Expo.webp",
      location:
        "Anaheim Convention Center, Anaheim, California",
      address:
        "Anaheim Convention Center, Anaheim, California",
      date: "27-29 Feb, 2024",
      description:
        "It was for the first time that we participated in a helicopter expo. HAI Heli Expo set the stage for our entry into Helicopter APU MRO services.",

      ctaUrl:
        "/exhibition-hai-heli-expo",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Middle East",
      image:
        "/MRO-Middle-East.webp",
      location:
        "Dubai World Trade Center",
      address:
        "Dubai World Trade Center",
      date: "5-6 March, 2024",
      description:
        "MRO Middle East provided us a platform to drive collaboration and new commercial opportunities, discover the latest trends and explore innovative solutions.",

      ctaUrl:
        "/exhibition-mro-middle-east",

      ctaText: "EXPLORE",
    },

    {
      title: "PB Expo 2024",
      image:
        "/PB-Expo.webp",
      location:
        "Miami Beach Convention Center, Florida",
      address:
        "Miami Beach Convention Center, Florida",
      date: "7-8 March, 2024",
      description:
        "At the PB Expo, our focus was on making the right connections and meet some of aviation’s finest personnels. The attendees loved our exhibition.",

      ctaUrl:
        "/exhibition-pb-expo-2024",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Asia-Pacific",
      image:
        "/Alpha-Aircraft-Systems-at-MRO-Asia-Pacific-Singapore-scaled.webp",
      location:
        "Singapore Expo, Singapore",
      address:
        "Singapore Expo, Singapore",
      date: "25-26 Sep, 2024",
      description:
        "After Singapore Airshow in February, we headed back to Singapore in the month of September to showcase our APU maintenance capabilities. We signed MoU with Aviaris Pte. Ltd. which was a strategic agreement to increase bandwidth of each other’s business and deepen our roots in Asia-Pacific.",

      ctaUrl:
        "/exhibition-mro-asia-pacific",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Europe",
      image:
        "/IMG_5297-scaled.jpg",
      location:
        "Fira, Barcelona, Spain",
      address:
        "Fira, Barcelona, Spain",
      date: "22-24 Oct, 2024",
      description:
        "We attended MRO Europe to expand our business in Europe and shared our expertise as leading APU expert and learnt about their technologies.",

      ctaUrl:
        "/exhibition-mro-europe",

      ctaText: "EXPLORE",
    },

    {
      title: "C-130 TCG",
      image:
        "/C-130-TCG-Exhibition.webp",
      location:
        "Caribe Royale Hotel and Convention Center, Orlando, Florida",
      address:
        "Caribe Royale Hotel and Convention Center, Orlando, Florida",
      date: "28 Oct-01 Nov, 2024",
      description:
        "Grateful to have attended the 34th World Wide Review organised by the Technical Coordination Group (TCG) that gave us in-depth information about improved technologies in C-130 aircraft and helped us to brush our expertise in APU overhauling and maintenance of C-130 aircraft.",

      ctaUrl:
        "/exhibition-c-130-tcg",

      ctaText: "EXPLORE",
    },
  ],


  /* =======================================================
     2023
  ======================================================= */

  2023: [

    {
      title: "TCG Exhibition",
      image:
        "/Alpha-Aircraft-TCG-Exhibition-3.webp",
      location:
        "Orlando, Florida",
      address:
        "Orlando, Florida",
      date: "24 October, 2023",
      description:
        "We are experts in overhauling C-130 aircraft APU and therefore we always look forward to participating in TCG (Technical Coordination Group).",

      ctaUrl:
        "/exhibition-tcg",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Europe",
      image:
        "/mro-europe-2023-2.webp",
      location:
        "RAI, Amsterdam, Netherlands",
      address:
        "RAI, Amsterdam, Netherlands",
      date: "18-19 Oct, 2023",
      description:
        "As the leading experts in APU Overhaul, Maintenance and Repair, we showcased our top-notch technologies at MRO Europe in Amsterdam.",

      ctaUrl:
        "/exhibition-mro-europe-2023",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Americas",
      image:
        "/Alpha-Aircraft-Systems-Exhibition-America-3.webp",
      location:
        "Georgia World Congress, Atlanta, Georgia, USA",
      address:
        "Georgia World Congress, Atlanta, Georgia, USA",
      date: "18-20 April, 2023",
      description:
        "We proudly participated in MRO Americas in Atlanta, showcasing quality APU Components and best Military Maintenance Facility of Alpha Aircraft Systems.",

      ctaUrl:
        "/exhibition-mro-americas",

      ctaText: "EXPLORE",
    },

    {
      title: "ALTA CCMA & MRO Conference",
      image:
        "/Alpha-Aircraft-Systems-Exhibition-Alta.webp",
      location:
        "Hilton, Cancun, Mexico",
      address:
        "Hilton, Cancun, Mexico",
      date: "21-23 May, 2023",
      description:
        "Demonstrating at the ALTA CCMA & MRO Conference was important for us as it is the premier and longest-standing conference in Latin America and the Caribbean for aviation Maintenance and Technical Purchasing.",

      ctaUrl:
        "/exhibition-alta-ccma-mro",

      ctaText: "EXPLORE",
    },

    {
      title: "MRO Middle East",
      image:
        "/Alpha-Aircarft-Systems-Exhibition-Middle-East-2.webp",
      location:
        "Dubai World Trade Centre, UAE",
      address:
        "Dubai World Trade Centre, UAE",
      date: "1-2 March, 2023",
      description:
        "Glimpses of the MRO show at Dubai World Trade Centre: An initiative from our side to give an opportunity to those who want to fly high and achieve their goals.",

      ctaUrl:
        "/exhibition-mro-middle-east-2023",

      ctaText: "EXPLORE",
    },
  ],
};


/* =========================================================
   YEARS
========================================================= */

const exhibitionYears: number[] = [
  2026,
  2025,
  2024,
  2023,
];


/* =========================================================
   COMPONENT
========================================================= */

export default function Exhibition() {

  const [activeYear, setActiveYear] =
    useState<number>(2026);

  const [recentSlide, setRecentSlide] =
    useState<number>(0);

  const [galleryStart, setGalleryStart] =
    useState<number>(0);


  /* =======================================================
     CURRENT YEAR DATA
  ======================================================= */

  const currentYearData: ExhibitionItem[] =
    exhibitionData[activeYear] || [];


  /* =======================================================
     RECENT DATA
  ======================================================= */

  const recentData: ExhibitionItem[] =
    exhibitionData[2026] || [];


  const currentRecent:
    | ExhibitionItem
    | undefined =
    recentData[recentSlide];


  /* =======================================================
     RECENT PREVIOUS
  ======================================================= */

  const previousRecent = () => {

    if (recentData.length === 0) {
      return;
    }

    setRecentSlide((previous) => {

      if (previous <= 0) {
        return recentData.length - 1;
      }

      return previous - 1;

    });
  };


  /* =======================================================
     RECENT NEXT
  ======================================================= */

  const nextRecent = () => {

    if (recentData.length === 0) {
      return;
    }

    setRecentSlide((previous) => {

      return (
        (previous + 1) %
        recentData.length
      );

    });
  };


  /* =======================================================
     CHANGE YEAR
  ======================================================= */

  const changeYear = (year: number) => {

    setActiveYear(year);

    setGalleryStart(0);

  };


  /* =======================================================
     GALLERY PREVIOUS
  ======================================================= */

  const previousGallery = () => {

    if (currentYearData.length === 0) {
      return;
    }

    setGalleryStart((previous) => {

      if (previous <= 0) {
        return currentYearData.length - 1;
      }

      return previous - 1;

    });
  };


  /* =======================================================
     GALLERY NEXT
  ======================================================= */

  const nextGallery = () => {

    if (currentYearData.length === 0) {
      return;
    }

    setGalleryStart((previous) => {

      return (
        (previous + 1) %
        currentYearData.length
      );

    });
  };


  /* =======================================================
     THREE VISIBLE CARDS
  ======================================================= */

  const visibleCards: ExhibitionItem[] =
    currentYearData.length > 0
      ? [
          currentYearData[
            galleryStart %
              currentYearData.length
          ],

          currentYearData[
            (galleryStart + 1) %
              currentYearData.length
          ],

          currentYearData[
            (galleryStart + 2) %
              currentYearData.length
          ],
        ]
      : [];


  /* =======================================================
     RETURN
  ======================================================= */

  return (

    <main className="expo-page">


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="expo-hero">

        <div className="expo-hero-bg">

          <Image
            src="/hero.png"
            alt="Alpha Aircraft Systems aircraft"
            fill
            priority
            sizes="100vw"
            className="expo-hero-image"
          />

        </div>


        <div className="expo-hero-overlay" />


        <div className="expo-container expo-hero-inner">

          <div className="expo-hero-content">

            <span className="expo-hero-label">
              EXHIBITIONS
            </span>


            <h1 className="expo-hero-title">

              CONNECTING AVIATION

              <br />

              BEYOND BOUNDARIES

            </h1>


            <p className="expo-hero-description">

              Meet Alpha Aircraft Systems at

              leading aviation, defence and MRO

              exhibitions.

            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          RECENT EXHIBITION
      =================================================== */}

      <section className="expo-recent-section">

        <div className="expo-container">


          <div className="expo-section-label">
            RECENT EXHIBITION
          </div>


          <div className="expo-recent-layout">


            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="expo-recent-media">

              <div className="expo-recent-image-wrap">

                {currentRecent && (

                  <Image
                    src={currentRecent.image}
                    alt={currentRecent.title}
                    fill
                    sizes="
                      (max-width: 768px)
                      100vw,
                      45vw
                    "
                    className="expo-recent-image"
                  />

                )}

              </div>


              {/* ARROWS */}

              <div className="expo-recent-arrows">

                <button
                  type="button"
                  onClick={previousRecent}
                  aria-label="Previous exhibition"
                  className="expo-arrow-button"
                >

                  <ArrowLeft />

                </button>


                <button
                  type="button"
                  onClick={nextRecent}
                  aria-label="Next exhibition"
                  className="expo-arrow-button"
                >

                  <ArrowRight />

                </button>

              </div>

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="expo-recent-content">


              <h2 className="expo-recent-title">

                {currentRecent?.title}

              </h2>


              <div className="expo-recent-meta">

                <span>
                  {currentRecent?.location}
                </span>


                <span className="expo-meta-divider">
                  |
                </span>


                <span>
                  {currentRecent?.date}
                </span>

              </div>


              <p className="expo-recent-description">

                {currentRecent?.description}

              </p>


              {/* =================================================
                  RECENT EXPLORE CTA
              ================================================= */}

              <br />
              <br />

              {currentRecent && (

                <Link
                  href={currentRecent.ctaUrl}
                  className="aboutButton"
                  aria-label={`Explore ${currentRecent.title}`}
                >

                  <span>
                    {currentRecent.ctaText || "EXPLORE"}
                  </span>

                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                  />

                </Link>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          ALL EXHIBITIONS
      =================================================== */}

      <section className="expo-all-section">

        <div className="expo-container">


          <h2 className="expo-all-title">
            ALL EXHIBITIONS
          </h2>


          {/* =================================================
              YEAR BUTTONS
          ================================================= */}

          <div className="expo-year-tabs">

            {exhibitionYears.map(
              (year) => (

                <button
                  key={year}
                  type="button"
                  onClick={() =>
                    changeYear(year)
                  }
                  className={
                    activeYear === year
                      ? "expo-year-button expo-year-active"
                      : "expo-year-button"
                  }
                >

                  Exhibitions {year}

                </button>

              )
            )}

          </div>


          {/* =================================================
              GALLERY
          ================================================= */}

          <div className="expo-gallery">


            {/* LEFT ARROW */}

            <button
              type="button"
              className="
                expo-gallery-arrow
                expo-gallery-left
              "
              onClick={previousGallery}
              aria-label="Previous exhibitions"
            >

              <ArrowLeft />

            </button>


            {/* =================================================
                CARDS
            ================================================= */}

            <div className="expo-gallery-cards">

              {visibleCards.map(
                (
                  exhibition,
                  index
                ) => (

                  <div
                    key={`
                      ${activeYear}-
                      ${exhibition.title}-
                      ${exhibition.image}-
                      ${galleryStart}-
                      ${index}
                    `}
                    className="expo-gallery-card"
                  >

                    <div className="expo-gallery-image">


                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <Image
                        src={exhibition.image}
                        alt={exhibition.title}
                        fill
                        sizes="
                          (max-width: 600px)
                          90vw,
                          (max-width: 900px)
                          45vw,
                          30vw
                        "
                        className="expo-card-img"
                      />


                      {/* =================================================
                          DEFAULT TITLE
                      ================================================= */}

                      <div className="expo-card-overlay">

                        <span>
                          {exhibition.title}
                        </span>

                      </div>


                      {/* =================================================
                          HOVER CONTENT
                      ================================================= */}

                      <div className="expo-card-hover">

                        <div className="expo-hover-content">


                          {/* LABEL */}

                          <span className="expo-hover-label">
                            EXHIBITION
                          </span>


                          {/* TITLE */}

                          <h3 className="expo-hover-title">

                            {exhibition.title}

                          </h3>


                          {/* =================================================
                              META
                          ================================================= */}

                          <div className="expo-hover-meta">


                            {/* LOCATION */}

                            <div className="expo-hover-meta-row">

                              <span className="expo-meta-icon">

                                <svg
                                  width="17"
                                  height="17"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >

                                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

                                  <circle
                                    cx="12"
                                    cy="10"
                                    r="2.5"
                                  />

                                </svg>

                              </span>


                              <span>

                                {exhibition.address ||
                                  exhibition.location}

                              </span>

                            </div>


                            {/* DATE */}

                            <div className="expo-hover-meta-row">

                              <span className="expo-meta-icon">

                                <svg
                                  width="17"
                                  height="17"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >

                                  <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="4"
                                    rx="2"
                                  />

                                  <line
                                    x1="16"
                                    x2="16"
                                    y1="2"
                                    y2="6"
                                  />

                                  <line
                                    x1="8"
                                    x2="8"
                                    y1="2"
                                    y2="6"
                                  />

                                  <line
                                    x1="3"
                                    x2="21"
                                    y1="10"
                                    y2="10"
                                  />

                                </svg>

                              </span>


                              <span>
                                {exhibition.date}
                              </span>

                            </div>

                          </div>


                          {/* =================================================
                              DESCRIPTION
                          ================================================= */}

                          {exhibition.description && (

                            <p className="expo-hover-description">

                              {exhibition.description}

                            </p>

                          )}


                          {/* =================================================
                              UNIQUE CARD CTA
                          ================================================= */}

                          <Link
                            href={exhibition.ctaUrl}
                            className="expo-hover-cta"
                            aria-label={`Explore ${exhibition.title}`}
                          >

                            <span>
                              {exhibition.ctaText ||
                                "EXPLORE"}
                            </span>


                            <ArrowRight
                              size={17}
                            />

                          </Link>


                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>


            {/* RIGHT ARROW */}

            <button
              type="button"
              className="
                expo-gallery-arrow
                expo-gallery-right
              "
              onClick={nextGallery}
              aria-label="Next exhibitions"
            >

              <ArrowRight />

            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          VIDEO CTA
      =================================================== */}

      <section className="expo-video-section">


        {/* VIDEO */}

        <video
          className="expo-video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >

          <source
            src="/Alpha-Aircraft-Systems-Facility-at-Hialeah.mp4"
            type="video/mp4"
          />

          Your browser does not support
          the video tag.

        </video>


        {/* OVERLAY */}

        <div className="expo-video-overlay" />


        {/* CONTENT */}

        <div className="expo-video-content">


          <h2 className="expo-cta-title">

            THE NEXT CONNECTION STARTS

            <br className="expo-desktop-break" />

            WITH A CONVERSATION

          </h2>


          {/* BUTTONS */}

          <div className="expo-cta-buttons">


            {/* CAPABILITIES */}

            <Link
              href="/a-p-u-overhaul-repairs"
              className="hero-button hero-button-primary"
            >

              <span>
                EXPLORE CAPABILITIES
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />

            </Link>


            {/* CONTACT */}

            <Link
              href="/contact"
              className="hero-button hero-button-outline1"
            >

              <span
                style={{
                  color: "#fff",
                  borderColor: "#fff",
                }}
              >
                CONTACT US
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                color="#fff"
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}