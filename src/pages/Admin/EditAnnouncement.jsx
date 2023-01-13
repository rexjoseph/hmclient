import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import { updateAnnouncement } from '../../redux/apiCalls'
import Sidebar from './Sidebar'

const EditAnnouncement = () => {
  const location = useLocation()
  const announcementId = location.pathname.split("/")[4]
  const notification = useSelector((state) => state.announcement.announcements.find((announcement) => announcement._id === announcementId))
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Admin Edit Announcement — Hashingmart`;
  });

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
    updateAnnouncement(announcementId, announcement, dispatch)
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
                <h1 className="mainbody-title">Edit Announcement</h1>
                <div className="span">
                  <span>
                    Edit announcement
                  </span>
                </div>
              </div>
              <form className="addProductForm">
                <div className="flex two-flex">
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="name">Announcement Name</label>
                      <input name='name' defaultValue={notification.name} className="npi-div-input" onChange={handleChange} required type="text" placeholder="Merry Christmas" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Announcement Text</label>
                      <input name='text' defaultValue={notification.text} className="npi-div-input" onChange={handleChange} required type="text" placeholder="Get going with the festive season of giving" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Is this active?</label>
                      <select name="active" id="active" className="npi-div-input" defaultValue={notification.active}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="banner">Announcement Background Color Code</label>
                      <input name='bgColor' defaultValue={notification.bgColor} className='npi-div-input' onChange={handleChange} type="text" placeholder="F7F7F7" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Color</label>
                      <input name='textColor' defaultValue={notification.textColor} className='npi-div-input' onChange={handleChange} type="text" placeholder="1D1D1F" />
                    </div>
                    <button type="button" onClick={handleClick}>Update Announcement</button>
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

export default EditAnnouncement