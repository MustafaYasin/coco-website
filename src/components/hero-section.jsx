"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageBlock from "./image-block";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const cylinderImage = useRef(null);
  const heartImage = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const ctx = gsap.context(() => {
      // Image 1 rotates right on scroll
      gsap.to(imageRef1.current, {
        rotation: 30,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef1.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Image 2 rotates left on scroll
      gsap.to(imageRef2.current, {
        rotation: -60,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cylinder image rotates continuously
      gsap.to(cylinderImage.current, {
        rotation: 60, // full rotation
        duration: 2, // 5 seconds per loop
        ease: "linear", // constant speed
        repeat: -1, // infinite rotation
        yoyo: true,
      });

      // Cylinder image rotates continuously
      gsap.to(heartImage.current, {
        y: "-60px", // full rotation
        duration: 2, // 5 seconds per loop
        ease: "back.inOut", // constant speed
        repeat: -1, // infinite rotation
        yoyo: true,
      });
    });

    return () => ctx.revert(); // clean up all animations
  }, [isMounted]);

  return (
    <>
      <div className="relative bg-[#004529] w-full h-[600px] md:h-[100vh] overflow-hidden">
        <Image
          className="block md:hidden opacity-20 absolute inset-0"
          src="/assets/hero-bg-mobile.svg"
          fill={true}
          alt="Hero Section Background Image"
        />
        <ImageBlock
          classes="hidden md:block bg-cover w-full h-full opacity-20 absolute inset-0"
          src="/assets/hero-bg.svg"
        />
        <div
          ref={cylinderImage}
          className="w-[12vw] md:w-[6vw] absolute left-[10%] top-[28%] md:left-[20%] md:top-[15%] min-h-[130px]"
        >
          <Image
            src="/assets/Decorative-graphic-cylinder.svg"
            fill
            alt="Decorative Image"
          />
        </div>
        <div
          ref={heartImage}
          className="w-[12vw] md:w-[6vw] absolute inset-[auto_20%_15%_auto] md:inset-[auto_10%_15%_auto] min-h-[130px]"
        >
          <Image
            src="/assets/Decorative-graphic-heart.svg"
            fill
            alt="Decorative Image"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <h1 className="text-center text-[#f4e9dd] text-[15vw] md:text-[13vw] leading-[84%] max-w-[10ch] font-extrabold">
            <span className="uppercase" style={{ WebkitTextStroke: '4px black' }}>COCO</span>
            <br />
            <span className="text-[11vw] md:text-[9vw]">Tapas & Bar</span>
          </h1>
          <h2 className="text-center text-[#f4e9dd] text-[6vw] md:text-[5vw] font-[Rubik] font-extrabold">
            From Munich with Love
          </h2>
          <div className="flex flex-col justify-end w-[600px] md:w-[80px] -rotate-90 md:justify-center absolute top-[0vh]  md:top-[80vh] right-0 md:left-0 bottom-10 rotate">
            <div className="w-[540px] md:w-[80vh] flex items-center">
              <div className="rotate-line hidden md:block" />
              <h3 className="text-[1.25rem] tracking-[0.8px] md:text-[2rem] font-bold uppercase leading-[32px] md:leading-[40px]">
                Tuesday - Saturday from 18:00
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
