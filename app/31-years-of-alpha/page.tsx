import Image from "next/image";
import {
  ArrowDown,
  Award,
  Globe2,
  Landmark,
  UsersRound,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryGallery from "./StoryGallery";
import styles from "./page.module.css";

const stories = [
  {
    image: "/Alpha-exhibition-in-london-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Ms. Shimoni A. from Agioaerospace, Mr. Ajay Agarwal from Avis Ventures & Business Aviation, Mr. Israel Leppe, Mr. Shubhesh Thakore and Mr. Cesar Leppe from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-exhibition-in-london-1-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Javier Rincon from Premier Aerospace and Mr. Israel Leppe from Alpha Aircraft Systems.",
  },
  {
    image: "/Clients-of-Alpha-Exhibition-in-london-1-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Cesar Leppe from Alpha Aircraft Systems, Mr. Arun Xavioun from Aero Supplies Group, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-Exhibition-Show-1-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Henry Antonio Barahona from Avmax, Mr. Israel Leppe, Mr. Shubhesh Thakore and Mr. Cesar Leppe from Alpha Aircraft Systems at MRO Europe 2025 by AVIATION WEEK.",
  },
  {
    image: "/Alpha-in-London-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft Systems, Mr. Eng. Saad Jerri from International Aviation Assets and Mr. Cesar Leppe from Alpha Aircraft Systems at MRO Europe 2025 by Aviation Week.",
  },
  {
    image: "/Exhibition-of-Alpha-1-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Mark Sindone, Mr. Dean Wood from Aviation Concepts, Mr. Israel Leppe from Alpha Aircraft Systems and Mr. S M Salman Basheer from Aviation Concepts.",
  },
  {
    image: "/Alpha-Aircraft-Systems-at-Aero-Engines-Hamburg-Germany.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Hector M. Hernandez, Mr. William Delgado Triviño from World Business Aerospace with Mr. Israel Leppe and Mr. Cesar Leppe from Alpha Aircraft Systems at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (1).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Mark Bruckner from Eastman in conversation with Mr. Shubhesh Thakore from Alpha Aircraft System at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Michael Salomon from Sal Aerospace Technologies with Mr. Shubhesh Thakore, Mr. Israel Leppe and Mr. Cesar Leppe from Alpha Aircraft Systems at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (3).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Cesar Leppe from Alpha Aircraft Systems with our aviation partners at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (4).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Mark Sindone, Mr. Dean Wood from Aviation Concepts, Mr. Israel Leppe from Alpha Aircraft Systems and Mr. S M Salman Basheer from Aviation Concepts.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (5).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Cesar Leppe from Alpha Aircraft Systems and our aviation partners at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (6).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft Systems meeting with our partners at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-1.webp",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft Systems and our valued aviation partners at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-2.webp",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft Systems with aviation industry colleagues at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-3.webp",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft Systems and our aviation partners at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-6.webp",
    heading: "From Right to Left",
    description:
      "Mr. Cesar Leppe from Alpha Aircraft Systems meeting our valued clients and collaborators at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-7.webp",
    heading: "From Right to Left",
    description:
      "Mr. Shubhesh Thakore from Alpha Aircraft Systems with our valued aviation partners at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-8.webp",
    heading: "From Right to Left",
    description:
      "The Alpha Aircraft Systems team with our valued clients and collaborators at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (1).jpeg",
    heading: "In this Photograph",
    description:
      "A moment of appreciation with the clients and collaborators who have been part of our journey.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (2).jpeg",
    heading: "In this Photograph",
    description:
      "Thank you to our clients, partners and friends for being a valued part of our journey.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (3).jpeg",
    heading: "In this Photograph",
    description:
      "Celebrating the people and partnerships that keep the aviation community moving forward.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (4).jpeg",
    heading: "In this Photograph",
    description:
      "With gratitude to the aviation professionals who have supported Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Beer 2026-Istanbul.jpeg",
    heading: "From Right to Left",
    description:
      "The Alpha Aircraft Systems team with valued aviation partners and collaborators.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Beer 2026.jpeg",
    heading: "In this Photograph",
    description:
      "Thank you for your steadfast support and trust throughout our journey.",
  },
  {
    image: "/Alpha Aircraft Systems at MROBEER.jpeg",
    heading: "From Right to Left",
    description:
      "Aviation is a community. We are grateful to everyone who has been part of ours.",
  },
  {
    image: "/Alpha-Clients.png",
    heading: "From Right to Left",
    description:
      "Mr. Malinda Dhanawadena from Securatec Group, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-meets-with-clients.png",
    heading: "From Right to Left",
    description:
      "Ms. Saadhana Hrishank, Mr. Ramesh Narasimhan and Mr. Ratan Pandey from Precision Aviation Group, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-in-germany.png",
    heading: "In this Photograph",
    description:
      "Mr. Varan Kapoor from ASL Aerospace with Mr. Shubhesh Thakore from Alpha Aircraft System at MRO Europe London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (1).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Chiwon Hwang, Mr. Scott Min from Heli Korea and Mr. Israel Leppe from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Gang Wang with Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (3).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Mahinshah Shajahan from Avstock with Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (4).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Mahinshah Shajahan from Avstock with Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (5).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems with our aviation partners.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (6).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe and Mr. Cesar Leppe from Alpha Aircraft Systems with our aviation partners.",
  },
];

const milestones = [
  {
    icon: Award,
    value: "31",
    label: "Years of Excellence",
  },
  {
    icon: UsersRound,
    value: "100+",
    label: "Global Partners",
  },
  {
    icon: Globe2,
    value: "4",
    label: "Continents Served",
  },
  {
    icon: Landmark,
    value: "1995",
    label: "Founded",
  },
];

export const metadata = {
  title: "31 Years of Alpha | Alpha Aircraft Systems",
  description:
    "Celebrating 31 years of Alpha Aircraft Systems and honouring the clients and collaborators who have been part of our journey since 1995.",
};

export default function ThirtyOneYearsOfAlphaPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <h1>
                Celebrating Three
                <br />
                Decades of
                <br />
                Excellence
              </h1>
              <p>
                Behind every milestone are the people who make it meaningful
              </p>
              <a className={styles.heroButton} href="#our-journey">
                Explore Journey <ArrowDown size={14} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroPhoto}>
                <Image
                  src="/Alpha-Aircraft-Systems-celebrating-30-years-Header-Image.webp"
                  alt="Alpha Aircraft Systems team and partners at MRO Europe"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 48vw"
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.yearsBadge} aria-label="31 years">
                <Image
                  src="/31.png"
                  alt="31 years"
                  fill
                  sizes="(max-width: 640px) 108px, (max-width: 900px) 130px, 168px"
                  className={styles.yearsBadgeImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.milestoneSection} id="our-journey">
          <div className={styles.sectionHeading}>
            <h2>
              Honoring the Incredible People
              <br />
              Who Made It Possible
            </h2>
            <p>
              As we celebrate 31 years of Alpha Aircraft Systems, we’re taking
              a moment to honour the incredible people who’ve been part of our
              journey. This page shares stories of appreciation for the clients
              and collaborators who’ve been integral to our success.
            </p>
          </div>
          <div className={styles.milestoneGrid}>
            {milestones.map(({ icon: Icon, value, label }) => (
              <div className={styles.milestone} key={label}>
                <Icon size={28} strokeWidth={2.2} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.peopleSection}>
          <div className={styles.peoplePhoto}>
            <Image
              src="/Alpha Team.jpg"
              alt="Alpha Aircraft Systems team with aviation partners"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.peopleCopy}>
            <h2>
              Aviation isn&apos;t just about ✈ aircraft.
              <br />
              It&apos;s about the People.
            </h2>
            <div className={styles.accentRule} />
            <p>
              All connected by the skies above us. From different continents,
              different cultures, different walks of life united in one frame,
              united by one dream: to keep the world flying.
            </p>
            <blockquote>
              For 31 years, Alpha Aircraft Systems has been honored to serve
              this incredible community.
            </blockquote>
            <p>
              From Miami to Singapore, from Dubai to London, from Africa to
              every corner of the globe — we&apos;ve witnessed how aviation
              doesn&apos;t just move aircraft, it moves humanity forward,
              together.
            </p>
            <div className={styles.accentRule} />
          </div>
        </section>

        <section className={styles.gallerySection} id="faces-of-our-journey">
          <div className={styles.galleryHeading}>
            <h2>Faces of Our Journey</h2>
            <p>
              This page on our website shares stories of appreciation for the
              clients and collaborators who&apos;ve been integral to our
              journey.
            </p>
          </div>
          <StoryGallery stories={stories} />
        </section>

      </main>
      <Footer />
    </>
  );
}
