import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {mobile} from "../responsive"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Wrapper = styled.section``

const EstDelDate = styled.section`
  margin-top: 8rem;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  ${mobile({
    padding: "1.5rem"
  })}
`
const EstDelDateStack1 = styled.div`
  background: var(--brand-blue);
  width: 100%;
`
const EstDelDateBigHeader = styled.h1`
  margin: 84px 92px;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  color: #fff;
  letter-spacing: 0;
  display: inline-block;
  vertical-align: middle;
  font-kerning: normal;
  width: auto;

  ${mobile({
    fontSize: "35px",
    lineHeight: "50px",
    margin: "23px 33px"
  })}
`
const Free = styled.div`
  box-sizing: border-box;
  height: auto;
  padding: 0;
  margin: 3.5rem 0;
  width: 100%;
  clear: both;
  overflow-x: hidden;
`
const FreeOne = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  box-sizing: inherit;
`
const FreeTwo = styled.div`
  background: #fafafa;
`
const FreeThree = styled.div`
  direction: rtl;

  :before {
    content: '';
    display: block;
    clear: both;
  }

  :after {
    content: '';
    display: block;
    clear: both;
  }
`
const ItemOne = styled.div`
  width: 50%;
  text-align: center;
  display: inline-block;

  ${mobile({
    width: "100%",
    marginBottom: "20px",
  })}
`
const ImageWrapper = styled.div``
const Image = styled.img`
  vertical-align: top;
  max-width: 100%;
`
const ItemTwo = styled.div`
  width: 49%;
  display: inline-block;
  direction: ltr;
  vertical-align: top;

  @media (min-width: 767px) {
    padding: 63px 40px 40px 92px;
  }

  ${mobile({
    width: "100%",
    padding: "20px",
    marginBottom: "20px"
  })}
`
const ItemTwoDiv = styled.div``
const ItemTwoHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 20px;
`
const ItemTwoParagraph = styled.p``
const EstDelDateM12 = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`
const EstDelDateM12Row = styled.div`
  max-width: 700px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`
const EstDelDateM12Heading = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: #500750;
  font-weight: 700;
  margin: 0 0 10px;
`
const EstDelDateM12Div = styled.div`

`
const ParagraphOne = styled.p`
  font-size: 14px;
  padding-top: 24px;
`
const ParagraphAlign = styled.p`
  text-align: center;
  font-size: 14px;
  padding-top: 24px
`

const Br = styled.br`

`
const HelpFulDiv = styled.div`
  max-width: 1200px;
  padding-bottom: 10rem;
  max-width: 1200px;
  padding-bottom: 10rem;

  ${mobile({
    padding: "0 1.5rem"
  })}
`
const HelpFulDivOne = styled.div`
  width: 100%;
`
const HelpFulDivTwo = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding-top: 45px;
  padding-bottom: 48px;
`
const HelpFulHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin: 0 0 10px;
`
const HelpFulParagraph = styled.div`
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 15px;
`
const CallParagraph = styled.p`font-size: 14px;
  margin: 0 3rem 5rem;
  display: inline-block;
  font-size: 1.4rem;
`

const Shipping = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Navbar />
      <EstDelDate>
        <Container>
          <EstDelDateStack1>
            <EstDelDateBigHeader>
              Estimated Delivery Dates
            </EstDelDateBigHeader>
          </EstDelDateStack1>
          <Free>
            <FreeOne>
              <FreeTwo>
                <FreeThree>
                  <ItemOne>
                    <ImageWrapper>
                      <Image src="//hashingmartimages.mo.cloudinary.net/images/g/free.jpg" />
                    </ImageWrapper>
                  </ItemOne>
                  <ItemTwo>
                    <ItemTwoDiv>
                      <ItemTwoHeader>Enjoy free shipping on all orders</ItemTwoHeader>
                      <ItemTwoParagraph>
                        Reality of online shopping today is getting stuck with a minimum order amount and having to compromise
                        cash for more goods to successfully make a purchase. That’s why we offer you free shipping with no order minimum. 
                        Now you can choose to keep the little extra cash or stack-up some more orders. Cool? Sure, we approve!
                      </ItemTwoParagraph>
                    </ItemTwoDiv>
                  </ItemTwo>
                </FreeThree>
              </FreeTwo>
            </FreeOne>
          </Free>
          <EstDelDateM12>
            <EstDelDateM12Row>
              <EstDelDateM12Heading>Setting package delivery expectations</EstDelDateM12Heading>
              <EstDelDateM12Div>
                <ParagraphOne>To set your shipping expectations straightforward, you can see shipping
                  timeframe as number of days you can expect package to ship. We will not count weekends
                  or holidays as your ship-by date if the carrier we use doesn’t ship on those
                  days. We usually process packages 24-48 hours after you place an order (upon receiving confirmation email) and if your package
                  don’t arrive on time due to reasonable shipping issues, we will make it right.  You will receive another notification when your order has shipped.
                </ParagraphOne>
                <ParagraphOne>
                  To help our customers find items that ship in three days or more, listings will show a shipping timeframe message
                  such as:
                </ParagraphOne>
                <ParagraphAlign>
                “3 day shipping”
                <Br />
                  or
                  <Br />
                  “7+ day shipping”
                </ParagraphAlign>
                <ParagraphOne>
                  It takes about 7-15 days for orders to get delivered to our USA customers & 10-18 days for other countries. A delay message “we're currently experiencing shipping delays” will be conveyed if we do encounter delays for any reason.
                </ParagraphOne>
                <ParagraphOne>
                  When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status.  Allow 48 hours for the tracking information to become available. If you haven’t received your order within 15-18 days of receiving your shipping confirmation email, please contact us via live chat or email at help@hashingmart.com with your name and order number.
                </ParagraphOne>
                <ParagraphOne>
                  <b>PS</b>&nbsp;Be aware your orders may arrive in different packages and/or separate times. This is to provide you with fast delivery
                  and prevent us from being packed up.
                </ParagraphOne>
              </EstDelDateM12Div>
            </EstDelDateM12Row>
          </EstDelDateM12>
        </Container>
        <Container>
          <HelpFulDiv>
            <HelpFulDivOne>
              <HelpFulDivTwo>
                <HelpFulHeading>Was this page helpful?</HelpFulHeading>
                <HelpFulParagraph>Leave us a feedback using the feedback center</HelpFulParagraph>
              </HelpFulDivTwo>
            </HelpFulDivOne>
          </HelpFulDiv>
        </Container>
        <Container>
          <CallParagraph>
            Need help? <a href="tel:7609355809">(760) 935-5809</a>
          </CallParagraph>
        </Container>
      </EstDelDate>
      <Footer />
    </Wrapper>
  )
}

export default Shipping