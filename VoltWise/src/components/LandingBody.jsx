import React from 'react'
import HeroSection from './HeroSection'

const LandingBody = () => {
    return (
        <main className="self-stretch pt-44 pb-24 inline-flex flex-col justify-start items-center gap-20">
            <HeroSection />
            <div className="self-stretch px-12 py-24 bg-stone-100 flex flex-col justify-start items-start">
                <div className="w-full max-w-[1920px] flex flex-col justify-start items-start gap-16">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="w-[514.16px] h-10 text-center justify-center text-stone-900 text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-10">Intelligent Energy Stewardship</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="w-[462.98px] h-7 text-center justify-center text-neutral-700 text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7">Powerful tools designed for a cleaner, greener Victoria.</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex flex-col justify-start items-start">
                    <div className="self-stretch h-80 relative bg-white rounded-[48px]">
                    <div className="w-14 h-14 left-[40px] top-[40px] absolute bg-green-500/20 rounded-[32px] inline-flex justify-center items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                        <div className="w-5 h-6 bg-green-800" />
                        </div>
                    </div>
                    <div className="w-72 left-[40px] top-[128px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-44 h-8 justify-center text-stone-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-8">Live Grid Status</div>
                    </div>
                    <div className="w-72 left-[40px] top-[176px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-72 h-24 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">Stay informed with real-time updates<br/>on Victoria&apos;s energy generation. Know<br/>exactly when wind and solar are<br/>peaking.</div>
                    </div>
                    </div>
                    <div className="self-stretch h-80 relative bg-white rounded-[48px]">
                    <div className="w-14 h-14 left-[40px] top-[40px] absolute bg-yellow-600/20 rounded-[32px] inline-flex justify-center items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                        <div className="w-5 h-5 bg-yellow-800" />
                        </div>
                    </div>
                    <div className="w-72 left-[40px] top-[128px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-52 h-8 justify-center text-stone-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-8">Emission Tracking</div>
                    </div>
                    <div className="w-72 left-[40px] top-[176px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-72 h-24 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">Track your personal carbon footprint<br/>based on your actual device usage and<br/>the grid&apos;s carbon intensity at that<br/>moment.</div>
                    </div>
                    </div>
                    <div className="self-stretch h-80 relative bg-white rounded-[48px]">
                    <div className="w-14 h-14 left-[40px] top-[40px] absolute bg-green-500/20 rounded-[32px] inline-flex justify-center items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                        <div className="w-6 h-6 bg-green-800" />
                        </div>
                    </div>
                    <div className="w-72 left-[40px] top-[128px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-36 h-8 justify-center text-stone-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-8">Smart Alerts</div>
                    </div>
                    <div className="w-72 left-[40px] top-[176px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-72 h-20 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">Get notified when it&apos;s the best time to<br/>run heavy appliances, ensuring you use<br/>the cleanest energy available.</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-[896px] max-w-[896px] px-12 pt-16 pb-12 relative bg-green-800 rounded-[48px] flex flex-col justify-start items-center gap-6 overflow-hidden">
                <div className="w-64 h-64 left-[768px] top-[-112px] absolute opacity-20 bg-green-500 rounded-full" />
                <div className="self-stretch flex flex-col justify-start items-center">
                <div className="w-[620.08px] h-12 text-center justify-center text-white text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-[48px]">Ready to lead the change?</div>
                </div>
                <div className="w-[672px] max-w-[672px] pb-4 opacity-90 flex flex-col justify-start items-center">
                <div className="w-[626.61px] h-14 text-center justify-center text-white text-xl font-normal font-['Plus_Jakarta_Sans'] leading-7">Join thousands of Victorians using GreenGrid to lower their bills and<br/>their environmental impact.</div>
                </div>
                <div className="px-10 py-4 bg-white rounded-full inline-flex justify-center items-center">
                <div className="w-44 h-7 text-center justify-center text-green-800 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Create Free Account</div>
                </div>
            </div>
        </main>
    )
}

export default LandingBody
