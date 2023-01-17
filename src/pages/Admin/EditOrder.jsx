import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { userRequest } from '../../requestMethods';
import Loading from '../../components/Loading';
import {format} from "date-fns";
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import './EditOrder.css';
import { updateOrder } from '../../redux/apiCalls';

const EditOrder = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[4];
  const [order, setOrder] = useState({});
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get("/orders/"+orderId)
        setOrder(res.data);
        setLoading(true);
      } catch {}
    }
    getOrder()
  }, [orderId])

  useEffect(() => {
    document.title = `Admin Edit Order — Hashingmart`;
  })

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const order = {
      ...inputs
    };
    updateOrder(orderId, order, dispatch)
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <section>
        <div className="container pad15">
          {
            loading ? (
              <>
                <div style={{fontSize: "1.4rem"}} className="o__pages">
                  <section className="orders100" style={{marginTop: "8rem"}}>
                    <div className="container pad15">
                      <div style={{padding: "0"}} className="orders__div">
                        <div style={{margin: "0"}} className="orders__header">
                          <div className="orders__info">
                            <div className="tp-flex">
                              <h1>Edit Order</h1>
                            </div>
                            <div className="dash-disclaimer">
                              <p>
                                The most important feature in the order editing section is the order status part. When editing
                                order here, fill in the required field completely.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="odt__body">
                          <div className="odt__body-1">
                            <h3>Contact Info</h3>
                            <div style={{padding: "0", fontSize: "1.4rem"}}>
                              <p><span className='o-personalinfo'>Contact:&nbsp;</span>{order.user.firstName}&nbsp;{order.user.lastName}</p>
                              <p>
                                <span className='o-personalinfo'>Email&nbsp;<a style={{textDecoration: "underline", color: "var(--brand-blue)"}} href={`mailto:${order.user.email}`}>{order.user.email}</a></span>
                              </p>
                              <p>
                                <span className='o-personalinfo'>Phone:&nbsp;</span>
                                {order.user.userId.address.phone}
                              </p>
                              <p>
                                <span className='o-personalinfo'>Shipping Address:&nbsp;</span>
                                {order.user.userId.address.street},&nbsp;{order.user.userId.address.apartment},&nbsp;{order.user.userId.address.city},&nbsp;{order.user.userId.address.state},&nbsp;{order.user.userId.address.country},&nbsp;{order.user.userId.address.zip}
                              </p>
                            </div>
                            <h3 style={{marginTop: "2rem"}}>Order Model</h3>
                            <div className="clear-pad">
                              <p><b>Order ID: </b><span style={{textTransform: "uppercase"}}>{order._id}</span></p>
                              <p><b>Payment ID: </b><span style={{textTransform: "uppercase"}}>{order.paymentId}</span></p>

                              <form>
                                <p><b>Order Status:&nbsp;</b>{order.status}</p>
                                <p style={{marginTop: "1rem"}}><b>Shipping Line:&nbsp;</b>{order.shippingCompany || 'Not yet set'}</p>
                                <div className='flex order-stsl-flex'>
                                  <div className="stsl-div">
                                    <p><b>Update Status:</b></p>
                                    <select name="status" id="status" onChange={handleChange}>
                                      <option>{order.status.charAt(0).toUpperCase() + order.status.slice(1) || 'Select'}</option>
                                      <option value="pending">Pending</option>
                                      <option value="processing">Processing</option>
                                      <option value="sent">Sent</option>
                                      <option value="completed">Completed</option>
                                      <option value="canceled">Canceled</option>
                                    </select>
                                  </div>
                                  <div className="stsl-div2">
                                    <p><b>Shipping Lines:</b></p>
                                    <select name="shippingCompany" id="shippingCompany" onChange={handleChange}>
                                      <option>{order.shippingCompany || 'Select'}</option>
                                      <option value="USPS">USPS</option>
                                      <option value="FedEX">FedEX</option>
                                      <option value="UPS">UPS</option>
                                      <option value="DHL">DHL</option>
                                      <option value="Aramex">Aramex (Fastway AU)</option>
                                      <option value="Canada Post">Canada Post</option>
                                    </select>
                                    <br />
                                    <input type="text" name="trackingNum" id="trackingNum" defaultValue={order.trackingNum || ''} placeholder="Tracking Number" onChange={handleChange} />
                                    <input type="text" name="trackingLink" id="trackingLink" defaultValue={order.trackingLink || ''} placeholder="Tracking Link" onChange={handleChange}/>
                                  </div>
                                </div>
                                <div style={{marginTop: ".8rem"}}>
                                  <p><b>Description:</b></p>
                                  <textarea name="description" id="description" cols="50" rows="5"></textarea>
                                </div>
                                <div style={{maxWidth: "100%", margin: "0"}} className="dash-disclaimer">
                                  <p>
                                    Optional: Not more than 200 characters.
                                  </p>
                                </div>
                                <button type='submit' style={{margin: "2.5rem 0 0"}} className="nav-btn" onClick={handleClick}>Save Order</button>
                              </form>
                            </div>
                          </div>
                          <div className="odt__body-2">
                              <h3>Order Images</h3>
                              <div className="flex odt__body-2__imgflex">
                                {
                                  order.cart.items.map(item => (
                                    <a href={`/product/${item.productId.slug}`} key={item._id}>
                                      <div className="img-div">
                                        <img src={item.productId.images[0]} alt={item.title} />
                                      </div>
                                      {item.size.length > 0 && <><div><span>Size:&nbsp;{item.size}</span></div></>}
                                      {item.color.length > 0 && <><div><span style={{textTransform: "capitalize"}}>Color:&nbsp;{item.color}</span></div></>}
                                    </a>
                                  ))
                                }
                              </div>
                              <div style={{maxWidth: "100%"}} className="dash-disclaimer">
                                <p>
                                  Photos of products in the users order are displayed and useful for order fulfillment. 
                                  Pay attention to product availability before order status changes.
                                </p>
                              </div>
                              <p><b>Order Date:</b></p>
                              <p>{format(new Date(order.createdAt), 'yyyy/MM/dd')}</p>
                              <br />
                              {order.status === 'completed' && 
                              <>
                                <p>Delivery Date:</p>
                                <p>{format(new Date(order.createdAt), 'yyyy/MM/dd')}</p>
                                <br />
                              </>}
                              <p><b>Tracking Link:</b></p>
                              <p style={{textDecoration: "underline"}}>
                                <a style={{color: "var(--brand-blue)"}} href={order.trackingLink || ''} target="_blank" rel="noreferrer">{order.trackingLink || ''}</a>
                              </p>
                              <br />
                              <p><b>Order Value:</b></p>
                              <p>${order.totalCost.toFixed(2)}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            ) : (
              <Loading />
            )
          }
        </div>
      </section>
    </div>
  )
}

export default EditOrder