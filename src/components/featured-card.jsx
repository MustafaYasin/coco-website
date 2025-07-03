import Image from "next/image";
import React from "react";

const FeaturedCard = ({ name, image, dietary, price }) => {
  return (
    <div className="bg-[#f4e9dd] max-w-[420px] relative">
      <h3 className="text-black uppercase max-w-[12ch] font-['Rubik'] text-[2rem] font-extrabold leading-[96%] absolute top-[4%] left-[6%]">
        {name}
      </h3>
      <div className="p-[10%] flex relative">
        <div className="relative w-full h-[500px]">
          <Image src={image} fill style={{objectFit: "contain"}} alt={`${name} - Mediterranean tapas dish`} />
          <div className="w-[72px] h-[72px] absolute top-[5%] right-[5%]">
            <Image src="/assets/Decorative-small-cylinder.svg" fill alt="Decorative cylinder element" />
          </div>
          <div className="w-[72px] h-[72px] absolute bottom-[5%] left-[5%]">
            <Image src="/assets/Decorative-small-cube.svg" fill alt="Decorative cube element" />
          </div>
        </div>
      </div>
      <p className="text-[#45704c] font-['Rubik'] font-bold text-[1.125rem] leading-[106%] absolute inset-[auto_0_4%_6%] whitespace-nowrap">
        {dietary}
      </p>
      <p className="text-black font-['Rubik'] font-bold text-[1.25rem] leading-[106%] absolute bottom-[4%] right-[6%]">
        {price}
      </p>
    </div>
  );
};

export default FeaturedCard;
