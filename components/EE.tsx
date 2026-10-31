"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   EXHIBITION DATA
========================================================= */

const exhibition = {
  name: "AVIATION AFRICA",

  date: "September 9–10, 2026",

  location: "Sarit Expo Centre in Nairobi, Kenya",

  heroImage: "/hero.png",

  aboutImage: "/Aviation Africa11.webp",

  description:
    "Aviation AFRICA 2026 was a memorable experience for Alpha Aircraft Systems. From our Stand 59 at the Sarit Expo Centre in Nairobi, we had the opportunity to meet aviation professionals from across Africa and beyond, reconnect with old friends and build new relationships within the region’s growing aviation community. A heartfelt thank you to the Aviation AFRICA team and Sari Expo for the warm hospitality and for creating such a welcoming platform for meaningful conversations, new connections and shared opportunities. We had a wonderful time in Nairobi and left with plenty of conversations worth continuing.",

  highlights: [
    "/AVIATION AFRICA.jpg",
    "/AVIATION AFRICA1.jpg",
    "/AVIATION AFRICA2.jpg",
    "/AVIATION AFRICA3.jpg",
    "/AVIATION AFRICA4.jpg",
    "/AVIATION AFRICA5.jpg",
    "/AVIATION AFRICA6.jpg",
    "/AVIATION AFRICA7.jpg",
    "/AVIATION AFRICA8.jpg",
     "/AVIATION AFRICA9.jpg",
    "/AVIATION AFRICA10.jpg",
    "/AVIATION AFRICA11.jpg",
    "/AVIATION AFRICA12.jpg",
    
    "/AVIATION AFRICA14.jpg",
     "/AVIATION AFRICA15.jpg",
    "/AVIATION AFRICA16.jpg",
    "/AVIATION AFRICA17.jpg",
    "/AVIATION AFRICA18.jpg",
  ],

  video: "/Alpha-Aircraft-Systems-Facility-at-Hialeah.mp4", // CTA background video

  // Add all uploaded gallery videos here. Keep video files inside /public.
  videos: [
    "/AVIATION AFRICA.mp4",
     "/AVIATION AFRICA2.mp4",
     "/AVIATION AFRICA1.mp4",
    "/AVIATION AFRICA4.mp4",
     
    // Add more paths to enable the Videos READ MORE button.
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function ExhibitionPage() {
  const alphaExhibitionPageRef =
    useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAllGalleryImages, setShowAllGalleryImages] = useState(false);
  const [showAllGalleryVideos, setShowAllGalleryVideos] = useState(false);
  const [activeHighlightTab, setActiveHighlightTab] = useState<"images" | "videos">("images");


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

  // Gallery lightbox keyboard controls
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") {
        setSelectedImage((current) =>
          current === null ? null : (current + 1) % exhibition.highlights.length
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          current === null
            ? null
            : (current - 1 + exhibition.highlights.length) % exhibition.highlights.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);


  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      <style jsx global>{`
        /* Reference-style clean gallery grid */
        .alpha-exhibition-highlights {
          position: relative;
          overflow: hidden;
          padding: clamp(48px, 6vw, 82px) 0;
          background: #fff;
          color: #10283a;
        }

        .alpha-exhibition-highlights::before {
          display: none;
        }

        .alpha-exhibition-highlights-heading {
          position: relative;
          width: min(1400px, calc(100% - 64px));
          margin: 0 auto 30px;
          padding-left: 0;
          border-left: 0;
        }

        .alpha-exhibition-highlights-heading .alpha-exhibition-section-label p {
          color: #b84a2b;
          letter-spacing: .2em;
        }

        .alpha-exhibition-highlights-title {
          color: #10283a;
          margin-top: 12px;
          line-height: 1.02;
        }

        .alpha-exhibition-highlight-tabs {
          width: min(1400px, calc(100% - 32px));
          margin: 0 auto 22px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #dce3e8;
        }

        .alpha-exhibition-highlight-tab {
          appearance: none;
          border: 0;
          border-bottom: 3px solid transparent;
          margin-bottom: -1px;
          padding: 13px 22px;
          background: transparent;
          color: #617584;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .12em;
          cursor: pointer;
          transition: color .25s ease, border-color .25s ease;
        }

        .alpha-exhibition-highlight-tab:hover,
        .alpha-exhibition-highlight-tab.is-active {
          color: #10283a;
        }

        .alpha-exhibition-highlight-tab.is-active {
          border-bottom-color: #b58b4a;
        }

        .alpha-exhibition-video-grid {
          width: min(1400px, calc(100% - 32px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .alpha-exhibition-video-card {
          min-width: 0;
          width: 100%;
        }

        .alpha-exhibition-video-item {
          width: 100%;
          aspect-ratio: 16 / 9;
          display: block;
          background: #0b1822;
          object-fit: cover;
        }

        .alpha-exhibition-video-caption {
          margin: 9px 0 0;
          color: #233746;
          font-size: 13px;
          letter-spacing: .04em;
        }

        .alpha-exhibition-gallery {
          position: relative;
          width: min(1400px, calc(100% - 32px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          grid-auto-rows: 1fr;
          column-gap: 12px;
          row-gap: 12px;
          align-items: stretch;
        }

        .alpha-exhibition-gallery-item {
          position: relative;
          display: block;
          width: 100% !important;
          height: 100% !important;
          min-width: 0 !important;
          min-height: 0 !important;
          max-height: none !important;
          aspect-ratio: 1 / 1;
          box-sizing: border-box;
          overflow: hidden;
          cursor: zoom-in;
          border: 0;
          border-radius: 0;
          background: #edf0f2;
          box-shadow: none;
          transition: none;
        }

        .alpha-exhibition-gallery-item:hover {
          transform: none;
          box-shadow: none;
        }

        .alpha-exhibition-gallery-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .alpha-exhibition-gallery-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center;
          transition: transform .45s ease;
        }

        .alpha-exhibition-gallery-item:hover .alpha-exhibition-gallery-image img {
          transform: scale(1.025);
        }

        .alpha-exhibition-gallery-overlay {
          display: none;
        }

        .alpha-exhibition-gallery-cta {
          display: flex;
          justify-content: center;
          margin: 32px auto 0;
          padding: 0 24px;
        }

        .alpha-exhibition-gallery-cta .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 190px;
          text-decoration: none;
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .alpha-exhibition-gallery,
          .alpha-exhibition-video-grid,
          .alpha-exhibition-highlight-tabs,
          .alpha-exhibition-highlights-heading {
            width: calc(100% - 32px);
          }
          .alpha-exhibition-video-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .alpha-exhibition-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 1fr;
            column-gap: 12px;
            row-gap: 12px;
          }
        }

        @media (max-width: 600px) {
          .alpha-exhibition-highlights {
            padding: 48px 0 56px;
          }
          .alpha-exhibition-gallery,
          .alpha-exhibition-video-grid,
          .alpha-exhibition-highlight-tabs,
          .alpha-exhibition-highlights-heading {
            width: calc(100% - 24px);
          }
          .alpha-exhibition-video-grid { grid-template-columns: 1fr; gap: 12px; }
          .alpha-exhibition-highlight-tabs { margin-bottom: 18px; }
          .alpha-exhibition-highlight-tab { padding: 12px 16px; font-size: 12px; }
          .alpha-exhibition-highlights-heading {
            margin-bottom: 22px;
          }
          .alpha-exhibition-gallery {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 2px 1px 12px;
            scroll-snap-type: x mandatory;
            scroll-padding-left: 1px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .alpha-exhibition-gallery::-webkit-scrollbar { display: none; }
          .alpha-exhibition-gallery-item {
            flex: 0 0 86%;
            width: 86% !important;
            height: auto !important;
            aspect-ratio: 1 / 1;
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }
          .alpha-exhibition-gallery-item:hover { transform: none; }
          .alpha-exhibition-gallery-cta { margin-top: 22px; }
        }
      `}</style>
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


        {/* IMAGE / VIDEO TABS */}
        <div className="alpha-exhibition-highlight-tabs" role="tablist" aria-label="Exhibition media">
          <button
            type="button"
            role="tab"
            aria-selected={activeHighlightTab === "images"}
            className={`alpha-exhibition-highlight-tab ${activeHighlightTab === "images" ? "is-active" : ""}`}
            onClick={() => setActiveHighlightTab("images")}
          >
            PHOTOS
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeHighlightTab === "videos"}
            className={`alpha-exhibition-highlight-tab ${activeHighlightTab === "videos" ? "is-active" : ""}`}
            onClick={() => setActiveHighlightTab("videos")}
          >
            VIDEOS
          </button>
        </div>

        {activeHighlightTab === "images" ? (
          <>
            <div className="alpha-exhibition-gallery">

          {(showAllGalleryImages
            ? exhibition.highlights
            : exhibition.highlights.slice(0, 8)
          ).map(
            (image, index) => (

              <div
                key={`${image}-${index}`}
                className={`
                  alpha-exhibition-gallery-item
                `}
                role="button"
                tabIndex={0}
                aria-label={`View ${exhibition.name} gallery image ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedImage(index);
                  }
                }}
                style={{ cursor: "zoom-in" }}
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

            {exhibition.highlights.length > 8 && (
              <div className="alpha-exhibition-gallery-cta">
            <button
              type="button"
              className="hero-button hero-button-primary"
              onClick={() => setShowAllGalleryImages((current) => !current)}
              aria-expanded={showAllGalleryImages}
            >
              <span>{showAllGalleryImages ? "SHOW LESS" : "READ MORE"}</span>
              <ArrowRight size={20} />
            </button>
          </div>
            )}
          </>
        ) : (
          <>
            <div className="alpha-exhibition-video-grid" role="tabpanel" aria-label="Exhibition videos">
              {(showAllGalleryVideos ? exhibition.videos : exhibition.videos.slice(0, 8)).map((video, index) => (
                <div className="alpha-exhibition-video-card" key={`${video}-${index}`}>
                  <video
                    className="alpha-exhibition-video-item"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>

            {exhibition.videos.length > 8 && (
              <div className="alpha-exhibition-gallery-cta">
                <button
                  type="button"
                  className="hero-button hero-button-primary"
                  onClick={() => setShowAllGalleryVideos((current) => !current)}
                  aria-expanded={showAllGalleryVideos}
                >
                  <span>{showAllGalleryVideos ? "SHOW LESS" : "READ MORE"}</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </>
        )}

      </section>


      {/* =====================================================
          GALLERY IMAGE LIGHTBOX
      ===================================================== */}
      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Exhibition image gallery"
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(16px, 4vw, 56px)",
            background: "rgba(3, 8, 15, 0.96)",
          }}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: 22,
              right: 24,
              zIndex: 2,
              display: "grid",
              placeItems: "center",
              width: 46,
              height: 46,
              border: "1px solid rgba(255,255,255,.45)",
              borderRadius: "50%",
              color: "#fff",
              background: "rgba(255,255,255,.08)",
              cursor: "pointer",
            }}
          >
            <X size={25} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage - 1 + exhibition.highlights.length) % exhibition.highlights.length);
            }}
            style={{
              position: "absolute",
              left: 18,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              display: "grid",
              placeItems: "center",
              width: 48,
              height: 48,
              border: "1px solid rgba(255,255,255,.45)",
              borderRadius: "50%",
              color: "#fff",
              background: "rgba(255,255,255,.08)",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={30} />
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(1100px, 100%)",
              height: "min(78vh, 760px)",
            }}
          >
            <Image
              src={exhibition.highlights[selectedImage]}
              alt={`${exhibition.name} gallery image ${selectedImage + 1}`}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage + 1) % exhibition.highlights.length);
            }}
            style={{
              position: "absolute",
              right: 18,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              display: "grid",
              placeItems: "center",
              width: 48,
              height: 48,
              border: "1px solid rgba(255,255,255,.45)",
              borderRadius: "50%",
              color: "#fff",
              background: "rgba(255,255,255,.08)",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={30} />
          </button>

          <span
            style={{
              position: "absolute",
              bottom: 18,
              left: 0,
              width: "100%",
              color: "#fff",
              textAlign: "center",
              fontSize: 13,
              letterSpacing: 2,
            }}
          >
            {selectedImage + 1} / {exhibition.highlights.length}
          </span>
        </div>
      )}

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
    </>
  );
}
