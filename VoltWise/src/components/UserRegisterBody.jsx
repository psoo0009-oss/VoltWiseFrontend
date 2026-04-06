import React from 'react'

const UserRegisterBody = () => {
    return (
        <main className="w-7xl px-6 py-20 inline-flex justify-center items-center">
            <div className="w-[896px] max-w-[896px] inline-flex flex-col justify-start items-start gap-12">
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <em className="w-44 h-6 text-center justify-center text-green-800 text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                        Personalization
                    </em>
                    <div className="self-stretch flex flex-col justify-start items-center">
                        <h1 className="w-[479.72px] h-12 text-center justify-center text-stone-900 text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-[48px]">
                            Let's set up your grid.
                        </h1>
                    </div>
                    <div className="w-[576px] max-w-[576px] flex flex-col justify-start items-center">
                        <q className="w-[543.48px] h-12 text-center justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">
                            Help us tailor your energy insights by telling us about your Victorian home setup.
                        </q>
                    </div>
                </div>
                <div className="self-stretch inline-flex flex-col justify-start items-start">
                <div className="self-stretch p-8 bg-stone-100 rounded-[48px] inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch px-1 flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-neutral-700 text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-wide">Full Name</div>
                        </div>
                        <div className="self-stretch px-6 py-4 bg-stone-200 rounded-md inline-flex justify-center items-start overflow-hidden">
                        <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
                            <div className="self-stretch justify-center text-gray-500 text-base font-normal font-['Plus_Jakarta_Sans']">e.g. Sarah Jenkins</div>
                        </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch px-1 flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-neutral-700 text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-wide">Suburb</div>
                        </div>
                        <div className="self-stretch px-6 py-4 bg-stone-200 rounded-md inline-flex justify-center items-start overflow-hidden">
                        <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
                            <div className="self-stretch justify-center text-gray-500 text-base font-normal font-['Plus_Jakarta_Sans']">e.g. South Yarra, VIC</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="self-stretch px-8 py-11 bg-yellow-600/10 rounded-[48px] outline outline-1 outline-offset-[-1px] outline-yellow-600/20 inline-flex flex-col justify-center items-start">
                    <div className="self-stretch pb-4 flex flex-col justify-start items-start">
                    <div className="self-stretch inline-flex justify-start items-start gap-4">
                        <div className="w-5 h-5 bg-yellow-800" />
                        <div className="w-24 h-6 justify-center text-yellow-950 text-base font-bold font-['Plus_Jakarta_Sans'] leading-6">Why we ask</div>
                    </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">Your location allows us to sync with<br/>local Victorian grid demand and<br/>weather patterns, ensuring your<br/>energy offsets are 100% accurate to<br/>your neighborhood.</div>
                    </div>
                </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch inline-flex justify-between items-end">
                    <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="w-56 h-8 justify-center text-stone-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-8">Household Devices</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="w-80 h-6 justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">Select all that apply to your current residence.</div>
                    </div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                    <div className="inline-flex flex-col justify-start items-start">
                        <div className="w-3 h-3 bg-green-800" />
                    </div>
                    <div className="w-60 h-6 justify-center text-green-800 text-base font-semibold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">Smart detection active</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex flex-col justify-start items-start">
                    <div className="px-14 py-14 bg-stone-200/40 rounded-[32px] outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex flex-col justify-center items-center">
                    <div className="pb-2 flex flex-col justify-start items-start">
                        <div className="flex flex-col justify-start items-center">
                        <div className="w-3.5 h-3.5 bg-neutral-700" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <div className="w-24 h-6 text-center justify-center text-neutral-700 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-6">Other Device</div>
                    </div>
                    </div>
                    <div className="pl-6 pr-12 py-6 relative bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-black/0 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-6 h-7 bg-green-800" />
                    </div>
                    <div className="w-32 h-7 justify-center text-stone-900 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Electric Vehicle</div>
                    <div className="w-24 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">Smart Charging</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute rounded-full outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex justify-center items-center">
                        <div className="opacity-0 inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-white" />
                        </div>
                    </div>
                    </div>
                    <div className="pl-6 pr-20 py-6 relative bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-black/0 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-6 h-6 bg-green-800" />
                    </div>
                    <div className="w-28 h-7 justify-center text-stone-900 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Solar Panels</div>
                    <div className="w-24 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">PV Generation</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute rounded-full outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex justify-center items-center">
                        <div className="opacity-0 inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-white" />
                        </div>
                    </div>
                    </div>
                    <div className="pl-6 pr-16 py-6 relative bg-green-800 rounded-[32px] outline outline-2 outline-offset-[-2px] outline-green-800 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-4 h-6 bg-white" />
                    </div>
                    <div className="w-32 h-7 justify-center text-white text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Home Battery</div>
                    <div className="w-28 h-5 opacity-80 justify-center text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">Storage Capacity</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute bg-white rounded-full inline-flex justify-center items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-green-800" />
                        </div>
                    </div>
                    </div>
                    <div className="pl-6 pr-20 py-6 relative bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-black/0 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-6 h-6 bg-green-800" />
                    </div>
                    <div className="w-24 h-7 justify-center text-stone-900 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Heat Pump</div>
                    <div className="w-24 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">HVAC Systems</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute rounded-full outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex justify-center items-center">
                        <div className="opacity-0 inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-white" />
                        </div>
                    </div>
                    </div>
                    <div className="pl-6 pr-20 pt-6 pb-12 relative bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-black/0 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-5 h-6 bg-green-800" />
                    </div>
                    <div className="w-24 h-7 justify-center text-stone-900 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Hot Water</div>
                    <div className="w-28 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">Electric Storage</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute rounded-full outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex justify-center items-center">
                        <div className="opacity-0 inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-white" />
                        </div>
                    </div>
                    </div>
                    <div className="pl-6 pr-20 pt-6 pb-12 relative bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-black/0 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-7 h-7 bg-green-800" />
                    </div>
                    <div className="w-28 h-7 justify-center text-stone-900 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Smart Plugs</div>
                    <div className="w-24 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">IOT Appliances</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute rounded-full outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex justify-center items-center">
                        <div className="opacity-0 inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-white" />
                        </div>
                    </div>
                    </div>
                    <div className="p-6 relative bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-black/0 inline-flex flex-col justify-start items-start">
                    <div className="pb-4 flex flex-col justify-start items-start">
                        <div className="w-6 h-6 bg-green-800" />
                    </div>
                    <div className="pr-20 flex flex-col justify-start items-start">
                        <div className="w-20 h-14 justify-center text-stone-900 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Induction<br/>Cooktop</div>
                    </div>
                    <div className="w-28 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">Kitchen Efficient</div>
                    <div className="w-6 h-6 left-[170px] top-[18px] absolute rounded-full outline outline-2 outline-offset-[-2px] outline-stone-300 inline-flex justify-center items-center">
                        <div className="opacity-0 inline-flex flex-col justify-start items-start">
                        <div className="w-2 h-1.5 bg-white" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="self-stretch pt-12 border-t border-stone-300/20 inline-flex justify-between items-center">
                <div className="flex justify-start items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex justify-center items-center">
                    <div className="inline-flex flex-col justify-start items-start">
                        <div className="w-4 h-5 bg-green-800" />
                    </div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="w-32 h-5 justify-center text-neutral-700 text-sm font-bold font-['Plus_Jakarta_Sans'] leading-5">Privacy Guaranteed</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="w-52 h-5 justify-center text-neutral-700 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">Data stays encrypted in Victoria.</div>
                    </div>
                    </div>
                </div>
                <div className="px-12 py-5 relative bg-green-800 rounded-full inline-flex flex-col justify-center items-center">
                    <div className="w-72 h-16 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_8px_10px_-6px_rgba(0,110,28,0.10)] shadow-[0px_20px_25px_-5px_rgba(0,110,28,0.10)]" />
                    <div className="w-48 h-7 text-center justify-center text-white text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">Save &amp; Start Tracking</div>
                </div>
                </div>
            </div>
            </main>
    )
}

export default UserRegisterBody
