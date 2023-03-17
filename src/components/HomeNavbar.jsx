import React, { useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeNavbar.css"
import { logout } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
  const cart = useSelector((state) => state.carts.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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


  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout);
    navigate('/');
  }

  return (
    <div className={`page-header ${scrolled}`}>
      <div className='nav-container' ref={navRef}>
        <nav>
          <ul className='mob-nav'>
            <li>
              <div onClick={showNavbar} className='menu-icon1-container1'>
                <div className='menu-icon1'>
                  <span className='line-1'></span>
                  <span className='line-2'></span>
                </div>
              </div>
            </li>
            <li>
              <a href="/" id="link-logo1" className='link-logo1'></a>
            </li>
            <li className='bag-list'>
              <a href="/cart" className='link-bag1'>
                <span className='bag-icon1'>
                  {getTotalQuantity() || 0}
                </span>
              </a>
            </li>
          </ul>
          <ul className='desk-nav'>
            <div className="desk-nav__flex1">
              <li>
                <a id="sale-link" href="/products">Sale</a>
              </li>
              <li>
                <a href="/collections">Collections</a>
              </li>
              <li>
                <a href="/account">My Orders</a>
              </li>
            </div>
            <div className="desk-nav__flex2">
              <li>
                <a href="/" className='link-logo1'></a>
              </li>
            </div>
            <div className="desk-nav__flex3">
              <li>
                <a href="/sustainability">Sustainability</a>
              </li>
              <li className="account__user">
                {currentUser ? (
                  <a href="/account">
                  Hi, <span className="span span-show">{currentUser.firstName}</span>
                </a>
                ) : (
                  <a href="/account">
                  Hello, <span className="span span-show">Sign in</span>
                </a>
                )}
              </li>
              <li className='bag-list'>
                <a href="/cart" className='link-bag1'>
                  <span className='bag-icon bag-icon1'>
                    {getTotalQuantity() || 0}
                  </span>
                </a>
              </li>
            </div>
            
            
            
            {currentUser && <button className="navLogout" onClick={handleLogout}>Log Out</button>}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomeNavbar