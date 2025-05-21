"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div className="bg-[#cc4733] fixed top-0 left-0 w-[100vw] h-[600px] md:h-[100vh]">
        <Image
          src="/assets/hero-bg.svg"
          fill={true}
          alt="Hero Section Background Image"
        />
        <div
          ref={cylinderImage}
          className="w-[6vw] absolute left-[20%] top-[15%] min-h-[130px]"
        >
          <Image
            src="/assets/Decorative-graphic-cylinder.svg"
            fill
            alt="Decorative Image"
          />
        </div>
        <div
          ref={heartImage}
          className="w-[6vw] absolute inset-[auto_10%_15%_auto] min-h-[130px]"
        >
          <Image
            src="/assets/Decorative-graphic-heart.svg"
            fill
            alt="Decorative Image"
          />
        </div>
      </div>
      <div className="relative z-10">
        <div className="h-[600px] md:h-screen w-screen fixed top-0 flex flex-col justify-center items-center z-10">
          <h1 className="text-center text-[#f4e9dd] text-[15vw] md:text-[13vw] font-[Rubik] uppercase leading-[84%] max-w-[8ch] font-extrabold">
            Pizza
            <br />
            DI Maro
          </h1>
          <h2 className="text-center text-[#f4e9dd] text-[6vw] md:text-[5vw] font-[Rubik] uppercase font-extrabold">
            From Italy with love
          </h2>
          <div className="flex flex-col w-[80px] -rotate-90 justify-center absolute top-[50vh]  md:top-[80vh] right-0 md:left-0 bottom-0 rotate">
            <div className="w-[80vh] flex items-center">
              <div className="rotate-line hidden md:block" />
              <h3 className="text-[0.875rem] md:text-[2rem] font-bold uppercase leading-[32px] md:leading-[40px]">
                from 12:00 PM everyday
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[90vw] mx-auto pt-[3vh] pb-[50vh] relative z-5">
          <div className="grid grid-cols-2 gap-x-0 md:gap-x-[24vh] gap-y-[18vh] md:gap-y-[16vw] w-full">
            <div></div>
            <div
              ref={imageRef1}
              className="max-w-[200px] w-[200px] h-[180px] max-h-[180px] md:max-w-[80%] md:w-[80%] md:max-h-[360px] md:h-[360px] relative"
            >
              <Image
                className="object-cover"
                alt="Pizza Image"
                src={"/assets/pizza-hero-1.webp"}
                fill
              />
            </div>
            <div
              ref={imageRef2}
              className="max-w-[200px] w-[200px] h-[180px] max-h-[180px] md:max-w-[80%] md:w-[80%] md:max-h-[360px] md:h-[360px] relative"
            >
              <Image
                alt="Pizza Image"
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
