import React from 'react'
import PageIndicator from '../Components/PageIndicator'
import Intro from '../Components/Intro'
import BusinessGrowth from '../Components/BusinessGrowth'
import OurTeam from '../Components/OurTeam'
import Faq from '../Components/Faq'


const AboutUs = () => {
  return (
   <>
   <PageIndicator text={'About Us'}/>
   <Intro/>
   <BusinessGrowth/>
   <OurTeam/>
  <Faq/>
   </>
  )
}

export default AboutUs
