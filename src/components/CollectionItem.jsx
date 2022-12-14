import styled from "styled-components"
import { Link } from "react-router-dom"

const CollectionList = styled.li`
  scroll-snap-align: start;
  align-items: flex-start;
  display: inline-flex;
  margin: 0 1px;
  position: relative;
`

const CollectionWrapper = styled.div`
  height: 406px;
  position: relative;
  width: 406px;

  @media (max-width: 550px) {
    height: calc(100vw - 24px);
    width: calc(100vw - 24px);
  }
`

const Image = styled.img`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: opacity .2s ease-in-out,transform .2s ease-in-out,-webkit-transform .2s ease-in-out;
  z-index: 2;
  opacity: 1;
`

const CollectionContent = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  cursor: pointer;

  &:hover ${Image} {
    transform: scale(1.15);
  }
`

const Title = styled.h3`
  color: #fff;
  margin: 0;
  padding: 0;
  text-align: center;
  z-index: 3;
  font-size: 40px;
  text-transform: capitalize;
  font-weight: 400;
  margin: 0 0 18px;
  padding: 0 108px;

  @media (max-width: 1420px) {
    padding: 0 72px;
  }
`

const CollectionItem = ({item}) => {
  return (
    <CollectionList>
      <Link to={`/products/${item.name}`} >
        <CollectionWrapper>
          <CollectionContent>
            <Image src={item.banner} />
            <Title>Shop {item.name}</Title>
          </CollectionContent>
        </CollectionWrapper>
      </Link>
    </CollectionList>
  )
}

export default CollectionItem