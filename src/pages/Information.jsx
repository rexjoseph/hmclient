import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
import { publicRequest } from "../requestMethods";
import { editUserSuccess } from "../redux/userRedux";
import data from "../data.json";

const Information = () => {
  const cart = useSelector((state) => state.carts.cart);
  const total = useSelector((state) => state.carts.total);
  const user = useSelector((state) => state.user.currentUser);
  // const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [countryId, setCountryId] = useState('');
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState('');

  const handleCountry = (e) => {
    const countryId = e.target.value;
    const stateData = data.find(country => country.country_name === countryId).states
    setState(stateData);
    setCountryId(countryId);
  }

  const handleState = (e) => {
    const stateId = e.target.value;
    setStateId(stateId);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (street && countryId && stateId && city && zip) {
      try {
        const res = await publicRequest.post(
          `/users/${user._id}/edit-address`,
          {
            street: street,
            apartment: apartment,
            country: countryId,
            state: stateId,
            city: city,
            zip: zip,
            phone: phone
          }
        )
        if (res.data && res.status === 201 ) {
          dispatch(
            editUserSuccess(res.data)
          );
          navigate('/checkout');
        } else {
          navigate('/');
        }
      } catch (err) {}
    } else {
      alert('Please fill out the fields');
    }
  }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (street && country && state && city && zip) {
  //     dispatch(
  //       updateAddress(user._id, {
  //         street,
  //         apartment,
  //         country,
  //         state,
  //         city,
  //         zip,
  //         phone,
  //       })
  //     );
  //   } else {
  //     alert("Please fill out the fields");
  //   }
  // };

  useEffect(() => {
    document.title = `Information — Hashingmart`;
  });

  return (
    <section className="checkout">
      <Announcement />
      <Navbar />
      <main className="main infoc">
        <div className="checkout_col">
          <div className="c_contact">
            <form onSubmit={handleSubmit}>
              <div className="step_sections">
                <div className="information">
                  <div className="information_header">
                    <div className="information_header-flex">
                      <h2>Contact information</h2>
                    </div>
                  </div>
                  <div className="information_content">
                    <div className="fieldSet">
                      <div className="datafield">
                        <div className="emaildata_wrapper">
                          <label htmlFor="email" className="fieldlabel">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            className="fieldinput"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shipping_content">
                  <div className="information_header">
                    <h2>Shipping address</h2>
                  </div>
                  <div className="information_content">
                    <div className="fieldSet">
                      <div className="address_fields">
                        <div className="datafield">
                          <div className="emaildata_wrapper">
                            <label htmlFor="country" className="fieldlabel">
                              Country/region
                            </label>
                            <select name="country" id="country" className="fieldinput" onChange={handleCountry}>
                              <option value="">Select country</option> 
                              {
                                data.map((country, index) => (
                                  <option key={index} value={country.country_name}>{country.country_name}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                        <div className="datafield datafield-half">
                          <div className="emaildata_wrapper">
                            <label htmlFor="firstName" className="fieldlabel">
                              First name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              defaultValue={user.firstName}
                              className="fieldinput"
                              required
                            />
                          </div>
                        </div>
                        <div className="datafield datafield-half">
                          <div className="emaildata_wrapper">
                            <label htmlFor="lastName" className="fieldlabel">
                              Last name
                            </label>
                            <input
                              type="text"
                              defaultValue={user.lastName}
                              className="fieldinput"
                              required
                            />
                          </div>
                        </div>
                        <div className="datafield">
                          <div className="emaildata_wrapper">
                            <label htmlFor="address" className="fieldlabel">
                              Address
                            </label>
                            <input
                              type="text"
                              name="street"
                              id="street"
                              value={street}
                              className="fieldinput"
                              onChange={(e) => setStreet(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="datafield">
                          <div className="emaildata_wrapper">
                            <label htmlFor="apartment" className="fieldlabel">
                              Apartment, suite, etc. (optional)
                            </label>
                            <input
                              type="text"
                              name="apartment"
                              id="apartment"
                              value={apartment}
                              className="fieldinput"
                              onChange={(e) => setApartment(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="datafield datafield-third">
                          <div className="emaildata_wrapper">
                            <label htmlFor="city" className="fieldlabel">
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              value={city}
                              className="fieldinput"
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="datafield datafield-third">
                          <div className="emaildata_wrapper">
                            <label htmlFor="state" className="fieldlabel">
                              State
                            </label>
                            <select name="state" id="state" className="fieldinput" onChange={(e) => handleState(e)}>
                              <option value="">Select state/province</option>
                              {
                                state.map((getState, index) => (
                                  <option key={index} value={getState.state_name}>{getState.state_name}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                        <div className="datafield datafield-third">
                          <div className="emaildata_wrapper">
                            <label htmlFor="zip" className="fieldlabel">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              name="zip"
                              id="zip"
                              value={zip}
                              className="fieldinput"
                              onChange={(e) => setZip(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="datafield">
                          <div className="emaildata_wrapper">
                            <label htmlFor="phone" className="fieldlabel">
                              Phone (optional)
                            </label>
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              value={phone}
                              className="fieldinput"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step_footer">
                <a href="/checkout">
                  <button type="submit">
                    <span>Continue to order</span>
                  </button>
                </a>
                <div className="step_footer-href">
                  <a href="/cart">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Return to cart</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="sidebar_col">
          <h3>Your bag</h3>
          <div className="order_summary">
            <div className="order_summary-sections">
              <div className="order_summary-section order-product-list">
                <div className="order-product-content">
                  <table>
                    <tbody>
                      {cart
                        ?.map((item) => (
                          <tr key={item.id}>
                            <td className="product__image">
                              <div className="product__thumbnail">
                                <div className="thumbnail__wrapper">
                                  <img src={item.image} alt="{item.title}" />
                                </div>
                                <span className="product__thumbnail-quantity">
                                  {item.quantity}
                                </span>
                              </div>
                            </td>
                            <th className="product__description">
                              <span className="product__description-name">
                                {item.title}
                              </span>
                              <span className="product__description-color">
                                {item.color}
                              </span>
                              <span className="product__description-size">
                                {item.size}
                              </span>
                              <span className="product__description-size">
                                ${item.price}
                              </span>
                            </th>
                            <td className="product__quantity">
                              {item.quantity}
                            </td>
                            <td className="product__price">
                              <span className="product__price-emphasis">
                                ${item.price * item.quantity}
                              </span>
                            </td>
                          </tr>
                        ))
                        .reverse()}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="order__section-discount no-display">
                <form>
                  <div className="fieldSet">
                    <div className="datafield">
                      <div className="field__input-wrapper">
                        <div className="field__input">
                          <label htmlFor="discount">Discount code</label>
                          <input type="text" className="fieldinput" />
                        </div>
                        <button>Apply</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="order__section-discount">
                <table>
                  <tbody>
                    <tr>
                      <th className="total__line total__line-name">Subtotal</th>
                      <td className="total__price">
                        <span>${total.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="total__line total__line-name">Shipping</th>
                      <td className="total__price">
                        <span>Free</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="total__foot">
                    <tr>
                      <th className="total__line total__line-name due-label">
                        Total
                      </th>
                      <td className="total__price pay-due">
                        <span className="currency">USD</span>{" "}
                        <span className="totalamount">
                          ${total.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Information;
