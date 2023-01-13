import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { updateBanner } from "../../redux/apiCalls";
import Sidebar from "./Sidebar";

const EditBanner = () => {
  const location = useLocation();
  const bannerId = location.pathname.split("/")[4];
  const [inputs, setInputs] = useState({});
  const banner = useSelector((state) =>
    state.banner.banners.find((banner) => banner._id === bannerId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Admin Edit Banner — Hashingmart`;
  });

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const banner = {
      ...inputs,
    };
    updateBanner(bannerId, banner, dispatch);
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
                <h1 className="mainbody-title">Edit Banner</h1>
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
                      <input
                        name="title"
                        defaultValue={banner.title}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Keeping the faves..."
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="caption">Banner Caption</label>
                      <input
                        name="caption"
                        defaultValue={banner.caption}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Get going with the festive season of giving"
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="actionText">Action Text</label>
                      <input
                        name="actionText"
                        defaultValue={banner.actionText}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Go, Go, Go"
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="image">Banner Desktop Image</label>
                      <input
                        name="image"
                        defaultValue={banner.image}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Drop an image link..."
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="video">Is this a video?</label>
                      <select name="video" id="video" className="npi-div-input">
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="video">Video link</label>
                      <input
                        name="video_source"
                        defaultValue={banner.video_source}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Drop the video link..."
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="icon">Banner Mobile Image</label>
                      <input 
                      name='mobileImage' 
                      className="npi-div-input" 
                      onChange={handleChange} 
                      defaultValue={banner.mobileImage} 
                      type="text" 
                      placeholder="Drop an image link for mobile..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="poster">Banner Poster</label>
                      <input
                        name="poster"
                        defaultValue={banner.poster}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Poster"
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="color">Color</label>
                      <input
                        name="color"
                        defaultValue={banner.color}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="#FFF"
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="textColor">Text Color</label>
                      <input
                        name="textColor"
                        defaultValue={banner.textColor}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="#DDD"
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="hoverColor">Hover Color</label>
                      <input
                        name="hoverColor"
                        defaultValue={banner.hoverColor}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="#333"
                      />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="target">Target Link</label>
                      <input
                        name="target"
                        defaultValue={banner.target}
                        className="npi-div-input"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="https://hashingmart.com/productpage"
                      />
                    </div>
                    <button type="button" onClick={handleClick}>
                      Save Banner
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditBanner;
