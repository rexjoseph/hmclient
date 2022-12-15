import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faChevronLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Announcement from "../components/Announcement";

const CartPageWrapper = styled.div`

`

const PDPContainer = styled.div`
  margin-top: 100px;

  @media (max-width: 769px) {
    margin-top: 80px;
  }
`

const PDP = styled.div`
  margin-bottom: 54px;

  @media (min-width: 768px) {
    margin-bottom: 162px;
  }
`

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 1250px;

  @media (max-width: 767px) {
    padding: 0;
  }
`
const CartRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const CartColumn1 = styled.div`
  padding: 30px 72px 0 30px;
  width: 60%;

  @media (max-width: 1420px) {
    padding: 0 72px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
    padding: 0 12px;
    width: 100%;
  }
`

const CartColumn2 = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  width: 40%;
  // max-height: 400px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 10px;
  }
`

const BackNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
`

const BackNavDiv = styled.div``
const BackNavLink = styled.a`
  cursor: pointer;
  align-items: center;
  display: flex;
  font-size: 13px;
  text-decoration: none;
  transition: color .1s ease-in-out,text-decoration .1s ease-in-out,-webkit-text-decoration .1s ease-in-out;

  &:hover {
    color: var(--brand-blue);
  }
`

const ShippingNotification = styled.div``
const Shipping = styled.div`
  background-color: #F1F1F1;
  margin-bottom: 38px;
  padding: 14px 0;
  width: 100%;

  @media (max-width: 769px) {
    display: none;
  }
`
const ShippingHeader = styled.h2`
  font-size: 24px;
  letter-spacing: -.65px;
  margin-bottom: 4px;
  text-align: center;
  width: 100%;
`
const ShippingSpan = styled.span`
  color: #737373;
  display: flex;
  justify-content: center;
  font-size: 13px;
  letter-spacing: .1px;
  margin: 0 auto;
  max-width: 320px;
  text-align: center;
  width: 100%;
`

const CartHeader = styled.header`
  font-size: 24px;
  line-height: normal;
  align-items: center;
  border-bottom: 1px solid rgba(32,32,32,.07);
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`

const CartHeaderColumn = styled.div`
  align-items: center;
  border: none;
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  position: relative;
  width: 100%;
  padding-bottom: 1.5rem;

  @media (min-width: 992px) {
    border-bottom: 1px solid rgba(32,32,32,.07);
  }
`

const CartHeaderH1 = styled.h1`
  align-items: center;
  display: flex;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 769px) {
    font-size: 20px;
  }
`
const CartHeaderSpan = styled.span`
  display: flex;
  font-size: 16px;
  line-height: inherit;
  margin-left: 12px;
  font-weight: 600;
`

const CartUl = styled.ul`
  margin: 0 0 48px;
  padding: 0;
  width: 100%;
`

const CartList = styled.li`
  border-bottom: 1px solid rgba(32,32,32,.07);
  list-style: none;
  margin: 0;
  padding: 24px 0;
  position: relative;
`

const CartListItem = styled.div`
  display: flex;
`

const CartListImageLink = styled.a`
  text-decoration: none;
`

const CartListImageWrapper = styled.div`
  background-color: #f1f1f1;
  margin-right: 12px;
  width: 100px;
`

const CartListImageHolder = styled.div`
  cursor: pointer;
`

const CartListImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
  opacity: 1;
`

const CartListDetail = styled.div`
  display: flex;
  flex-direction: column;
`

const CartListH3 = styled.h3`
  font-size: 14px;
  letter-spacing: -.57px;
  margin-bottom: 0;
`

const CartListDetailLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--brand-blue);
  }
`

const CartListDetailSpan = styled.span`

`

const CartListUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`

const CartListLi = styled.li`
  list-style-type: none;
`

const CartListLiSpan = styled.span`
  font-size: 13px;
  letter-spacing: .1px;
  color: #737373;
`

const CartListLiSpanBlack = styled.span`
  font-size: 13px;
  letter-spacing: .1px;
  color: var(--color-primary);
`

const CartListQuantity = styled.div`
  display: block;
  position: relative;
  font-size: 13px;
  margin-top: auto;
  max-width: 80px;
`

