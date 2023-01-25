import React from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useLocation } from "react-router";
import Announcement from '../components/Announcement';
import './Success.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const Success = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  const order = location.state.order;
  const cart = location.state.orderItems;
  const address = currentUser.address;
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() => {
    document.title = `Successful Order — Hashingmart`;
  });

  return (
    <>
      <Announcement />
      <Navbar />
      <section className='success'>
        {
        order
          ?
          <>
            <div className='success-1'>
              <div className="flex success-flex">
                <div className='success-checkdiv'>
                    <FontAwesomeIcon icon={faCircleCheck} style={{width: "100%", height: "100%"}} />
                </div>
                <div className='success-oinfo'>
                  <span>
                    Order&nbsp;#
                    {order.unitNumber ? (
                      <>{order.unitNumber}</>
                    ): (<>{order._id.toUpperCase()}</>)}
                  </span>
                  <p>Thank you {currentUser.firstName}!</p>
                </div>
              </div>
              <div style={{marginTop: "2rem", marginBottom: "2rem"}} className="col-divider"></div>
              <p>Your order has been received and will be shipping soon.</p>
              <p><a href="/account" style={{textDecoration: "underline"}}>Go to order history</a></p>
              <div style={{marginTop: "2rem", marginBottom: "2rem"}} className="col-divider"></div>
            </div>
            <div className='flex success-flex1'>
              <div className='success-colspan'>
                <span>Order Date</span>
                <p>{format(new Date(order.createdAt), 'dd/MM/yyyy')}</p>
              </div>
              <div className='success-colspan'>
                <span>Payment method</span>
                <p>
                  {order.paymentType && order.paymentAccountNumber ? 
                  (
                    <>{ order.paymentType + ' ' + order.paymentAccountNumber }</>
                  ) : 
                  (
                    <>Credit card</>
                  )}
                </p>
              </div>
              <div className='success-colspan'>
                <span>Shipping address</span>
                <p>
                  {address.street}, 
                  {address.apartment ? (
                    <>{address.apartment},</>
                  ): (<></>)}
                  &nbsp;{address.city}, {address.state}, {address.zip}
                </p>
              </div>
            </div>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}} className="col-divider"></div>
            <div>
              <ul className='s-cartUl'>
                {
                  cart?.map((item) => (
                    <li className='s-cartList' key={item.id}>
                      <div className='s-cartListItem'>
                        <div className='flex'>
                          <a href={`/product/${item.slug}`} className='s-cartListImageLink'>
                            <div className='s-cartListImageWrapper'>
                              <div className='s-cartListImageHolder'>
                                <img src={item.image} alt={item.title} />
                              </div>
                            </div>
                          </a>
                          <div className='s-cartListDetail'>
                            <h3>
                              <a href={`/product/${item.slug}`}>
                                <span>{item.title}</span>
                              </a>
                            </h3>
                            <ul className='s-cartListUl'>
                              <li className='s-cartListLi'>
                                <span>{item.color.toUpperCase()}</span>
                              </li>
                              <li className='s-cartListLi'>
                                <span>{item.size}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          Qty&nbsp;{item.quantity}
                        </div>
                        <div className='s-cartListPrice'>
                          <div className='s-cartListPriceItem'>
                            ${item.price.toFixed(2) * item.quantity}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className="s-flex2">
                <div className="s-shipping">
                  <h3>Shipping</h3>
                  <span>Free</span>
                </div>
                {
                  order.discountCode ? (
                    <div className="s-shipping">
                      <h3>Discount</h3>
                      <span>{order.discountCode}</span>
                    </div>
                  ) : (<></>)
                }
                <div className="s-shipping">
                  <h3>Total</h3>
                  <span>$<span id='totalCost'>{order.totalCost}</span></span>
                </div>
              </div>
              <div style={{marginTop: "2rem", marginBottom: "2rem"}} className="col-divider"></div>
              <p>
                We'll send you shipping confirmation when your item(s) are on the way! We appreciate your business, and hope you enjoy your purchase.
              </p>
              <br />
              <p>Thank you!</p>
              <p><a href="/account" style={{textDecoration: "underline"}}>Go to order history</a></p>
            </div>
          </>
          : 
          <></>
          // `Successful. Your order is being prepared...`
        }
      </section>
      <Footer />
    </>
  )
}

export default Success