import React from 'react';
import UnityLogo1 from '../assets/U_Logo_T1_MadeWith_Black_RGB.png';
import GreyLineDotted from "../assets/GreyLineDotted.svg";

function HeroDownloads() {
    return (
        <div className="bg-[#595959] h-screen text-black">
            <img src={GreyLineDotted} alt="" className="w-full pt-3 pb-0 bg-[#595959]" />
            <div className="flex items-center justify-center h-full">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h1 className="text-xl font-bold font-Bungee text-[26px] sm:text-[34px] lg:text-[56px] mb-6">Download the Game</h1>
                    <div className="mb-8">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 lg:my-7 lg:mt-16 bg-[#00FF1A] text-black text-sm sm:text-2xl lg:text-4xl font-Aldrich border-[#45a01e] border-4 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
                        >
                            Download on Unity Asset Store
                        </a>
                    </div>
                    <p className="text-sm sm:text-xl lg:text-2xl mb-6 font-Aldrich">
                        Get the full version of the game on the Unity Asset Store for the best experience.
                    </p>
                    <div className="flex justify-center">
                        <img
                            src={UnityLogo1}
                            alt="Unity Logo"
                            className="h-24 sm:h-28 lg:h-36 w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroDownloads;
