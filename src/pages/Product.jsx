import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Prefooter from "../components/Prefooter";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import ProductItem from "../components/Product";
import InstaHandle from "../components/InstaHandle";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addToCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import ProdAccordion from "../components/ProdAccordion";
import Announcement from "../components/Announcement";
import { useNavigate } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem';
import PlaceholderImage from "../images/imgplaceholder.jpg";
import Loading from "../components/Loading";
import Modal from '../components/Modal';
import PPEmailMarketing from '../components/PPEmailMarketing';

const ProductPageWrapper = styled.div`
`

const PDPContainer = styled.div`
  min-height: 100vh;
`

const PDP = styled.div`
  margin-top: 8rem;
  margin-bottom: 54px;

  @media (min-width: 768px) {
    margin-bottom: 162px;
  }

  @media (max-width: 769px) {
    margin-top: 5rem;
  }
`

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 1250px;
`

const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 0px auto;
`

const GridCell1 = styled.div`
  display: none;

  @media (min-width: 992px) {
    width: 66.6667%;
    display: block;
    position: relative;
  }
`
const ImageWrapper = styled.div`
`

const ImageDiv = styled.div`
  margin: -6px;
`
const ImageGrid = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 0px auto;
`
const ImageColumn = styled.div`
  position: relative;
  width: 100%;
  display: block;

  @media (min-width: 768px) {
    width: 50%;
  }
`
const ImageButtonWrapper = styled.div`
  padding: 2px;

  @media (max-width: 769px) {
    padding: 0;
  }
`
const ImageButton = styled.button`
  position: relative;
  width: 100%;
  appearance: none;
  border: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  cursor: pointer;
  background-color: rgb(245, 245, 245);
`
const ImageHolder = styled.div`
  position: relative;

  & img {
    object-fit: cover;
  }
`

const GridCell2 = styled.div`
  position: relative;
  width: 100%;
  display: block;

  @media (min-width: 992px) {
    width: 33.3333%;
  }
`
const DetailWrapper = styled.div`
  @media (min-width: 768px) {
    padding-left: 36px;
  }
`
const ProductHeader = styled.div`
  margin-bottom: 24px;

  @media (max-width: 769px) {
    margin-bottom: 18px;
    padding: 0 15px;
  }
`
const Header = styled.div``
const HeaderDiv = styled.div``

const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 15px;
  line-height: 1.32;
  letter-spacing: 0.5px;
  margin-top: 1rem;
  padding: 0px;

  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 1.31;
  }
`

const HeaderPriceWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const HeaderFullPrice = styled.p`
  font-weight: 400;
  color: rgb(33, 42, 47);
  line-height: 1.5;
  font-size: 13px;
  text-decoration: line-through;
  letter-spacing: 0.5px;
  margin: 0px 0px 18px;
  padding: 0px;
  margin-bottom: 0px;
`

const HeaderPrice = styled.p`
  font-weight: 400;
  color: rgb(33, 42, 47);
  line-height: 1.5;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 0px 0px 18px;
  padding: 0px;
  margin-bottom: 0px;
`

const ColorSpan = styled.span`
  color: #FF4210;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 0px 0px 18px;
  padding: 0px;
  margin-bottom: 0px;
`

const HeaderReviewWrapper = styled.a`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
  color: var(--color-primary);
  margin-top: 6px;

  @media (min-width: 992px) {
    -webkit-box-pack: start;
    justify-content: start;
  }
`

const HeaderRatingDiv = styled.div``

const HeaderRatingColumn = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 89px;
`

const HeaderRatingRow = styled.div``

const HeaderReviewDiv = styled.div`
  display: inline;
  margin-left: 6px;
`

const HeaderReviewButton = styled.button`
  appearance: none;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  transition: all .2s;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  padding-right: 0px;
  padding-left: 0px;
  border: 0;
  position: relative;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-left: 6px;
`

const HeaderReviewButtonP = styled.p`
  text-align: left;
  text-decoration: underline;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 21px;
`

const ProductColors = styled.div`
  @media (max-width: 769px) {
    padding: 0 15px;
}
`

const ProductColorsDiv = styled.div`
  margin-bottom: 15px;
`

const ProductColorsTitle = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.25;
  display: flex;

  @media (min-width: 992px) {
    margin-bottom: 6px;
    text-align: left;
  }
`

const ProductColorsSpan = styled.span`
  margin-right: 4px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
`

const ProductColorsSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 20px;
  margin-left: -7.5px;

  @media (min-width: 992px) {
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`

const ProductColorSwatch = styled.button`
  border: none;
  padding: 0px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  width: 42px;
  height: 42px;
  outline: none;
  margin: 2.5px;
  flex-shrink: 0;

  @media (min-width: 992px) {
    margin: 6px;
  }

  &:active,
  &:focus {
    border-radius: 50%;
    outline: 1px solid var(--color-primary);
  }

  &::after {
    $(ProductColorSwatch) {
      inset: -4px;
    }
  }
`

const ColorSwatch = styled.div`
  width: 40px;
  height: 40px;
  margin: 0px auto;
  border-radius: 50%;
  background: ${props => props.color};
  position: relative;
  display: inline-block;
  border: 1px solid;
  border-color: #ccc;

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    transition: all 125ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 2px solid transparent;
  }

  @media (max-width: 769px) {
    width: 36px;
    height: 36px;
  }
`

const ProductSizes = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 0 12px;
  position: relative;
  width: 100%;

  @media (max-width: 769px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

const SizeWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 0 8px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`

const FilterSize = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-primary);
  outline: none;
  background: transparent;
  color: var(--color-primary);
  font-size: 13px;
  font-family: inherit;
`

const SizeOption = styled.option`
  color: var(--color-primary);
`

// const AddContainer = styled.div`
// `

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 50%;
//   gap: 1.5rem;
//   font-weight: 600;
//   margin: 2rem 0;
// `
// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid var(--color-primary);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.4rem;
// `

const ProductAdd = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 18px;
  min-height: 52px;
  padding: 0;
  position: relative;

  @media (max-width: 769px) {
    padding: 0 15px;
  }
`

const ButtonAddToBag = styled.button`
  background: var(--color-primary);
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  height: 40px;
  width: 100%;

  &:hover {
    background: var(--brand-blue);
  }

  @media (max-width: 769px) {
    margin-top: 1rem;
  }
`

const ButtonAddToBagNull = styled.button`
  background: #DDD;
  border: 0;
  color: #fff;
  cursor: auto;
  font-size: 16px;
  font-family: inherit;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  border-color: #DDD;
  height: 40px;
  width: 100%;
`

const ShipByDiv = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
`
const ShipBySpan = styled.span`
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 19.2px;
  letter-spacing: .6px;
  color: #00706e;

  &:before {
    content: "";
    position: relative;
    left: -0.4rem;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #00706e;
  }
`
const GuaranteeWidget = styled.ul`
  list-style: none;
  align-self: flex-start;
  margin-top: 1rem;
`

const GuaranteeList = styled.li`
  font-size: 1.3rem;
`

const PDescripton = styled.div`
  @media (max-width: 769px) {
    background: #f9f9f9;
    padding: 5px;
  }
`

const PDescriptionWrap = styled.div``

// const PDescriptionTitle = styled.p`
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   width: 100%;
//   background: rgb(255, 255, 255);
//   border: none;
//   outline: none;
//   appearance: none;
//   padding: 12px 0px 9px;
//   text-align: left;
//   font-weight: 700;
//   font-size: 12px;
//   line-height: 1.75;
//   letter-spacing: 1.7px;
//   text-transform: uppercase;
// `

// const PDescriptionDesc = styled.div`
//   font-size: 14px;
//   line-height: 1.5;
//   letter-spacing: 0.5px;
//   padding: 0px;
// `

const ButtonSpan = styled.span``

const HelpDiv = styled.div`
  display: flex;
  padding: 14px 14px 5px;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: left;
  color: var(--color-primary);
  line-height: 1.42859;
  font-weight: 400;
  letter-spacing: -.224px;
`
const HelpRow1 = styled.div`
  margin-top: 12px;
  display: block;

  & svg {
    margin: -6px;
    display: inline-block;
    fill: currentColor;
  }
`
const HelpRow = styled.div`
  line-height: 1.33337;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -.12px;
  padding: 6px 12px 0;

  @media (max-width: 769px) {
    font-size: 14px;
  }
`

const HelpTitle = styled.div`
  font-weight: 400;
  color: #1d1d1f;
`

const HelpContent = styled.div`
  padding-top: 0;
  color: var(--brand-blue);
  font-weight: 300;
`
const HelpLink = styled.a`
  text-decoration: none;
  color: var(--brand-blue);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const CarouselWrapper = styled.div`
  @media (min-width: 600px) {
    display: none
  }
`

const SlideContainer = styled.div`
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
`
const Reviews = styled.div`
  @media (max-width: 769px) {
    padding: 0 15px;
  }
`

const ReviewsHeader = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.2px;
  line-height: 21px;
`

// const BigSup = styled.h1`
//   font-size: 5.2rem;
//   font-weight: 700;
//   line-height: 1;

