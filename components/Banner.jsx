
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 bg-[#E6E9F2] my-8 md:my-16 mx-3 sm:mx-5 rounded-xl overflow-hidden py-5 md:py-0 md:pl-10 lg:pl-20">
      {/* Fugu Image */}
      <Image
        className="w-24 sm:w-32 md:w-44 lg:max-w-56 h-auto object-contain shrink-0"
        src={assets.fugu_fabric_image_yellow}
        alt="Fugu fabric"
      />

      {/* Banner Content */}
      <div className="flex flex-col items-center justify-center text-center gap-2 px-4 md:px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-[290px] leading-tight">
          Authentic Fugu Fabrics for Every Occasion
        </h2>

        <p className="max-w-[343px] text-sm sm:text-base font-medium text-gray-800/70">
          Discover beautiful, quality Fugu fabrics that celebrate Ghanaian
          tradition, culture, and style.
        </p>

        <button className="group flex items-center justify-center gap-2 px-7 sm:px-10 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white text-sm sm:text-base transition">
          Shop Now
          <Image
            className="w-4 h-4 group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="Arrow icon"
          />
        </button>
      </div>

      {/* Honey Image */}
      <Image
        className="w-24 sm:w-32 md:w-44 lg:max-w-80 h-auto object-contain shrink-0"
        src={assets.honey_image}
        alt="Natural honey"
      />
    </section>
  );
};

export default Banner;
