import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import { addAnnouncement } from '../../redux/apiCalls'
import Sidebar from './Sidebar'

const NewAnnouncement = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Admin New Announcement — Hashingmart`;
  })

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const announcement = {
      ...inputs
    }
    addAnnouncement(announcement, dispatch)
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className="newproduct">
        <div className="container">
          <div className="flex">
            <Sidebar />
            <div className="mainbody">
              <div className="mainbody-header">
                <h1 className="mainbody-title">Add Announcement</h1>
                <div className="span">
                  <span>
                    Create announcement
                  </span>
                </div>
              </div>
              <form className="addProductForm">
                <div className="flex two-flex">
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="name">Announcement Name</label>
                      <input name='name' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Merry Christmas" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Announcement Text</label>
                      <input name='text' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Get going with the festive season of giving" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Is this active?</label>
                      <select name="active" id="active" className="npi-div-input">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="banner">Announcement Background Color Code</label>
                      <input name='bgColor' className='npi-div-input' onChange={handleChange} type="text" placeholder="F7F7F7" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Color</label>
                      <input name='textColor' className='npi-div-input' onChange={handleChange} type="text" placeholder="1D1D1F" />
                    </div>
                    <button type="button" onClick={handleClick}>Add Announcement</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewAnnouncement