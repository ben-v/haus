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
import { Element } from 'react-scroll'

const Home = () => {
  return (
    <>
      <Hero />
      <Element name="company"><Companies /></Element>
      <Element name="solutions"><Solution /></Element>
      <DreamTeam />
      <TechnologyApproach />
      <WorkFlow />
      <Element name="testimonials"><TrustedLeaders /></Element>
      <Element name="pricing"><PricingNeed /></Element>
      <Faqs />
      <TrustedCompanies />
    </>
  )
}

export default Home