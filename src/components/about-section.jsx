"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const images = imageWrapperRef.current;

        // Set initial rotation
        gsap.set(imageRef1.current, { rotation: -15 });
        gsap.set(imageRef2.current, { rotation: 15 });
        gsap.set(imageRef3.current, { rotation: -15 });

        // Scroll pin and vertical scroll of images
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=1800", // long scroll for smooth animation
          pin: true,
          scrub: true,
          anticipatePin: 1,
        });

        // Vertical scroll of image wrapper
        gsap.to(images, {
          yPercent: -100 * 2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000", // match pin duration
            scrub: true,
          },
        });

        // Image 1 rotate (from -15 to 30 = +45deg)
        gsap.to(imageRef1.current, {
          rotation: 30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: true,
          },
        });

        // Image 2 rotate (from 15 to -30 = -45deg)
        gsap.to(imageRef2.current, {
          rotation: -30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: true,
          },
        });

        // Image 3 rotate (from -15 to 30)
        gsap.to(imageRef3.current, {
          rotation: 30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: true,
          },
        });
      });
    }

    return () => {
      if (typeof window !== "undefined" && gsap && gsap.ScrollTrigger) {
        gsap.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#dd5f42] relative z-10 bg-[url('/assets/about-bg.png')] overflow-visible about-bg-size bg-repeat"
    >
      <div className="h-[100vh] min-h-[700px] p-[5vh] sticky top-0 left-0">
        <div className="bg-sun-rotation"></div>
      </div>
      <div className="relative z-10 -mt-[100vh] inset-[auto_0_0_auto] overflow-visible">
        <div className="float-left flex flex-col justify-center items-start w-[55%] h-[100vh] min-h-[700px pl-[14vh] pr-[4vh] sticky top-0 left-0">
          <h2 className="text-[#f4e9dd] uppercase text-left mb-[20px] font-['Rubik'] text-[5vw] font-extrabold leading-[98%]">
            I FOLLOWED <br />
            MY HEART AND
            <br /> IT LED ME TO
            <br /> PIZZA
          </h2>
          <p className="max-w-[52ch] mb-[20px] text-[1.25rem] leading-[128%] text-black font-medium font-['Rubik']">
            Praesent eget aliquam elit. Nullam lobortis eleifend massa, eget
            facilisis velit posuere quis. Suspendisse quis quam vel eros iaculis
            efficitur at eu libero. Donec quis mattis mauris, sed ultricies dui.
            Mauris pharetra enim eget egestas luctus.
          </p>
          <p className="max-w-[52ch] mb-[20px] text-[1.25rem] leading-[128%] text-black font-medium font-['Rubik']">
            In bibendum nunc non sapien gravida volutpat tristique luctus augue.
            Donec ut faucibus erat. Mauris ac nibh mollis, dapibus mauris
            cursus, bibendum quam. Nulla facilisi.
          </p>
        </div>
        <div className="float-left justify-center w-[45%] py-[50vh] flex overflow-hidden">
          <div
            ref={imageWrapperRef}
            className="grid gap-y-[49px] grid-cols-1 w-[85%]"
          >
            <div
              ref={imageRef1}
              className=" mx-auto w-[75%] h-[620px] relative"
            >
              <Image
                className="object-cover "
                alt="Pizza Image"
                src={"/assets/about-img-1.webp"}
                fill
              />
            </div>
            <div
              ref={imageRef2}
              className=" mx-auto w-[75%] h-[620px] relative"
            >
              <Image
                alt="Pizza Image"
                className="object-cover "
                src={"/assets/about-img-2.webp"}
                fill
              />
            </div>
            <div
              ref={imageRef3}
              className=" mx-auto w-[75%] h-[620px] relative"
            >
              <Image
                alt="Pizza Image"
                className="object-cover "
                src={"/assets/about-img-3.webp"}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
