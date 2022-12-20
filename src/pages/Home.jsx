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
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import USP from '../components/USP'
import Modal from '../components/Modal'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  useEffect(()=>{
    let modalStatus = localStorage.getItem('modal_status');
    if(!modalStatus){
      setOpenModal(true);
      localStorage.setItem('modal_status',1);
    }
  },[])

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
        {/* <button onClick={() => setOpenModal(true)}>Modal</button> */}
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