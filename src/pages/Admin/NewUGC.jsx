import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { addUGCContent } from "../../redux/apiCalls";
import Sidebar from './Sidebar';

const NewUGC = () => {
  const [handle, setHandle] = useState("");
  const [photourl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();

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
    addUGCContent(content, dispatch);
  };

  useEffect(() => {
    document.title = `Admin New UGC — Hashingmart`;
  });

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
                <h1 className="mainbody-title">Add UGC</h1>
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
                      <label htmlFor="handle">Handle</label>
                      <input name='handle' className="npi-div-input" onChange={handleHandle} required type="text" placeholder="@instagram" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="icon">Photo Link</label>
                      <input name='photourl' className="npi-div-input" onChange={handlePhotoUrl} required type="text" placeholder="Instagram Link" />
                    </div>
                    <button type="button" onClick={handleClick}>Add Content</button>
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

export default NewUGC