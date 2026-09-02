
'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">

                <div className="flex flex-col items-end pt-12">
                    <p className="text-2xl font-medium">Get in touch</p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>

                <div className="w-full flex justify-center py-16">
                    <div className="w-full max-w-2xl">

                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-semibold mb-3">
                                Contact Us
                            </h1>
                            <p className="text-gray-500">
                                We would love to hear from you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="border rounded-lg p-6 text-center">
                                <h2 className="text-xl font-medium mb-3">
                                    Tamale
                                </h2>

                                <p className="text-gray-600">
                                    +233 246 84 6044
                                </p>

                                <p className="text-gray-600">
                                    +233 209 06 2950
                                </p>
                            </div>

                            <div className="border rounded-lg p-6 text-center">
                                <h2 className="text-xl font-medium mb-3">
                                    Accra
                                </h2>

                                <p className="text-gray-600">
                                    +233 246 84 6044
                                </p>

                                <p className="text-gray-600">
                                    +233 209 06 2950
                                </p>
                            </div>

                        </div>

                        <div className="border rounded-lg p-6 text-center mt-6">
                            <h2 className="text-xl font-medium mb-3">
                                Email
                            </h2>

                            <a
                                href="mailto:contact@nudekprime.shop"
                                className="text-orange-600 hover:underline"
                            >
                                contact@nudekprime.shop
                            </a>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default ContactPage;

