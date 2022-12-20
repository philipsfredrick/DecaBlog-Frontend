
import React from 'react'
import Content from '../Components/Home/homecontent/content'
import Logo from '../common/Logo'
import Banner from '../Components/Home/homebanner/banner'
import NavBar from '../Components/Home/NavBar/NavBar'
import Footer from '../Components/Home/homefooter/footer'
import getProfile from '../Components/Home/NavBar/Profile'
export default function LandingPage() {
  return (
  <>
  <getProfile/>
   <NavBar/>
   <Banner/>
   <Content />
   <Footer/>
   </>
  )
}
