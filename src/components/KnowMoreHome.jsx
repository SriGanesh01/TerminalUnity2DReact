import TerminalCurvyLines1WithCircles from "../assets/TerminalCurvyLines1WithCircles.svg";
import WhiteLinesDotted from "../assets/WhiteLinesDotted.svg";
import WhiteLinesFull from "../assets/WhiteLinesFull.svg";

function KnowMoreHome() {
    return (
        <div className="relative bg-black text-white h-[1406.39]">
            <img src={TerminalCurvyLines1WithCircles} alt="" className="" />
            <div className="absolute inset-0 flex flex-col justify-between items-center px-8">
                <div className="flex flex-col justify-start items-center mt-24">
                    <button className="w-full  px-12 py-6 bg-[#00FF1A] text-black text-4xl font-bold rounded-2xl border-4 border-black mb-8">
                        <div className="font-Aldrich">Try Demo</div>
                    </button>
                    <button className="w-full  px-12 py-6 bg-[#00FF1A] text-black text-4xl font-bold rounded-2xl border-4 border-black mb-8">
                        <div className="font-Aldrich">Download Now</div>
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="w-full  px-16 py-6 mt-8 mb-24 border-4 border-[#00FF1A] text-[#00FF1A] text-4xl font-bold font-Aldrich rounded-2xl">
                        Learn More
                    </button>
                </div>
                <p className="text-[#FFFFFF] font-Aldrich text-[16px]">Click Here For Updates</p>
                <img src={WhiteLinesDotted} alt="" className=" pb-8 bg-[rgba(0,0,0,0)] border-black" />

            </div>
            
        </div>
        
    );
}

export default KnowMoreHome;
