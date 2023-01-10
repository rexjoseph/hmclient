import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { userRequest } from '../../requestMethods';
import Sidebar from './Sidebar';
import Loading from "../../components/Loading";
import {format} from "date-fns"
import './OrderList.css'
import { deleteOrder, getOrders } from '../../redux/apiCalls';

const OrderList = () => {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch()
  const totalOrders = orders.length;

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch])

  useEffect(() => {
    document.title = `Admin Orders List — Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteOrder(id, dispatch)
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className='adm-productList-container'>
        <div className="flex">
          <Sidebar />
          <div className="mainbody">
            <div className="mainbody-header">
              <h1 className="mainbody-title">All Orders</h1>
              <div className="span">
                <span>
                  In this section, you can review and manage all orders. You can view, edit information such as order
                  status, as well as cancel or delete orders. Access to this area is limited. Only administrators and team
                  leaders can reach this section. The changes you make will be approved after they’re submitted.
                </span>
                <br />
                <br />
                <p>{totalOrders}&nbsp; orders</p>
              </div>
            </div>
            <div className="productList">
            { orders.length > 0 ? (
                  <div className='listable' style={{margin: "4rem 0"}}>
                    <div className="listable-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>
                              <input type="checkbox" className='table-check'/>
                            </td>
                            <td>Order ID&nbsp;<i className="fa fa-caret-down"></i></td>
                            <td>Customer&nbsp;<i className="fa fa-caret-down"></i></td>
                            <td>Email address&nbsp;<i className="fa fa-caret-down"></i></td>
                            <td>Order cost&nbsp;<i className="fa fa-caret-down"></i></td>
                            <td>Status&nbsp;<i className="fa fa-caret-down"></i></td>
                            <td>Date&nbsp;<i className="fa fa-caret-down"></i></td>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map(item => (
                            <tr key={item._id}>
                              <td>
                                <input type="checkbox" className='table-check' />
                              </td>
                              <td>{item._id.substring(0, 8)}</td>
                              <td>{item.user.firstName}&nbsp;{item.user.lastName}</td>
                              <td>{item.user.email}</td>
                              <td>${item.totalCost.toFixed(2)}</td>
                              <td>
                                <div className="status-div">
                                  {item.status === 'pending' ? 
                                    
                                    <div>
                                      <i className="fa fa-clock-o status-icon status-icon--pending"></i>
                                      <span className='pending-span'>
                                        &nbsp;Pending
                                      </span>
                                    </div>
                                  
                                  :
                                  item.status === 'processing' ?
                                  
                                    <div>
                                      <i className="fa fa-spinner status-icon status-icon--processing"></i>
                                      <span className='processing-span'>
                                      &nbsp;Processing
                                      </span>
                                    </div>
                                  
                                  :
                                  
                                  item.status === 'sent' ? 

                                  <div>
                                    <i className="fa fa-cube status-icon status-icon--sent"></i>
                                    <span className='sent-span'>
                                    &nbsp;Sent
                                    </span>
                                  </div>
                                  
                                  :

                                  item.status === 'delivered' ?
                                  
                                  <div>
                                    <i className="fa fa-check status-icon status-icon--sent"></i>
                                    <span className='sent-span'>
                                    &nbsp;Delivered
                                    </span>
                                  </div>
                                  
                                  :

                                  <div>
                                    <i className="fa fa fa-times status-icon status-icon--canceled"></i>
                                    <span className='canceled-span'>
                                    &nbsp;Canceled
                                    </span>
                                  </div>
                                }
                                </div>
                              </td>
                              <td>{format(new Date(item.createdAt), 'yyyy/MM/dd')}</td>
                              <td>
                                <i className="fa fa-ellipsis-h actions-ellipsis drop">
                                  <ul className='drop-menu'>
                                    <li>
                                      <a href={`/admin/orders/${item._id}`}>Details</a>
                                    </li>
                                    <li>
                                      <a href={`/admin/orders/edit/${item._id}`}>Edit</a>
                                    </li>
                                    <li>
                                      <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    </li>
                                  </ul>
                                </i>
                              </td>
                            </tr>
                          )).reverse()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1>No orders yet!</h1>
                    <p>Seems we don't have orders at the moment</p>
                  </div>
                ) 
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderList