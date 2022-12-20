import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { updateProduct } from "../../redux/apiCalls";
import Sidebar from "./Sidebar";
import './NewProduct.css'

const EditProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[4];
  const [inputs, setInputs] = useState({});
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [title, setTitle] = useState(product.title);
  const [cat, setCat] = useState(product.categories);
  const [description, setDescription] = useState(product.description);
  const [sustainability, setSustainability] = useState(product.sustainability);
  const [care_guide, setCareGuide] = useState(product.care_guide);
  const [img, setImage] = useState(product.images);
  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [slug, setSlug] = useState(product.slug);

  useEffect(() => {
    document.title = `Admin Edit Product — Hashingmart`;
  });

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

  const handleTitle = (e) => {
    setTitle(e.target.value)
    setSlug(e.target.value.split(' ').join('-').toLowerCase())
  }

  const handleClick = (e) => {
    e.preventDefault();
    const product = {
      ...inputs,
      title: title,
      slug: slug,
      description: description,
      care_guide: care_guide,
      sustainability: sustainability,
      images: img,
      categories: cat,
      color: color,
      size: size,
      userId: user._id,
    };
    updateProduct(productId, product, dispatch)
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
              <div className="mainbody-title">Edit Product</div>
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
                    <input
                      className="npi-div-input"
                      onChange={handleTitle}
                      required
                      defaultValue={product.title}
                      type="text"
                      placeholder="Nike Air Force"
                    />
                    <span>
                      Do not exceed 20 characters when entering the product name
                    </span>
                  </div>
                  <div className="npi-div">
                    <label htmlFor="category">Category</label>
                    <div className="tags-input">
                      {cat.map((tag, index) => (
                        <li className="tag" key={index}>
                          <span>{tag}</span>
                          <i
                            className="fa fa-times"
                            onClick={() => removeCat(index)}
                          ></i>
                        </li>
                      ))}
                      <input
                        type="text"
                        onKeyUp={(e) => (e.key === "Enter" ? addCat(e) : null)}
                      />
                    </div>
                  </div>
                  <div className="npi-div">
                    <label htmlFor="description">Description</label>
                    <Editor
                      textareaName="description"
                      initialValue={product.description}
                      onEditorChange={(newText) => setDescription(newText)}
                      apiKey="8im5v5golb8ilp29lwyad3ear2niekqv80pif5lg32yhjasa"
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
                      initialValue={product.sustainability}
                      onEditorChange={(newText) => setSustainability(newText)}
                      apiKey="8im5v5golb8ilp29lwyad3ear2niekqv80pif5lg32yhjasa"
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
                      {img.map((tag, index) => (
                        <li className="tag" key={index}>
                          <span>{tag}</span>
                          <i
                            className="fa fa-times"
                            onClick={() => removeImage(index)}
                          ></i>
                        </li>
                      ))}
                      <input
                        type="text"
                        onKeyUp={(e) =>
                          e.key === "Enter" ? addImage(e) : null
                        }
                      />
                    </div>
                    <span>You need to add atleast 4 images.</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-split">
                      <div className="npi-div">
                        <label htmlFor="size">Add Size</label>
                        <div className="tags-input">
                          {size.map((tag, index) => (
                            <li className="tag" key={index}>
                              <span>{tag}</span>
                              <i
                                className="fa fa-times"
                                onClick={() => removeSize(index)}
                              ></i>
                            </li>
                          ))}
                          <input
                            type="text"
                            placeholder="XS"
                            onKeyUp={(e) =>
                              e.key === "Enter" ? addSize(e) : null
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-split">
                      <div className="npi-div">
                        <label htmlFor="color">Add Color</label>
                        <div className="tags-input">
                          {color.map((tag, index) => (
                            <li className="tag" key={index}>
                              <span>{tag}</span>
                              <i
                                className="fa fa-times"
                                onClick={() => removeColor(index)}
                              ></i>
                            </li>
                          ))}
                          <input
                            type="text"
                            placeholder="BLACK"
                            onKeyUp={(e) =>
                              e.key === "Enter" ? addColor(e) : null
                            }
                          />
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
                        <input
                          className="npi-div-input"
                          name="price"
                          type="number"
                          placeholder="30"
                          defaultValue={product.price}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="npi-div">
                    <label htmlFor="care_guide">Care Guide</label>
                    <Editor
                      textareaName="care_guide"
                      initialValue={product.care_guide}
                      onEditorChange={(newText) => setCareGuide(newText)}
                      apiKey="8im5v5golb8ilp29lwyad3ear2niekqv80pif5lg32yhjasa"
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
                  <button type="button" onClick={handleClick}>
                    Save Product
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

export default EditProduct;
