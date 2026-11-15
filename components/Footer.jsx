
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-10 md:py-14 border-b border-gray-500/30 text-gray-500">

        {/* Company Information */}
        <div className="col-span-2 md:col-span-1 w-full">
          <Image
            className="w-24 sm:w-28 md:w-32"
            src={assets.logo}
            alt="Nudek Prime logo"
          />

          <p className="mt-4 md:mt-6 text-xs sm:text-sm leading-6 max-w-md">
            We provide quality Fugu fabrics and natural honey, bringing
            together Ghanaian tradition, style, and the goodness of nature.
            Explore our collection and find products you can trust.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex justify-start md:justify-center">
          <div>
            <h2 className="font-semibold text-sm sm:text-base text-gray-900 mb-4">
              Company
            </h2>

            <ul className="text-xs sm:text-sm space-y-3">
              <li>
                <a className="hover:text-orange-600 transition" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600 transition" href="/about">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600 transition" href="/contact">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-orange-600 transition"
                  href="/privacy-policy"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex justify-start md:justify-center col-span-2 md:col-span-1">
          <div>
            <h2 className="font-semibold text-sm sm:text-base text-gray-900 mb-4">
              Get in touch
            </h2>

            <div className="text-xs sm:text-sm space-y-3">
              <p>
                <a
                  href="tel:+233246846044"
                  className="hover:text-orange-600 transition"
                >
                  +233 246 84 6044
                </a>
              </p>

              <p>
                <a
                  href="tel:+233209062950"
                  className="hover:text-orange-600 transition"
                >
                  +233 209 06 2950
                </a>
              </p>

              <p className="break-all">
                <a
                  href="mailto:contact@nudekprime.shop"
                  className="hover:text-orange-600 transition"
                >
                  contact@nudekprime.shop
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="px-4 py-4 text-center text-[10px] sm:text-xs md:text-sm text-gray-500">
        Copyright 2026 © Nudek Prime Enterprise. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
