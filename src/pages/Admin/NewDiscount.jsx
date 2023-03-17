import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { addDiscount } from "../../redux/apiCalls";
import Sidebar from './Sidebar';

const NewCategory = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const discount = {
      ...inputs
    };
    addDiscount(discount, dispatch);
  };

  useEffect(() => {
    document.title = `Admin New Discount — Hashingmart`;
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
                <h1 className="mainbody-title">Add Discount</h1>
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
                      <label htmlFor="name">Discount Name</label>
                      <input name='name' className="npi-div-input" onChange={handleChange} required type="text" placeholder="Bowman Code" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="code">Discount Code</label>
                      <input name='code' className="npi-div-input" onChange={handleChange} required type="text" placeholder="BOW10" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="amount">Discount Amount</label>
                      <input name='amount' className='npi-div-input' onChange={handleChange} required type="number" placeholder="10" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="isPercent">Is this a percentage discount?</label>
                      <select name="isPercent" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="isActive">Should this discount be active?</label>
                      <select name="isActive" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="oneTime">Should this discount be used only once?</label>
                      <select name="oneTime" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                    </div>
                    <button type="button" onClick={handleClick}>Add Discount</button>
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