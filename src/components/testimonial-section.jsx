import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import CustomerReviewCard from "./customer-review-card";
import ImageBlock from "./image-block";

const TestimonialSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const heartRef1 = useRef(null);
  const heartRef2 = useRef(null);
  const heartRef3 = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.gsap;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Set initial state - hearts are invisible and positioned above
        gsap.set([heartRef1.current, heartRef2.current, heartRef3.current], {
          opacity: 0,
          y: -50,
          scale: 0.5,
        });

        // Animate hearts landing one after another
        gsap.to(heartRef1.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: heartRef1.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(heartRef2.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "bounce.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: heartRef1.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(heartRef3.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "bounce.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: heartRef1.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  }, [isMounted]);
  return (
    <div className="bg-[#f4e9dd] pt-[40px] pb-0 md:pt-[140px] md:pb-[100px] relative overflow-hidden z-10">
      <div className="absolute inset-0">
        <div className="w-[20vw] h-[20vw] absolute inset-0">
          <Image src="/assets/bgPattern-dot.png" fill alt="Background decorative dot pattern" />
        </div>
        <div className="w-[20vw] h-[20vw] absolute inset-[20%_0%_auto_auto]">
          <Image src="/assets/bgPattern-dot.png" fill alt="Background decorative dot pattern" />
        </div>
        <div className="w-[20vw] h-[20vw] absolute inset-[60%_auto_auto_0]">
          <Image src="/assets/bgPattern-dot.png" fill alt="Background decorative dot pattern" />
        </div>
        <div className="md:w-[75px] md:h-[75px] w-[40px] h-[40px] absolute top-[20px] md:top-[5%] right-[5%] md:right-[20%]">
          <Image src="/assets/bg-message.svg" fill alt="Decorative message bubble" />
        </div>
      </div>
      <div className="md:max-w-[1380px] max-w-[400px] z-10 p-[6%] md:px-[50px] mx-auto relative">
        <h2 className="text-center max-w-[20ch] m-[0_auto_60px] text-[1.5rem] md:text-[3.75rem] font-extrabold leading-[96%]">
          We spend our days enjoying what we do and our customers love it!
        </h2>
        <div className="flex gap-[8px] justify-center mt-0 mb-[40px] md:my-[60px] max-h-[1.5rem]">
          <div ref={heartRef1} className="relative w-[44px] h-[24px] md:h-[44px]">
            <Image
              src="/assets/Decorative-graphic-heart.svg"
              fill
              alt="Decorative Image"
            />
          </div>
          <div ref={heartRef2} className="relative w-[44px] h-[24px] md:h-[44px]">
            <Image
              src="/assets/Decorative-graphic-heart.svg"
              fill
              alt="Decorative Image"
            />
          </div>
          <div ref={heartRef3} className="relative w-[44px] h-[24px] md:h-[44px]">
            <Image
              src="/assets/Decorative-graphic-heart.svg"
              fill
              alt="Decorative Image"
            />
          </div>
        </div>
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          <div className="break-inside-avoid">
            <CustomerReviewCard text="Amazing Mediterranean tapas experience! The flavors are incredibly authentic and fresh. Each dish tells a story of the Mediterranean coast. The Avocado Tartare and Burratina are absolutely divine!" />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock
              src="/assets/customer-photo2.webp"
              classes={"h-[264px] md:h-[648px]"}
            />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock
              src="/assets/customer-photo1.webp"
              classes={"h-[234px] md:h-[575px]"}
            />
          </div>

          <div className="break-inside-avoid">
            <CustomerReviewCard text="The quality of ingredients is outstanding! You can taste the freshness in every bite. The Scampi and Beef Tartare are prepared to perfection. This is authentic Mediterranean cuisine at its finest." />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock
              src="/assets/customer-photo3.webp"
              classes={"h-[151px] md:h-[371px]"}
            />
          </div>

          <div className="break-inside-avoid">
            <CustomerReviewCard text="COCO Munich has redefined Mediterranean dining for me! The tapas are perfectly crafted with French and Italian influences. The atmosphere is cozy and the staff genuinely cares about your experience. A hidden gem in Munich!" />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock
              src="/assets/customer-photo4.webp"
              classes={"h-[223px] md:h-[549px]"}
            />
          </div>
        </div>
        <div className="flex md:p-[40px_100px] py-[40px] gap-[16px] flex-wrap justify-around items-center">
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-1.webp" fill alt="Customer review badge 1" />
          </div>
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-2.webp" fill alt="Customer review badge 2" />
          </div>
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-3.webp" fill alt="Customer review badge 3" />
          </div>
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-4.webp" fill alt="Customer review badge 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
