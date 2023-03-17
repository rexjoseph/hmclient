import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {mobile} from "../responsive"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Announcement from "../components/Announcement";

const Wrapper = styled.section``

const TermsSection = styled.section`
  margin-top: 8rem;
`

const TermsHeader = styled.div`
  background: var(--brand-blue-light);
  padding: 4rem 0;

  ${mobile({
    padding: "2rem 0"
  })}
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
`

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 600;

  ${mobile({
    fontSize: "2.4rem"
  })}
`

const TermsColumns = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 3fr;
  }
`

const TermsQuick = styled.div`

`

const QuickUl = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`

const QuickLi = styled.li`
  padding: 1rem 0;
  font-weight: 600;
`

const LinkA = styled.a`

`

const TermsBody = styled.div`

`

const HeaderTwo = styled.h2`
  ${mobile({
    fontSize: "1.8rem"
  })}
`

const Refunds = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Announcement />
      <Navbar />
      <TermsSection>
        <TermsHeader>
          <Container>
            <Heading>Return & Refunds Policy</Heading>
          </Container>
        </TermsHeader>
        <Container>
          <TermsColumns>
            <TermsQuick>
              <QuickUl>
                <QuickLi>
                  <Link to="/terms-of-use">
                    <LinkA>Terms of Use</LinkA>
                  </Link>
                </QuickLi>
                <QuickLi>
                  <Link to="/refunds">
                    <LinkA>Refund & Return Policy</LinkA>
                  </Link>
                </QuickLi>
                <QuickLi>
                  <Link to="/privacy-policy">
                    <LinkA>Privacy Policy</LinkA>
                  </Link>
                </QuickLi>
                <QuickLi>
                  <Link to="/company">
                    <LinkA>Company</LinkA>
                  </Link>
                </QuickLi>
                <QuickLi>
                  <Link to="/contact">
                    <LinkA>Contact Us</LinkA>
                  </Link>
                </QuickLi>
              </QuickUl>
            </TermsQuick>
            <TermsBody>
              <i>Last Updated November 17, 2022</i>
              <br />
              <br />
              <p>If you are not satisfied, we sure aren't.</p>
              <p>
                Should you be unsatisfied with your Hashingmart order, please review
                our return and refund policy below.
              </p>
              <br />
              <HeaderTwo>Returns</HeaderTwo>
              <p>
                Domestic and International orders made on Hashingmart.com subject to refunds & returns where applicable can be
                returned for a refund within 30 days of delivery. If we receive your
                return request within 31 days or more, such orders are not eligible.
              </p>
              <p>
                We regret that we are unable to refund your original shipping charges,
                unless the return was a result of our error. Refunds will take an
                average of 10-15 days following receipt of your returned item(s).
                Refunds will be issued to the original payment method. You will receive
                an email confirmation once your return has been processed.
              </p>
              <br />
              <p>
                Please feel free to reach out to our customer service team should you
                have any concerns about getting your return product back to us, we
                are happy to help.
              </p>
              <br />
              <HeaderTwo>Guide</HeaderTwo>
              <p>To begin your return, see our Return Section in your order dashboard</p>
              <p>
                Simply enter your email and order id associated with the order. Upon
                reviewing your request, we will be in touch with the next steps.
              </p>
              <br />
              <HeaderTwo>Cancellation and Modifications</HeaderTwo>
              <p>
                Once you place an order, you have an hour to cancel your order. We do
                not allow cancellations or modifications of your order once it has
                been finalized. Please ensure all contact and shipping information is
                correct before submitting your order. Once your order has been
                finalized, we will not be able to modify it.
              </p>
              <p>
                Please contact our customer care team at help@hashingmart.com (Monday
                through Fridays, 10 AM to 5 PM Pacific Time, excluding holidays and
                holiday weekends) as soon as possible, and we will let you know if
                your order can still be cancelled or changed.
              </p>
              <br />
            </TermsBody>
          </TermsColumns>
        </Container>
      </TermsSection>
      <Footer />
    </Wrapper>
  )
}

export default Refunds