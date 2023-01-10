import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <div className='sidebar'>
      <ul>
        <li style={{fontWeight: '600'}}>Dashboard</li>
        <li onClick={() => navigate('/admin/categories')}>Category Management</li>
        <li onClick={() => navigate('/admin/ugclist')}>Social Management</li>
        <li onClick={() => navigate('/admin/notifications')}>Notification Management</li>
        <li onClick={() => navigate('/admin/banners')}>Banner Management</li>
        <li onClick={() => navigate('/admin/products')}>Product Management</li>
        <li>Sales Management</li>
        <li onClick={() => navigate('/admin/orders')}>Order Management</li>
        <li onClick={() => navigate('/admin/discounts')}>Discount Managment</li>
        <li>Email Marketing</li>
        <li onClick={() => navigate('/admin/users')}>Customer Statistics</li>
        <li>Supplier Management</li>
      </ul>
    </div>
  )
}

export default Sidebar