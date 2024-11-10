import React from 'react';
import Paintball from '../img/Paintball.jpg';
import Paintball1 from '../img/Paintball1.jpg';
import Paintball2 from '../img/Paintball2.jpg';
import Paintball3 from '../img/Paintball3.jpg';
import Paintball4 from '../img/Paintball4.jpg';

function AboutUs() {
    return (
        <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center p-8">
            {/* Header Section */}
            <header className="mb-10 text-center p-10 rounded-lg shadow-sm shadow-[#BB86FC]">
                <h1 className="text-5xl font-bold text-[#BB86FC] tracking-wider mb-4">About Us</h1>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    Welcome to the ultimate battleground for thrill-seekers and strategy enthusiasts! Our paintball
                    facility offers an
                    adrenaline-fueled experience, designed for everyone from beginners to seasoned pros.
                </p>
            </header>

            {/* About Paintball Section */}
            <section
                className="relative bg-[#333333] text-center p-10 rounded-lg shadow-lg shadow-[#333333] max-w-4xl mb-12 bg-cover bg-center"
                style={{backgroundImage: `url(${Paintball})`}}>
                >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-3xl font-semibold text-[#BB86FC] mb-6">What We Do</h2>
                    <p className="text-white text-lg">
                        Our paintball arena is a sprawling, immersive battlefield equipped with bunkers, barricades, and
                        a wide array of
                        gear to enhance your experience. We prioritize safety, excitement, and an unforgettable
                        paintball adventure.
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-[#777777]">
                        <div className="p-6 bg-[#111111] opacity-75 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#BB86FC]">Outdoor Arenas</h3>
                            <p className="text-white">
                                From dense forests to open fields, battle it out with your friends in varied terrains
                                designed for intense,
                                tactical gameplay.
                            </p>
                        </div>
                        <div className="p-6 bg-[#111111] opacity-75 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#BB86FC]">Gear Rentals</h3>
                            <p className="text-white">
                                Full gear rentals available, including protective wear, markers, and unlimited paintball
                                refills for your
                                day-long adventure.
                            </p>
                        </div>
                        <div className="p-6 bg-[#111111] opacity-75 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#BB86FC]">Team Building Events</h3>
                            <p className="text-white">
                                We host corporate and group events tailored to promote teamwork, strategy, and fun in a
                                high-energy
                                environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="text-center max-w-3xl mb-12 p-10 rounded-lg shadow-sm shadow-[#BB86FC]">
                <h2 className="text-3xl font-semibold text-[#BB86FC] mb-6">Our Mission</h2>
                <p className="text-lg text-white">
                    We aim to provide a safe and thrilling paintball experience, fostering community and sportsmanship.
                    Our team
                    is passionate about creating memories that last a lifetime. We focus on strategic games, fair play,
                    and fun.
                </p>
            </section>

            {/* Image or Gallery Section */}
            <section className="w-full bg-[#111111] p-10 rounded-lg shadow-lg shadow-[#333333] max-w-4xl">
                <h2 className="text-3xl font-semibold text-[#BB86FC] text-center mb-8">Our Arena</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#333333] h-48 rounded-lg flex items-center justify-center shadow-md">
                        <img className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" src={Paintball1} alt="Paintball 1"/>
                    </div>
                    <div className="bg-[#333333] h-48 rounded-lg flex items-center justify-center shadow-md">
                        <img className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" src={Paintball2} alt="Paintball 2"/>
                    </div>
                    <div className="bg-[#333333] h-48 rounded-lg flex items-center justify-center shadow-md">
                        <img className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" src={Paintball3} alt="Paintball 3"/>
                    </div>
                    <div className="bg-[#333333] h-48 rounded-lg flex items-center justify-center shadow-md">
                        <img className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" src={Paintball4} alt="Paintball 4"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
