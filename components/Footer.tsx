// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaPinterestP,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="site-footer">
//       <div className="footer-shell">
//         <div className="footer-top">
//           <div className="footer-brand-block">
//             <div className="footer-branding">
              
//               <Image
//                 src="/logo.webp"
//                 alt="Alpha Aircraft Systems"
//                 width={180}
//                 height={60}
//                 className="site-footer-logo"
//               />
//             </div>

//             <p className="footer-copy">
//               Alpha Aircraft Systems empowers operators and maintenance teams with
//               reliable APU repair, aircraft scanning, hydraulic, fuel, and
//               welding solutions that keep fleets mission-ready.
//             </p>

//             <div className="footer-socials" aria-label="Social media links">
//               <a href="https://www.facebook.com/AlphaAircraft/" target="_blank" rel="noreferrer" aria-label="Facebook">
//                 <FaFacebookF />
//               </a>
//               <a href="https://x.com/AlphaAircraft" target="_blank" rel="noreferrer" aria-label="X">
//                 <FaXTwitter />
//               </a>
//               <a href="https://www.instagram.com/alphaaircraftsystemsinc/" target="_blank" rel="noreferrer" aria-label="Instagram">
//                 <FaInstagram />
//               </a>
//               <a href="https://www.linkedin.com/company/alpha-aircraft-systems/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
//                 <FaLinkedinIn />
//               </a>
//               <a href="https://www.youtube.com/channel/UCGeWcTVdUipqi_Jon8FQUKg" target="_blank" rel="noreferrer" aria-label="YouTube">
//                 <FaYoutube />
//               </a>
//               <a href="https://in.pinterest.com/alphaaircraft/" target="_blank" rel="noreferrer" aria-label="Pinterest">
//                 <FaPinterestP />
//               </a>
//             </div>
//           </div>
//  <div className="footer-links-column">
//             <h3>Quick Links</h3>
//             <Link href="/">Home</Link>
//              <Link href="/about">About</Link>
//             <Link href="/contact">Contact</Link>
//             <Link href="/exhibition">Exhibitions</Link>
//             <Link href="/#certifications">Certifications</Link>
//           </div>
//           <div className="footer-links-column">
//             <h3>Services</h3>
//             <Link href="/a-p-u-overhaul-repairs">A.P.U. Overhaul &amp; Repairs</Link>
//             <Link href="/fuel-systems-fuel-flow-transmitter">Fuel Systems &amp; Flow Transmitter</Link>
//             <Link href="/plasma-spray-professional-welding">Plasma Spray &amp; Welding</Link>
//             <Link href="/hydraulic-systems">Hydraulic Systems</Link>
//           </div>

//           <div className="footer-links-column">
//             <Link className="skk"href="/aircraft-scanning">Aircraft Scanning</Link>
//             <Link href="/borescope-services">Borescope Services</Link>
//             <Link href="/c-s-d-pneumatic-systems">C.S.D. &amp; Pneumatic Systems</Link>
           
//           </div>

         
//         </div>

//         <div className="footer-bottom-bar">
//           <p>Copyright © 2026 Alpha Aircraft Systems. Powered by <a style = {{color:"#b84a2b"}}href="https://www.gcaffe.org/" target="_blank" rel="noopener">G Caffe.</a></p>

//           <div className="footer-meta-links">
            
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Background decorations */}
      <div className="footer-background-art" aria-hidden="true">
        <Image
          src="/halloween/web 1.png"
          alt=""
          width={260}
          height={260}
          className="footer-web footer-web-left"
        />

        <Image
          src="/halloween/web 2.png"
          alt=""
          width={260}
          height={260}
          className="footer-web footer-web-right"
        />

        <Image
          src="/halloween/web 2.png"
          alt=""
          width={150}
          height={220}
          className="footer-ghost footer-ghost-one"
        />

        

        

        <Image
          src="/halloween/Mob 1.png"
          alt=""
          width={150}
          height={220}
          className="footer-ghost footer-ghost-four"
        />
      </div>

      <div className="footer-shell">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand-block">
            <Image
              src="/logo.webp"
              alt="Alpha Aircraft Systems"
              width={90}
              height={55}
              className="site-footer-logo"
            />

            <p className="footer-copy">
              Alpha Aircraft Systems empowers operators and
              maintenance teams with reliable APU repair,
              aircraft scanning, hydraulic, fuel, and welding
              solutions that keep fleets mission-ready.
            </p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/AlphaAircraft/"
                target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://x.com/AlphaAircraft"
                target="_blank" rel="noreferrer" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/alphaaircraftsystemsinc/"
                target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/alpha-aircraft-systems/"
                target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/channel/UCGeWcTVdUipqi_Jon8FQUKg"
                target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://in.pinterest.com/alphaaircraft/"
                target="_blank" rel="noreferrer" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-column">
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/exhibition">Exhibitions</Link>
            <Link href="/#certifications">Certifications</Link>
          </div>

          {/* Services */}
          <div className="footer-links-column">
            <h3>Services</h3>
            <Link href="/a-p-u-overhaul-repairs">
              A.P.U. Overhaul &amp; Repairs
            </Link>
            <Link href="/fuel-systems-fuel-flow-transmitter">
              Fuel Systems &amp; Flow Transmitter
            </Link>
            <Link href="/plasma-spray-professional-welding">
              Plasma Spray &amp; Welding
            </Link>
            <Link href="/hydraulic-systems">
              Hydraulic Systems
            </Link>
          </div>

          {/* Additional services */}
          <div className="footer-links-column footer-extra-services">
            <Link href="/aircraft-scanning">Aircraft Scanning</Link>
            <Link href="/borescope-services">Borescope Services</Link>
            <Link href="/c-s-d-pneumatic-systems">
              C.S.D. &amp; Pneumatic Systems
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom-bar">
          <p>
            Copyright © 2026 Alpha Aircraft Systems. Powered by{" "}
            <a href="https://www.gcaffe.org/"
              target="_blank"
              rel="noopener noreferrer">
              G Caffe.
            </a>
          </p>

          <Image
            src="/halloween/web 4.png"
            alt=""
            width={850}
            height={150}
            className="footer-graveyard"
          />
        </div>

        {/* Hanging spider */}
        <div className="footer-hanging-spider" aria-hidden="true">
          <span className="footer-spider-thread" />
          <Image
            src="/halloween/web 3.png"
            alt=""
            width={120}
            height={150}
          />
        </div>
      </div>
    </footer>
  );
}
