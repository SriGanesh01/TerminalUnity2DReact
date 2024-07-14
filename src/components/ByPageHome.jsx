import INVfull_logoBbg from '../assets/INVfull_logoBbg.svg';

function ByPageHome() {
    return (
        <>
            <div className="bg-black text-white py-5">
                <p className="font-poiretOne text-sm lg:text-lg text-center pb-3">Terminal Emulator</p>
                <p className="text-[17px] sm:text-[54px] lg:text-[96px] text-white font-Bungee font-bold text-center pb-5">
                    TE<span className="text-[#00FF1A]">R</span>MINAL EMULATO<span className="text-[#00FF1A]">R</span>
                </p>
                <p className="text-[17px] sm:text-[54px] lg:text-[96px] text-white font-Bungee font-bold text-center pb-3">
                    F<span className="text-[#00FF1A]">R</span>OM
                </p>
                <div className="flex justify-center">
                    <img src={INVfull_logoBbg} alt="Innovixity Logo" className="w-auto h-10 sm:h-28 lg:h-48"/>
                </div>
                <p className='text-[17px] sm:text-[54px] lg:text-[96px] text-white font-Bungee font-bold text-center pt-5'>By</p>
                <p className='text-[17px] sm:text-[54px] lg:text-[96px] text-white font-Bungee font-bold text-center pt-3'>Sriganesh P</p>
            </div>
        </>
    );
}

export default ByPageHome;
