"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.currentTarget.reset();
    }, 2500);
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-aircraft"></div>

        <div className="contact-hero-dots"></div>

        <div className="contact-container">

          <div className="contact-hero-content">

            <h1>CONTACT US</h1>

            <div className="contact-orange-line">
              <span></span>

              <span className="contact-plane-icon">
                ✈
              </span>
            </div>

            <p>
              Get in touch with us for APU overhauling
              <br />
              and maintenance of aircraft accessories.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section className="contact-details">

        <div className="contact-container">

          <div className="contact-details-grid">

            {/* EMAIL */}

            <div className="contact-detail-card contact-white-card">

              <div className="contact-detail-icon">
                <span>✉</span>
              </div>

              <div className="contact-detail-content">

                <h3>EMAIL US</h3>

                <a href="mailto:info@alphaircraft.com">
                  info@alphaircraft.com
                </a>

                <div className="contact-small-line"></div>

              </div>

            </div>


            {/* LOCATION */}

            <div className="contact-detail-card contact-address-card">

              <div className="contact-detail-icon contact-orange-icon">
                <span>●</span>
              </div>

              <div className="contact-detail-content">

                <h3>USA</h3>

                <p>
                  Alpha Aircraft Systems, 4265E
                  <br />
                  10LN, Hialeah, Florida, 33013
                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-detail-card contact-white-card">

              <div className="contact-detail-icon">
                <span>☎</span>
              </div>

              <div className="contact-detail-content">

                <h3>CALL US</h3>

                <a href="tel:+13058851599">
                  +1-305-885-1599
                </a>

                <div className="contact-small-line"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}

      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-form-box">

            {/* =================================================
                LEFT PANEL
            ================================================= */}

            <div className="contact-form-left">

              <div className="contact-left-content">

                <span className="contact-eyebrow">
                  LET&apos;S CONNECT
                </span>

                <h2>
                  Get In Touch
                </h2>

                <div className="contact-title-line"></div>

                <p>
                  Have a question or need assistance?
                  <br />
                  We&apos;re here to help. Send us a message
                  <br />
                  and our team will get back to you
                  <br />
                  as soon as possible.
                </p>

              </div>


              {/* =================================================
                  ILLUSTRATION
              ================================================= */}

              <div className="contact-illustration">

                {/* ENGINE */}

                <div className="contact-engine-circle">

                  <div className="contact-engine-inner"></div>

                  <div className="contact-engine-spokes">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>


                {/* PERSON */}

                <div className="contact-person">

                  <div className="contact-helmet">

                    <div className="contact-helmet-glass"></div>

                  </div>

                  <div className="contact-head">

                    <div className="contact-eye contact-eye-left"></div>

                    <div className="contact-eye contact-eye-right"></div>

                    <div className="contact-nose"></div>

                    <div className="contact-smile"></div>

                  </div>


                  <div className="contact-body">

                    <div className="contact-zip"></div>

                    <div className="contact-pocket"></div>

                    <div className="contact-collar contact-collar-left"></div>

                    <div className="contact-collar contact-collar-right"></div>

                  </div>


                  <div className="contact-arm contact-left-arm"></div>

                  <div className="contact-arm contact-right-arm"></div>

                  <div className="contact-hand"></div>

                </div>


                {/* GEARS */}

                <div className="contact-gear contact-gear-one">
                  ⚙
                </div>

                <div className="contact-gear contact-gear-two">
                  ⚙
                </div>


                {/* SMALL PLANE */}

                <div className="contact-small-plane">
                  ✈
                </div>

              </div>


              <div className="contact-left-dots"></div>

            </div>


            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <div className="contact-form-right">

              <form onSubmit={handleSubmit}>

                {/* NAME */}

                <div className="contact-input-group">

                  <span className="contact-input-icon">
                    ♙
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="contact-input-group">

                  <span className="contact-input-icon">
                    ✉
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                  />

                </div>


                {/* PHONE */}

                <div className="contact-input-group">

                  <span className="contact-input-icon">
                    ☎
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    autoComplete="tel"
                  />

                </div>


                {/* MESSAGE */}

                <div className="contact-input-group contact-textarea-group">

                  <span className="contact-input-icon">
                    ▣
                  </span>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  ></textarea>

                </div>


                {/* BUTTON */}

                <button
                  type="submit"
                  className={`contact-submit-btn ${
                    submitted
                      ? "contact-submit-success"
                      : ""
                  }`}
                >

                  <span className="contact-button-icon">
                    {submitted ? "✓" : "➤"}
                  </span>

                  <span>
                    {submitted
                      ? "MESSAGE SENT"
                      : "LET'S FLY"}
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="contact-features">

        <div className="contact-container">

          <div className="contact-features-box">

            {/* FEATURE 1 */}

            <div className="contact-feature">

              <div className="contact-feature-icon">
                ♜
              </div>

              <div className="contact-feature-content">

                <h3>
                  EXPERT TEAM
                </h3>

                <p>
                  Experienced professionals
                  <br />
                  dedicated to quality service.
                </p>

              </div>

            </div>


            {/* FEATURE 2 */}

            <div className="contact-feature">

              <div className="contact-feature-icon">
                ⚙
              </div>

              <div className="contact-feature-content">

                <h3>
                  QUALITY SERVICE
                </h3>

                <p>
                  We ensure the highest
                  <br />
                  standards in every process.
                </p>

              </div>

            </div>


            {/* FEATURE 3 */}

            <div className="contact-feature">

              <div className="contact-feature-icon">
                ◷
              </div>

              <div className="contact-feature-content">

                <h3>
                  TIMELY SUPPORT
                </h3>

                <p>
                  Quick response and
                  <br />
                  on-time delivery.
                </p>

              </div>

            </div>


            {/* FEATURE 4 */}

            <div className="contact-feature">

              <div className="contact-feature-icon">
                🤝
              </div>

              <div className="contact-feature-content">

                <h3>
                  CUSTOMER FOCUSED
                </h3>

                <p>
                  Your satisfaction is our
                  <br />
                  top priority.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}