import styled from "styled-components";
// import { useDispatch } from 'react-redux';
// import {addToCart} from '../redux/cartRedux';
import { useNavigate } from 'react-router-dom'

const QuickAddDiv = styled.button`
  visibility: hidden;
  background: #fff;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 12px;
  min-height: 40px;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: auto;
  transition: all .1s ease;
  z-index: 1;
`

const List = styled.li`
  list-style: none;
  margin: 0;
  padding: 0 18px;
  width: 33.3333333333%;
  // width: 25%;
  // cursor: pointer;

  @media (max-width: 960px) {
    width: 50%;
    padding: 0 6px;
  }

  &:hover ${QuickAddDiv} {
    visibility: visible;
    transition: all .1s ease;
  }
`

const ListWrapper = styled.div`
  padding-bottom: 44px;
  position: relative;
`

const ImageHolder = styled.div`
  display: block;
  margin-bottom: 4px;
  position: relative;
  cursor: pointer;
  background: #F1F1F1;
  // max-height: 368px;
  // max-width: 276px;
`

const ProductTitle = styled.span`
  &:hover {
    color: var(--brand-blue);
  }
`

const ImageDiv = styled.div`
  text-decoration: none;
  background: #f1f1f1;
  display: block;
  padding: 0 0 133.3333333333%;
`

const BadgeHolder = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-primary);
  display: inline-block;
  font-size: 9px;
  height: 20px;
  left: 2px;
  line-height: 21px;
  margin: 6px;
  padding: 0 4px;
  position: absolute;
  top: 0;
  z-index: 1;
`
const Badge = styled.span`
  color: var(--color-primary);
  text-align: left;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`

const Image = styled.img`
  max-height: 100%;
  pointer-events: none;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  opacity: 1;
  transition: none;
  object-fit: cover;
`

// const QuickAddButton = styled.button`
//   background: transparent;
//   border: none;
//   color: #202020;
//   font-family: inherit;
//   font-size: 13px;
//   height: 40px;
//   margin: 0;
//   padding: 0;
//   width: 100%;
// `

// const QuickAddWrapper = styled.div`

// `

const InfoHolder = styled.div`
  position: relative;
`

const TitleWrapper = styled.h3`
  font-size: 13px;
  letter-spacing: -.65px;
  line-height: 1.5;
  margin: 10px auto;
  padding: 0;
  position: relative;
  text-align: left;
`

const LinkA = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: stretch;
  justify-content: flex-start;
`

const MoreInfo = styled.div`
  font-weight: 400;
  font-size: 13px;
  margin: 2px 0 0;
`

const PriceDiv = styled.div``

const PriceSpan = styled.span`
  font-size: 13px;
  font-weight: 400;
`

const RatingProduct = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  > * + * {
    margin-left: .5rem;
  }
`

const HeaderRatingRow = styled.span``

const ItemReviewsCount = styled.span`
  font-size: 12px;
  font-weight: 400;
`

const  Product = ({item}) => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <List>
      <ListWrapper>
        <ImageHolder>
          <BadgeHolder>
            <Badge>{item.info || 'New'}</Badge>
          </BadgeHolder>
          <ImageDiv onClick={() => navigate(`/product/${item.slug}`)}>
            <Image src={item.images[0]} />
          </ImageDiv>
          {/* <button onClick={() => dispatch(addToCart({
                id: item._id, title: item.title, image: item.image[0], price: item.price
              }))}>Add to cart</button> */}
          {/* <QuickAddWrapper>
            <QuickAddDiv>
              <QuickAddButton>
                <FontAwesomeIcon icon={faPlus} />&nbsp;Quick Add
              </QuickAddButton>
            </QuickAddDiv>
          </QuickAddWrapper> */}
        </ImageHolder>

        <InfoHolder>
          <TitleWrapper>
            <LinkA>
              <ProductTitle onClick={() => navigate(`/product/${item.slug}`)}>{item.title}</ProductTitle>
              <PriceDiv>
                <PriceSpan>${item.price}</PriceSpan>
              </PriceDiv>
              <MoreInfo>
                {item.color.length === 1 && (
                  <>
                    {item.color.length}&nbsp;color available
                  </>
                )}
                {
                  item.color.length > 1 && (
                    <>
                      {item.color.length}&nbsp;colors available
                    </>
                  )
                }
              </MoreInfo>
              {item.rating > 0 && (
                <RatingProduct>
                  <HeaderRatingRow>
                    <i className={
                      item.rating >= 1 ? 'fa fa-star' : item.rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                      }>
                    </i>
                  </HeaderRatingRow>
                  <HeaderRatingRow>
                    <i className={
                      item.rating >= 2 ? 'fa fa-star' : item.rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                      }>
                    </i>
                  </HeaderRatingRow>
                  <HeaderRatingRow>
                    <i className={
                      item.rating >= 3 ? 'fa fa-star' : item.rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                      }>
                    </i>
                  </HeaderRatingRow>
                  <HeaderRatingRow>
                    <i className={
                      item.rating >= 4 ? 'fa fa-star' : item.rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                      }>
                    </i>
                  </HeaderRatingRow>
                  <HeaderRatingRow>
                    <i className={
                      item.rating >= 5 ? 'fa fa-star' : item.rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'
                      }>
                    </i>
                  </HeaderRatingRow>
                  <ItemReviewsCount>
                    &nbsp;({item.numReviews})
                  </ItemReviewsCount>
                </RatingProduct>
              )}
            </LinkA>
          </TitleWrapper>
        </InfoHolder>
      </ListWrapper>
    </List>
  )
}

export default Product