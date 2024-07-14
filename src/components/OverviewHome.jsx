import React from 'react';
import GreyLineDotted from '../assets/GreyLineDotted.svg';
import OverviewImage from '../assets/OverviewImage.svg';

function OverviewHome() {
    return (
        <div className="bg-[#595959] text-white p-5 font-roboto-mono">
            <img src={OverviewImage} alt="Overview Design" className="w-full pl-[-15px] mt-5" />
            <div className="max-w-3xl mx-auto text-left text-2xl leading-relaxed">
                
            </div>
            <p className='text-sm sm:text-2xl lg:text-4xl mx-auto leading-relaxed lg:leading-[60px]'>
                Welcome to the official website for Terminal Emulator, an innovative 
                    Unity project designed to simulate a fully functional terminal 
                    environment within a game. Explore our comprehensive documentation, 
                    dive into tutorials, and discover all the features and commands our 
                    emulator offers. Whether you're a developer looking to integrate a 
                    terminal into your game or a user eager to experience a unique interface, 
                    our site provides all the resources and support you need to make the most 
                    of Terminal Emulator.
                </p>
            <img src={GreyLineDotted} alt="GreyLineDotted" className="w-screen my-5 pt-4" />
        </div>
    );
}

export default OverviewHome;
