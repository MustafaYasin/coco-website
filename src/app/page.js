"use client";

import { useEffect } from "react";
import AboutSection from "@/components/about-section";
import BackgroundSlider from "@/components/background-slider";
import FeaturedSection from "@/components/featured-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import IntroGridSection from "@/components/into-grid-section";
import TestimonialSection from "@/components/testimonial-section";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Disable scroll restoration immediately
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Also scroll to top after a short delay to ensure all components are loaded
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <BackgroundSlider text={"Munich's First Mediterranean Tapas!"} />
      <IntroGridSection />
      <AboutSection />
      <FeaturedSection />
      <BackgroundSlider text={"For Foodies Since 2018"} />
      <TestimonialSection />
      <Footer />
    </>
  );
}