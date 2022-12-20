import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css'

const Modal = ({open, onClose}) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/email/signup/v2`, {email: email})
      navigate(`/email/${res.data}/signup/success`)
    } catch (err) {}
  }

  if (!open) return null
  return (
    <div className='overlay'>
      <div className="modalContainer">
        <div className="modalCenter">
          <p onClick={onClose} className='closeBtn'>
          <svg className="bx-close-xsvg" viewBox="240 240 20 20" aria-hidden="true">
            <title>close</title>
            <g className="bx-close-xstroke bx-close-x-adaptive">
              <path className="bx-close-x-adaptive-1" d="M255.6 255.6l-11.2-11.2" vectorEffect="non-scaling-stroke">
              </path>
              <path className="bx-close-x-adaptive-2" d="M255.6 244.4l-11.2 11.2" vectorEffect="non-scaling-stroke">
              </path>
            </g>
          </svg>
          </p>
          <div className="content">
            <h1>Get 10% Off</h1>
            <p>Your First Order</p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <input type="email" onChange={handleEmail} required/>
              </fieldset>
              <div>
                <button>Activate 10% Off</button>
              </div>
            </form>
          </div>
          <div className="btnContainer">
            <a href='#' onClick={onClose}>No, thanks</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal