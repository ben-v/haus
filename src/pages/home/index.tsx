// import React from 'react'
import Hero from './sections/Hero'
import Companies from './sections/Companies'
import DreamTeam from './sections/DreamTeam'
import TechnologyApproach from './sections/TechnologyApproach'
import WorkFlow from './sections/WorkFlow'
import TrustedLeaders from './sections/TrustedLeaders'
import PricingNeed from './sections/PricingNeed'
import TrustedCompanies from './sections/TrustedCompanies'
import Solution from './sections/Solution'
import Faqs from './sections/Faqs'

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Solution />
      <DreamTeam />
      <TechnologyApproach />
      <WorkFlow />
      <TrustedLeaders />
      <PricingNeed />
      <Faqs />
      <TrustedCompanies />
    </>
  )
}

export default Home