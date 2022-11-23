import React from 'react'
import './Navbar.css'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()

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
    // <NavigationHeader>
    //   <NavContainer>
    //     <Nav>
    //       <DesktopNavUl>
    //         <DesktopNavLi>
    //           <DesktopNavLogo onClick={() => navigate('/')}></DesktopNavLogo>
    //         </DesktopNavLi>
    //         <DesktopNavLi>
    //           <DekstopNavLink onClick={() => navigate('/products')}>SALE</DekstopNavLink>
    //         </DesktopNavLi>
    //         <DesktopNavLi>
    //           <DekstopNavLink>COLLECTIONS</DekstopNavLink>
    //         </DesktopNavLi>
    //         <DesktopNavLi>
    //           <DekstopNavLink>MY ORDERS</DekstopNavLink>
    //         </DesktopNavLi>
    //         <DesktopNavLi>
    //           <DekstopNavLink onClick={() => navigate('/sustainability')}>SUSTAINABILITY</DekstopNavLink>
    //         </DesktopNavLi>
    //         <DesktopNavLi>
    //           <DekstopNavLink>ACCOUNT</DekstopNavLink>
    //         </DesktopNavLi>
    //         <DesktopNavLi>
    //           <DekstopNavBag onClick={() => navigate('/cart')}>
    //             <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M5 4C6.3125 -1.60038e-05 10.6875 -1.99848e-07 12 4" stroke="black" strokeWidth="1.5"/>
    //               <path d="M1.88889 3.875H15.1111C15.7453 3.875 16.25 4.38389 16.25 5V17.1875C16.25 17.8036 15.7453 18.3125 15.1111 18.3125H1.88889C1.25467 18.3125 0.75 17.8036 0.75 17.1875V5C0.75 4.38389 1.25467 3.875 1.88889 3.875Z" stroke="black" strokeWidth="1.5"/>
    //             </svg>
    //             <BadgeSpan>{getTotalQuantity() || 0}</BadgeSpan>
    //           </DekstopNavBag>
    //         </DesktopNavLi>
    //       </DesktopNavUl>
    //     </Nav>
    //   </NavContainer>
    // </NavigationHeader>
  )
}

export default Navbar