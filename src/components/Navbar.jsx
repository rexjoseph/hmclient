import React from 'react'
import './Navbar.css'
import {useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  // const navigate = useNavigate()

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <div className='page-header'>
      <div className='nav-container'>
        <nav>
          <ul className='mobile-nav'>
            <li>
              <div className='menu-icon-container'>
                <div className='menu-icon'>
                  <span className='line-1'></span>
                  <span className='line-2'></span>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className='link-logo'></a>
            </li>
            <li className='bag-list'>
              <a href="/cart" className='link-bag'>
                <span className='bag-icon'>
                  {getTotalQuantity() || 0}
                </span>
              </a>
            </li>
          </ul>
          <ul className='desktop-nav'>
            <li>
              <a href="/" className='link-logo'></a>
            </li>
            <li>
              <a href="/products">Sale</a>
            </li>
            <li>
              <a href="/collections">Collections</a>
            </li>
            <li>
              <a href="/orders">My Orders</a>
            </li>
            <li>
              <a href="/sustainability">Sustainability</a>
            </li>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li className='bag-list'>
              <a href="/cart" className='link-bag'>
                <span className='bag-icon'>
                  {getTotalQuantity() || 0}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar