import React from 'react'
import './TestimonialsMarquee.css'
import MiniTrustBox from "../images/mini-trustbox.png"
import MicroCombo from "../images/micro-combo.png"
import MicroButton from "../images/micro-btn.png"
import MicroStar from "../images/micro-star.png"

const TestimonialsMarquee = () => {
  return (
    <section id="marquee-section">
      <div className="marquee-container">
        <section id="logos" className="relative">
          <div className="grid">
            <div className="w-full">
              <div className="animate-marquee w-fit">
                <img src={MiniTrustBox} alt="mini-trustbox.png" width="" height="75"/>
                <img src={MicroCombo} alt="micro-combo.png" width="" height="20" />
                <img src={MicroButton} alt="micro-btn.png" width="" height="25" />
                <img src={MicroStar} alt="micro-star.png" width="" height="24" />
                <img src={MiniTrustBox} alt="mini-trustbox.png" width="" height="75"/>
                <img src={MicroCombo} alt="micro-combo.png" width="" height="20" />
                <img src={MicroButton} alt="micro-btn.png" width="" height="25" />
                <img src={MicroStar} alt="micro-star.png" width="" height="24" />
                <img src={MiniTrustBox} alt="mini-trustbox.png" width="" height="75"/>
                <img src={MicroCombo} alt="micro-combo.png" width="" height="20" />
                <img src={MicroButton} alt="micro-btn.png" width="" height="25" />
                <img src={MicroStar} alt="micro-star.png" width="" height="24" />
                <img src={MiniTrustBox} alt="mini-trustbox.png" width="" height="75"/>
                <img src={MicroCombo} alt="micro-combo.png" width="" height="20" />
                <img src={MicroButton} alt="micro-btn.png" width="" height="25" />
                <img src={MicroStar} alt="micro-star.png" width="" height="24" />
              </div>
            </div>
            <div className="w-full">
              <div className="animate-marquee w-fit animate-alt">
                <p className='w-nowrap'>
                  "We absolutely love your cat brush, we have 4 cats so use so many lint brushes! But your eco friendly brush will help us eliminate those completely🤩🌱" -
                  <b>Lauren S.</b>
                </p>
                <p className='w-nowrap'>
                  "Great functionality, love that the body is 100% recyclable" -
                  <b>Barbara S.</b>
                </p>
                <p className='w-nowrap'>
                  "I have the Eco Friendly Dust Brush and it is AMAZING." -
                  <b>Zavier T.</b>
                </p>
                <p className='w-nowrap'>
                  "We absolutely love your cat brush, we have 4 cats so use so many lint brushes! But your eco friendly brush will help us eliminate those completely🤩🌱" -
                  <b>Lauren S.</b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default TestimonialsMarquee