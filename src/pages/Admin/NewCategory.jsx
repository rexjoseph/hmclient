import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { addCategory } from "../../redux/apiCalls";
import Sidebar from './Sidebar';

const NewCategory = () => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [banner, setBanner] = useState("");
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value)
  };

  const handleIcon = (e) => {
    setIcon(e.target.value)
  };

  const handleBanner = (e) => {
    setBanner(e.target.value)
  };

  const handleInfo = (e) => {
    setInfo(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    const category = {
      name,
      icon, 
      banner,
      info
    };
    addCategory(category, dispatch);
  };

  useEffect(() => {
    document.title = `Admin New Category — Hashingmart`;
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
                <h1 className="mainbody-title">Add Category</h1>
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
                      <label htmlFor="title">Category Name</label>
                      <input name='name' className="npi-div-input" onChange={handleName} required type="text" placeholder="Men" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Category Icon</label>
                      <input name='icon' className="npi-div-input" onChange={handleIcon} required type="text" placeholder="Image Link" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="title">Category Info</label>
                      <input name='info' className="npi-div-input" onChange={handleInfo} type="text" placeholder="Introducing new activewear you'll never want to take off..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Category Banner</label>
                      <input name='banner' className='npi-div-input' onChange={handleBanner} required type="text" placeholder="Image Link" />
                    </div>
                    <button type="button" onClick={handleClick}>Add Category</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewCategory