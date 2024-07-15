import React from 'react';
import GreyLineDotted from "../assets/GreyLineDotted.svg";

function HeroDemo() {
    return (
        <>
        <img src={GreyLineDotted} alt="" className="w-full pt-3 pb-20 bg-[#595959]" />
            <div className="bg-[#595959] py-8 px-4 text-center text-black">
                <p className="text-black mb-2">July, 2021</p>
                <p className="text-[26px] sm:text-[56px] text-[#000000] font-Bungee font-bold">
                    INT<span className='text-[#00FF1A]'>R</span>ODUCING </p>
                <p className='text-[24px] sm:text-[54px] text-[#000000] font-Bungee font-bold"'> TE<span className="text-[#00FF1A]">R</span>MINAL EMULATO<span className="text-[#00FF1A]">R</span>
                </p>
                <div className="flex flex-col mt-5 md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <a
                        href="#unity-game"
                        className="w-full md:w-auto px-4 py-4 bg-[#00FF1A] text-black text-xs sm:text-lg lg:text-5xl border-4 border-black md:text-4xl font-bold rounded-2xl shadow-md hover:bg-green-700 transition-colors duration-300"
                    >
                        Try TERMINAL EMULATOR
                    </a>
                    <a
                        href="https://sriganesh-p.itch.io/terminal-emulator" target="_blank"
                        className="w-full md:w-auto px-4 py-4 bg-[#00FF1A] text-black text-xs sm:text-lg lg:text-5xl border-4 border-black md:text-4xl font-bold rounded-2xl shadow-md hover:bg-green-700 transition-colors duration-300"
                    >
                        Try TERMINAL EMULATOR on itch.io
                    </a>
                </div>
                <div id="unity-game" className="flex justify-center mb-8">
                    <iframe frameborder="0" src="https://itch.io/embed-upload/10894835?color=323232" allowfullscreen="" width="100%" height="740" className="max-w-5xl"><a href="https://sriganesh-p.itch.io/terminal-emulator">Play Terminal Emulator on itch.io</a></iframe>
                </div>
                <div>
                    <a
                        href="https://sriganesh-p.itch.io/terminal-emulator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-2 border-4 border-black text-[#00FF1A] text-xs sm:text-lg lg:text-5xl font-normal font-Aldrich hover:bg-green-700 transition-colors duration-300"
                    >
                        Download for PC
                    </a>
                </div>
            </div>
        </>
    );
}

export default HeroDemo;
