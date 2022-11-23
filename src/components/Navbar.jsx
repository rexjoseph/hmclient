import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// const Left = styled.div``
const DekstopNavBag = styled.a`
  position: relative;
  cursor: pointer;
`

const BadgeSpan = styled.span`
  color: #fff;
  background: var(--color-danger);
  border-radius: 15px;
  font-size: 10px;
  font-weight: 700;
  min-width: 1rem;
  padding: 1px 5px;
  position: absolute;
  right: -30%;
  top: -70%;
`

const NavigationHeader = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 300;
  transition: all 0.4s;
  top: 0;
`
const NavContainer = styled.div`
  background: #fff;
  border-bottom: 1px solid var(--line-divider);
  height: 54px;
  z-index: 300;
`
const Nav = styled.nav`
  max-width: 1250px;
  height: 100%;
  margin: 0 auto;
  padding: 0 8px;
`
const DesktopNavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`
const DesktopNavLi = styled.li`
  transition: all 400ms ease;
  // padding: 15px 0;
`

const DesktopNavLogo = styled.a`
  background: url("../../logo.png");
  display: block;
  background-position: center;
  height: 54px;
  width: 140px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

const DekstopNavLink = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  transition: opacity 400ms;
  cursor: pointer;


  &:hover {
    opacity: 1;
    color: var(--brand-blue);
    text-decoration: underline;
  }
`

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
    <NavigationHeader>
      <NavContainer>
        <Nav>
          <DesktopNavUl>
            <DesktopNavLi>
              <DesktopNavLogo onClick={() => navigate('/')}></DesktopNavLogo>
            </DesktopNavLi>
            <DesktopNavLi>
              <DekstopNavLink onClick={() => navigate('/products')}>SALE</DekstopNavLink>
            </DesktopNavLi>
            <DesktopNavLi>
              <DekstopNavLink>COLLECTIONS</DekstopNavLink>
            </DesktopNavLi>
            <DesktopNavLi>
              <DekstopNavLink>MY ORDERS</DekstopNavLink>
            </DesktopNavLi>
            <DesktopNavLi>
              <DekstopNavLink onClick={() => navigate('/sustainability')}>SUSTAINABILITY</DekstopNavLink>
            </DesktopNavLi>
            <DesktopNavLi>
              <DekstopNavLink>ACCOUNT</DekstopNavLink>
            </DesktopNavLi>
            <DesktopNavLi>
              <DekstopNavBag onClick={() => navigate('/cart')}>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4C6.3125 -1.60038e-05 10.6875 -1.99848e-07 12 4" stroke="black" strokeWidth="1.5"/>
                  <path d="M1.88889 3.875H15.1111C15.7453 3.875 16.25 4.38389 16.25 5V17.1875C16.25 17.8036 15.7453 18.3125 15.1111 18.3125H1.88889C1.25467 18.3125 0.75 17.8036 0.75 17.1875V5C0.75 4.38389 1.25467 3.875 1.88889 3.875Z" stroke="black" strokeWidth="1.5"/>
                </svg>
                <BadgeSpan>{getTotalQuantity() || 0}</BadgeSpan>
              </DekstopNavBag>
            </DesktopNavLi>
          </DesktopNavUl>
        </Nav>
      </NavContainer>
    </NavigationHeader>
  )
}

export default Navbar