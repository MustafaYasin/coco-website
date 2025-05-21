import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-[20px] absolute top-0 left-0 z-20">
      <h3>LOGO</h3>
      <button className=" fixed z-[9999] top-[10px] right-[10px] md:top-[20px] text-[1rem] md:text-[1.25rem] font-bold leading-[1rem] md:leading-[20px] text-white border-black flex justify-center items-center font-[rubik] shadow-[0_0_30px_#0006] border-[4px] md:right-[20px] bg-[#d26249] px-[8px] md:px-[15px]  h-[40px]">
        ORDER ONLINE
      </button>
    </div>
  );
};

export default Header;