//   @media (max-width: 769px) {
//     font-size: 3.8rem;
//   }
// `

const ReviewsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 2rem;
    margin: 25px 0;
  }
`

const CreateReviewLink = styled.a`
  border-radius: 18px;
  cursor: pointer;
  font-size: 15px;
  height: 36px;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;
  background: transparent;
  border: 3px solid var(--color-primary);
  text-align: center;
  text-decoration: none;
  line-height: 32px;

  @media (max-width: 769px) {
    width: 100%;
  }

  &:hover {
    background: var(--color-primary);
    color: var(--color-secondary);
  }
`

const RelatedContainer = styled.div`
  margin-top: 3rem;
`

const ProductsUl = styled.ul`
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`

const RelatedDiv = styled.div`
  margin-bottom: 2.5rem;
  max-width: 1250px;
  width: 100%;
  padding: 0 18px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-color: #ccc !important;
  border-top: 1px solid;
  border-bottom: 1px solid;
`

const RelatedDiv1 = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: #ccc !important;
  border-right: 1px solid;
  border-left: 1px solid;
  width: 188px;
`

const RelatedDiv2 = styled.div``

const RelatedHeader = styled.p`
  border-color: var(--color-primary);
  border-bottom: 1px solid;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.2px;
  text-align: left;
`

const LoadMoreReviewDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`

const LoadMoreReviewDiv1 = styled.div`

`

const LoadMoreReviewButton = styled.button`
  appearance: none;
  background: var(--color-primary);
  border: 1px solid;
  border-color: var(--color-primary);
  border-radius: 0;
  color: var(--color-secondary);
  display: inline-block;
  font-family: inherit;
  font-weight: inherit;
  line-height: 21.7143px;
  font-size: 1.4rem;
  min-width: 320px;
  min-height: 0px;
  max-height: none;
  max-width: none;
  height: 50.25px;
  width: 320px;
  text-transform: none;
  padding: 13.7143px 34.2857px;
  display: inline-block;
  transition: all .25s;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
