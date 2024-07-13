import TerminalCurvyLines1WithCircles from "../assets/TerminalCurvyLines1WithCircles.svg";
import WhiteLinesDotted from "../assets/WhiteLinesDotted.svg";
import WhiteLinesFull from "../assets/WhiteLinesFull.svg";

function KnowMoreHome() {
    return (
        <div className="relative bg-black text-white h-[1406.39]">
            <img src={TerminalCurvyLines1WithCircles} alt="" className="w-screen" />
            <div className="absolute inset-0 flex flex-col justify-between items-center px-8">
                <div className="flex flex-col justify-start items-center mt-32">
                    <a href="/demo">
                        <button className="w-full  px-12 py-6 bg-[#00FF1A] text-black text-4xl font-bold rounded-2xl border-8 border-black mb-8">
                            <div className="font-Aldrich">Try Demo</div>
                        </button>
                    </a>
                    <a href="/downloads">
                        <button className="w-full  px-12 py-6 bg-[#00FF1A] text-black text-4xl font-bold rounded-2xl border-8 border-black mb-8">
                            <div className="font-Aldrich">Download Now</div>
                        </button>
                    </a>
                </div>
                <div className="flex justify-center mb-44 ">
                    <div className="border-black border-8  mt-6 mb-24">
                        <div className=" border-[#00FF1A] border-4">
                            <a href="/about">
                                <button className="w-full  px-16 py-6 border-8 border-black text-[#00FF1A] text-4xl font-bold font-Aldrich">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <a href="/blog" className="text-[#FFFFFF] font-Aldrich text-[16px] pl-5">
                <div>
                    Click Here For Updates
                </div>

            </a>
            <img src={WhiteLinesDotted} alt="" className="w-screen pb-8 bg-[rgba(0,0,0,0)] border-black" />

        </div>

    );
}

export default KnowMoreHome;
