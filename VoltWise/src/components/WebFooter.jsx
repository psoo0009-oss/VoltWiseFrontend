import React from 'react'

const WebFooter = () => {
    return (
        <footer className="w-7xl left-0 py-12 bg-stone-100 inline-flex flex-col justify-start items-start">
            <div className="w-full max-w-480 px-12 inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start gap-2">
                    <div className="w-24 h-7 justify-center text-neutral-700 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">
                        GreenGrid
                    </div>
                    <div className="w-[616.83px] h-6 opacity-80 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                        © 2024 GreenGrid Victoria. Earth-first energy stewardship.
                    </div>
                </div>
                <div className="flex justify-center items-start gap-8">
                    <div className="self-stretch opacity-80 inline-flex flex-col justify-start items-start">
                        <div className="w-20 h-6 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                            Privacy
                        </div>
                    </div>
                    <div className="self-stretch opacity-80 inline-flex flex-col justify-start items-start">
                        <div className="w-14 h-6 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                            Terms
                        </div>
                    </div>
                    <div className="self-stretch opacity-80 inline-flex flex-col justify-start items-start">
                        <div className="w-56 h-6 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                            Sustainability Report
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default WebFooter
