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
  return (
    <>
      <Header />
      <HeroSection />
      <BackgroundSlider text={"Slice to meet you!"} />
      <IntroGridSection />
      <AboutSection />
      <FeaturedSection />
      <BackgroundSlider text={"For Foodies Since 2012"} />
      <TestimonialSection />
      <Footer />
    </>
  );
}
