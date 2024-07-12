import INVfull_logoBbg from '../assets/INVfull_logoBbg.svg';

function ByPageHome() {
    return (
        <>
            <div className="bg-black text-white py-5">
                <p className="font-poiretOne text-xl text-center">Terminal Emulator</p>
                <p className="text-[96px] text-white font-Bungee font-bold text-center">
                    TE<span className="text-[#00FF1A]">R</span>MINAL EMULATO<span className="text-[#00FF1A]">R</span>
                </p>
                <p className="text-[96px] text-white font-Bungee font-bold text-center">
                    F<span className="text-[#00FF1A]">R</span>OM
                </p>
                <div className="flex justify-center">
                    <img src={INVfull_logoBbg} alt="Innovixity Logo" className="w-auto h-32"/>
                </div>
                <p className='text-[96px] text-white font-Bungee font-bold text-center py'>By</p>
                <p className='text-[96px] text-white font-Bungee font-bold text-center mb-[170px]'>Sriganesh P</p>
            </div>
        </>
    );
}

export default ByPageHome;
