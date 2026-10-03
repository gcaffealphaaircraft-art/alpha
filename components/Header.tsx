// 

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const serviceItems = [
 {
    name: "A.P.U. Overhaul & Repairs",
    href: "/a-p-u-overhaul-repairs",
  },
   {
    name: "Fuel Systems & Fuel Flow Transmitter",
    href: "/fuel-systems-fuel-flow-transmitter",
  },
  
  {
    name: "Plasma Spray & Professional Welding",
    href: "/plasma-spray-professional-welding",
  },
  {
    name: "Hydraulic Systems",
    href: "/hydraulic-systems",
  },
  {
    name: "C.S.D. & Pneumatic Systems",
    href: "/c-s-d-pneumatic-systems",
  },
  {
    name: "Aircraft Scanning",
    href: "/aircraft-scanning",
  },{
    name: "Borescope Services",
    href: "/borescope-services",
  },

];

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] =
    useState(false);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const isServicesActive =
    pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${
        isScrolled ? "header-scrolled" : ""
      }`}
    >
      {/* =========================
          LOGO
      ========================= */}

      <Link
        href="/"
        className={`site-logo ${
          isScrolled ? "logo-hidden" : ""
        }`}
        aria-label="Alpha Aircraft Systems home"
      >
        <Image
          src="/logo.webp"
          alt="Alpha Aircraft Systems"
          width={180}
          height={60}
          priority
          className="site-logo-image"
        />
      </Link>

      {/* =========================
          MOBILE MENU BUTTON (RIGHT)
      ========================= */}

      <button
        className={`mobile-menu-button ${
          isMobileMenuOpen ? "is-open" : ""
        }`}
        type="button"
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen}
        onClick={handleMenuToggle}
      >
        <span />
        <span />
      </button>

      {/* =========================
          DESKTOP NAVIGATION
      ========================= */}

      <nav
        className="main-nav"
        aria-label="Main navigation"
      >
        {/* HOME */}

        <Link
          href="/"
          className={`nav-link ${
            pathname === "/" ? "active" : ""
          }`}
        >
          HOME
        </Link>

        {/* =========================
            SERVICES DROPDOWN
        ========================= */}

        <div className="services-menu">
          <Link
            href="#services"
            className={`nav-link services-link ${
              isServicesActive
                ? "active"
                : ""
            }`}
          >
            SERVICES
          </Link>

          {/* DROPDOWN */}

          <div className="services-dropdown">
            {serviceItems.map(
              (service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="dropdown-link"
                >
                  {service.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* CERTIFICATIONS */}
 <Link
          href="/exhibition"
          className={`nav-link ${
            pathname ===
            "/certifications"
              ? "active"
              : ""
          }`}
        >
          EXHIBITIONS
        </Link>
        <Link
          href="/#certifications"
          className={`nav-link ${
            pathname ===
            "#certifications"
              ? "active"
              : ""
          }`}
        >
          CERTIFICATIONS
        </Link>
        

        {/* ABOUT */}

        <Link
          href="/about"
          className={`nav-link ${
            pathname === "/about"
              ? "active"
              : ""
          }`}
        >
          ABOUT
        </Link>

        {/* CONTACT */}

        <Link
          href="/contact"
          className={`nav-link ${
            pathname === "/contact"
              ? "active"
              : ""
          }`}
        >
          CONTACT
        </Link>
      </nav>

      {/* =========================
          MOBILE MENU OVERLAY
      ========================= */}

      <div
        className={`mobile-menu-overlay ${
          isMobileMenuOpen ? "is-open" : ""
        }`}
        onClick={handleMenuClose}
      />

      {/* =========================
          MOBILE MENU POPUP
      ========================= */}

      <nav
        className={`mobile-menu-popup ${
          isMobileMenuOpen ? "is-open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-close">
          <button
            type="button"
            aria-label="Close menu"
            onClick={handleMenuClose}
            className="close-button"
          >
            ✕
          </button>
        </div>

        <div className="mobile-menu-content">
          {/* HOME */}
          <Link
            href="/"
            className={`mobile-nav-link ${
              pathname === "/" ? "active" : ""
            }`}
            onClick={handleMenuClose}
          >
            HOME
          </Link>

          {/* SERVICES */}
          <div className="mobile-services-section">
            <div className="mobile-nav-label">
              SERVICES
            </div>
            <div className="mobile-services-list">
              {serviceItems.map(
                (service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="mobile-service-link"
                    onClick={handleMenuClose}
                  >
                    {service.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* EXHIBITIONS */}
          <Link
            href="/exhibition"
            className="mobile-nav-link"
            onClick={handleMenuClose}
          >
            EXHIBITIONS
          </Link>

          {/* CERTIFICATIONS */}
          <Link
            href="/#certifications"
            className="mobile-nav-link"
            onClick={handleMenuClose}
          >
            CERTIFICATIONS
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className="mobile-nav-link"
            onClick={handleMenuClose}
          >
            ABOUT
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="mobile-nav-link"
            onClick={handleMenuClose}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
}