import Image from "next/image";
import React from "react";
import CustomerReviewCard from "./customer-review-card";
import ImageBlock from "./image-block";

const TestimonialSection = () => {
  return (
    <div className="bg-[#f4e9dd] pt-[40px] pb-0 md:pt-[140px] md:pb-[100px] relative overflow-hidden z-10">
      <div className="absolute inset-0">
        <div className="w-[20vw] h-[20vw] absolute inset-0">
          <Image src="/assets/bgPattern-dot.png" fill />
        </div>
        <div className="w-[20vw] h-[20vw] absolute inset-[20%_0%_auto_auto]">
          <Image src="/assets/bgPattern-dot.png" fill />
        </div>
        <div className="w-[20vw] h-[20vw] absolute inset-[60%_auto_auto_0]">
          <Image src="/assets/bgPattern-dot.png" fill />
        </div>
        <div className="md:w-[75px] md:h-[75px] w-[40px] h-[40px] absolute top-[20px] md:top-[5%] right-[5%] md:right-[20%]">
          <Image src="/assets/bg-message.svg" fill />
        </div>
      </div>
      <div className="md:max-w-[1380px] max-w-[400px] z-10 p-[6%] md:px-[50px] mx-auto relative">
        <h2 className="text-center max-w-[20ch] m-[0_auto_60px] text-[1.5rem] md:text-[3.75rem] font-extrabold leading-[96%]">
          We spend our days enjoying what we do and our customers love it!
        </h2>
        <div className="flex gap-[8px] justify-center mt-0 mb-[40px] md:my-[60px] max-h-[1.5rem]">
          <div className="relative w-[44px] h-[24px] md:h-[44px]">
            <Image
              src="/assets/Decorative-graphic-heart.svg"
              fill
              alt="Decorative Image"
            />
          </div>
          <div className="relative w-[44px] h-[24px] md:h-[44px]">
            <Image
              src="/assets/Decorative-graphic-heart.svg"
              fill
              alt="Decorative Image"
            />
          </div>
          <div className="relative w-[44px] h-[24px] md:h-[44px]">
            <Image
              src="/assets/Decorative-graphic-heart.svg"
              fill
              alt="Decorative Image"
            />
          </div>
        </div>
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          <div className="break-inside-avoid">
            <CustomerReviewCard text="Excellent pizza at a fair price. The restaurant does delivery and has some tables to stay. It's not big but worth to buy pizza there. The pleasure of having a pizza that just left the wood oven is awesome!" />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock src="/assets/customer-photo2.webp" height={648} />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock src="/assets/customer-photo1.webp" height={575} />
          </div>

          <div className="break-inside-avoid">
            <CustomerReviewCard text="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock src="/assets/customer-photo3.webp" height={371} />
          </div>

          <div className="break-inside-avoid">
            <CustomerReviewCard text="Perfect take-away! Wish they were more than that! This pizza is so good it blows your mind away. They look like a family run business. There is an eating area but it's small, I guess that's for waiting the delivery. The outside has a very beautiful orange sign that invites you in, boy that's some good-fresh tasty pizza! Great for take-aways, not so great if you want to eat inside." />
          </div>
          <div className="break-inside-avoid">
            <ImageBlock src="/assets/customer-photo4.webp" height={549} />
          </div>
        </div>
        <div className="flex md:p-[40px_100px] py-[40px] gap-[16px] flex-wrap justify-around items-center">
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-1.webp" fill />
          </div>
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-2.webp" fill />
          </div>
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-3.webp" fill />
          </div>
          <div className="w-[160px] h-[160px] relative">
            <Image src="/assets/ReviewSticker-4.webp" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
