"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "formsubmit-success" | "error"
  >("idle");
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setSubmissionError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const providerResponse = await fetch("/api/contact", {
        cache: "no-store",
      });
      const providerResult: unknown = await providerResponse.json().catch(() => null);

      if (!providerResponse.ok) {
        throw new Error(getResponseError(providerResult));
      }

      const provider =
        isRecord(providerResult) &&
        (providerResult.provider === "formsubmit" ||
          providerResult.provider === "resend" ||
          providerResult.provider === "smtp")
          ? providerResult.provider
          : null;

      if (!provider) {
        throw new Error("Unable to determine the contact email service.");
      }

      let result: unknown;
      if (provider === "formsubmit") {
        const response = await fetch(
          "https://formsubmit.co/ajax/info@alphaircraft.com",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone") || "Not provided",
              message: formData.get("message"),
              _replyto: formData.get("email"),
              _subject: "New contact form message",
              _cc: "intsales@alphaaircraft.com,gcaffe.abhishek@gmail.com,gcaffe.shashank@gmail.com",
            }),
          },
        );

        result = await response.json().catch(() => null);
        if (!response.ok || !isFormSubmitSuccess(result)) {
          throw new Error(
            getResponseError(
              result,
              `Email provider returned HTTP ${response.status}.`,
            ),
          );
        }
      } else {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
          }),
        });

        result = await response.json().catch(() => null);
        if (!response.ok) {
          throw new Error(
            getResponseError(
              result,
              `Contact API returned HTTP ${response.status}.`,
            ),
          );
        }
      }

      form.reset();
      setSubmissionStatus(
        provider === "formsubmit" ? "formsubmit-success" : "success",
      );
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
      setSubmissionStatus("error");
    }
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

              <form
                onSubmit={handleSubmit}
                onChange={() => {
                  if (submissionStatus !== "submitting") {
                    setSubmissionStatus("idle");
                    setSubmissionError("");
                  }
                }}
              >

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
                    submissionStatus === "success" ||
                    submissionStatus === "formsubmit-success"
                      ? "contact-submit-success"
                      : ""
                  }`}
                  disabled={submissionStatus === "submitting"}
                >

                  <span className="contact-button-icon">
                    {submissionStatus === "success" ||
                    submissionStatus === "formsubmit-success"
                      ? "✓"
                      : "➤"}
                  </span>

                  <span>
                    {submissionStatus === "submitting"
                      ? "SENDING..."
                      : submissionStatus === "success"
                        ? "MESSAGE SENT"
                        : submissionStatus === "formsubmit-success"
                          ? "MESSAGE SUBMITTED"
                          : "LET'S FLY"}
                  </span>

                </button>

                {submissionStatus === "error" && (
                  <p role="alert">
                    {submissionError}
                  </p>
                )}

                {submissionStatus === "success" && (
                  <p role="status">
                    Thank you. Your message was sent.
                  </p>
                )}

                {submissionStatus === "formsubmit-success" && (
                  <p role="status">
                    Your message was submitted. For the first submission, the recipient may need to activate the email address with FormSubmit.
                  </p>
                )}

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

function getResponseError(result: unknown, fallback?: string) {
  if (isRecord(result)) {
    for (const field of ["error", "message"] as const) {
      if (typeof result[field] === "string") {
        const message = result[field].trim();
        if (message && message.toLowerCase() !== "success") {
          return message.slice(0, 300);
        }
      }
    }
  }

  return fallback ?? "Unable to send your message right now. Please try again.";
}

function isFormSubmitSuccess(result: unknown) {
  if (!isRecord(result)) {
    return false;
  }

  const success = result.success;
  return (
    success === true ||
    (typeof success === "string" &&
      Boolean(success.trim()) &&
      !/^(false|error)\b/i.test(success.trim()))
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}