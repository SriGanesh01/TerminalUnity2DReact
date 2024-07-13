import React from 'react';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github-mark.svg';

function Footer() {
    return (
        <div className="flex flex-col items-center bg-[#323232] py-3">
            <ol className="flex justify-center h-6 mb-7 pt-1">
                <li className="px-2">
                    <a href="https://www.instagram.com/_sriganesh___?igsh=MXdsZThsanZtMHI3Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="w-6 h-6 " />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="w-6 h-6" />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://x.com/_sriganesh_?t=-1PlpyoUV2-HrKTCfp0Z2Q&s=09" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" className="w-6 h-6" />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.linkedin.com/in/sriganesh-prakash-725a50279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://github.com/SriGanesh01" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-6 h-6" />
                    </a>
                </li>
            </ol>
            <h2 className="text-3l font-bold pl-2">
                Innovixity
            </h2>
            <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Innovixity, Inc.</p>
        </div>
    );
}

export default Footer;
