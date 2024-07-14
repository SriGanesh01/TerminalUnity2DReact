import GreyLineDotted from "../assets/GreyLineDotted.svg";
import WhiteLinesFull from "../assets/WhiteLinesFull.svg";
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github-mark.svg';

function HeroHome() {
    return (
        <>
            <img src={GreyLineDotted} alt="" className="w-screen pt-3 pb-20 bg-[#595959]" />
            <div className="text-center bg-[#595959] flex flex-col justify-center items-center py-10 pt-[125px]">
                <p className="text-[17px] sm:text-[34px] text-[#ffffff] font-Aldrich">
                    Terminal For Games
                </p>
                <p className="text-[26px] sm:text-[54px] lg:text-[96px] text-[#000000] font-Bungee font-bold">
                    TE<span className="text-[#00FF1A]">R</span>MINAL EMULATO<span className="text-[#00FF1A]">R</span>
                </p>
                <a href="/downloads">
                    <button className="px-6 pt-[3px] bg-[#00FF1A] text-[#000000] font-bold rounded-xl border-2 sm:border-4 lg:border-8 border-black mb-[35px]">
                        <div className="text-[11px] sm:text-[25px] lg:text-[36px] font-Aldrich">Get Started</div>
                    </button>
                </a>
            </div>
            <div className="bg-[#595959] pl-5 flex pt-[80px]">
                <p className="text-[#FFFFFF] font-Aldrich text-[6px] sm:text-[12px] lg:text-[20px] pr-2 lg:pr-5 ">Follow Us On</p>
                <img src={WhiteLinesFull} alt="WhiteLinesFull" className="w-5 sm:w-8 lg:w-12"/>
                <ol className="flex space-x-2 lg:space-x-4 pl-2 lg:pl-5">
                    <li>
                        <a href="https://www.instagram.com/_sriganesh___?igsh=MXdsZThsanZtMHI3Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="w-2 sm:w-4 lg:w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="w-2 sm:w-4 lg:w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/_sriganesh_?t=-1PlpyoUV2-HrKTCfp0Z2Q&s=09" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" className="w-2 sm:w-4 lg:w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sriganesh-prakash-725a50279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-2 sm:w-4 lg:w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SriGanesh01" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="w-2 sm:w-4 lg:w-6" />
                        </a>
                    </li>
                </ol>
            </div>
            <img src={GreyLineDotted} alt="" className="w-screen pb-3 pt-2 bg-[#595959]" />
        </>
    );
}

export default HeroHome;
