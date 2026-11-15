

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const sliderData = [
  {
    id: 1,
    title: "Discover Authentic Fugu Fabrics - Tradition Woven with Style!",
    offer: "Quality Fugu Fabrics Available Now",
    buttonText1: "Shop Fugu",
    buttonText2: "Explore Collection",
    imgSrc: assets.header_fugu_image,
  },
  {
    id: 2,
    title: "Discover Authentic Fugu Fabrics - Tradition Woven with Style!",
    offer: "Quality Fugu Fabrics Available Now",
    buttonText1: "Shop Fugu",
    buttonText2: "Explore Collection",
    imgSrc: assets.header_fugu_image_men,
  },
  {
    id: 3,
    title: "Pure Natural Honey - Sweetness Straight from Nature!",
    offer: "100% Natural & Delicious Honey",
    buttonText1: "Buy Honey",
    buttonText2: "Learn More",
    imgSrc: assets.header_honey_image,
  },
  {
    id: 4,
    title: "Traditional Style Meets Natural Goodness!",
    offer: "Shop Our Fugu Fabrics & Premium Honey",
    buttonText1: "Shop Now",
    buttonText2: "Explore Products",
    imgSrc: assets.header_fugu_honey_image,
  },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full overflow-hidden px-3 sm:px-5 md:px-8">
      {/* Slider */}
      <div className="relative overflow-hidden mt-4 sm:mt-6 rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className="flex min-w-full flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8 bg-[#E6E9F2] px-4 py-5 sm:px-8 sm:py-8 md:px-10 lg:px-14 md:py-10"
            >
              {/* Text Content */}
              <div className="w-full md:flex-1 text-center md:text-left md:pl-2">
                <p className="text-xs sm:text-sm md:text-base text-orange-600 font-medium pb-2">
                  {slide.offer}
                </p>

                <h1 className="mx-auto md:mx-0 max-w-lg text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight md:leading-snug">
                  {slide.title}
                </h1>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4 sm:mt-5">
                  <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 bg-orange-600 hover:bg-orange-700 rounded-full text-white text-xs sm:text-sm font-medium transition">
                    {slide.buttonText1}
                  </button>

                  <button className="group flex items-center gap-1.5 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium">
                    {slide.buttonText2}

                    <Image
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition"
                      src={assets.arrow_icon}
                      alt=""
                    />
                  </button>
                </div>
              </div>

              {/* Slide Image */}
              <div className="flex w-full md:w-auto md:flex-1 items-center justify-center">
                <Image
                  className="w-32 h-28 sm:w-44 sm:h-36 md:w-60 md:h-56 lg:w-72 lg:h-64 object-contain"
                  src={slide.imgSrc}
                  alt={slide.title}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
        {sliderData.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-5 bg-orange-600"
                : "w-2 bg-gray-400/50 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeaderSlider;
