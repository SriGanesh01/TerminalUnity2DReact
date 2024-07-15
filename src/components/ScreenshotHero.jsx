import BlackLinesDotted from '../assets/BlackLinesDotted.svg';

function ScreenshotHero() {
    return (
        <div className="bg-white w-full overflow-x-hidden">
            <div className="box-border">
                <h2 className="text-center text-2xl sm:text-7xl lg:text-9xl font-bold my-5 sm:pt-7 font-Aldrich w-full">Screenshots</h2>
                <div className='flex overflow-hidden group space-x-5 w-full'>
                    <div className='my-7 flex space-x-5 animate-loop-scroll group-hover:paused'>
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-100 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-200 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-300 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-400 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-500 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-600 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-700 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-800 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-900 max-w-none' />
                    </div>
                    <div className='my-7 flex space-x-5 animate-loop-scroll group-hover:paused' aria-hidden="true">
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-100 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-200 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-300 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-400 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-500 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-600 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-700 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-800 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-900 max-w-none' />
                    </div>
                </div>
                <div className='flex overflow-hidden group space-x-5 w-full'>
                    <div className='my-7 flex space-x-5 animate-loop-scroll-reverse group-hover:paused'>
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-100 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-200 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-300 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-400 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-500 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-600 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-700 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-800 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-900 max-w-none' />
                    </div>
                    <div className='my-7 flex space-x-5 animate-loop-scroll-reverse group-hover:paused' aria-hidden="true">
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-100 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-200 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-300 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-400 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-500 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-600 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-700 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-800 max-w-none' />
                        <img src="" alt="" className='h-[150px] w-[300px] bg-slate-900 max-w-none' />
                    </div>
                </div>
                <p className="text-xs sm:text-sm lg:text-xl">See More</p>
                <img src={BlackLinesDotted} alt="GreyLineDotted" className="w-full pt-6 bg-white pb-3" />
            </div>
        </div>
    );
}

export default ScreenshotHero;