const CartListQuantityActions = styled.div`

`

const CartListPrice = styled.div`
  font-size: 16px;
  bottom: 24px;
  text-align: right;
  position: absolute;
  right: 0;
  font-weight: 600;
`

const CartListPriceItem = styled.div`
  font-size: 16px;
  letter-spacing: .1px;
`

const CartListButton = styled.button`
  background: none;
  left: calc(100% - 25px);
  position: absolute;
  top: 12px;
  z-index: 1;
  border-radius: 0;
  color: var(--color-primary);
  height: auto;
  padding: 0;
  border: none;
  cursor: pointer;
`

const CartSummaryWrapper = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

const CartForm = styled.form`
  width: 100%;
`

const CartFormCard = styled.div`
  align-items: flex-start;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 36px;
  padding: 24px;
  width: 100%;
`

const CardFormHeading = styled.h2`
  border-bottom: 1px solid rgba(32,32,32,.07);
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 12px;
  padding-bottom: 12px;
  width: 100%;

  @media (max-width: 769px) {
    font-size: 20px;
  }
`

const CardFormShipping = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 0;
  padding-bottom: 0;
  width: 100%;
`

const CardFormShippingH3 = styled.h3`
  font-size: 16px;
  letter-spacing: -.65px;
`

const CardFormShippingSpan = styled.span`
  font-weight: 500;
  letter-spacing: .1px;
  font-size: 16px;
`

const CardFormTotal = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 0;
  width: 100%;
  padding-bottom: 24px;
  padding-top: 24px;
`

const CardFormTotalH3 = styled.h3`
  font-size: 16px;
  letter-spacing: -.65px;
  margin: 0;
`

const CardFormTotalSpan = styled.span`
  font-size: 24px;
  line-height: normal;
`

const CheckoutButtonWrapper = styled.div`
  border-top: 1px solid rgba(32,32,32,.07);
  padding: 24px 0 0;
  text-align: center;
  width: 100%;
`

const CheckoutButton = styled.button`
  background: var(--color-primary);
  border: 0;
  border-radius: 18px;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  height: 36px;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background: var(--brand-blue);
  }
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f1f1f1;
  border-radius: 18px;
  cursor: pointer;
`
const ProductAmount = styled.div`
  font-size: 1.3rem;
  margin: 5px;
`

const PaymentMethods = styled.div`
  display: flex;
  gap: 2rem;
  padding: 24px 0 12px;
  align-items: center;
  justify-content: space-between;
`

const PaymentMethodDivs = styled.div``

const CartEmptyContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
`

const CartEmpty = styled.div`
`

const CartEmptyFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
`

const CartHeaderOne = styled.h1`
  margin-bottom: 48px;
  text-align: center;
  font-size: 24px;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const CartHeaderTwo = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  font-size: 21px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CartEmptyLinksDiv = styled.div`
  width: 70%;
  margin: 0px auto;

  @media (min-width: 769px) {
    width: 30%;
  }
`

const CartEmptyA = styled.a`
  margin-bottom: 12px;
  text-transform: uppercase;
  width: 100%;
  display: block;
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 14px;
  padding: 13px 18px;
  cursor: pointer;
  transition: all 100ms ease 0s;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  position: relative;
  border-radius: 2px;
  font-weight: 400;

  &:hover {
    background: var(--brand-blue);
    border: 2px solid var(--brand-blue);
    color: var(--color-secondary);
  }
