import Image from "next/image";
import React from "react";

const IntroGridSection = () => {
  return (
    <div className="bg-[url('/assets/bgPattern-dot.png')] bg-center bg-contain bg-[#f4e9dd] z-20 relative">
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-0">
        <div className="min-h-[90vh] relative flex flex-col justify-center items-center">
          <div className="max-w-[90%] w-full h-full max-h-[80%] bg-[url('/assets/into-pizza.webp')] bg-contain bg-no-repeat bg-center"></div>
          <Image
            className="absolute top-[10%] left-[20%]"
            src={"/assets/Decorative-graphic-bling.svg"}
            width={92}
            height={92}
            alt="Decorative Image"
          />
          <Image
            className="absolute bottom-[10%] right-[20%]"
            src={"/assets/Decorative-graphic-bling.svg"}
            width={92}
            height={92}
            alt="Decorative Image"
          />
        </div>
        <div className="bg-[#45704c] flex flex-col justify-center items-start px-[4vw]">
          <h2 className="text-[#f4e9dd] font-['Rubik'] uppercase text-[5vw] font-extrabold leading-[98%] mb-[20px]">
            OUR love is <br />
            <span className="stroke">pizza </span>
            shaped.
            <br /> Won’t you have a slice?
          </h2>
          <h2 className="text-[#f4e9dd] font-['Rubik'] uppercase text-[5vw] font-extrabold leading-[98%] mb-[20px]">
            🍕👍
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IntroGridSection;
