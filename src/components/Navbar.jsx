import React, { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css"

function Navbar() {
  const cart = useSelector((state) => state.carts.cart);
  const navRef = useRef()
  
  // set state of scroll
  const [scrolled, setScrolled] = React.useState("unscrolled")

  const showNavbar = () => {
    navRef.current.classList.toggle('active');
  }

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  // useLayoutEffect to mutate the DOM
  useLayoutEffect(() => {
    const handleScroll = () =>
    window.scrollY > 0 ? setScrolled("scrolled") : setScrolled("unscrolled");
    // when window is scrolled, set state of scrolled to true

    window.addEventListener("scroll", handleScroll);
    // event listener added for scroll

    return () => window.removeEventListener("scroll", handleScroll);
    // remove the event
  }, [])



  return (
    <div className={`page-header ${scrolled}`}>
      <div className='nav-container' ref={navRef}>
        <nav>
          <ul className='mobile-nav'>
            <li>
              <div onClick={showNavbar} className='menu-icon-container'>
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