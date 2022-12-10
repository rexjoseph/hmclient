import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { addProduct } from '../../redux/apiCalls';

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const [img, setImage] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);

  useEffect(() => {
    document.title = `Admin New Product — Hashingmart`;
  });

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  }

  const handleSize = (e) => {
    setSize(e.target.value.trim().split(','));
  }

  const handleColor = (e) => {
    setColor(e.target.value.trim().split(','));
  }

  const handleImg = (e) => {
    setImage(e.target.value.trim().split(' '));
  }

  const handleClick = (e) => {
    e.preventDefault();
    const product = { ...inputs, title: title, image: img, categories: cat, color: color, size: size, userId: user._id };
    addProduct(product, dispatch);
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <div style={{marginTop: "8rem", marginLeft: "auto", marginRight: "auto", maxWidth: "1250px", width: "100%"}}>
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
      </div>
    </div>
  )
}

export default NewProduct