`

const Cart = () => {
  const cart = useSelector((state) => state.carts.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = `Your Shopping Cart — Hashingmart`
  }, [])

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  return (
    <CartPageWrapper>
      <Announcement />
      <Navbar />
      <PDPContainer>
        <PDP>
          <Container>
            {
              cart.length > 0 ? 
              <CartRoot>
              <CartColumn1>
                <BackNav>
                  <BackNavDiv>
                    <BackNavLink onClick={() => navigate('/products')}>
                      <FontAwesomeIcon icon={faChevronLeft} /> &nbsp;Continue Shopping
                    </BackNavLink>
                  </BackNavDiv>
                </BackNav>
                <ShippingNotification>
                  <Shipping>
                    <ShippingHeader>Free Shipping on all orders</ShippingHeader>
                    <ShippingSpan>Free Returns on all orders within the U.S.</ShippingSpan>
                  </Shipping>
                </ShippingNotification>
                <CartHeader>
                  <CartHeaderColumn>
                    <CartHeaderH1>Your Bag</CartHeaderH1>
                    <CartHeaderSpan>
                      {getTotal().totalQuantity === 1 && (
                        <>{getTotal().totalQuantity}&nbsp;item</>
                      )}
                      {getTotal().totalQuantity > 1 && (
                        <>{getTotal().totalQuantity}&nbsp;items</>
                      )}
                    </CartHeaderSpan>
                  </CartHeaderColumn>
                </CartHeader>
                <CartUl>
                  {cart?.map((item) => (
                    <CartList key={item.id}>
                      <CartListItem>
                        <CartListImageLink>
                          <CartListImageWrapper>
                            <CartListImageHolder onClick={() => navigate(`/product/${item.slug}`)}>
                              <CartListImage src={item.image} />
                            </CartListImageHolder>
                          </CartListImageWrapper>
                        </CartListImageLink>
                        <CartListDetail>
                          <CartListH3>
                            <CartListDetailLink onClick={() => navigate(`/product/${item.slug}`)}>
                              <CartListDetailSpan>{item.title}</CartListDetailSpan>
                            </CartListDetailLink>
                          </CartListH3>
                          <CartListUl>
                            <CartListLi>
                              <CartListLiSpan>{item.color.toUpperCase()}</CartListLiSpan>
                            </CartListLi>
                            <CartListLi>
                              <CartListLiSpanBlack>{item.size}</CartListLiSpanBlack>
                            </CartListLi>
                          </CartListUl>
                          <CartListQuantity>
                            <CartListQuantityActions>
                              <AmountContainer>
                                <FontAwesomeIcon icon={faMinus} onClick={() => dispatch(decrementQuantity(item.id))}/>
                                  <ProductAmount>{item.quantity}</ProductAmount>
                                <FontAwesomeIcon icon={faPlus} onClick={() => dispatch(incrementQuantity(item.id))}/>
                              </AmountContainer>
                            </CartListQuantityActions>
                          </CartListQuantity>
                          <CartListPrice>
                            <CartListPriceItem>${item.price * item.quantity}</CartListPriceItem>
                          </CartListPrice>
                        </CartListDetail>
                      </CartListItem>
                      <CartListButton onClick={() => dispatch(removeItem(item.id))}>
                        <svg aria-hidden="true" height="36" viewBox="0 0 36 36" width="36" role="presentation"><path d="M19.414 18l4.243 4.243a1 1 0 0 1-1.414 1.414L18 19.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L16.586 18l-4.243-4.243a1 1 0 0 1 1.414-1.414L18 16.586l4.243-4.243a1 1 0 0 1 1.414 1.414L19.414 18z" fillRule="evenodd"></path></svg>
                      </CartListButton>
                    </CartList>
                  )).reverse()}
                </CartUl>
              </CartColumn1>
              <CartColumn2>
                <CartSummaryWrapper>
                  <CartForm>
                    <CartFormCard>
                      <CardFormHeading>Order Summary</CardFormHeading>
                      <CardFormShipping>
                        <CardFormShippingH3>Standard Shipping</CardFormShippingH3>
                        <CardFormShippingSpan>Free</CardFormShippingSpan>
                      </CardFormShipping>
                      <CardFormTotal>
                        <CardFormTotalH3>Bag Subtotal</CardFormTotalH3>
                        <CardFormTotalSpan>${getTotal().totalPrice}</CardFormTotalSpan>
                      </CardFormTotal>
                      <CheckoutButtonWrapper>
                        <CheckoutButton onClick={() => navigate('/checkout')}>
                          Continue to Checkout&nbsp;
                          <FontAwesomeIcon icon={faArrowRight} />
                        </CheckoutButton>
                      </CheckoutButtonWrapper>
                      <PaymentMethods>
                        <PaymentMethodDivs>
                          <svg width="38" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="#1C1C1E"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"></path><path d="M15 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#EC001B"></path><path d="M23 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#01A2E5"></path><path d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7 0 2.3 1.2 4.5 3 5.7 1.8-1.2 3-3.3 3-5.7Z" fill="#7375CF"></path></svg>
                        </PaymentMethodDivs>
                        <PaymentMethodDivs>
                          <svg width="38" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="#1C1C1E"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"></path><path d="M15 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#EB001B"></path><path d="M23 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#F79E1B"></path><path d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7 0 2.3 1.2 4.5 3 5.7 1.8-1.2 3-3.3 3-5.7Z" fill="#FF5F00"></path></svg>
                        </PaymentMethodDivs>
                        <PaymentMethodDivs>
                          <svg width="38" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="#1C1C1E"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3Zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2Zm-13.4-.3.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1Zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2l-1.7.1ZM5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2Z" fill="#142688"></path></svg>
                        </PaymentMethodDivs>
                        <PaymentMethodDivs>
                          <svg className="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express"><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>
                        </PaymentMethodDivs>
                        <PaymentMethodDivs>
                          <svg className="icon icon--full-color" width="38" height="24" role="img" aria-labelledby="pi-jcb" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g fillRule="nonzero"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path></g><path d="M11.5 5H15v11.5a2.5 2.5 0 0 1-2.5 2.5H9V7.5A2.5 2.5 0 0 1 11.5 5z" fill="#006EBC"></path><path d="M18.5 5H22v11.5a2.5 2.5 0 0 1-2.5 2.5H16V7.5A2.5 2.5 0 0 1 18.5 5z" fill="#F00036"></path><path d="M25.5 5H29v11.5a2.5 2.5 0 0 1-2.5 2.5H23V7.5A2.5 2.5 0 0 1 25.5 5z" fill="#2AB419"></path><path d="M10.755 14.5c-1.06 0-2.122-.304-2.656-.987l.78-.676c.068 1.133 3.545 1.24 3.545-.19V9.5h1.802v3.147c0 .728-.574 1.322-1.573 1.632-.466.144-1.365.221-1.898.221zm8.116 0c-.674 0-1.388-.107-1.965-.366-.948-.425-1.312-1.206-1.3-2.199.012-1.014.436-1.782 1.468-2.165 1.319-.49 3.343-.261 3.926.27v.972c-.572-.521-1.958-.898-2.919-.46-.494.226-.737.917-.744 1.448-.006.56.245 1.252.744 1.497.953.467 2.39.04 2.919-.441v1.01c-.358.255-1.253.434-2.129.434zm8.679-2.587c.37-.235.582-.567.582-1.005 0-.438-.116-.687-.348-.939-.206-.207-.58-.469-1.238-.469H23v5h3.546c.696 0 1.097-.23 1.315-.415.283-.25.426-.53.426-.96 0-.431-.155-.908-.737-1.212zm-1.906-.281h-1.428v-1.444h1.495c.956 0 .944 1.444-.067 1.444zm.288 2.157h-1.716v-1.513h1.716c.986 0 1.083 1.513 0 1.513z" fill="#FFF" fillRule="nonzero"></path></g></svg>
                        </PaymentMethodDivs>
                      </PaymentMethods>
                    </CartFormCard>
                  </CartForm>
                </CartSummaryWrapper>
              </CartColumn2>
            </CartRoot> : 
            <CartEmptyContainer>
              <CartEmpty>
                <CartEmptyFlex>
                  <CartHeaderOne>Your Cart Is Empty.</CartHeaderOne>
                  <CartHeaderTwo>Not sure where to start?</CartHeaderTwo>
                  <CartEmptyLinksDiv>
                    <CartEmptyA onClick={() => navigate('/products')}>Shop Arrivals</CartEmptyA>
                    <CartEmptyA onClick={() => navigate('/collections')}>Shop Collections</CartEmptyA>
                  </CartEmptyLinksDiv>
                </CartEmptyFlex>
              </CartEmpty>
            </CartEmptyContainer>
            }
          </Container>
        </PDP>
      </PDPContainer>
      <Prefooter />
      <Footer />
    </CartPageWrapper>
  )
}

export default Cart