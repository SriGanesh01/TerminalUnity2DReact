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
                <p className="text-[47px] text-[#ffffff] font-Aldrich mb-[-25px]">
                    Terminal For Games
                </p>
                <p className="text-[96px] text-[#000000] font-Bungee font-bold">
                    TE<span className="text-[#00FF1A]">R</span>MINAL EMULATO<span className="text-[#00FF1A]">R</span>
                </p>
                <a href="/downloads">
                    <button className="px-6 bg-[#00FF1A] text-[#000000] font-bold rounded-2xl border-4 border-black mb-[35px]">
                        <div className="text-[31px] font-Aldrich">Get Started</div>
                    </button>
                </a>
            </div>
            <div className="bg-[#595959] pl-5 flex pt-[80px]">
                <p className="text-[#FFFFFF] font-Aldrich text-[16px] pr-5">Follow Us On</p>
                <img src={WhiteLinesFull} alt="WhiteLinesFull" />
                <ol className="flex space-x-4 pl-5">
                    <li>
                        <a href="https://www.instagram.com/_sriganesh___?igsh=MXdsZThsanZtMHI3Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/_sriganesh_?t=-1PlpyoUV2-HrKTCfp0Z2Q&s=09" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sriganesh-prakash-725a50279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SriGanesh01" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="w-6 h-6" />
                        </a>
                    </li>
                </ol>
            </div>
            <img src={GreyLineDotted} alt="" className="w-screen pb-3 pt-2 bg-[#595959]" />
        </>
    );
}

export default HeroHome;
