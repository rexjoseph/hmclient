import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li style={{fontWeight: '600'}}>Dashboard</li>
        <li>Category Management</li>
        <li>Social Management</li>
        <li>Notification Management</li>
        <li>Banner Management</li>
        <li>Product Management</li>
        <li>Sales Management</li>
        <li>Order Management</li>
        <li>Discount Managment</li>
        <li>Email Marketing</li>
        <li>Customer Statistics</li>
        <li>Supplier Management</li>
      </ul>
    </div>
  )
}

export default Sidebar