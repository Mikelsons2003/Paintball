// src/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-gray-100 py-8 px-4 md:px-8 relative before:absolute before:inset-x-0 before:top-[-10px] before:h-1 before:bg-gradient-to-b before:from-[#999999] before:to-transparent before:shadow-sm before:z-10">
            <div className="max-w-6xl mx-auto text-center mt-4">

                {/* Contact Information */}
                <div className="mt-8">
                    <h5 className="text-[#BB86FC] text-md font-semibold">Contact Us</h5>
                    <p className="text-[#777777]">
                        Phone: <a href="tel:+1234567890" className="text-white hover:text-[#BB86FC]">+1 (234) 567-890</a>
                    </p>
                    <p className="text-[#777777]">
                        Email: <a href="mailto:info@paintballadventures.com" className="text-white hover:text-[#BB86FC]">info@paintballadventures.com</a>
                    </p>
                    <p className="text-[#777777]">Location: 123 Paintball Lane, Adventure City, AC 12345</p>
                </div>

                <h4 className="text-[#BB86FC] text-lg font-semibold mb-2">Join the Adventure!</h4>
                <p className="mb-4">Stay updated with the latest news, events, and offers from our paintball community.</p>

                <form className="mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 border border-gray-600 rounded-md w-64 text-black"
                    />
                    <button
                        type="submit"
                        className="p-2 ml-2 bg-[#BB86FC] text-white rounded-md hover:scale-105 duration-500"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Copyright Section */}
                <div className="mt-12 text-center text-[#777777] text-sm">
                    <p>© {new Date().getFullYear()} Ultimate Paintball Adventures. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
