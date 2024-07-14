import React, { useState } from 'react';
import LogoSVG16 from '../assets/lgoBWT.svg';

function HeaderHome() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex flex-row bg-[#323232] py-3 items-center justify-between px-5">
            <div>
                <a href="/home">
                    <img src={LogoSVG16} alt="Logo" className="w-[100px] sm:w-[140px] lg:w-[270px] sm:pt-3" />
                </a>
            </div>
            <div>
                <ol className='flex flex-row space-x-5 text-white pt-[26px]'>
                    <li>
                        <a href="/home" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich underline hover:underline'>home</a>
                    </li>
                    <li>
                        <a href="/demo" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>demo</a>
                    </li>
                    <li>
                        <a href="/documentation" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>documentation</a>
                    </li>
                    <li>
                        <a href="/downloads" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>download</a>
                    </li>
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline focus:outline-none'
                        >
                            more
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg z-20">
                                <li>
                                    <a href="/blog" className="block px-4 py-2 text-sm hover:bg-gray-700">Blog/Updates</a>
                                </li>
                                <li>
                                    <a href="/about" className="block px-4 py-2 text-sm hover:bg-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="/contacts" className="block px-4 py-2 text-sm hover:bg-gray-700">Contacts</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default HeaderHome;
