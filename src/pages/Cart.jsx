import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import { useEffect } from "react";

const CartPageWrapper = styled.div`

`

const PDPContainer = styled.div`
  margin-top: 100px;
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
  padding: 36px;
  width: 40%;
  max-height: 400px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 10px;
  }
`

const BackNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 52px;
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
  aspect-ratio: 3/4;
  background-color: #f1f1f1;
  margin-right: 12px;
  width: 100px;
`

const CartListImageHolder = styled.div``

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

const CartListQuantity = styled.div`
  display: block;
  position: relative;
  font-size: 13px;
  margin-top: auto;
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
`
const ProductAmount = styled.div`
  font-size: 1.3rem;
  margin: 5px;
`

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

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

  const navigate = useNavigate()

  return (
    <CartPageWrapper>
      <Navbar />
      <PDPContainer>
        <PDP>
          <Container>
            <CartRoot>
              <CartColumn1>
                <BackNav>
                  <BackNavDiv>
                    <BackNavLink onClick={() => navigate('/products')}>
                      Continue Shopping
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
                    <CartHeaderSpan>{getTotal().totalQuantity}&nbsp;items</CartHeaderSpan>
                  </CartHeaderColumn>
                </CartHeader>
                <CartUl>
                  {cart?.map((item) => (
                    <CartList key={item.id}>
                      <CartListItem>
                        <CartListImageLink>
                          <CartListImageWrapper>
                            <CartListImageHolder>
                              <CartListImage src={item.image} />
                            </CartListImageHolder>
                          </CartListImageWrapper>
                        </CartListImageLink>
                        <CartListDetail>
                          <CartListH3>
                            <CartListDetailLink onClick={() => navigate(`/product/${item.id}`)}>
                              <CartListDetailSpan>{item.title}</CartListDetailSpan>
                            </CartListDetailLink>
                          </CartListH3>
                          <CartListUl>
                            <CartListLi>
                              <CartListLiSpan>{item.color.toUpperCase()}</CartListLiSpan>
                            </CartListLi>
                            <CartListLi>
                              <CartListLiSpan>{item.size}</CartListLiSpan>
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
                  ))}
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
                        <CheckoutButton>Continue to Checkout</CheckoutButton>
                      </CheckoutButtonWrapper>
                    </CartFormCard>
                  </CartForm>
                </CartSummaryWrapper>
              </CartColumn2>
            </CartRoot>
          </Container>
        </PDP>
      </PDPContainer>
      <Prefooter />
      <Footer />
    </CartPageWrapper>
  )
}

export default Cart