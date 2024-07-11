import LogoSVG16 from '../assets/lgoBWT.svg';

function Header() {
    return (
        <>
            <div className="flex flex-row bg-[#323232] py-3 items-center justify-between px-5">
                <div>
                    <a href="#">
                        <img src={LogoSVG16} alt="" className="w-[273px] h-[78.54px] " />
                    </a>
                </div>
                <div>
                    <ol className='flex flex-row space-x-5 text-white pt-[26px] '>
                        <li>
                            <a href="#" className='left-0 top-0 text-white text-[25px] font-normal font-Aldrich hover:underline'>home</a>
                        </li>
                        <li>
                            <a href="#" className='left-[144.06px] top-0 text-white text-[25px] font-normal font-Aldrich hover:underline'>demo</a>
                        </li>
                        <li>
                            <a href="#" className='left-[288.11px] top-0 text-white text-[25px] font-normal font-Aldrich hover:underline'>documentation</a>
                        </li>
                        <li>
                            <a href="#" className='left-[621.17px] top-0 text-white text-[25px] font-normal font-Aldrich hover:underline'>download</a>
                        </li>
                        <li>
                            <a href="#" className='left-[842.22px] top-0 text-white text-[25px] font-normal font-Aldrich hover:underline'>more</a>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Header;
