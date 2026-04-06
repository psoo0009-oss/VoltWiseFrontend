import React from 'react'
import HeroSection from './HeroSection'
import FeatureSelection from './FeatureSelection'
import CallToAction from './CallToAction'

const LandingBody = () => {
    return (
        <main className="self-stretch pt-44 pb-24 w-7xl flex flex-col justify-start items-center gap-20">
            <HeroSection />
            <FeatureSelection />
            <CallToAction />
        </main>
    )
}

export default LandingBody
