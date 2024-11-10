import React from 'react';
import { FaUsers, FaFlag, FaHardHat } from 'react-icons/fa';

function WhatWeOffer() {
    return (
        <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center p-8">
            {/* Header Section */}
            <header className="mb-10 text-center p-10 rounded-lg shadow-sm shadow-[#BB86FC]">
                <h1 className="text-5xl font-bold text-[#BB86FC] tracking-wider mb-4">What We Offer</h1>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    Explore a range of services designed to make your paintball experience unforgettable. From immersive arenas to professional-grade gear, we have everything you need to dive into the action.
                </p>
            </header>

            {/* Offerings Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">

                {/* Service 1 - Team Events */}
                <div className="p-6 bg-[#333333] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center mb-4">
                        <FaUsers size={40} className="text-[#BB86FC]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#BB86FC] text-center mb-2">Team Events</h3>
                    <p className="text-white text-center">
                        Perfect for corporate outings and group gatherings. Engage in thrilling team-based scenarios designed to enhance teamwork and strategy.
                    </p>
                </div>

                {/* Service 2 - Game Modes */}
                <div className="p-6 bg-[#333333] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center mb-4">
                        <FaFlag size={40} className="text-[#BB86FC]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#BB86FC] text-center mb-2">Game Modes</h3>
                    <p className="text-white text-center">
                        Choose from various game modes, including Capture the Flag, King of the Hill, and Last Man Standing. Each mode adds a new level of excitement to your paintball experience.
                    </p>
                </div>

                {/* Service 3 - Gear Rentals */}
                <div className="p-6 bg-[#333333] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center mb-4">
                        <FaHardHat size={40} className="text-[#BB86FC]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#BB86FC] text-center mb-2">Gear Rentals</h3>
                    <p className="text-white text-center">
                        Full gear rentals available, including high-quality markers, protective equipment, and unlimited paintball refills for a complete adventure.
                    </p>
                </div>

            </section>
        </div>
    );
}

export default WhatWeOffer;
