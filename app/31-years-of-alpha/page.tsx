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
      "Ms. Shimoni A. from Agiaerospace, Mr. Ajay Agarwal from Avis Ventures & Business Aviation, Mr. Israel Leppe, Mr. Shubhesh Thakore and Mr. Cesar Leppe from Alpha Aircraft Systems.",
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
      "Mr. Cesar Leppe from Alpha Aircraft Systems, Mr. Arun Xaviour from Aero Supplies Group, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-Exhibition-Show-1-scaled.jpg",
    heading: "From Right to Left",
    description:
      "Mr. Henry Antonio Barahona from Avmax , Mr. Israel Leppe, Mr. Shubhesh Thakore and Mr. Cesar Leppe from Alpha Aircraft System at MRO Europe 2025 by AVIATION WEEK.",
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
      "Mr. Mark Sindone, Mr. Dean Wood, from Aviation Concepts, Mr. Israel Leppe from Alpha Aircraft Systems and S M Salman Basheer from Aviation Concepts at MRO Europe 2025 London by AVIATION WEEK.",
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
      "Mr. Mark Brucks from Eastman in conversation with Mr. Shubhesh Thakore from Alpha Aircraft System at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Michael Salomon from Sal Aerospace Technologies with Mr. Shubhesh Thakore, Mr. Israel Leppe and Mr. Cesar Leppe from Alpha Aircraft Systems at MRO Europe 2025 London by Aviation Week Events.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (3).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Cesar Leppe from Alpha Aircraft Systems, Mr. Shota Ozaki and Mr. Fujimura from Japan Transocean Air Co. Ltd., Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft System at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (4).jpeg",
    heading: "From Right to Left",
    description:
      "Ms. Lina Gervelyte from Locatory.com Aviation Spare Parts and Repair Capabilities Marketplace with Mr. Israel Leppe from Alpha Aircraft System at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (5).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Adrian Ionascu (second from left) with Mr. Cesar Leppe, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft System at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (6).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft System and Ms. Ruthie Lopes, Mr. Bernie Iglesias, Mr. Gus Reina from Aircraft Systems Division of Com-Jet Corp at MRO Europe 2025 London by AVIATION WEEK",
  },
  {
    image: "/Exhibition-MRO-Americas-1.webp",
    heading: "From Right to Left",
    description:
      "Mr. Cesar Leppe from Alpha Aircraft Systems, Mr. Jose Caparroz from Iberwell Aeronautica, Mr. Israel Leppe from Alpha Aircraft Systems and Mr. Jorge Lluch from Iberwell Aeronautica at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-2.webp",
    heading: "From Right to Left",
    description:
      "Mr. Russel Zali, Mr. Israel Leppe, Mr. Cesar Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-3.webp",
    heading: "From Right to Left",
    description:
      "Mr. Linas Klinauskas from Colibri Aero & Mr. Israel Leppe from Alpha Aircraft System at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-6.webp",
    heading: "From Left to Right",
    description:
      "Ms. Juliana Christensen, Mr. Justin Spaulding from The 145 and Mr. Shubhesh Thakore from Alpha Aircraft Systems at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Exhibition-MRO-Americas-7.webp",
    heading: "From Right to Left",
    description:
      "Mr. Suresh Rahangdale from RSR Aviation and Mr. Shubhesh Thakore from Alpha Aircraft Systems at MRO Europe 2025 London by Aviation Week.",
  },
  {
    image: "/Exhibition-MRO-Americas-8.webp",
    heading: "From Right to Left",
    description:
      "Mr. Bruno Falavigna from New Gen Aerospace Corporation and Mr. Israel Leppe from Alpha Aircraft Systems at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (1).jpeg",
    heading: "From Left to Right",
    description:
      "Mr. Laurent A. from AOG Accessories and Mr. Israel Leppe from Alpha Aircraft Systems at MRO Europe 2025 London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (2).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Sudhir Kesharwani (center) from U.S. Commercial Service International Trade Administration with Mr. Israel Leppe (right) and Mr. Shubhesh Thakore (left) from Alpha Aircraft",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (3).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Reddie Reynon (center) from Aero Strategies, Mr. Leonardo Gonzalez (right) and Mr. Israel Leppe (left) from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at PB Expo 2026 (4).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Joe Da Silva (left) and Mr. Vitor Batista Castilhos (right) from South Seas Aviation Inc with Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Beer 2026-Istanbul.jpeg",
    heading: "From Left to Right",
    description:
      "Mr. Igor Litvin, CEO, Business Jet Engine Maintenance Solutions and Mr. Israel Leppe, CEO, Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Beer 2026.jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Chiwon Hwang, Mr. Scott Min from Heli Korea and Mr. Israel Leppe from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MROBEER.jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Saurabh Tripathi from Fenix Aerospace (and former Regional Director for Asia & Middle East at Aventure Aviation) and Mr. Israel Leppe from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-Clients.png",
    heading: "In this Photograph",
    description:
      "Mr. Pascal Jacquemont (left) and Mr. Amir Zamri (right) from Aerobay with Mr. Shubhesh Thakore (centre) from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-meets-with-clients.png",
    heading: "In this Photograph",
    description:
      "Mr. Amyr Qureshi (left) from Aventure Aviation, Mr. Shubhesh Thakore (center) and Mr. Israel Leppe (right) from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha-in-germany.png",
    heading: "In this Photograph",
    description:
      "Mr. Yegorov Sergey from Global Aero Services (center), Mr. Leonardo Gonzalez (left) and Mr. Israel Leppe (right) from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (1).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Israel Leppe from Alpha Aircraft Systems, Mr. Victor Barrera, Mr. Jorge Orlando Espinosa Garcia from Satena, Mr. Shubhesh Thakore and Mr. Leonardo Gonzalez from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (2).jpeg",
    heading: "From Right to Left",
    description:
      "Mr. Lalindra Danawardena from Securatec Group, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (3).jpeg",
    heading: "From Right to Left",
    description:
      "Ms. Saadhana Ramesh, Mr. Ramesh Narasimhan, Mr. Ratan Pandey from Precision Aviation Group, Mr. Israel Leppe and Mr. Shubhesh Thakore from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (4).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Varun Kapoor (right) from ASL Aerospace with Mr. Shubhesh Thakore (left) from Alpha Aircraft System at MRO Europe London by AVIATION WEEK.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (5).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Gang Wang (left) with Mr. Shubhesh Thakore (right) from Alpha Aircraft Systems.",
  },
  {
    image: "/Alpha Aircraft Systems at MRO Asia Pacific Singapore (6).jpeg",
    heading: "In this Photograph",
    description:
      "Mr. Mahinshah Shajahan (left) from Avstock with Mr. Shubhesh Thakore (right) from Alpha Aircraft Systems.",
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
                  src="/Cam1.webp"
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
              As we celebrate 30 years of Alpha Aircraft Systems, we’re taking a moment to honour the incredible people who’ve been part of our journey. This page shares stories of appreciation for the clients and collaborators who’ve been integral to our success.
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
              src="/Team.webp"
              alt="Alpha Aircraft Systems team with aviation partners"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.peopleCopy}>
            <h2>
              Aviation isn't just about ✈ aircraft.
              <br />
              It's about the People.
            </h2>
            <div className={styles.accentRule} />
            <p>
             All connected by the skies above us. From different continents, different cultures, different walks of life united in one frame, united by one dream: to keep the world flying.
            </p>
            <blockquote>
             For 31 years, Alpha Aircraft Systems has been honored to serve this incredible community.
            </blockquote>
            <p>
              From Miami to Singapore, from Dubai to London, from Africa to every corner of the globe — we’ve witnessed how aviation doesn’t just move aircraft, it moves humanity forward, together.
            </p>
            <div className={styles.accentRule} />
          </div>
        </section>

        <section className={styles.gallerySection} id="faces-of-our-journey">
          <div className={styles.galleryHeading}>
            <h2>Faces of Our Journey</h2>
            <p>
              This page on our website shares stories of appreciation for the clients and collaborators who’ve been integral to our journey.
            </p>
          </div>
          <StoryGallery stories={stories} />
        </section>

      </main>
      <Footer />
    </>
  );
}