`

const reviewPerRow = 8;

const Product = () => {
  const location = useLocation()
  const slug = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState({});
  // const [quantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const [active, setActive] = useState("Details")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [nextReview, setNextReview] = useState(reviewPerRow);
  useEffect(()=>{
    let modalStatus = localStorage.getItem('modal_status');
    if(!modalStatus){
      setTimeout(() => {
        setOpenModal(true)
      },10000)
      localStorage.setItem('modal_status',1);
    }
  },[])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/"+slug)
        setProduct(res.data.product);
        setRelated(res.data.related);
        setLoading(true)
      } catch {}
    }
    getProduct()
  }, [slug])

  const handleClick = () => {
    if (product.size?.length > 0 && !size) {
      alert('Please select a size')
    } else {
      dispatch(addToCart({id: product._id, title: product.title, image: product.images[0], price: product.price, color: color, size: size, slug: product.slug}))
      navigate('/cart')
    }
  }

  const handleMoreReview = () => {
    setNextReview(nextReview + reviewPerRow);
  }

  useEffect(() => {
    document.title = `${product.title} — Hashingmart`
  }, [product.title])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ProductPageWrapper>
      <Announcement />
      <Navbar />
      <PDPContainer>
        <PDP>
          {
            loading ? (
              <Container>
                <CarouselWrapper>
                  <Swiper 
                    modules={[Navigation, EffectFade]}
                    navigation
                    effect
                    speed={800}
                    slidesPerView={1}
                    initialSlide={0}
                    loop={true}
                    >
                    {product.images?.map((image, key) => (
                      <SlideContainer key={key}>
                        <SwiperSlide>
                          <ImageColumn key={key}>
                            <ImageButtonWrapper>
                              <ImageButton>
                                <ImageHolder>
                                  {
                                    image.includes('.webm') ? <video src={image} crossOrigin="anonymous" width="100%" height="100%" muted playsInline loop autoPlay /> : image.includes('.mp4') ? <video src={image} crossOrigin="anonymous" width="100%" height="100%" muted playsInline loop autoPlay /> : <LazyLoadImage 
                                    src={image} 
                                    width={"100%"} 
                                    height={"100%"}
                                    effect="blur"
                                    placeholderSrc={PlaceholderImage}
                                  />
                                  }
                                </ImageHolder>
                              </ImageButton>
                            </ImageButtonWrapper>
                          </ImageColumn>
                        </SwiperSlide>`
                      </SlideContainer>
                    ))}
                  </Swiper>
                </CarouselWrapper>
                <Grid>
                  <GridCell1>
                    <ImageWrapper>
                      <ImageDiv>
                        <ImageGrid>
                          {product.images?.map((image, key) => (
                            <ImageColumn key={key}>
                              <ImageButtonWrapper>
                                <ImageButton>
                                  <ImageHolder>
                                    {
                                      image.includes('.webm') ? <video src={image} crossOrigin="anonymous" width="100%" height="100%" muted playsInline loop autoPlay /> : image.includes('.mp4') ? <video src={image} crossOrigin="anonymous" width="100%" height="100%" muted playsInline loop autoPlay /> : <LazyLoadImage 
                                      src={image} 
                                      width={"100%"} 
                                      height={"100%"}
                                      effect="blur"
                                      placeholderSrc={PlaceholderImage}
                                    />
                                    }
                                  </ImageHolder>
                                </ImageButton>
                              </ImageButtonWrapper>
                            </ImageColumn>
                          ))}
                        </ImageGrid>
                      </ImageDiv>
                    </ImageWrapper>
                  </GridCell1>

                  <GridCell2>
                    <DetailWrapper>
                      <ProductHeader>
                        <Header>
                          <HeaderDiv>
                            <HeaderTitle>{product.title}</HeaderTitle>
                            <HeaderPriceWrapper>
                              {
                                product.onSale ? <HeaderFullPrice>${product.fullPrice}</HeaderFullPrice> : <></>
                              }
                              {
                                product.onSale ? <ColorSpan>${product.price}</ColorSpan> : <HeaderPrice>${product.price}</HeaderPrice>
                              }
                            </HeaderPriceWrapper>
                          </HeaderDiv>
                        </Header>
                        <HeaderReviewWrapper>
                          <HeaderRatingDiv>
                            <a href="#p-reviews">
                              <HeaderRatingColumn>
                                <HeaderRatingRow>
                                  <i className={
                                    product.rating >= 1 ? 'fa fa-star' : product.rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                                    }>
                                  </i>
                                </HeaderRatingRow>
                                <HeaderRatingRow>
                                  <i className={
                                    product.rating >= 2 ? 'fa fa-star' : product.rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                                    }>
                                  </i>
                                </HeaderRatingRow>
                                <HeaderRatingRow>
                                  <i className={
                                    product.rating >= 3 ? 'fa fa-star' : product.rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                                    }>
                                  </i>
                                </HeaderRatingRow>
                                <HeaderRatingRow>
                                  <i className={
                                    product.rating >= 4 ? 'fa fa-star' : product.rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                                    }>
                                  </i>
                                </HeaderRatingRow>
                                <HeaderRatingRow>
                                  <i className={
                                    product.rating >= 5 ? 'fa fa-star' : product.rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                                    }>
                                  </i>
                                </HeaderRatingRow>
                              </HeaderRatingColumn>
                            </a>
                          </HeaderRatingDiv>
                          <a href="#p-reviews">
                            <HeaderReviewDiv>
                              ({product.numReviews})
                            </HeaderReviewDiv>
                          </a>
                          <HeaderReviewButton onClick={() => navigate(`/submit-review/${product.slug}`)}>
                            <HeaderReviewButtonP>Write a review</HeaderReviewButtonP>
                          </HeaderReviewButton>
                        </HeaderReviewWrapper>
                      </ProductHeader>
                      <ProductColors>
                        <ProductColorsDiv>
                          <ProductColorsTitle>
                            <ProductColorsSpan>Colors</ProductColorsSpan>
                          </ProductColorsTitle>
                          <ProductColorsSelector>
                            {product.color?.map((c) => (
                              <ProductColorSwatch key={c} onClick={() => setColor(c)}>
                                <ColorSwatch color={c}></ColorSwatch>
                              </ProductColorSwatch>
                            ))}
                          </ProductColorsSelector>
                        </ProductColorsDiv>
                      </ProductColors>
                      {product.size?.length > 0 ? (
                        <ProductSizes>
                        <SizeWrapper>
                          Select Size
                        </SizeWrapper>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                          <SizeOption>Select your size</SizeOption>
                        {product.size?.map((s) => (
                          <SizeOption key={s}>{s}</SizeOption>
                        ))}
                        </FilterSize>
                      </ProductSizes>
                      ) : (<></>)}
                      {/* <AddContainer>
                        <AmountContainer>
                          <FontAwesomeIcon onClick={() => handleQuantity("dec")} icon={faMinus} />
                            <Amount>{quantity}</Amount>
                          <FontAwesomeIcon onClick={() => handleQuantity("inc")} icon={faPlus} />
                        </AmountContainer>
                      </AddContainer> */}
                      <ProductAdd>
                        {!color ? (
                          <ButtonAddToBagNull>Select A Color</ButtonAddToBagNull>
                        ) : (
                          <ButtonAddToBag onClick={handleClick}>
                            Add to Bag&nbsp;
                            <ButtonSpan>${product.price}</ButtonSpan>
                          </ButtonAddToBag>
                        )}
                        <ShipByDiv>
                          <ShipBySpan>In stock, ships between 1-2 business days.</ShipBySpan>
                        </ShipByDiv>
                        <GuaranteeWidget>
                          <GuaranteeList>100% satisfaction guarantee</GuaranteeList>
                          <GuaranteeList>30 day, no hassle returns. </GuaranteeList>
                        </GuaranteeWidget>
                      </ProductAdd>
                      
                      <PDescripton>
                        <PDescriptionWrap>
                          <ProdAccordion 
                              title="Details" 
                              active={active} 
                              setActive={setActive}
                              content={product.description}
                            />
                          <ProdAccordion 
                            title="Sustainability" 
                            active={active} 
                            setActive={setActive}
                            content={product.sustainability}
                          />
                          <ProdAccordion 
                            title="Care Guide" 
                            active={active} 
                            setActive={setActive}
                            content={product.care_guide}
                          />
                          <ProdAccordion 
                            title="Shipping & Returns" 
                            active={active} 
                            setActive={setActive}
                            content="Free shipping on all orders, and our 30 days, no questions asked return policy. It takes about 7-15 days for a package to arrive from the time you place an order. Please note that we only ship and deliver on business days."
                          />
                        </PDescriptionWrap>
                      </PDescripton>
                    </DetailWrapper>
                  </GridCell2>
                </Grid>
                <HelpDiv>
                  <HelpRow1>
                    <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                      <path fill="none" d="M0 .213h35v35H0z"></path>
                      <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>
                      <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>
                    </svg>
                  </HelpRow1>
                  <HelpRow>
                    <HelpTitle>Have questions about buying this product?</HelpTitle>
                    <HelpContent>
                      <HelpLink onClick={() => navigate('/contact')}>
                        Chat with a representative
                      </HelpLink>
                    </HelpContent>
                  </HelpRow>
                </HelpDiv>
                {
                  related.length > 0 && (
                    <RelatedContainer>
                      <RelatedDiv>
                        <RelatedDiv1>
                          <RelatedDiv2>
                            <RelatedHeader>Also Consider</RelatedHeader>
                          </RelatedDiv2>
                        </RelatedDiv1>
                      </RelatedDiv>
                      <ProductsUl>
                        {related.slice(0, 8)?.map((item) => 
                          <ProductItem item={item} key={item._id}/>
                        )}
                      </ProductsUl>
                    </RelatedContainer>
                  )
                }
                <Reviews id='p-reviews'>
                  <ReviewsFlex>
                    <ReviewsHeader>Reviews</ReviewsHeader>
                    <CreateReviewLink onClick={() => navigate(`/submit-review/${product.slug}`)}>Write review</CreateReviewLink>
                  </ReviewsFlex>
                  {product.reviews?.length === 0 && (
                    <>
                      <p>{product.numReviews}&nbsp;Reviews</p>
                      <p>No Reviews Yet. Be the first to <a style={{textDecoration: "underline"}} href={`/submit-review/${product.slug}`}>write a review.</a></p>
                    </>
                  )}
                  {
                    product.reviews?.slice(0, nextReview)?.map((review) => (
                      <>
                        <ReviewItem key={review._id} 
                          firstName={review.firstName}
                          lastName={review.lastName.substring(0, 1).concat('.')}
                          header={review.header}
                          rating={review.rating}
                          comment={review.comment} 
                          date={review.createdAt.substring(0, 10)}
                        />
                      </>
                    ))
                  }
                  
                  {
                    nextReview < product.reviews?.length && (
                      <LoadMoreReviewDiv>
                        <LoadMoreReviewDiv1>
                          <LoadMoreReviewButton onClick={handleMoreReview}>
                            <span>Load More</span>
                          </LoadMoreReviewButton>
                        </LoadMoreReviewDiv1>
                      </LoadMoreReviewDiv>
                    )
                  }
                </Reviews>
              </Container>
            ) : (<Loading />)
          }
          <InstaHandle />
        </PDP>
      </PDPContainer>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      {/* <Feedback /> */}
      <PPEmailMarketing />
      {/* <Prefooter /> */}
      <Footer />
    </ProductPageWrapper>
  )
}

export default Product