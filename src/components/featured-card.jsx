import Image from "next/image";
import React from "react";

const FeaturedCard = ({ name, description, image }) => {
  return (
    <div className="bg-[#f4e9dd] max-w-[420px] relative">
      <h3 className="text-black uppercase max-w-[12ch] font-['Rubik'] text-[2rem] font-extrabold leading-[96%] absolute top-[4%] left-[6%]">
        {name}
      </h3>
      <div className="p-[10%] flex relative">
        <div className="relative w-full h-[500px]">
          <Image src={image} fill objectFit="contain" />
          <div className="w-[72px] h-[72px] absolute top-[5%] right-[5%]">
            <Image src="/assets/Decorative-small-cylinder.svg" fill />
          </div>
          <div className="w-[72px] h-[72px] absolute bottom-[5%] left-[5%]">
            <Image src="/assets/Decorative-small-cube.svg" fill />
          </div>
        </div>
      </div>
      <p className="text-[#000] max-w-[20ch] font-['Rubik'] font-bold leading-[106%] absolute inset-[auto_0_4%_6%]">
        {description}
      </p>
    </div>
  );
};

export default FeaturedCard;
