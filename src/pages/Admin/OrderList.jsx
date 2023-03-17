import React, { useEffect, useState } from 'react';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Sidebar from './Sidebar';
import './OrderList.css';
import Orders from './Orders';

const OrderList = () => {
  const [filters, setFilters] = useState({})

  const handleFilters = (e) => {
    const value = e.target.id;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  useEffect(() => {
    document.title = `Admin Orders List — Hashingmart`;
  });

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className='adm-productList-container'>
        <div className="flex">
          <Sidebar />
          <div className="mainbody">
            <div className="mainbody-header">
              <h1 className="mainbody-title">Order details</h1>
              <div className="span">
                <span>
                  In this section, you can review and manage all orders. You can view, edit information such as order
                  status, as well as cancel or delete orders. Access to this area is limited. Only administrators and team
                  leaders can reach this section. The changes you make will be approved after they’re submitted.
                </span>
                <br />
                <br />
              </div>
              <section className="tabs-container">
                <div className="tabs">
                  <input type="radio" onChange={handleFilters} className="tabs__radio" name="panel-tabs" id="all" defaultChecked />
                  <label htmlFor="all" className="tabs__label">All orders</label>
                  <input type="radio" onChange={handleFilters} className="tabs__radio" name="panel-tabs" id="pending" />
                  <label htmlFor="pending" className="tabs__label">Pending</label>
                  <input type="radio" onChange={handleFilters} className="tabs__radio" name="panel-tabs" id="processing" />
                  <label htmlFor="processing" className="tabs__label">Processing</label>
                  <input type="radio" onChange={handleFilters} className="tabs__radio" name="panel-tabs" id="sent" />
                  <label htmlFor="sent" className="tabs__label">Sent</label>
                  <input type="radio" onChange={handleFilters} className="tabs__radio" name="panel-tabs" id="completed" />
                  <label htmlFor="completed" className="tabs__label">Completed</label>
                  <input type="radio" onChange={handleFilters} className="tabs__radio" name="panel-tabs" id="canceled" />
                  <label htmlFor="canceled" className="tabs__label">Canceled</label>
                </div>
              </section>
              <div className='search__holder-admin'>
                <form className='search'>
                  <input type="text" className="search__input" name="u" placeholder="Search for order No, ID..." />
                </form>
              </div>
            </div>
            <Orders filters={filters} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderList