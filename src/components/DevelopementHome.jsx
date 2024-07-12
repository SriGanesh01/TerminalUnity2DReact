import React from 'react';
import WhiteLineDotted from '../assets/WhiteLinesDotted.svg';

function DevelopementHome() {
    return (
        <>
            <div className="bg-[#595959] text-white p-8">
                <h1 className="text-5xl font-bold mb-8 font-bungee pb-8">DEVELOPMENTS</h1>
                <h2 className="text-3xl font-bold underline mb-4 font-robotomono">Currently working commands:</h2>
                <ul className="list-disc list-inside mb-8 font-roboto text-2xl space-y-2 pt-6">
                    <li>ls, cd, mkdir, rmdir, rm, etc.</li>
                    <br />
                    <li>Over 17 commands are currently integrated.</li>
                    <br />
                </ul>
                <h2 className="text-3xl font-bold underline mb-4 font-robotomono">Ongoing Development:</h2>
                <ul className="list-disc list-inside font-roboto text-2xl space-y-2 pt-6">
                    <li>New commands are being developed every day.</li>
                    <br />
                    <li>Custom commands can be added upon request.</li>
                    <br />
                    <li>Commands can be tailored specifically to your game. Contact us for pricing.</li>
                    <br />
                </ul>
            </div>
            <img src={WhiteLineDotted} alt="GreyLineDotted" className="w-screen pt-6 bg-[#595959] pb-6" />
        </>
    );
}

export default DevelopementHome;
