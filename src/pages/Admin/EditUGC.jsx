import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { updateUGCContent } from '../../redux/apiCalls';
import Sidebar from './Sidebar';

const EditUGC = () => {
  const location = useLocation();
  const ugcId = location.pathname.split("/")[4];
  const content = useSelector((state) => state.uGCContent.contents.find((content) => content._id === ugcId)) 
  const [handle, setHandle] = useState(content.handle);
  const [photourl, setPhotoUrl] = useState(content.photourl);
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Admin Edit Content — Hashingmart`;
  });

  const handleHandle = (e) => {
    setHandle(e.target.value)
  };

  const handlePhotoUrl = (e) => {
    setPhotoUrl(e.target.value)
  };

  const handleClick = (e) => {
    e.preventDefault();
    const content = {
      handle,
      photourl
    };
    updateUGCContent(ugcId, content, dispatch);
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
                <h1 className="mainbody-title">Edit UGC</h1>
                <div className="span">
                  <span>
                    Edit user generated content
                  </span>
                </div>
              </div>
              <form className="addProductForm">
                <div className="flex two-flex">
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="handle">Handle</label>
                      <input name='handle' defaultValue={content.handle} className="npi-div-input" onChange={handleHandle} required type="text" placeholder="@instagram" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="icon">Photo Link</label>
                      <input name='photourl' defaultValue={content.photourl} className="npi-div-input" onChange={handlePhotoUrl} required type="text" placeholder="Instagram Link" />
                    </div>
                    <button type="button" onClick={handleClick}>Save Content</button>
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

export default EditUGC