
'use client'

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {

  const whatsappCatalog =
    "https://wa.me/c/233246846044";

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>

      <Footer />

      {/* WhatsApp Catalog Button */}
      <a
        href={whatsappCatalog}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View our WhatsApp catalog"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
};

export default Home;
