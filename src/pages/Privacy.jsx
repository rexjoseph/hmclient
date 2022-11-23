import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {mobile} from "../responsive"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

const Privacy = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Navbar />
      <TermsSection>
        <TermsHeader>
          <Container>
            <Heading>Privacy Policy</Heading>
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
              <HeaderTwo>Privacy Policy</HeaderTwo>
              <p>Your privacy is important to us.</p>
              <br />
              <p>
                It is Hashingmart's policy to respect your privacy regarding any
                information we may collect while operating our website. This Privacy
                Policy applies to hashingmart.com (hereinafter, "us", "we", or
                "hashingmart.com"). We respect your privacy and are committed to
                protecting personally identifiable information you may provide us
                through the Website. We have adopted this privacy policy ("Privacy
                Policy") to explain what information may be collected on our Website,
                how we use this information, and under what circumstances we may
                disclose the information to third parties. This Privacy Policy applies
                only to information we collect through the Website and does not apply
                to our collection of information from other sources.
              </p>
              <p>
                When we use the term "personally identifiable information" we are
                referring to information that is connected to your name or can be
                reasonably connected to your name. This may include IP addresses,
                e-mail address, mailing address, birthday, telephone number, photos,
                personal images you provide that could be used to identify you, or
                information about the products you purchase, when those data are
                stored with your name. Any information that is not connected to your
                name is not considered personal information.
              </p>
              <br />
              <HeaderTwo>
                How We Use Your Information
              </HeaderTwo>
              <p>
                Hashingmart uses the personal information that it collects to provide
                you with products you order, information and services. We may use your
                information to track your purchase, order history and to contact you
                for account and promotional purposes. We may also use your personal
                information for other legitimate business purposes, including to
                detect and prevent fraud, to collect amounts owing to us and to
                maintain business records.
              </p>
              <p>
                We may also passively collect information using various technologies
                (which cannot presently be used to specifically identify you) such as
                your site preferences, age, gender, language, time zone, income, and
                education (some of the information we ask for may be optional). We may
                use or disclose aggregrate information for any purpose.
              </p>
              <br />
              <HeaderTwo>Consent</HeaderTwo>
              <p>
                When you provide us with personal information to complete a
                transaction, place an order, arrange for a delivery, or return a
                purchase, we imply that you consent to our collecting it and using it
                for that specific purpose. If we ask for your personal information for
                a secondary reason, like marketing, we will either ask you directly
                for your expressed consent, or provide you with an opportunity to
                refuse.
              </p>
              <br />
              <HeaderTwo>Consent Withdrawal</HeaderTwo>
              <p>
                If after you opt-in, you change your mind, you may withdraw your
                consent for us to contact you, for the continued collection, use or
                disclosure of your information, at any time, by contacting us at
                help@hashingmart.com
              </p>
              <br />
              <HeaderTwo>Disclosure</HeaderTwo>
              <p>
                We do not in any way sell your personal information. We may share your
                information to ensure delivery of orders, or other legitimate reasons
                discussed more below, we may also disclose your personal information
                if we are required by law to do so or if you violate our Terms of Use.
              </p>
              <br />
              <HeaderTwo>Payments</HeaderTwo>
              <p>
                If you choose a direct credit/debit card payment gateway to complete
                your order, then that payment processor stores your credit card data. It is encrypted
                through the Payment Card Industry Data Security Standard (PCI-DSS).
                Your order data is stored only as long as necessary to complete your
                order. When this is complete, your order transaction information is
                deleted.
              </p>
              <p>
                All direct payment gateways adhere to the standards set by PCI-DSS as
                managed by the PCI Security Standards Council, which is a joint effort
                of brands like Visa, MasterCard, American Express and Discover.
                PCI-DSS requirements help ensure the secure handling of credit card
                information by our store and its service providers.
              </p>
              <br />
              <HeaderTwo>Third-Party</HeaderTwo>
              <p>
                We will share your personal information with third parties only in
                ways that are described in this Privacy Policy. In general, the
                third-party providers used by us will collect, use, and disclose your
                information to the extent necessary to allow them to perform the
                services they provide to us.
              </p>
              <p>
                We share personal information with service providers, some of whom may
                provide marketing assistance, and may also share information with
                other trusted brands whom they believe may be of interest to their
                customers.
              </p>
              <p>
                Certain third-party service providers, such as payment gateways and
                other payment transaction processors, have their own privacy policies
                in respect to the information we are required to provide to them for
                your order related transactions. For these providers, we recommend
                that you read their privacy policies so you can understand the manner
                in which your personal information will be handled by these
                providers. Do remember that certain providers may be located in or have
                facilities that are located in a different jurisdiction than either
                you or us. So if you elect to proceed with a transaction that involves
                the services of a third-party service provider, then your information
                may become subject to the laws of the jurisdiction(s) in which that
                service provider or its facilities are located. If as a Canadian
                resident, your order is processed by a payment gateway located in the
                United States, then your personal information used in completing that
                order may be subject to disclosure under the United States
                legislation, including the Patriot Act.
              </p>
              <p>
                Once you leave our website or are redirected to a third-party website
                or application, you no longer are governed by this Privacy Policy or
                Terms of Use.
              </p>
              <br />
              <HeaderTwo>Security</HeaderTwo>
              <p>
                The security of your Personal Information is important to us, but
                remember that no method of transmission over the Internet, or method
                of electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Information, we
                cannot guarantee its absolute security.
              </p>
              <p>
                If you provide us with your credit card information, the information
                is encrypted using secure socket layer technology (SSL) and stored
                with a AES-256 encryption. Although no method of transmission over the
                internet or electronic storage is 100% secure, we follow all PCI-DSS
                requirements and implement additional generally accepted industry
                standards.
              </p>
              <br />
              <HeaderTwo>Links to External Sites</HeaderTwo>
              <p>
                Our Service may contain links to external sites that are not operated
                by us. If you click on a third party link, you will be directed to
                that third party's site. We strongly advise you to review the Privacy
                Policy and terms of use of every site you visit.
              </p>
              <p>
                We have no control over, and assume no responsibility for the content,
                privacy policies or practices of any third party sites, products or
                services.
              </p>
              <br />
              <HeaderTwo>Contacts and Emails</HeaderTwo>
              <p>
                If you are a registered user of https://hashingmart.com and have
                supplied your email address, Hashingmart may occasionally send you an
                email to tell you about new features, solicit your feedback, or just
                keep you up to date with what's going on with Hashingmart and our
                products. We expect to keep this type of email to a minimum. If you
                send us a request (for example via a support email or via one of our
                feedback mechanisms), we reserve the right to publish it in order to
                help us clarify or respond to your request or to help us support other
                users. Hashingmart takes all measures reasonably necessary to protect
                against the unauthorized access, use, alteration or destruction of
                potentially personally-identifying and personally-identifying
                information. To opt-out of such emails, please send us a request at
                help@hashingmart.com.
              </p>
              <br />
              <HeaderTwo>Cookies</HeaderTwo>
              <p>
                To enrich and perfect your online experience, Hashingmart uses
                "Cookies", similar technologies and services provided by others to
                display personalized content, appropriate advertising and store your
                preferences on your computer.
              </p>
              <p>
                A cookie is a string of information that a website stores on a
                visitor's computer, and that the visitor's browser provides to the
                website each time the visitor returns. Hashingmart uses cookies to help
                Hashingmart identify and track visitors, their usage of
                https://hashingmart.com, and their website access preferences.
                Hashingmart visitors who do not wish to have cookies placed on their
                computers should set their browsers to refuse cookies before using
                Hashingmart's websites, with the drawback that certain features of
                Hashingmart's websites may not function properly without the aid of
                cookies.
              </p>
              <p>
                By continuing to navigate our website without changing your cookie
                settings, you hereby acknowledge and agree to Hashingmart's use of
                cookies.
              </p>
              <br />
              <HeaderTwo>E-commerce</HeaderTwo>
              <p>
                Those who engage in transactions with Hashingmart – by purchasing
                Hashingmart's services or products, are asked to provide additional
                information, including as necessary the personal and financial
                information required to process those orders. In each case, Hashingmart
                collects such information only insofar as is necessary or appropriate
                to fulfill the purpose of the visitor's interaction with Hashingmart.
                Hashingmart does not disclose personally-identifying information other
                than as described in this Privacy Policy. And visitors can always
                refuse to supply personally-identifying information, with the caveat
                that it may prevent them from engaging in certain website-related
                activities.
              </p>
              <br />
              <HeaderTwo>Age of Consent</HeaderTwo>
              <p>
                Our services are not directed at children under the age of 13 and we
                do not knowingly collect personal information from children. We
                recognize the special obligation to protect personally indentifiable
                information obtained from children and request that if you are 13
                years old or younger to please not submit any personally identifiable
                information to the site or company. By using this site, you represent
                that you are at least the age of majority in your state or province of
                residence and you have given us your consent to allow any of your
                minor dependents to use this site.
              </p>
              <br />
              <HeaderTwo>Privacy Policy Changes</HeaderTwo>
              <p>
                Although most changes are likely to be minor, Hashingmart may change
                its Privacy Policy from time to time, and in Hashingmart's sole
                discretion. Hashingmart encourages visitors to frequently check this
                page for any changes to its Privacy Policy. Your continued use of this
                site after any change in this Privacy Policy will constitute your
                acceptance of such change.
              </p>
              <br />
              <HeaderTwo>Questions and Contact Information</HeaderTwo>
              <p>
                If you would like to: access, correct, amend or delete any personal
                information we have about you, register a complaint, or simply want
                more information, contact our Privacy Compliance at
                help@hashingmart.com, or call us on 1-760-935-5809
              </p>
              <br />
              <p>
                This Privacy Policy, together with the Terms of Use posted on our
                Website, set forth the general rules and policies governing your use
                of our Website. Depending on your activities when visiting our
                Website, you may be required to agree to additional terms of use.
              </p>
            </TermsBody>
          </TermsColumns>
        </Container>
      </TermsSection>
      <Footer />
    </Wrapper>
  )
}

export default Privacy