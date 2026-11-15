
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.fugu_fabric_image,
    title: "Premium Fugu Fabrics",
    description:
      "Shop quality Fugu fabrics with beautiful traditional patterns made for elegant and authentic Ghanaian fashion.",
  },
  {
    id: 2,
    image: assets.header_honey_image,
    title: "Pure Natural Honey",
    description:
      "Taste the goodness of naturally sourced honey, perfect for your everyday meals, drinks, and healthy lifestyle.",
  },
  {
    id: 3,
    image: assets.fugu_collection_image,
    title: "Beautiful Fugu Collection",
    description:
      "Find the perfect Fugu fabric for your next outfit and celebrate Ghanaian heritage through timeless style.",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="mt-14">
      {/* Section Title */}
      <div className="flex flex-col items-center">
        <p className="text-2xl sm:text-3xl font-medium">
          Featured Products
        </p>

        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-14 mt-8 sm:mt-12 px-3 sm:px-6 md:px-14">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="relative group w-full overflow-hidden rounded-lg"
          >
            {/* Product Image */}
            <Image
              src={image}
              alt={title}
              className="w-full h-44 sm:h-64 lg:h-80 object-cover group-hover:brightness-75 transition duration-300"
            />

            {/* Product Details */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2.5 sm:p-5 lg:p-7 text-white">
              <div className="space-y-1.5 sm:space-y-2 transition duration-300 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                <p className="font-semibold text-sm sm:text-lg lg:text-2xl leading-tight">
                  {title}
                </p>

                <p className="hidden sm:block text-sm lg:text-base leading-5 max-w-60">
                  {description}
                </p>

                {/* Buy Button */}
                <button className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded transition">
                  Buy now

                  <Image
                    className="h-3 w-3 object-contain"
                    src={assets.redirect_icon}
                    alt="Redirect Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;