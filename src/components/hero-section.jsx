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
          <div className="flex gap-[15px] md:gap-[20px] mt-4">
            <a href="https://www.instagram.com/coco.munich/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                width={"30px"}
                height={"30px"}
                className="md:w-[40px] md:h-[40px]"
                fill="none"
              >
                <path
                  d="M30.2981 11.2713C36.511 11.2713 37.2876 11.2713 39.8115 11.4655C46.2185 11.6596 49.1308 14.766 49.3249 20.9789C49.5191 23.5028 49.5191 24.0853 49.5191 30.2981C49.5191 36.511 49.5191 37.2876 49.3249 39.6174C49.1308 45.8302 46.0244 48.9366 39.8115 49.1308C37.2876 49.3249 36.7051 49.3249 30.2981 49.3249C24.0853 49.3249 23.3087 49.3249 20.9789 49.1308C14.5719 48.9366 11.6596 45.8302 11.4655 39.6174C11.2713 37.0934 11.2713 36.511 11.2713 30.2981C11.2713 24.0853 11.2713 23.3087 11.4655 20.9789C11.6596 14.766 14.766 11.6596 20.9789 11.4655C23.3087 11.2713 24.0853 11.2713 30.2981 11.2713ZM30.2981 7C23.8911 7 23.1145 7 20.7847 7.19415C12.2421 7.58245 7.58245 12.2421 7.19415 20.7847C7 23.1145 7 23.8911 7 30.2981C7 36.7051 7 37.4817 7.19415 39.8115C7.58245 48.3542 12.2421 53.0138 20.7847 53.4021C23.1145 53.5963 23.8911 53.5963 30.2981 53.5963C36.7051 53.5963 37.4817 53.5963 39.8115 53.4021C48.3542 53.0138 53.0138 48.3542 53.4021 39.8115C53.5963 37.4817 53.5963 36.7051 53.5963 30.2981C53.5963 23.8911 53.5963 23.1145 53.4021 20.7847C53.0138 12.2421 48.3542 7.58245 39.8115 7.19415C37.4817 7 36.7051 7 30.2981 7ZM30.2981 18.2608C23.697 18.2608 18.2608 23.697 18.2608 30.2981C18.2608 36.8993 23.697 42.3355 30.2981 42.3355C36.8993 42.3355 42.3355 36.8993 42.3355 30.2981C42.3355 23.697 36.8993 18.2608 30.2981 18.2608ZM30.2981 38.0642C26.0268 38.0642 22.5321 34.5695 22.5321 30.2981C22.5321 26.0268 26.0268 22.5321 30.2981 22.5321C34.5695 22.5321 38.0642 26.0268 38.0642 30.2981C38.0642 34.5695 34.5695 38.0642 30.2981 38.0642ZM42.7238 15.1543C41.1706 15.1543 40.0057 16.3193 40.0057 17.8725C40.0057 19.4257 41.1706 20.5906 42.7238 20.5906C44.277 20.5906 45.4419 19.4257 45.4419 17.8725C45.4419 16.3193 44.277 15.1543 42.7238 15.1543Z"
                  fill="#F4E9DD"
                ></path>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@coco.munich.tapas" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" className="md:w-[40px] md:h-[40px]">
                <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" fill="#F4E9DD"/>
              </svg>
            </a>
          </div>
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
