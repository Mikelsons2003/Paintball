import React from 'react';
import backgroundImage from '../img/image.jpg'; // Background image
import logo from '../img/Logo.jpg'; // Import logo image
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay div for darkening effect */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content on top of the overlay */}
            <div className="relative z-10 bg-opacity-50 p-8 rounded-lg text-center text-white max-w-lg">

                {/* Logo Wrapper with Circular Background */}
                <div
                    className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-white bg-opacity-30 transform transition-transform duration-300 hover:scale-110">
                    <img className="h-20 w-20" src={logo} alt="Paintball Logo"/>
                </div>

                <h1 className="text-4xl font-bold mb-4">Paintball Cēsīs</h1>
                <p className="text-lg mb-6">
                    Fly with who you want, stay wherever you want — now that's a dream holiday!
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 animate-pulse">
                        <FaFacebook size={24}/>
                    </a>
                    <a href="https://www.instagram.com/lucidiousweb/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-gray-100 animate-pulse">
                        <FaInstagram size={24}/>
                    </a>
                    <a href="https://x.com/LucidiousWeb" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-gray-100 animate-pulse">
                        <FaTwitter size={24}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
