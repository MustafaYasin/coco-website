"use client"; // if you're using Next 13+ App Router

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const IntroGridSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const animatedImageRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(animatedImageRef.current, {
        scrollTrigger: {
          trigger: animatedImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        rotate: -540,
        scale: 0.5, // Start at 50% of original size
        duration: 1.6,
        delay: 0.3,
        ease: "power3.out",
      });

    };

    if (typeof window !== "undefined" && animatedImageRef.current) {
      animate();
    }
  }, [isMounted]);

  return (
    <div className="bg-[url('/assets/bgPattern-dot.png')] bg-center bg-repeat bg-[#f4e9dd] z-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-0">
        <div className="min-h-[35vh] md:min-h-[90vh] relative flex flex-col justify-center items-center">
          <div
            ref={animatedImageRef}
            className="max-w-[90%] w-full h-full max-h-[80%] bg-[url('/assets/goat-cheese-light.png')] bg-contain bg-no-repeat bg-center"
          ></div>

          <div className="absolute top-[13%] left-[12%] md:top-[10%] md:left-[20%] w-[52px] h-[52px] md:w-[92px] md:h-[92px]">
            <Image
              src={"/assets/Decorative-graphic-bling.svg"}
              fill={true}
              alt="Decorative Image"
            />
          </div>
          <div className="absolute bottom-[9%] right-[8%] md:bottom-[10%] md:right-[20%] w-[52px] h-[52px] md:w-[92px] md:h-[92px]">
            <Image
              src={"/assets/Decorative-graphic-bling.svg"}
              fill={true}
              alt="Decorative Image"
            />
          </div>
        </div>

        <div className="bg-[#45704c] py-[40px] md:py-0 flex flex-col justify-center items-start px-[4vw]">
          <h2 className="text-[#f4e9dd] font-['Rubik'] uppercase text-[10vw] md:text-[5vw] font-extrabold leading-[98%] mb-[20px]">
            MEDITERRANEAN <br />
            <span className="stroke">TAPAS </span>
            REIMAGINED.
            <br /> TASTE THE DIFFERENCE.
          </h2>
          <h2 className="text-[#f4e9dd] font-['Rubik'] uppercase text-[10vw] md:text-[5vw] font-extrabold leading-[98%] mb-[20px]">
            <unknown>😋</unknown>👍
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IntroGridSection;
