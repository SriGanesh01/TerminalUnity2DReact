import TerminalCurvyLines1WithCircles from "../assets/TerminalCurvyLines1WithCircles.svg";
import WhiteLinesDotted from "../assets/WhiteLinesDotted.svg";
import WhiteLinesFull from "../assets/WhiteLinesFull.svg";

function KnowMoreHome() {
    return (
        <div className="relative bg-black text-white h-[1406.39]">
            <img src={TerminalCurvyLines1WithCircles} alt="" className="w-screen" />
            <div className="absolute inset-0 flex flex-col justify-between items-center px-8">
                <div className="flex flex-col justify-start items-center mt-6 sm:mb-24">
                    <a href="/demo">
                        <button className="w-full px-8 sm:mt-10 lg:mt-24 py-2 bg-[#00FF1A] text-black text-sm sm:text-2xl lg:text-6xl font-bold rounded-2xl border-2 border-black">
                            <div className="font-Aldrich">Try Demo</div>
                        </button>
                    </a>
                    <a href="/downloads">
                        <button className="w-full px-8 py-2 bg-[#00FF1A] text-black text-sm sm:text-2xl lg:text-6xl font-bold rounded-2xl border-2 border-black mt-5 lg:mt-16">
                            <div className="font-Aldrich">Download Now</div>
                        </button>
                    </a>
                </div>
                <div className="flex justify-center mb-44 ">
                    <div className="border-black border-2 lg:border-8  mt-6 lg:mt-32 mb-24">
                        <div className=" border-[#00FF1A] border-4 lg:border-8">
                            <a href="/about">
                                <button className="w-full  px-16 py-1 border-2 lg:border-8 border-black text-[#00FF1A] text-sm sm:text-2xl lg:text-6xl font-bold lg:font-normal font-Aldrich">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <a href="/blog" className="text-[#FFFFFF] font-Aldrich text-[6px] sm:text-[12px] lg:text-[17px] pl-5 sm:pl-7">
                <div>
                    Click Here For Updates
                </div>

            </a>
            <img src={WhiteLinesDotted} alt="" className="w-screen pt-4 pb-2 bg-[rgba(0,0,0,0)] border-black" />

        </div>

    );
}

export default KnowMoreHome;
