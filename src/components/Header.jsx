import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-[20px] absolute top-0 left-0 z-20">
      <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
        <Image 
          src="/assets/coco_logo.svg" 
          fill 
          alt="COCO Tapas & Bar Logo"
          className="object-contain"
        />
      </div>
      <div className="fixed z-[9999] top-[10px] right-[10px] md:top-[20px] flex gap-[8px] md:gap-[12px]">
        <button 
          onClick={() => window.location.href = '/order-online'}
          className="text-[0.875rem] md:text-[1.25rem] font-bold leading-[1rem] md:leading-[20px] text-black border-black flex justify-center items-center font-[rubik] shadow-[0_0_30px_#0006] border-[4px] bg-[#ffeb6c] px-[6px] md:px-[12px] h-[40px] hover:bg-[#e6d466] transition-colors cursor-pointer"
        >
          ORDER ONLINE
        </button>
        <button 
          onClick={() => window.location.href = '/reservations'}
          className="text-[1rem] md:text-[1.25rem] font-bold leading-[1rem] md:leading-[20px] text-white border-black flex justify-center items-center font-[rubik] shadow-[0_0_30px_#0006] border-[4px] bg-[#d26249] px-[8px] md:px-[15px] h-[40px] hover:bg-[#b8553e] transition-colors cursor-pointer"
        >
          RESERVATIONS
        </button>
      </div>
    </div>
  );
};

export default Header;