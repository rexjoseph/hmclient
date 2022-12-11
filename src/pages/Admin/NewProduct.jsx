import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { Editor } from "@tinymce/tinymce-react";
import "./NewProduct.css";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { addProduct } from "../../redux/apiCalls";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const [img, setImage] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [care_guide, setCareGuide] = useState("");
  const [sustainability, setSustainability] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    document.title = `Admin New Product — Hashingmart`;
  });

  useEffect(() => {
    axios.get("http://localhost:4000/api/category/all")
    .then(res => {
      let tempArray = [];
      for (var i = 0; i < res.data.length; i++) {
        tempArray.push(res.data[i].name)
      }
      setCat(tempArray);
    })
    .catch(err => {
      console.log(err);
    })
  }, [setCat])

  const removeSize = indexToRemove => {
    setSize(size.filter((_, index) => index !== indexToRemove))
  }

  const addSize = (e) => {
    if (e.target.value !== "") {
      setSize([...size, e.target.value])
      e.target.value = "";
    }
  }

  const removeColor = indexToRemove => {
    setColor(color.filter((_, index) => index !== indexToRemove))
  }

  const addColor = (e) => {
    if (e.target.value !== "") {
      setColor([...color, e.target.value])
      e.target.value = "";
    }
  }

  const removeImage = indexToRemove => {
    setImage(img.filter((_, index) => index !== indexToRemove))
  }

  const addImage = (e) => {
    if (e.target.value !== "") {
      setImage([...img, e.target.value])
      e.target.value = "";
    }
  }

  const removeCat = indexToRemove => {
    setCat(cat.filter((_, index) => index !== indexToRemove))
  }

  const addCat = (e) => {
    if (e.target.value !== "") {
      setCat([...cat, e.target.value])
      e.target.value = "";
    }
  }

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // const handleCat = (e) => {
  //   setCat(e.target.value.split(","));
  // };

  // const handleSize = (e) => {
  //   setSize(e.target.value.trim().split(","));
  // };

  // const handleColor = (e) => {
  //   setColor(e.target.value.trim().split(","));
  // };

  // const handleImg = (e) => {
  //   setImage(e.target.value.trim().split(" "));
  // };

  const handleClick = (e) => {
    e.preventDefault();
    const product = {
      ...inputs,
      title: title,
      description: description,
      care_guide: care_guide,
      sustainability: sustainability,
      image: img,
      categories: cat,
      color: color,
      size: size,
      userId: user._id,
    };
    addProduct(product, dispatch);
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
                <h1 className="mainbody-title">Add Product</h1>
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
                      <label htmlFor="title">Product Name</label>
                      <input className="npi-div-input" onChange={(e) => setTitle(e.target.value)} required type="text" placeholder="Nike Air Force" />
                      <span>
                        Do not exceed 20 characters when entering the product
                        name
                      </span>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="category">Category</label>
                      <div className="tags-input">
                        {
                          cat.map((tag, index) => (
                            <li className='tag' key={index}>
                            <span>{tag}</span>
                            <i className='fa fa-times' onClick={() => removeCat(index)}></i>
                          </li>
                          ))
                        }
                        <input type="text" onKeyUp={ e => (e.key === "Enter" ? addCat(e) : null)}/>
                      </div>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="description">Description</label>
                      <Editor
                        textareaName="description"
                        onEditorChange={(newText) => setDescription(newText)}
                        apiKey='8im5v5golb8ilp29lwyad3ear2niekqv80pif5lg32yhjasa'
                        init={{
                          height: 400,
                          menubar: true,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                          ],
                          toolbar:
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                      <span>
                        Do no exceed 100 characters when entering the product
                        description.
                      </span>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="sustainability">Sustainability</label>
                      <Editor
                        textareaName="sustainability"
                        onEditorChange={(newText) => setSustainability(newText)}
                        apiKey='8im5v5golb8ilp29lwyad3ear2niekqv80pif5lg32yhjasa'
                        init={{
                          height: 250,
                          menubar: true,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                          ],
                          toolbar:
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                      <span>
                        Do no exceed 100 characters when entering the product
                        description.
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="image">Product Images</label>
                      <div className="tags-input">
                        {
                          img.map((tag, index) => (
                            <li className='tag' key={index}>
                            <span>{tag}</span>
                            <i className='fa fa-times' onClick={() => removeImage(index)}></i>
                          </li>
                          ))
                        }
                        <input type="text" onKeyUp={ e => (e.key === "Enter" ? addImage(e) : null)}/>
                      </div>
                      <span>
                        You need to add atleast 4 images.
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-split">
                        <div className="npi-div">
                          <label htmlFor="size">Add Size</label>
                          <div className="tags-input">
                            {
                              size.map((tag, index) => (
                                <li className='tag' key={index}>
                                <span>{tag}</span>
                                <i className='fa fa-times' onClick={() => removeSize(index)}></i>
                              </li>
                              ))
                            }
                            <input type="text" placeholder="XS" onKeyUp={ e => (e.key === "Enter" ? addSize(e) : null)}/>
                          </div>
                        </div>
                      </div>
                      <div className="flex-split">
                        <div className="npi-div">
                          <label htmlFor="color">Add Color</label>
                          <div className="tags-input">
                            {
                              color.map((tag, index) => (
                                <li className='tag' key={index}>
                                <span>{tag}</span>
                                <i className='fa fa-times' onClick={() => removeColor(index)}></i>
                              </li>
                              ))
                            }
                            <input type="text" placeholder="BLACK" onKeyUp={ e => (e.key === "Enter" ? addColor(e) : null)}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-split">
                        <div className="npi-div">
                          <label htmlFor="inStock">In Stock</label>
                          <select name="inStock" onChange={handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex-split">
                        <div className="npi-div">
                          <label htmlFor="price">Price</label>
                          <input className="npi-div-input" name="price" type="number" placeholder="30" onChange={handleChange} required/>
                        </div>
                      </div>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="sustainability">Care Guide</label>
                      <Editor
                        textareaName="care_guide"
                        onEditorChange={(newText) => setCareGuide(newText)}
                        apiKey='8im5v5golb8ilp29lwyad3ear2niekqv80pif5lg32yhjasa'
                        init={{
                          height: 250,
                          menubar: false,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                          ],
                          toolbar:
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                      <span>
                        Do no exceed 100 characters when entering the product
                        description.
                      </span>
                    </div>
                    <button type="button" onClick={handleClick}>Add Product</button>
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
};

export default NewProduct;
