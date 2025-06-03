"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageBlock from "./image-block";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const cylinderImage = useRef(null);
  const heartImage = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="bg-[#004529] absolute md:fixed top-0 left-0 w-[100vw] h-[600px] md:h-[100vh]">
        <Image
          className="block md:hidden opacity-20"
          src="/assets/hero-bg-mobile.svg"
          fill={true}
          alt="Hero Section Background Image"
        />
        <ImageBlock
          classes="hidden md:block bg-cover min-w-screen min-h-screen h-screen opacity-20"
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
      </div>
      <div className="relative z-10">
        <div className="h-[600px] md:h-screen w-screen absolute md:fixed top-0 left-0 flex flex-col justify-center items-center z-10">
          <h1 className="text-center text-[#f4e9dd] text-[15vw] md:text-[13vw] uppercase leading-[84%] max-w-[10ch] font-extrabold">
            COCO
            <br />
            <span className="text-[11vw] md:text-[9vw]">Tapasbar</span>
          </h1>
          <h2 className="text-center text-[#f4e9dd] text-[6vw] md:text-[5vw] font-[Rubik] font-extrabold">
            From Munich with Love
          </h2>
          <div className="flex flex-col justify-end w-[600px] md:w-[80px] -rotate-90 md:justify-center absolute top-[0vh]  md:top-[80vh] right-0 md:left-0 bottom-10 rotate">
            <div className="w-[540px] md:w-[80vh] flex items-center">
              <div className="rotate-line hidden md:block" />
              <h3 className="text-[0.875rem] tracking-[0.8px] md:text-[2rem] font-bold uppercase leading-[32px] md:leading-[40px]">
                from 12:00 PM everyday
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[90vw] flex flex-col justify-center h-[600px] md:h-auto mx-auto py-0 md:pt-[3vh] md:pb-[50vh] relative z-5">
          <div className="grid grid-cols-2 gap-x-0 md:gap-x-[24vh] gap-y-[18vh] md:gap-y-[16vw] w-full">
            <div></div>
            <div
              ref={imageRef1}
              className="w-[180px] h-[160px]  md:w-[80%] md:h-[360px] relative"
            >
              <Image
                className="object-cover"
                alt="Tapas Image"
                src={"/assets/pizza-hero-1.webp"}
                fill
              />
            </div>
            <div
              ref={imageRef2}
              className="w-[180px] h-[160px]  md:w-[80%] md:h-[360px] relative"
            >
              <Image
                alt="Tapas Image"
                className="object-cover -rotate-[75deg]"
                src={"/assets/pizza-hero-2.webp"}
                fill
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
