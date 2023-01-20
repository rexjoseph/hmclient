import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { addBanner } from "../../redux/apiCalls";
import Sidebar from './Sidebar';

const NewBanner = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();


  useEffect(() => {
    document.title = `Admin New Banner — Hashingmart`;
  });

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const banner = {
      ...inputs
    };
    addBanner(banner, dispatch);
  };

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
                <h1 className="mainbody-title">Add Banner</h1>
                <div className="span">
                  <span>
                    The most important feature in the product addition section.
                    When adding products here, do not ignore to fill in all the
                    required fields completely and follow add follow the product
                    adding rules.
                  </span>
                </div>
              </div>
              <form className="addProductForm">
                <div className="flex two-flex">
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="title">Banner Title</label>
                      <input name='title' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Keeping the faves..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Banner Caption</label>
                      <input name='caption' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Get going with the festive season of giving" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Action Text</label>
                      <input name='actionText' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Go, Go, Go" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Banner Desktop Image</label>
                      <input name='image' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Drop an image link..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Is this a video?</label>
                      <select name="video" id="video" className="npi-div-input" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Video link</label>
                      <input name='video_source' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Drop the video link..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Mobile video link</label>
                      <input name='mobile_video_source' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Drop the mobile video link..." />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="icon">Banner Mobile Image</label>
                      <input name='mobileImage' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Drop an image link for mobile..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Banner Poster</label>
                      <input name='poster' className='npi-div-input' onChange={handleChange} required type="text" placeholder="Poster" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Color</label>
                      <input name='color' className='npi-div-input' onChange={handleChange} required type="text" placeholder="#FFF" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Text Color</label>
                      <input name='textColor' className='npi-div-input' onChange={handleChange} required type="text" placeholder="#DDD" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Hover Color</label>
                      <input name='hoverColor' className='npi-div-input' onChange={handleChange} required type="text" placeholder="#333" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Target Link</label>
                      <input name='target' className='npi-div-input' onChange={handleChange} required type="text" placeholder="https://hashingmart.com/productpage" />
                    </div>
                    <button type="button" onClick={handleClick}>Add Banner</button>
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

export default NewBanner