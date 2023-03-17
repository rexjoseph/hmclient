import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Accordion from "../components/Accordion"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const FAQ = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Accordion />
      <Footer />
    </div>
  )
}

export default FAQ