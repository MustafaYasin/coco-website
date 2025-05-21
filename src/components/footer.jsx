"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const Footer = () => {
  const backgroundSection = useRef(null);
  const [colorState, setColorState] = useState(false); // track color toggle

  useEffect(() => {
    // Run only on the client side
    const loadGsap = async () => {
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const section = backgroundSection.current;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          const percentage = progress * 100;

          if (percentage >= 20 && !colorState) {
            setColorState(true);
            gsap.to(section, { backgroundColor: "#45704c", duration: 0.3 });
          } else if (percentage < 20 && colorState) {
            setColorState(false);
            gsap.to(section, { backgroundColor: "#f4e9dd", duration: 0.3 });
          }
        },
      });
    };

    loadGsap();

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, [colorState]);

  return (
    <div
      ref={backgroundSection}
      className="z-10 relative pt-[10vh] overflow-hidden"
      style={{ backgroundColor: "#f4e9dd" }}
    >
      <div className="w-[1380px] pt-[130px] px-[50px] mx-auto">
        <div className="featured !py-0 min-h-[400px] mb-[140px]">
          <div className="float-left w-4/6 flex flex-col justify-between min-h-[400px] p-[40px_60px]">
            <div>
              <h2 className="text-[3.75rem] font-extrabold leading-[96%] mt-[20px] mb-[10px] font-['Rubik] text-black">
                NEWSLETTER
              </h2>
              <p className="max-w-[52ch] font-medium text-[1.25rem] leading-[128%] ">
                Pellentesque eu, pretium quis, sem consequat. Nulla massa quis
                enim. Donec pede justo.
              </p>
            </div>
            <form action="">
              <label className="text-left mt-[10px] font-['Rubik'] text-[1rem] font-medium leading-[140%]">
                Your Email
              </label>
              <div className="flex max-w-[550px] items-center gap-[20px]">
                <input
                  className="bg-[#f4e9dd] border-4 border-black px-[15px] leading-[20px] text-[#333] h-[42px] w-full"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  className="h-[48px] bg-[#d26249] border-4 border-black text-white uppercase font-['Rubik'] text-[1.25rem] font-bold leading-[20px] p-[10px_20px] cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-4/12 float-right relative">
            <div className="min-w-full absolute min-h-[400px]">
              <Image
                className="absolute translate-[20%] "
                src="/assets/bgPattern-dot.png"
                fill
              />
            </div>
            <div className="min-w-full relative h-[400px]">
              <Image className=" " src="/assets/footer-pizza.webp" fill />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <h2 className="text-[#f4e9dd] text-[3.75rem] font-extrabold leading-[96%] ">
            FIND US ON
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            width={"60px"}
            height={"60px"}
            fill="none"
          >
            <path
              d="M7.88385 9.3676H20.7865L32.7128 25.4099L47.5581 9L51.0854 9.06127L34.4714 27.7177L51.5097 50.6324H38.6121L27.3555 35.6827L13.6042 51H10.1331L25.648 33.4974L7.88385 9.3676ZM19.5699 11.7367H12.7556L40.0179 48.202H46.7095L19.5699 11.7367Z"
              fill="#F4E9DD"
              stroke="#F4E9DD"
              stroke-width="2"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            width={"60px"}
            height={"60px"}
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.851 13.1046C52.0661 13.7124 53.8105 15.5034 54.4025 17.7777C55.4783 21.8996 55.4783 30.5 55.4783 30.5C55.4783 30.5 55.4783 39.1001 54.4025 43.2223C53.8105 45.4966 52.0661 47.2876 49.851 47.8957C45.8369 49 29.7391 49 29.7391 49C29.7391 49 13.6414 49 9.62692 47.8957C7.4119 47.2876 5.66749 45.4966 5.07549 43.2223C4 39.1001 4 30.5 4 30.5C4 30.5 4 21.8996 5.07549 17.7777C5.66749 15.5034 7.4119 13.7124 9.62692 13.1046C13.6414 12 29.7391 12 29.7391 12C29.7391 12 45.8369 12 49.851 13.1046ZM24 39.1958C24 39.9812 24.8639 40.4601 25.53 40.0438L38.6432 31.8484C39.2699 31.4567 39.2699 30.544 38.6432 30.1524L25.53 21.9563C24.864 21.54 24 22.0188 24 22.8043V39.1958Z"
              fill="#F4E9DD"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            width={"60px"}
            height={"60px"}
            fill="none"
          >
            <path
              d="M5 30.4132C5.00296 42.9166 14.0951 53.5627 26.444 55.5223V37.7586H19.9958V30.4132H26.4517V24.8215C26.1631 22.1719 27.0681 19.5313 28.9213 17.6157C30.7744 15.7002 33.3837 14.7083 36.0414 14.909C37.949 14.9398 39.8518 15.1097 41.7347 15.4173V21.6673H38.522C37.416 21.5224 36.3041 21.8877 35.4994 22.6602C34.6948 23.4328 34.2845 24.5289 34.3842 25.6399V30.4132H41.4272L40.3012 37.7611H34.3842V55.5223C47.7393 53.4117 57.1044 41.2147 55.6948 27.7675C54.2853 14.3203 42.5945 4.33041 29.092 5.03509C15.5895 5.73976 5.00215 16.8923 5 30.4132Z"
              fill="#F4E9DD"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            width={"60px"}
            height={"60px"}
            fill="none"
          >
            <path
              d="M30.2981 11.2713C36.511 11.2713 37.2876 11.2713 39.8115 11.4655C46.2185 11.6596 49.1308 14.766 49.3249 20.9789C49.5191 23.5028 49.5191 24.0853 49.5191 30.2981C49.5191 36.511 49.5191 37.2876 49.3249 39.6174C49.1308 45.8302 46.0244 48.9366 39.8115 49.1308C37.2876 49.3249 36.7051 49.3249 30.2981 49.3249C24.0853 49.3249 23.3087 49.3249 20.9789 49.1308C14.5719 48.9366 11.6596 45.8302 11.4655 39.6174C11.2713 37.0934 11.2713 36.511 11.2713 30.2981C11.2713 24.0853 11.2713 23.3087 11.4655 20.9789C11.6596 14.766 14.766 11.6596 20.9789 11.4655C23.3087 11.2713 24.0853 11.2713 30.2981 11.2713ZM30.2981 7C23.8911 7 23.1145 7 20.7847 7.19415C12.2421 7.58245 7.58245 12.2421 7.19415 20.7847C7 23.1145 7 23.8911 7 30.2981C7 36.7051 7 37.4817 7.19415 39.8115C7.58245 48.3542 12.2421 53.0138 20.7847 53.4021C23.1145 53.5963 23.8911 53.5963 30.2981 53.5963C36.7051 53.5963 37.4817 53.5963 39.8115 53.4021C48.3542 53.0138 53.0138 48.3542 53.4021 39.8115C53.5963 37.4817 53.5963 36.7051 53.5963 30.2981C53.5963 23.8911 53.5963 23.1145 53.4021 20.7847C53.0138 12.2421 48.3542 7.58245 39.8115 7.19415C37.4817 7 36.7051 7 30.2981 7ZM30.2981 18.2608C23.697 18.2608 18.2608 23.697 18.2608 30.2981C18.2608 36.8993 23.697 42.3355 30.2981 42.3355C36.8993 42.3355 42.3355 36.8993 42.3355 30.2981C42.3355 23.697 36.8993 18.2608 30.2981 18.2608ZM30.2981 38.0642C26.0268 38.0642 22.5321 34.5695 22.5321 30.2981C22.5321 26.0268 26.0268 22.5321 30.2981 22.5321C34.5695 22.5321 38.0642 26.0268 38.0642 30.2981C38.0642 34.5695 34.5695 38.0642 30.2981 38.0642ZM42.7238 15.1543C41.1706 15.1543 40.0057 16.3193 40.0057 17.8725C40.0057 19.4257 41.1706 20.5906 42.7238 20.5906C44.277 20.5906 45.4419 19.4257 45.4419 17.8725C45.4419 16.3193 44.277 15.1543 42.7238 15.1543Z"
              fill="#F4E9DD"
            ></path>
          </svg>
        </div>
      </div>
      <div className="loop-content-wrapper-fast">
        <h3 className="text-[#00000026] uppercase pl-0 text-[24vw] font-extrabold leading-[96%] whitespace-nowrap will-change-transform">
          Real good food Real good food
        </h3>
      </div>
    </div>
  );
};

export default Footer;
