"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import styles from "./WhoWeAre.module.css"; 

gsap.registerPlugin(ScrollTrigger);

// CSS Modules hash class names, so GSAP needs the hashed selector
const q = (name: string) => `.${styles[name]}`;

const services = [
  { letter: "M", name: "Maintenance" },
  { letter: "R", name: "Repair" },
  { letter: "O", name: "Overhaul" },
];

export default function WhoWeAre() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: q("mro-hero"), start: "top 75%" },
      });

      tl.from(q("mro-letter"), {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      })
        .from(
          q("mro-service-name"),
          { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          q("orange-line"),
          { scaleX: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          [q("hero-copy"), q("hero-button")],
          { x: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out" },
          "-=0.9"
        )
        .from(
          q("graveyard"),
          { yPercent: 40, opacity: 0, duration: 1, ease: "power3.out" },
          "-=1"
        );

      gsap.to(q("bats"), {
        y: 10,
        x: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className={styles["mro-page"]}>
      <section className={styles["mro-hero"]}>
        <img
          src="/halloween/bats.png"
          alt=""
          className={styles["bats"]}
          aria-hidden
        />

        <div className={styles["hero-container"]}>
          {/* LEFT: M R O */}
          <div className={styles["hero-left"]}>
            <div className={styles["mro-letters"]}>
              {services.map((s, i) => (
                <div className={styles["mro-item-wrap"]} key={s.letter}>
                  {i > 0 && <div className={styles["mro-divider"]} />}
                  <div className={styles["mro-item"]}>
                    <div className={styles["letter-mask"]}>
                      {s.letter === "O" ? (
                        <span
                          className={`${styles["mro-letter"]} ${styles["pumpkin-o"]}`}
                        >
                          <img src="/halloween/pumpkin.png" alt="O" />
                        </span>
                      ) : (
                        <span className={styles["mro-letter"]}>{s.letter}</span>
                      )}
                    </div>
                    <span className={styles["mro-service-name"]}>{s.name}</span>
                    <span className={styles["orange-line"]} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: copy + button */}
          <div className={styles["hero-right"]}>
            <p className={styles["hero-copy"]}>
              Alpha Aircraft Systems performs repair and overhaul services on a
              wide range of aircraft parts, including generators, hydraulic and
              pneumatic units, CSD&apos;s, and fuel system related parts, among
              others. An important and growing part of the company&apos;s
              business is dedicated to APU repair and overhaul services, which
              the company began in 2009. Currently the company specializes in
              the GTCP85, GTCP36, TSCP700 and APS2000 series APU&apos;s, with an
              extensive parts inventory for all variants of these models. Alpha
              performs field service and training for its APU clients. The
              company also has APU&apos;s for sale, exchange and lease on short
              notice.
            </p>

            <a
              href="/fuel-systems-fuel-flow-transmitter"
              className={styles["hero-button"]}
            >
              <span>EXPLORE SERVICES</span>
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <img
          src="/halloween/graveyard.webp"
          alt=""
          className={styles["graveyard"]}
          aria-hidden
        />
      </section>
    </main>
  );
}



// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";
// gsap.registerPlugin(ScrollTrigger);

// export default function WhoWeAre() {
//   const root = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {

//       /* =========================================
//          HERO ANIMATION
//       ========================================= */

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".mro-hero",
//           start: "top 75%",
//         },
//       });

//       tl.from(".who-label", {
//         y: 25,
//         opacity: 0,
//         duration: 0.7,
//         ease: "power3.out",
//       })

//         .from(
//           ".mro-letter",
//           {
//             yPercent: 100,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.12,
//             ease: "power4.out",
//           },
//           "-=0.35"
//         )

//         .from(
//           ".mro-service-name",
//           {
//             y: 30,
//             opacity: 0,
//             duration: 0.7,
//             stagger: 0.1,
//             ease: "power3.out",
//           },
//           "-=0.5"
//         )

//         .from(
//           ".hero-copy",
//           {
//             x: 60,
//             opacity: 0,
//             duration: 1,
//             ease: "power4.out",
//           },
//           "-=0.7"
//         )

//         .from(
//           ".radar",
//           {
//             scale: 0.5,
//             opacity: 0,
//             duration: 1,
//             ease: "back.out(1.7)",
//           },
//           "-=0.6"
//         );


//       /* =========================================
//          RADAR ROTATION
//       ========================================= */

//       gsap.to(".radar-ring", {
//         rotation: 360,
//         duration: 18,
//         repeat: -1,
//         ease: "none",
//       });


//       /* =========================================
//          AIRCRAFT FLOAT
//       ========================================= */

//       gsap.to(".aircraft", {
//         y: -8,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//     }, root);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main
//       ref={root}
//       className="mro-page"
//     >

//       {/* =====================================================
//           WHO WE ARE / MRO HERO
//       ===================================================== */}

//       <section className="mro-hero" >

//         <div className="hero-bg-glow" />

//         <div className="hero-container">

//           {/* =========================================
//               LEFT
//           ========================================= */}

//           <div className="hero-left">

            

//             <div className="mro-letters">

//               {/* M */}

//               <div className="mro-item">

//                 <div className="letter-mask">
//                   <span className="mro-letter">
//                     M
//                   </span>
//                 </div>

//                 <span className="mro-service-name">
//                   Maintenance
//                 </span>

//                 <span className="orange-line" />

//               </div>


//               <div className="mro-divider" />


//               {/* R */}

//               <div className="mro-item">

//                 <div className="letter-mask">
//                   <span className="mro-letter">
//                     R
//                   </span>
//                 </div>

//                 <span className="mro-service-name">
//                   Repair
//                 </span>

//                 <span className="orange-line" />

//               </div>


//               <div className="mro-divider" />


//               {/* O */}

//               <div className="mro-item">

//                 <div className="letter-mask">
//                   <span className="mro-letter">
//                     O
//                   </span>
//                 </div>

//                 <span className="mro-service-name">
//                   Overhaul
//                 </span>

//                 <span className="orange-line" />

//               </div>

//             </div>

//           </div>


//           {/* =========================================
//               RIGHT
//           ========================================= */}

//           <div className="hero-right">

//             <p className="hero-copy">
//              Alpha Aircraft Systems performs repair and overhaul services on a wide range of aircraft parts, including generators, hydraulic and pneumatic units, CSD&apos;s, and fuel system related parts, among others. An important and growing part of the company&apos;s business is dedicated to APU repair and overhaul services, which the company began in 2009. Currently the company specializes in the GTCP85, GTCP36, TSCP700 and APS2000 series APU&apos;s, with an extensive parts inventory for all variants of these models. Alpha performs field service and training for its APU clients. The company also has APU&apos;s for sale, exchange and lease on short notice.
//          <br /><br />  <a
//             href="/fuel-systems-fuel-flow-transmitter"
//             className="hero-button hero-button-primary"
//           >

//             <span>
//               EXPLORE SERVICES
//             </span>

//             <ArrowUpRight
//               size={16}
//               strokeWidth={1.8}
//             />

//           </a>
//             </p>

    
 

         

//             {/* =====================================
//                 RADAR
//             ===================================== */}

           

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }