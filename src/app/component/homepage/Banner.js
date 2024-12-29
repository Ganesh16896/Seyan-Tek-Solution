import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[250px] sm:h-[500px]">
        <Image
          src="/image/homeimg/banners.png"
          fill
          className="object-cover w-[100%]"
          alt="banner"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
