import React from 'react'

const HeroSection = () => {
    return (
        <section className="w-296 inline-flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <h2 className="w-64 h-6 justify-center text-green-800 text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                        Victoria's Energy Future
                    </h2>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center">
                            <span class="text-stone-900 text-7xl font-extrabold font-['Plus_Jakarta_Sans'] leading-18">
                                Use energy<br/>smarter.<br/>
                            </span>
                            <span class="text-green-800 text-7xl font-extrabold font-['Plus_Jakarta_Sans']">
                                Help the<br/>planet.
                            </span>
                        </div>
                    </div>
                    <div className="w-full max-w-lg flex flex-col justify-start items-start">
                        <p className="self-stretch justify-center text-neutral-700 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-7">
                            Monitor Victoria's live energy mix in real-time.<br/>
                            Optimize your home's consumption based on<br/>
                            renewable availability and reduce your carbon<br/>
                            footprint with one tap.
                        </p>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div className="px-8 py-4 bg-green-800 rounded-full inline-flex flex-col justify-center items-center">
                        <button className="w-24 h-7 text-center justify-center text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-7">
                            Get Started
                        </button>
                    </div>
                    <div className="px-8 py-4 bg-neutral-200 rounded-full inline-flex flex-col justify-center items-center">
                        <button className="w-24 h-7 text-center justify-center text-stone-500 text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-7">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-stretch relative inline-flex flex-col justify-start items-start">
                <div className="self-stretch bg-stone-200 rounded-12 flex flex-col justify-center items-start overflow-hidden">
                    <img className="self-stretch h-96 relative" src="https://placehold.co/671x419" />
                </div>
                <div className="max-w-80 p-8 left-12 top-[290.16px] absolute bg-white rounded-12 flex flex-col justify-start items-start">
                <span className="w-60 h-40 left-0 top-0 absolute bg-white/0 rounded-12 shadow-xl" />
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="w-40 h-6 justify-center text-neutral-700 text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-wide">
                        Current Grid Mix
                    </div>
                    <div className="self-stretch inline-flex justify-start items-end gap-2">
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="w-20 h-10 justify-center text-green-800 text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-10">
                                74%
                            </div>
                        </div>
                        <div className="pb-1 inline-flex flex-col justify-start items-start">
                            <div className="w-20 h-6 justify-center text-green-500 text-base font-bold font-['Plus_Jakarta_Sans'] leading-6">
                                Renewable
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-2 relative bg-stone-200 rounded-full overflow-hidden">
                        <span className="w-32 h-2 left-0 top-0 absolute bg-green-800 rounded-full" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
