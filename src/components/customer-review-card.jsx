import Image from "next/image";
import React from "react";

const CustomerReviewCard = ({ text }) => {
  return (
    <div className="bg-[#45704C] p-[30px] flex flex-col gap-[16px] h-fit ">
      <div className="flex justify-start gap-[2px]">
        <div className="relative w-[34px] h-[34px]">
          <Image src="/assets/Decorative-graphic-star.svg" fill />
        </div>
        <div className="relative w-[34px] h-[34px]">
          <Image src="/assets/Decorative-graphic-star.svg" fill />
        </div>
        <div className="relative w-[34px] h-[34px]">
          <Image src="/assets/Decorative-graphic-star.svg" fill />
        </div>
        <div className="relative w-[34px] h-[34px]">
          <Image src="/assets/Decorative-graphic-star.svg" fill />
        </div>
        <div className="relative w-[34px] h-[34px]">
          <Image src="/assets/Decorative-graphic-star.svg" fill />
        </div>
      </div>
      <p className="text-[#f4e9dd] max-w-[52ch] text-[1.25rem] leading-[128%]">
        {text}
      </p>
    </div>
  );
};

export default CustomerReviewCard;
