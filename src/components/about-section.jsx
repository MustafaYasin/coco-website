"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.gsap;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
          const section = sectionRef.current;
          const images = imageWrapperRef.current;

          // Set initial rotations
          gsap.set(imageRef1.current, { rotation: -15 });
          gsap.set(imageRef2.current, { rotation: 15 });
          gsap.set(imageRef3.current, { rotation: -15 });

          // Pin section - re-enabled with proper hydration handling
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=1800",
            pin: true,
            scrub: true,
            anticipatePin: 1,
            refreshPriority: -1, // Ensure this runs after other ScrollTriggers
          });

          // Scroll animation
          gsap.to(images, {
            yPercent: -100 * 2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=3000",
              scrub: true,
            },
          });

          // Rotate images
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

        // Mobile animations
        mm.add("(max-width: 768px)", () => {
          const section = sectionRef.current;
          const images = imageWrapperRef.current;

          // Set initial rotations for mobile
          gsap.set(imageRef1.current, { rotation: -15 });
          gsap.set(imageRef2.current, { rotation: 15 });
          gsap.set(imageRef3.current, { rotation: -15 });

          // Scroll animation for mobile
          gsap.to(images, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom top",
              scrub: true,
            },
          });

          // Rotate images on mobile
          gsap.to(imageRef1.current, {
            rotation: 15,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom top",
              scrub: true,
            },
          });

          gsap.to(imageRef2.current, {
            rotation: -15,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom top",
              scrub: true,
            },
          });

          gsap.to(imageRef3.current, {
            rotation: 15,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        // Refresh ScrollTrigger after hydration
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);

        // Cleanup
        return () => mm.revert();
      });
    });
  }, [isMounted]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#dd5f42] relative bg-[url('/assets/about-bg.png')] overflow-visible about-bg-size bg-repeat"
    >
      <div className="h-[100vh] min-h-[700px] p-0 md:p-[5vh] sticky top-0 left-0 z-0">
        <div className="bg-sun-rotation"></div>
      </div>
      <div className="relative z-10 -mt-[100vh] inset-[auto_0_0_auto] overflow-hidden flex flex-col md:block md:overflow-visible">
        <div className="float-left w-full flex flex-col justify-center items-start md:w-[55%] h-auto md:h-[100vh] min-h-auto md:min-h-[700px] pt-[6vh] md:pt-0 px-[6%] md:pl-[14vh] md:pr-[4vh] sticky top-0 left-0 z-10">
          <h2 className="text-[#f4e9dd] uppercase text-left mb-[20px] font-['Rubik'] text-[9vw] md:text-[5vw] font-extrabold leading-[98%]">
            I FOLLOWED <br />
            MY HEART AND
            <br /> IT LED ME TO
            <br /> TAPAS
          </h2>
          <p className="max-w-[52ch] mb-[20px] text-[1.1rem] md:text-[1.5rem] leading-[128%] text-black font-medium font-['Rubik']">
            Since 2018, we've been bringing the diversity of Mediterranean cuisine to Barer Straße. Our passion is creating unforgettable culinary experiences with fresh, high-quality ingredients and natural spices.
          </p>
          <p className="max-w-[52ch] mb-[20px] text-[1.1rem] md:text-[1.5rem] leading-[128%] text-black font-medium font-['Rubik']">
            <strong>We cater to every taste:</strong> From succulent meats and fresh seafood to extensive <strong>VEGETARIAN</strong>, <strong>VEGAN</strong>, and <strong>GLUTEN-FREE</strong> options. Everyone finds their perfect tapas experience at COCO Munich.
          </p>
        </div>
        <div className="float-left justify-center w-full md:w-[45%] pt-[5vh] pb-[10vh] md:py-[50vh] flex overflow-hidden">
          <div
            ref={imageWrapperRef}
            className="grid gap-y-[15px] md:gap-y-[49px] grid-cols-1 w-[75%] md:w-[85%]"
          >
            <div
              ref={imageRef1}
              className=" mx-auto w-[75%] h-[360px] md:h-[620px] relative"
            >
              <Image
                className="object-cover "
                alt="Tapas Image"
                src={"/assets/ali-kueche.webp"}
                fill
              />
            </div>
            <div
              ref={imageRef2}
              className=" mx-auto w-[75%] h-[360px] md:h-[620px] relative"
            >
              <Image
                alt="Tapas Image"
                className="object-cover "
                src={"/assets/ayad-eingang.webp"}
                fill
              />
            </div>
            <div
              ref={imageRef3}
              className=" mx-auto w-[75%] h-[360px] md:h-[620px] relative"
            >
              <Image
                alt="Tapas Image"
                className="object-cover "
                src={"/assets/peet-treppe.webp"}
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
