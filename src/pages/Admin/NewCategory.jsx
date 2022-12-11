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

  const handleClick = (e) => {
    e.preventDefault();
    const category = {
      name,
      icon, 
      banner
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
      {/* <div style={{marginTop: "8rem", marginLeft: "auto", marginRight: "auto", maxWidth: "1250px", width: "100%"}}>
        <h1>New Product</h1>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} required/>
          <br />
          <label htmlFor="description">Description</label>
          <input type="text" name='description' placeholder='Description' onChange={handleChange} required/>
          <br />
          <label htmlFor="price">Price</label>
          <input type="number" name='price' placeholder='e.g 20' onChange={handleChange} required/>
          <br />
          <label htmlFor="categories">Categories</label>
          <input type="text" placeholder='men, women' onChange={handleCat} required/>
          <br />
          <label htmlFor="size">Size</label>
          <input type="text" placeholder='S, M' onChange={handleSize} required/>
          <br />
          <label htmlFor="color">Colors</label>
          <input type="text" placeholder='red, blue' onChange={handleColor} required/>
          <br />
          <label htmlFor="image">Image</label>
          <input type="text" placeholder='image url image url' onChange={handleImg} required/>
          <br />
          <label htmlFor="care_guide">Care Guide</label>
          <input type="text" name='care_guide' placeholder='Care guide' onChange={handleChange} required/>
          <br />
          <label htmlFor="sustainability">Sustainability</label>
          <input type="text" name='sustainability' placeholder='Sustainability' onChange={handleChange} required/>
          <br />
          <label htmlFor="stock">Stock</label>
          <select name='inStock' onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br />
          <button onClick={handleClick}>Create</button>
        </form>
      </div> */}
    </div>
  );
}

export default NewCategory