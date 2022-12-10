import {useNavigate} from 'react-router-dom'
import styled from "styled-components"

const Homepage = styled.div`
  margin-top: 5rem;
`

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media (max-width: 500px) {
    height: 60vh
  }
`

const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media (max-width: 1420px) {
    padding: 0;
  }
`

const Asset = styled.div`
  background-color: #f1f1f1;
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: top center;
  padding-top: 56.25%;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`

const Figure = styled.figure`
  height: calc(100% - 86px);
  padding: 0;
  margin: 0;
  width: 100%;
`

const AssetImage = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top center;
  width: 100%;
  opacity: 1;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const Heading = styled.h1`
  font-size: 80px;
  font-weight: 500;
  color: #FFF;
  letter-spacing: -3.2px;
  line-height: 1;
  margin: 0;
  z-index: 2;
  width: 65%;

  @media (max-width: 1420px) {
    width: 70%;
  }

  @media (max-width: 769px) {
    width: 100%;
    font-size: 45px;
  }
`

const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #FFF;
  letter-spacing: -.3px;
  line-height: 1.29;
  margin: 24px 0 12px;
  max-width: 600px;
  z-index: 2;
  width: 65%;
  padding: 0 24px;

  @media (max-width: 1420px) {
    width: 60%;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`

const Action = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
  z-index: 2;
`

const LinkA = styled.a`
  border: 0;
  cursor: pointer;
  font-size: 16px;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  height: 48px;
  background: #fff;
  color: var(--color-primary);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 48px;

  &:hover {
    background: var(--color-primary);
    color: #FFF;
  }
`

const Slider = () => {
  const navigate = useNavigate()
  return (
    <Homepage>
      <Hero>
        <Layout>
          <Asset>
            <Figure>
              <AssetImage>
                <Image src="https://cdn.shopify.com/s/files/1/0156/6146/files/Dual_Gender_Desktop_6c5d6a84-d36c-4289-a67b-7f439f95dc61_1440x.jpg?v=1670533532" />
              </AssetImage>
            </Figure>
            <Header>
              <Heading>30% Off Cold Weather Essentials</Heading>
              <SubHeading>For a short time, save on MegaFleece, RecTrek, FrostKnit, and more.</SubHeading>
              <Action>
                <LinkA onClick={() => navigate('/products')}>Go, Go, Go</LinkA>
              </Action>
            </Header>
          </Asset>
        </Layout>
      </Hero>
    </Homepage>
  )
}

export default Slider