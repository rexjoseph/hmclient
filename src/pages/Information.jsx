import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
import { updateAddress } from "../redux/apiCalls";

const Information = () => {
  const cart = useSelector((state) => state.carts.cart);
  const user = useSelector((state) => state.user.currentUser);
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (street && country && state && city && zip) {
      dispatch(
        updateAddress(user._id, {
          street,
          apartment,
          country,
          state,
          city,
          zip,
          phone,
        })
      )
      navigate('/checkout');
    } else {
      alert("Please fill out the fields");
    }
  };

  useEffect(() => {
    document.title = `Information — Hashingmart`;
  });

  return (
    <section className="checkout">
      {/* <Announcement /> */}
      {/* <Navbar /> */}
      <main className="main">
        <div className="checkout_col">
          <div className="c_contact">
            <form onSubmit={submitHandler}>
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
                            <input
                              type="text"
                              id="country"
                              value={country}
                              className="fieldinput"
                              onChange={(e) => setCountry(e.target.value)}
                              required
                            />
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
                            <input
                              type="text"
                              name="state"
                              id="state"
                              value={state}
                              className="fieldinput"
                              onChange={(e) => setState(e.target.value)}
                              required
                            />
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
                    {isFetching ? (
                      <span>Hashing things...</span>
                    ) : (
                      <span>Continue to order</span>
                    )}
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
                      {cart?.map((item) => (
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
                          <td className="product__quantity">{item.quantity}</td>
                          <td className="product__price">
                            <span className="product__price-emphasis">
                              ${item.price * item.quantity}
                            </span>
                          </td>
                        </tr>
                      )).reverse()}
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
                        <span>${getTotal().totalPrice}</span>
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
                          ${getTotal().totalPrice}
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
