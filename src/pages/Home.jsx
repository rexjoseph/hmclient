import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import Ethos from '../components/Ethos'
import InstaGrid from '../components/InstaGrid'
import InstaHandle from '../components/InstaHandle'
import EmailMarketing from '../components/EmailMarketing'
import Prefooter from '../components/Prefooter'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import USP from '../components/USP'

const Home = () => {
  useEffect(() => {
    document.title = 'Hashingmart — Sustainable & Versatile Essentials. Everyday'
  }, [])
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Testimonial />
      <USP />
      <Products />
      <Collections />
      <Ethos />
      <InstaGrid />
      <InstaHandle />
      <EmailMarketing />
      <Prefooter />
      <Footer />
    </div>
  )
}

export default Home