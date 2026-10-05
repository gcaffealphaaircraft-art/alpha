"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Header from "@/components/Header";
// import Hero from "@/components/Preloader";

import Footer from "@/components/Footer";
import CC from "@/components/CC";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <CC />
    
        </main>

      <Footer />
    </>
  );
}