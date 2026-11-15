
import React from "react";

const NewsLetter = () => {
  return (
    <section className="px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center text-center pt-8 pb-10 md:pt-12 md:pb-14">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight">
          Subscribe & Get Exclusive Offers
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-500/80 leading-6">
          Subscribe to receive updates on our latest Fugu fabrics, natural
          honey, special offers, and new arrivals.
        </p>

        {/* Email Subscription Form */}
        <form
          className="flex items-stretch w-full max-w-lg h-11 sm:h-12 md:h-14 mt-5 md:mt-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="min-w-0 flex-1 border border-gray-300 rounded-l-md outline-none px-3 sm:px-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-600"
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />

          <button
            className="shrink-0 px-3 sm:px-6 md:px-10 text-sm sm:text-base text-white bg-orange-600 hover:bg-orange-700 rounded-r-md transition"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
