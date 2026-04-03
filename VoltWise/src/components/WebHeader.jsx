import React from 'react'

const WebHeader = () => {
    return (
        <header className="w-[1280px] left-0 top-0 absolute bg-stone-100 inline-flex flex-col justify-start items-start">
            <div className="w-full max-w-[1920px] px-12 py-6 inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="w-28 h-8 justify-center text-green-800 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-8">GreenGrid</div>
                </div>
                <nav className="flex justify-start items-center gap-8">
                    <div className="pb-1 border-b-2 border-green-800 inline-flex flex-col justify-start items-start">
                        <p className="w-12 h-6 justify-center text-green-800 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-6">Home</p>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                        <p className="w-20 h-6 justify-center text-neutral-700 text-base font-medium font-['Plus_Jakarta_Sans'] leading-6">Grid Status</p>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                        <p className="w-20 h-6 justify-center text-neutral-700 text-base font-medium font-['Plus_Jakarta_Sans'] leading-6">My Devices</p>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                        <p className="w-12 h-6 justify-center text-neutral-700 text-base font-medium font-['Plus_Jakarta_Sans'] leading-6">Offset</p>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                        <p className="w-11 h-6 justify-center text-neutral-700 text-base font-medium font-['Plus_Jakarta_Sans'] leading-6">Alerts</p>
                    </div>
                </nav>
                <div className="p-2 rounded-full inline-flex flex-col justify-center items-center">
                    <div className="inline-flex justify-center items-start">
                        <span className="w-5 h-5 bg-neutral-700" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default WebHeader
