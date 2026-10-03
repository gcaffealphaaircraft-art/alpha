"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 768px)", () => {
        const intro = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        /* VIDEO */

        intro.from(".hero-video", {
          opacity: 0,
          scale: 1.06,
          duration: 1.8,
          ease: "power2.out",
        });

        /* OVERLAY */

        intro.from(
          ".hero-overlay",
          {
            opacity: 0,
            duration: 1.2,
          },
          "-=1.4"
        );

        /* TOP BAR */

        intro.from(
          ".hero-topbar",
          {
            opacity: 0,
            y: -20,
            duration: 0.8,
          },
          "-=0.7"
        );

        /* ALPHA */

        intro.from(
          ".hero-alpha",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        );

        /* HEADING */

        intro.from(
          ".hero-word",
          {
            yPercent: 115,
            opacity: 0,
            rotateX: -25,
            duration: 1.1,
            stagger: 0.12,
          },
          "-=0.3"
        );

        /* DESCRIPTION */

        intro.from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.55"
        );

        /* BUTTONS */

        intro.from(
          ".hero-button",
          {
            opacity: 0,
            y: 25,
            scale: 0.96,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.45"
        );

        /* TECHNICAL INFO */

        intro.from(
          ".hero-tech",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        );

        /* =====================================================
           FLOATING PLANE
        ===================================================== */

        gsap.fromTo(
          ".hero-plane",
          {
            opacity: 0,
            x: -30,
            y: 15,
            rotate: -8,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            duration: 1.2,
            delay: 0.7,
            ease: "power3.out",
          }
        );

        gsap.to(".hero-plane", {
          y: -7,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /* =====================================================
           VIDEO PARALLAX
        ===================================================== */

        gsap.to(".hero-video video", {
          scale: 1.1,
          yPercent: -5,
          ease: "none",

          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /* =====================================================
           CONTENT PARALLAX
        ===================================================== */

        gsap.to(".hero-content", {
          yPercent: -18,
          ease: "none",

          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /* =====================================================
           TECH PARALLAX
        ===================================================== */

        gsap.to(".hero-tech", {
          y: -40,
          opacity: 0.4,
          ease: "none",

          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 767px)", () => {
        const mobileIntro = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        /* VIDEO */

        mobileIntro.from(".hero-video", {
          opacity: 0,
          scale: 1.04,
          duration: 1.2,
        });

        /* OVERLAY */

        mobileIntro.from(
          ".hero-overlay",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8"
        );

        /* TOP BAR */

        mobileIntro.from(
          ".hero-topbar",
          {
            opacity: 0,
            y: -15,
            duration: 0.6,
          },
          "-=0.4"
        );

        /* ALPHA */

        mobileIntro.from(
          ".hero-alpha",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.3"
        );

        /* HEADING */

        mobileIntro.from(
          ".hero-word",
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
          },
          "-=0.3"
        );

        /* DESCRIPTION */

        mobileIntro.from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        );

        /* BUTTONS */

        mobileIntro.from(
          ".hero-button",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.3"
        );

        /* TECH */

        mobileIntro.from(
          ".hero-tech",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.3"
        );

        /* MOBILE PLANE */

        gsap.to(".hero-plane", {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /* MOBILE VIDEO */

        gsap.to(".hero-video video", {
          scale: 1.06,
          ease: "none",

          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="hero-section"
    >

      {/* =====================================================
          FULL SCREEN VIDEO
      ===================================================== */}

      <div className="hero-video">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="bg.mp4"
          aria-hidden="true"
        >
          <source
            src="/bg.mp4"
            type="video/mp4"
          />
        </video>

      </div>

      {/* =====================================================
          VIDEO OVERLAY
      ===================================================== */}

      <div className="hero-overlay" />


      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="hero-topbar">

        {/* BRAND */}

        <div className="hero-brand">

          

          

        </div>


        {/* STATUS */}

        <div className="hero-status">

          

          

        </div>

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="hero-content">

        {/* =================================================
            HEADING GROUP

            ALPHA + HEADING SAME ALIGNMENT
        ================================================= */}

        <div className="hero-heading-group">

          {/* ALPHA */}

          
<div className="exhibition-label">Alpha Aircraft Systems</div>

          {/* MAIN HEADING */}

          <h1 className="hero-title">

            <span className="hero-line">

              <span className="hero-word">
                Global Leader
              </span>

            </span>


            <span className="hero-line">

              <span className="hero-word">
                In Aircraft
              </span>

            </span>


            <span className="hero-line hero-line-accent">

              <span className="hero-wor">
                <span className="hero-worw">APU</span> Services
              </span>

            </span>

          </h1>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="hero-description">

          Precision-engineered APU repair, maintenance and
          overhaul solutions trusted by aviation operators
          worldwide.

        </p>


        {/* =================================================
            CTA
        ================================================= */}

        <div className="hero-cta">

          <a
            href="/a-p-u-overhaul-repairs"
            className="hero-button hero-button-primary"
          >

            <span>
              EXPLORE <span>APU</span> SERVICES
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
            />

          </a>


          <a
            href="/contact"
            className="hero-button hero-button-outline"
          >

            <span>
              CONTACT US
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
            />

          </a>

        </div>

      </div>


      {/* =====================================================
          FLOATING PLANE
      ===================================================== */}

  


      {/* =====================================================
          TECHNICAL INFO
      ===================================================== */}

      <div className="hero-tech">

        <div className="hero-tech-line" />

        

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="hero-footer">

        <div className="hero-footer-left" />

      </div>

    </section>
  );
}