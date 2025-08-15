import React from 'react'
import Hero from '../components/landing/Hero'
import NavBar from '../components/NavBar'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Testimonials from '../components/landing/Testimonials'
import FAQ from '../components/landing/FAQ'
import TopCompanies from '../components/landing/TopCompanies'





export const metadata = {
  title: 'Home',
  description: 'Tapos',
  keywords: 'job portal, job search, career, employment, job listings',
}


export default function Public () {
  return (
    <div>
        <Hero></Hero>
        <Features></Features>
        <HowItWorks></HowItWorks>
        <TopCompanies></TopCompanies>
        <Testimonials></Testimonials>
        <FAQ></FAQ>
        
    </div>
  )
}
