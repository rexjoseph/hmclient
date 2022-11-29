import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
import "./Information.css";

const Checkout = () => {
  const cart = useSelector((state) => state.carts.cart);
  const user = useSelector((state) => state.user.currentUser);
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

  useEffect(() => {
    document.title = `Checkout — Hashingmart`;
  });
  return (
    <section className="checkout">
      <main>
        <div className="checkout_col">
          <div className="c_contact">
            <div className="step">
              <div className="step__sections">
                <div className="section">
                  <div className="content-box">
                    <div role="table" className="content-box__row">
                      <div className="row">
                        <div className="row-block__inner">
                          <div role="rowHeader" className="row-block__label">
                            Contact
                          </div>
                        </div>
                        <div role="cell" className="role-block__link">
                          {user.email}
                        </div>
                      </div>
                      <div className="row bb">
                        <div className="row-block__inner">
                          <div role="rowHeader" className="row-block__label">
                            Shipping to
                          </div>
                        </div>
                        <div role="cell" className="role-block__link">
                          {user.address.street},&nbsp;{user.address.city}&nbsp;
                          {user.address.state}&nbsp;{user.address.zip},&nbsp;
                          {user.address.country}
                        </div>
                      </div>
                      <div className="row bb">
                        <div className="row-block__inner">
                          <div role="rowHeader" className="row-block__label">
                            Method
                          </div>
                        </div>
                        <div role="cell" className="role-block__link">
                          Free shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="checkout__form">
                  <div className="section">
                    <div className="section__header">
                      <h2 className="section__header-title">Payment</h2>
                      <p className="section__header-text">
                        All transactions are secure and encrypted.
                      </p>
                    </div>
                    <div className="section__content">
                      <div className="data-payment-form">
                        <fieldset className="content-box">
                          <div className="content-box__row">
                            <div className="payment-method__wrapper">
                              <label
                                className="content-box-emphasis"
                                htmlFor="checkout-payment-gateway"
                              >
                                Credit card
                              </label>
                              <div className="payment-method-accessory">
                                <ul role="list">
                                  <li className="payment-icon payment-icon-visa"></li>
                                  <li className="payment-icon payment-icon-master"></li>
                                  <li className="payment-icon payment-icon-amex"></li>
                                  <li className="payment-icon payment-icon-discover"></li>
                                  <li className="payment-icon-list-more">
                                    <small>and more...</small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="payment-subfields">
                            <div className="fieldSet">
                              <div className="address_fields">
                                <div className="datafield">
                                  <div className="emaildata_wrapper">
                                    <label
                                      htmlFor="cardNumber"
                                      className="fieldlabel"
                                    >
                                      Card number
                                    </label>
                                    <input
                                      type="text"
                                      id="cardNumber"
                                      name="cardNumber"
                                      className="fieldinput"
                                      placeholder="Card number"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="datafield">
                                  <div className="emaildata_wrapper">
                                    <label
                                      htmlFor="cardName"
                                      className="fieldlabel"
                                    >
                                      Name on card
                                    </label>
                                    <input
                                      type="text"
                                      id="cardName"
                                      name="cardName"
                                      className="fieldinput"
                                      placeholder="Name on card"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="datafield datafield-half">
                                  <div className="emaildata_wrapper">
                                    <label
                                      htmlFor="expiryDate"
                                      className="fieldlabel"
                                    >
                                      Expiration date (MM/YY)
                                    </label>
                                    <input
                                      type="text"
                                      id="expiryDate"
                                      name="expiryDate"
                                      className="fieldinput"
                                      placeholder="Expiration date (MM/YY)"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="datafield datafield-half">
                                  <div className="emaildata_wrapper">
                                    <label htmlFor="cvv" className="fieldlabel">
                                      Security code
                                    </label>
                                    <input
                                      type="text"
                                      id="cvv"
                                      name="cvv"
                                      className="fieldinput"
                                      placeholder="Security code"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div className="section__header">
                      <h2 className="section__header-title">Billing address</h2>
                      <p className="section__header-text">
                        Select the address that matches your card.
                      </p>
                    </div>
                    <div className="section__content">
                      <fieldset className="content-box">
                        <div className="payment-subfields">
                          <div className="fieldSet">
                            <div className="address_fields">
                              <div className="datafield">
                                <div className="emaildata_wrapper">
                                  <label
                                    htmlFor="country"
                                    className="fieldlabel"
                                  >
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
                                  <label
                                    htmlFor="firstName"
                                    className="fieldlabel"
                                  >
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
                                  <label
                                    htmlFor="lastName"
                                    className="fieldlabel"
                                  >
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
                                  <label
                                    htmlFor="address"
                                    className="fieldlabel"
                                  >
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
                                  <label
                                    htmlFor="apartment"
                                    className="fieldlabel"
                                  >
                                    Apartment, suite, etc. (optional)
                                  </label>
                                  <input
                                    type="text"
                                    name="apartment"
                                    id="apartment"
                                    value={apartment}
                                    className="fieldinput"
                                    onChange={(e) =>
                                      setApartment(e.target.value)
                                    }
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
                      </fieldset>
                    </div>
                  </div>
                  <div className="step_footer">
                    <button type="submit">
                      <span>Place order</span>
                    </button>
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
              <div className="order__section-discount">
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

export default Checkout;
