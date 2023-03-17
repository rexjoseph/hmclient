import React, { useEffect, useState } from 'react'
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
import HomeNavbar from '../components/HomeNavbar'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import USP from '../components/USP'
import Modal from '../components/Modal'
import TestimonialsMarquee from '../components/TestimonialsMarquee'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  useEffect(()=>{
    let modalStatus = localStorage.getItem('modal_status');
    if(!modalStatus){
      setTimeout(() => {
        setOpenModal(true)
      },10000)
      localStorage.setItem('modal_status',1);
    }
  },[])

  useEffect(() => {
    document.title = 'Hashingmart — Sustainable & Versatile Essentials. Everyday'
  }, [])



  return (
    <div>
      <Announcement />
      <HomeNavbar />
      <Slider />
      {/* <Testimonial /> */}
      {/* <TestimonialsMarquee /> */}
      <USP />
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
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