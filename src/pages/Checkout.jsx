import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import "./Checkout.css";
import "./Information.css";
import { useLocation, useNavigate } from "react-router-dom";
import { applyDiscount } from "../redux/apiCalls";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import data from "../data.json";

const Checkout = () => {
  const cart = useSelector((state) => state.carts.cart);
  const total = useSelector((state) => state.carts.total);
  const discountCode = useSelector((state) => state.carts.discountCode);
  const user = useSelector((state) => state.user.currentUser);
  const [inputs, setInputs] = useState({});
  const [countryId, setCountryId] = useState('');
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState('');
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const { isFetching } = useSelector((state) => state.carts);
  const [resMessage, setResMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

  const handleDiscount = (e) => {
    e.preventDefault();
    applyDiscount(code, dispatch);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...inputs,
      billCountry: countryId,
      billState: stateId
    };
    // Dispatch CC Data to Authorize.net and receive payment nonce for use on the server
    try {
      const res = await userRequest.post("/checkout/payment", {
        data,
        amount: total,
        shipFirstName: user.firstName,
        shipLastName: user.lastName,
        shipAddress: user.address,
        email: user.email,
      });
      if (res.status === 200) {
        navigate("/payment/success", {
          state: {
            authData: res.data,
            cart: cart,
            amount: total,
            totalQty: getTotal().totalQuantity,
          },
        });
      }
    } catch (err) {
      setResMessage(err.response.data.message)
      // console.log(err.response.data);
    }
  };

  return (
    <>
      <Announcement />
      <Navbar />

      <section className="checkout">
        <main className="main infoc">
          <div className="checkout_col">
            <div className="c_contact">
              <div className="step">
                <div className="step__sections">
                  <div className="section">
                    <div className="content-box">
                      <div className="content-box__row">
                        <div className="row">
                          <div className="row-block__inner">
                            <div className="row-block__label">Contact</div>
                          </div>
                          <div className="role-block__link">{user.email}</div>
                        </div>
                        <div className="row bb">
                          <div className="row-block__inner">
                            <div className="row-block__label">Shipping to</div>
                          </div>
                          <div className="role-block__link">
                            {user.address.street},&nbsp;{user.address.city}
                            &nbsp;
                            {user.address.state}&nbsp;{user.address.zip}
                            ,&nbsp;
                            {user.address.country}
                          </div>
                        </div>
                        <div className="row bb">
                          <div className="row-block__inner">
                            <div className="row-block__label">Method</div>
                          </div>
                          <div className="role-block__link">Free shipping</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="checkout__form" onSubmit={handleSubmit}>
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
                                  <ul>
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
                                        id="cc"
                                        name="cc"
                                        className="fieldinput"
                                        placeholder="Card number"
                                        // value={cardData.cardNumber}
                                        onChange={handleChange}
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
                                        defaultValue={user.firstName.concat(
                                          ` ${user.lastName}`
                                        )}
                                        className="fieldinput"
                                        placeholder="Name on card"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="datafield datafield-half">
                                    <div className="emaildata_wrapper">
                                      <label
                                        htmlFor="expiryMonth"
                                        className="fieldlabel"
                                      >
                                        Expiration month (MM/YY)
                                      </label>
                                      <input
                                        type="text"
                                        id="expiry"
                                        name="expiry"
                                        className="fieldinput"
                                        placeholder="MM/YY"
                                        maxLength={4}
                                        required
                                        // value={cardData.expMonth}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="datafield datafield-half">
                                    <div className="emaildata_wrapper">
                                      <label
                                        htmlFor="cvv"
                                        className="fieldlabel"
                                      >
                                        Security code
                                      </label>
                                      <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        className="fieldinput"
                                        placeholder="Security code"
                                        maxLength={4}
                                        required
                                        // value={cardData.cardCode}
                                        onChange={handleChange}
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
                        <h2 className="section__header-title">
                          Billing address
                        </h2>
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
                                    <select name="billCountry" id="billCountry" className="fieldinput" onChange={handleCountry}>
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
                                    <label
                                      htmlFor="firstName"
                                      className="fieldlabel"
                                    >
                                      First name
                                    </label>
                                    <input
                                      type="text"
                                      id="billFirstName"
                                      name="billFirstName"
                                      onChange={handleChange}
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
                                      id="billLastName"
                                      name="billLastName"
                                      className="fieldinput"
                                      onChange={handleChange}
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
                                      name="billStreet"
                                      id="billStreet"
                                      className="fieldinput"
                                      onChange={handleChange}
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
                                      name="billApartment"
                                      id="billApartment"
                                      className="fieldinput"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="datafield datafield-third">
                                  <div className="emaildata_wrapper">
                                    <label
                                      htmlFor="city"
                                      className="fieldlabel"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      name="billCity"
                                      id="billCity"
                                      className="fieldinput"
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="datafield datafield-third">
                                  <div className="emaildata_wrapper">
                                    <label
                                      htmlFor="state"
                                      className="fieldlabel"
                                    >
                                      State
                                    </label>
                                    <select name="billState" id="billState" className="fieldinput" onChange={(e) => handleState(e)}>
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
                                      name="billZip"
                                      id="billZip"
                                      className="fieldinput"
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="datafield">
                                  <div className="emaildata_wrapper">
                                    <label
                                      htmlFor="phone"
                                      className="fieldlabel"
                                    >
                                      Phone (optional)
                                    </label>
                                    <input
                                      type="text"
                                      name="phone"
                                      id="phone"
                                      className="fieldinput"
                                      onChange={handleChange}
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
                      {
                        resMessage && (
                          <div className="errorMessageDiv">
                            {resMessage}
                          </div>
                        )
                      }
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
                        {cart
                          ?.map((item) => (
                            <tr key={item.id}>
                              <td className="product__image">
                                <div className="product__thumbnail">
                                  <div className="thumbnail__wrapper">
                                    <img src={item.image} alt={item.title} />
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
                <div className="order__section-discount">
                  <form>
                    <div className="fieldSet">
                      <div className="datafield">
                        <div className="field__input-wrapper">
                          <div className="field__input">
                            <label htmlFor="discount">Discount code</label>
                            <input
                              type="text"
                              onChange={(e) => setCode(e.target.value)}
                              className="fieldinput"
                            />
                          </div>
                          <button onClick={handleDiscount}>
                            {isFetching ? (
                              <>Loading...</>
                            ) : (<>Apply</>)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="order__section-discount">
                  <table>
                    <tbody>
                      {
                        discountCode !== null ? (
                          <tr>
                            <th className="total__line total__line-name">
                              Discount code
                            </th>
                            <td className="total__price">
                              {discountCode}
                            </td>
                          </tr>
                        ) : (<></>)
                      }
                      <tr>
                        <th className="total__line total__line-name">
                          Subtotal
                        </th>
                        <td className="total__price">
                          <span>${total.toFixed(2)}</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="total__line total__line-name">
                          Shipping
                        </th>
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
                          <span className="totalamount">${total.toFixed(2)}</span>
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
    </>
  );
};

export default Checkout;
