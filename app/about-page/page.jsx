
'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">

                {/* Page Heading */}
                <div className="flex flex-col items-end pt-12">
                    <p className="text-2xl font-medium">About Us</p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>

                {/* Introduction */}
                <div className="w-full max-w-4xl mx-auto text-center py-16">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                        Natural Goodness Meets Traditional Style
                    </h1>

                    <p className="text-gray-600 leading-7">
                        Welcome to Nudek Prime, where we bring together the rich
                        beauty of traditional Fugu fabrics and the natural
                        goodness of premium honey. We are passionate about
                        providing quality products that celebrate culture,
                        style, and nature.
                    </p>
                </div>

                {/* Honey Section */}
                <div className="w-full py-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                            100% Natural & Delicious Honey
                        </h2>

                        <p className="text-gray-600 leading-7 mb-4">
                            Enjoy the sweet taste of pure natural honey,
                            carefully selected for people who appreciate
                            authentic natural goodness. Our honey is available
                            in different sizes, making it suitable for
                            personal use, families, gifts, and everyday
                            enjoyment.
                        </p>

                        <p className="text-gray-600 leading-7">
                            From a small bottle for individual use to larger
                            sizes for families and businesses, we have options
                            to suit your needs. Taste the sweetness straight
                            from nature.
                        </p>
                    </div>
                </div>

                {/* Fugu Section */}
                <div className="w-full py-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                            Authentic Fugu Fabrics
                        </h2>

                        <p className="text-gray-600 leading-7 mb-4">
                            Discover authentic Fugu fabrics that combine
                            traditional craftsmanship with modern style.
                            Whether you are looking for something traditional
                            or a stylish outfit for a special occasion, our
                            collection is made for you.
                        </p>

                        <p className="text-gray-600 leading-7">
                            We offer Fugu styles and fabrics for both men and
                            women, with different designs and options to suit
                            different tastes. Celebrate your culture while
                            looking your best.
                        </p>
                    </div>
                </div>

                {/* What We Offer */}
                <div className="w-full py-12">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
                            What We Offer
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-medium mb-3">
                                    🍯 Premium Honey
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Pure, delicious honey available in
                                    different sizes for individuals, families,
                                    gifts, and businesses.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-medium mb-3">
                                    👕 Fugu for Men
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Traditional Fugu fabrics and styles for
                                    men who want to combine culture with
                                    modern fashion.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-medium mb-3">
                                    👗 Fugu for Women
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Beautiful Fugu designs and fabrics for
                                    women, perfect for everyday wear,
                                    celebrations, and special occasions.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-medium mb-3">
                                    🚚 Delivery Across Ghana
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Wherever you are, we make it easy for you
                                    to receive your order. We deliver our
                                    products across Ghana.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Closing Section */}
                <div className="w-full py-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                        Shop Traditional. Taste Natural.
                    </h2>

                    <p className="text-gray-600 leading-7 max-w-3xl mx-auto">
                        Whether you are searching for authentic Fugu fabrics
                        for men and women or looking for delicious natural
                        honey in a size that works for you, Nudek Prime is
                        here to serve you with quality products and reliable
                        delivery across Ghana.
                    </p>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default AboutPage;