import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { updateCategory } from '../../redux/apiCalls';
import Sidebar from './Sidebar';

const EditCategory = () => {
  const location = useLocation();
  const categoryId = location.pathname.split("/")[4];
  const category = useSelector((state) => state.category.categories.find((category) => category._id === categoryId))
  const [name, setName] = useState(category.name);
  const [icon, setIcon] = useState(category.icon);
  const [banner, setBanner] = useState(category.banner);
  const [info, setInfo] = useState(category.info);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Admin Edit Category — Hashingmart`;
  });

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
      name: name,
      icon: icon,
      banner: banner,
      info: info
    };
    updateCategory(categoryId, category, dispatch)
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
                <h1 className="mainbody-title">Edit Category</h1>
                <div className="span">
                  <span>
                    Edit category
                  </span>
                </div>
              </div>
              <form className="addProductForm">
                <div className="flex two-flex">
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="title">Category Name</label>
                      <input name='name' defaultValue={category.name} className="npi-div-input" onChange={handleName} required type="text" placeholder="Men" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="icon">Category Icon</label>
                      <input name='icon' defaultValue={category.icon} className="npi-div-input" onChange={handleIcon} required type="text" placeholder="Image Link" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="title">Category Info</label>
                      <input name='info' defaultValue={category.info} className="npi-div-input" onChange={handleInfo} type="text" placeholder="Introducing new activewear you'll never want to take off..." />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="banner">Category Banner</label>
                      <input name='banner' defaultValue={category.banner} className='npi-div-input' onChange={handleBanner} required type="text" placeholder="Image Link" />
                    </div>
                    <button type="button" onClick={handleClick}>Save Category</button>
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

export default EditCategory