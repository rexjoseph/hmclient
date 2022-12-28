import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { updateDiscount } from '../../redux/apiCalls';
import Sidebar from './Sidebar';

const EditDiscount = () => {
  const location = useLocation();
  const discountId = location.pathname.split("/")[4];
  const discount = useSelector((state) => state.discount.discounts.find((discount) => discount._id === discountId))
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    document.title = `Admin Edit Discount — Hashingmart`;
  });

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
    updateDiscount(discountId, discount, dispatch);
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
                      <input name='name' defaultValue={discount.name} className="npi-div-input" onChange={handleChange} required type="text" placeholder="Bowman Code" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="code">Discount Code</label>
                      <input name='code' defaultValue={discount.code} className="npi-div-input" onChange={handleChange} required type="text" placeholder="BOW10" />
                    </div>
                    <div className="npi-div">
                      <label htmlFor="amount">Discount Amount</label>
                      <input name='amount' defaultValue={discount.amount} className='npi-div-input' onChange={handleChange} required type="number" placeholder="10" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="npi-div">
                      <label htmlFor="isPercent">Is this a percentage discount?</label>
                      <select name="isPercent" onChange={handleChange} defaultValue={discount.isPercent}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="isActive">Should this discount be active?</label>
                      <select name="isActive" onChange={handleChange} defaultValue={discount.isActive}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="npi-div">
                      <label htmlFor="oneTime">Should this discount be used only once?</label>
                      <select name="oneTime" onChange={handleChange} defaultValue={discount.oneTime}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                    </div>
                    <button type="button" onClick={handleClick}>Save Discount</button>
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

export default EditDiscount