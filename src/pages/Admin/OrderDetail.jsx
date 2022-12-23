import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import { userRequest } from '../../requestMethods';
import './OrderDetail.css'
import {format} from "timeago.js"
import Loading from '../../components/Loading';

const OrderDetail = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[3];
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `Order — Hashingmart`;
  });

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get("/orders/"+orderId);
        setOrder(res.data);
        setLoading(true)
      } catch {}
    }
    getOrder()
  }, [orderId])

  return (
    <div>
      <Announcement />
      <Navbar />
      <section>
      <div className="container">
        {
          loading ? (
            <>
              <div className="fl">
                <div>
                  <div className="fl-icon">
                    <a href="/admin/orders">
                      <i className='fa fa-chevron-left'></i>
                    </a>
                    <span>&nbsp;Orders</span>
                    <i className='fa fa-long-arrow-right'></i>
                    <p style={{textTransform: "uppercase"}}>#{order._id}</p>
                  </div>
                </div>
                <div className="fl-actions">
                  <li>
                    <a className="edit" href={`/admin/orders/edit/${order._id}`}>Edit</a>
                  </li>
                  <a href="#">Delete</a>
                </div>
              </div>

              <section className='o__columns prefix-orderview'>
                <div style={{border: "none"}} className="o__quicklinks">
                  <div className="o__quicklinks-div">
                    <div className="o-personalinformation">
                      <h2>Invoice #<span style={{textTransform: "uppercase"}}>{order._id.substring(0, 8)}</span></h2>
                      <div style={{marginTop: "2rem", marginBottom: "2rem"}} className="col-divider"></div>
                      <p>Order Date</p>
                      <span className='o-personalinfo'>{format(order.createdAt)}</span>
                      <p>{order.updatedAt}</p>
                      <div style={{marginTop: "2rem", marginBottom: "2rem"}} className="col-divider"></div>
                      <p><span className='o-personalinfo'>Contact:&nbsp;</span>{order.user.firstName}&nbsp;{order.user.lastName}</p>
                      <p><span className='o-personalinfo'>Email:&nbsp;</span><a style={{textDecoration: "underline", color: "var(--brand-blue)"}} href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                      <p><span className='o-personalinfo'>Phone:&nbsp;</span>{order.user.userId.address.phone}</p>
                      <p><span className='o-personalinfo'>Address:&nbsp;</span>{order.user.userId.address.street},&nbsp;{order.user.userId.address.apartment},&nbsp;{order.user.userId.address.city},&nbsp;{order.user.userId.address.state},&nbsp;{order.user.userId.address.country},&nbsp;{order.user.userId.address.zip}</p>
                    </div>
                  </div>
                </div>

                <div style={{fontSize: "1.4rem"}} className="o__pages">
                  <section className="orders100">
                    <div className="container">
                      <div style={{padding: "0"}} className="orders__div">
                        <div style={{margin: "0"}} className="orders__header">
                          <div className="orders__info">
                            <div className="o-orderinfo">
                              <table className="table-responsive">
                                <thead>
                                  <tr style={{textTransform: "uppercase", borderBottom: "1px solid #ddd"}}>
                                    <td style={{fontWeight: "600"}}>Product</td>
                                    <td style={{fontWeight: "600"}}>Quantity</td>
                                    <td style={{fontWeight: "600"}}>Unit Price</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    order.cart.items.map(item => (
                                      <tr style={{borderBottom: "1px solid #ddd", fontSize: "1.5rem"}}>
                                        <td>
                                          <div className="o-orderinfo__flex">
                                            <div className='imgholder'>
                                              <a href={`/product/${item.productId.slug}`}>
                                                <img src={item.productId.images[0]} alt="{item.title}" />
                                              </a>
                                            </div>
                                            <div>
                                              <p>
                                                <b><a href={`/product/${item.productId.slug}`}>{item.title}</a></b>
                                              </p>
                                              <span style={{textTransform: "capitalize"}}>Color:&nbsp;{item.color}</span>
                                              <br />
                                              <span>Size:&nbsp;{item.size}</span>
                                            </div>
                                          </div>
                                        </td>
                                        <td>{item.quantity}</td>
                                        <td>${item.productId.price}</td>
                                      </tr>
                                    ))
                                  }
                                </tbody>
                              </table>
                              <div className="o-estimates">
                                <p>Status:&nbsp;<span style={{color: "var(--brand-blue)", fontWeight: "700", textTransform: "capitalize"}}>{order.status}</span></p>
                                <p>Total Cost:&nbsp;<span style={{color: "var(--brand-blue)", fontWeight: "700"}}>${order.totalCost.toFixed(2)}</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
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

export default OrderDetail