"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import FeaturedCard from "./featured-card";
import { PizzaCardsData } from "../../static-data";

const FeaturedSection = () => {
  const textRef = useRef(null);
  const lastScroll = useRef(0);
  const currentX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const delta = scrollTop - lastScroll.current;

      // Reverse direction based on scroll
      currentX.current -= delta * 1.5; // control scroll speed
      gsap.to(textRef.current, {
        x: currentX.current,
        duration: 0.5,
        ease: "power2.out",
      });

      lastScroll.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="featured">
      <div className="absolute inset-[0_auto_auto_0] overflow-hidden w-full">
        <h3
          ref={textRef}
          className="text-[#ffeb6c] uppercase pl-[10vw] text-[24vw] font-extrabold leading-[96%] whitespace-nowrap will-change-transform"
        >
          Real good food Real good food Real good food Real good food
        </h3>
      </div>
      <div className="max-w-[1380px] mx-auto relative z-10">
        <h2 className="text-center max-w-[20ch] m-[0_auto_60px] text-black text-[3.75rem] font-['Rubik'] font-extrabold leading-[96%]">
          Have you tasted our all-time-popular items? Must try, we promise! :)
        </h2>
        <div className="grid gap-[16px] grid-cols-3 max-w-[1260px] mx-auto">
          {PizzaCardsData.map((item) => (
            <FeaturedCard
              key={item.name}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
