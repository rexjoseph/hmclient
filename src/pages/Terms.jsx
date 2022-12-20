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

const PLink = styled.span`
  text-decoration: underline
`

const Terms = () => {
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
            <Heading>Terms of Use</Heading>
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
              <p>Please review these Terms of Use carefully.</p>
              <br />
              <p>
                *IMPORTANT: THESE TERMS OF USE CONTAIN A MANDATORY ARBITRATION
                PROVISION THAT, AS FURTHER SET FORTH IN SECTION 19 BELOW, REQUIRES THE
                USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES. THIS
                MEANS THAT YOU AND HASHINGMART ARE EACH GIVING UP THE RIGHT TO SUE EACH
                OTHER IN COURT OR IN CLASS ACTIONS OF ANY KIND. IN ARBITRATION, THERE
                IS NO JUDGE OR JURY AND THERE IS LESS DISCOVERY AND APPELLATE REVIEW
                THAN IN COURT.
              </p>
              <br />
              <HeaderTwo>Introduction</HeaderTwo>
              <p>Welcome to Hashingmart. We are happy to have you join the family.</p>
              <br />
              <p>
                This website is operated by Hashingmart. Throughout the site, the terms
                "we", "us" and "our" refer to Hashingmart. Hashingmart offers this
                website, including all information, offers, services available from
                this site to you, the user, conditioned upon your accpetance of all
                terms, conditions, policies and notices stated here.
              </p>
              <p>
                By visiting our site and/or purchasing something from us, you engage
                in our "services" and agree to be bound by the following terms and
                conditions ("terms of use"), including those additional terms and
                conditions and policies referenced herein and/or available by
                hyperlink. These terms of use apply to all users of the site,
                including without limitation users who are browsers, vendors,
                customers, merchants, and/or contributors of content.
              </p>
              <p>
                Please read these Terms of Use carefully before accessing or using our
                website. By accessing or using any part of the site, you agree to be
                bound by these Terms of Use. If you do not agree to all the terms and
                conditions of this agreement, then you may not access the website or
                use any services. If these Terms of Use are considered an offer,
                acceptance is expressly limited to the Terms of Use. IF YOU DO NOT
                AGREE WITH ANY OF THESE TERMS, YOU SHOULD NOT USE OUR SITE.
              </p>
              <p>
                Any new feature, product or tool which are added to the current store
                shall also be subject to the Terms of Use. You can review the most
                current version of the Terms of Use at any time on this page. We
                reserve the right to update, change or replace any part of these Terms
                of Use by providing updates and/or changes to our website. It is your
                responsibility to check this page periodically for changes. Your
                continued use of or access to the website following the posting of any
                changes constitutes acceptance of those changes.
              </p>
              <br />
              <HeaderTwo>Guide</HeaderTwo>
              <p>To begin your return, see our Return Section in your order dashboard</p>
              <p>
                We reserve the right to refuse service to anyone for any reason at any
                time. You understand that your content (not including credit/debit
                card information), may be transferred unencrypted and involve (a)
                transmissions over various networks; and (b) changes to conform and
                adapt to technical requirements of connecting networks or devices.
                Credit card information is always encrypted during transfer over
                networks. You agree not to reproduce, duplicate, copy, sell, resell or
                exploit any portion of the Services, use of the Services, or access to
                the Service or any contact on the website through which the service is
                provided, without express written permission to us. The headings used
                in this agreement are included for convenience only and will not limit
                or otherwise affect these Terms of Use.
              </p>
              <br />
              <HeaderTwo>Shop Terms</HeaderTwo>
              <p>
                By agreeing to these Terms of Use, you represent that you are of legal
                age in your state or province of residence and you have given us your
                consent to allow any of your minor dependants to use this site. You
                may not use our deals/services/offers for any illegal or unauthorized
                purpose nor may you, in the use of the Services, violate any laws in
                your jurisdiction (including but not limited to copyright laws). You
                must not transmit any worms or viruses or any code of a destruction
                nature. You may not incorporate any portion of the Services into any
                product or service, without our express prior written consent. You may
                not use any robot, spider, site search/retrieval application or other
                manual or automatic device to retrieve, index, "scrape", "data mine"
                or otherwise gather Services' content, or reproduce or circumvent the
                navigational structure or presentation of the Services, without our
                express prior written consent. Notwithstanding the foregoing, we grant
                to the operators of public search engines permission to use spiders to
                copy materials from the Services for the sole purpose of (and solely
                to the extent necessary for) creating publicly available, searchable
                indices of such materials, but not caches or archives of such
                materials. We reserve the right to revoke such permission either
                generally or in specific cases, at any time and without notice.
              </p>
              <p>
                A breach or violation of any of these Terms of Use will result in
                immediate termination of your Services. You are solely responsible for
                all content that you upload, post, email or otherwise transmit via or
                to the site, through third party sites or otherwise, including the
                submission of product ratings and reviews and all other data, profile
                information, documents, text, software, applications, music, sound,
                photographs, graphics, video, messages, forum postings, comment,
                questions, answers or other materials (collectively, "Content"). We
                will not accept Content from you unless you are a registered user of
                our site.
              </p>
              <br />
              <HeaderTwo>Accuracy, Completeness and Timeliness of Information</HeaderTwo>
              <p>
                We are not responsible if information made available on this site is
                not accurate, complete, or current. The material on this site is
                provided for general information only and should not be relied upon or
                used as the sole basis for making decisions without consulting
                primary, more accurate, more complete, or more timely sources of
                information. Any reliance on the material on this site is at your own
                risk. This site may contain certain historical information. Historical
                information, necessarily, is not current and is provided for your
                reference only. We reserve the right to modify the contents of this
                site at any time, but we have no obligation to update any information
                on our site. You agree that it is your responsibility to monitor
                changes to our site.
              </p>
              <br />
              <HeaderTwo>Modification to Services and Prices</HeaderTwo>
              <p>
                Prices for our products are subject to change without notice. We
                reserve the right at any time to modify or discontinue the Services
                (or any part or content thereof) without notice at any time. We shall
                not be liable to you or to any third-party for any modification, price
                change, suspension or discontinuance of the Services.
              </p>
              <br />
              <HeaderTwo>Copyright</HeaderTwo>
              <p>
                All design, text, graphics, logo, button icons, images, audio and
                video clips, content is the exclusive property of Hashingmart and
                Hashing Mart LLC and are protected by the United States and
                international copyright laws. Permission is granted exclusively for
                electronical copy and to print in hard copy portions of the site for
                the sole purpose of placing an order with Hashingmart or using the site
                as a shopping resource. Any other use of the site, including
                reproduction for purposes other than those permitted above,
                modification, distribution, republishing, transmission, display or
                performance; without the prior written permission of Hashingmart is
                strictly prohibited.
              </p>
              <br />
              <HeaderTwo>Trademarks</HeaderTwo>
              <p>
                Hashingmart.com and all page headers, custom graphics, and button icons
                are service marks, trademarks, and/or trade dress of Hashingmart and
                may not be used with any product or service that is not offered by
                Hashingmart in any manner that may cause confusion among customers. All
                other trademarks, product names and company names or logos cited
                herein are the property of their respective owners.
              </p>
              <br />
              <HeaderTwo>Products or Services</HeaderTwo>
              <p>
                Certain products or services may be available exclusively online
                through the website. These products or services may have limited
                quantities and are subject to return or exchange only according to our
                Refunds &amp; Return Policy. We have made every effort to display
                accurately as possible the colors and images of products that appear
                at the online store. We cannot guarantee that your computer monitor's
                display or any color will be accurate. We reserve the right, but are
                not obligated, to limit the sales of products or services to any
                individual, geographic region or jurisdiction. We may exercise this
                right on a case-by-case basis. We reserve the right to limit the
                quantities of any products or services offered. All description of
                products or product pricing are subject to change at anytime without
                notice, at the sole discretion of us. We reserve the right to
                discontinue any product at any time. Any offer for product or service
                made on this site is void where prohibited. We do not warrant that the
                quality of any products, services, information, or other material
                purchased or obtained by you will meet your expectations, or that any
                errors in the Services will be corrected.
              </p>
              <br />
              <HeaderTwo>Accuracy of Billing and Account Information</HeaderTwo>
              <p>
                We reserve the right to refuse any order you place with us. We may, in
                our sole discretion, limit or cancel quantities purchased per person,
                per household, or per order. These restrictions may include orders
                placed by or under the same customer account, the same credit card,
                and/or orders that use the same billing and/or shipping address. In
                the event that we make a change to or cancel an order, we may attempt
                to notify you by contacting the e-mail and/or billing address/phone
                number provided at the time the order was made. We reserve the right
                to limit or prohibit orders that, in our sole judgement, appear to be
                placed by dealers, resellers or distributors.
              </p>
              <p>
                You agree to provide current, complete, and accurate purchase and
                account information for all purchases made at our store. You agree to
                promptly update your account and other information, including your
                email address and credit/debit card numbers and expiration dates, so
                that we can complete your transactions and contact you as needed.
              </p>
              <p>For more details, please see our Refunds and Returns Policy.</p>
              <br />
              <HeaderTwo>Optional Tools</HeaderTwo>
              <p>
                We may provide you with access to third-party tools over which we
                neither nor have any control nor input. You acknowledge and agree that
                we provide access to such tools "as is" and "as available" without any
                warranties, representations, or conditions of any kind and without any
                endorsement. We shall have no liability whatsoever arising from or
                relating to your use of optional third-party tools. Any use by you of
                optional tools offered through the site is entirely at your own risk
                and discretion and you should ensure that you are familiar with and
                approve of the terms on which tools are provided by the relevant
                third-party provider(s). We may also, in the future, offer new
                services and/or features through the website (including, the release
                of new tools and resources). Such new features and/or services shall
                also be subject to these Terms of Use.
              </p>
              <br />
              <HeaderTwo>Third-Party Links and Sites</HeaderTwo>
              <p>
                Certain content, products and services available via our Services may
                include materials from third parties. Third-party links on this site
                may direct you to third-party websites that are not affiliated with
                us. We are not responsible for examining or evaluating the content or
                accuracy and we do not warrant and will not have any liability or
                responsibility for any third-party materials or websites, or for any
                other materials, products, or services of third parties. We are not
                liable for any harm or damages related to the purchase or use of
                goods, services, resources, content, or any other transactions made in
                connection with any third-party websites. Please review carefully the
                third-partys' policies and practices and make sure you understand them
                before you engage in any transaction. Complaints, claims, concerns, or
                questions regarding third-party products should be directed to the
                third-party. You should always check the terms of use posted on Third
                Party Sites.
              </p>
              <p>
                YOUR CONTINUED USE OF THIS SITE FOLLOWING POSTING OF ANY CHANGES OR
                MODIFICATIONS CONSTITUTES YOUR ACCEPTANCE OF SUCH CHANGES OR
                MODIFICATIONS AND IF YOU DO NOT AGREE WITH THESE CHANGES OF
                MODIFICATIONS, YOU MUST IMMEDIATELY CEASE USING OUR SITE.
              </p>
              <br />
              <HeaderTwo>Registration</HeaderTwo>
              <p>
                You may need to register to use the site. We may reject, or require
                that you change any email, password, or other information that you
                provide. Your email and password are for personal use only. You are
                solely responsible for maintaining the confidentiality of your
                credentials and for restricting access to your mobile device,
                computer, and/or other means of accessing this website. We are not
                responsible for any use of your credentials caused by your failure to
                keep them confidential. Solely, you are responsible for all activities
                that occur under your account, either with or without your knowledge.
                You must promptly notify us of any unauthorized use of your
                credentials or account of which you become aware. We recommend that,
                to the extent you access this website via secured device.
              </p>
              <br />
              <HeaderTwo>Copyright Infringement Claims</HeaderTwo>
              <p>
                If you believe in good faith that materials available on our website
                infringe upon your copyright, you may write to us by mail or e-mail
                and request that we remove such material or block access to it. Please
                be precise about the identity and location of the allegedly infringing
                materials. If you believe in good faith that someone has wrongly filed
                a notice of copyright infringement against you, you may send us a
                written counter-notice. Notices and counter-notices must be sent as
                follows: by e-mail to complaints@hashingmart.com. In the United States,
                the Company's Agent for complaints related to the Digital Millennium
                Copyright Act (DMCA) is as follows:
              </p>
              <br />
              <p>HASHINGMART</p>
              <p>1629 K Street NW, Suite 300</p>
              <p>Washington, DC 20006</p>
              <p>US: Tel: +1 (760) 935-5809</p>
              <p>Email: help@hashingmart.com</p>
              <br />
              <p>
                This contact information may also be used to contact us about
                copyright infringement claims in jurisdictions outside of the United
                States.
              </p>
              <br />
              <HeaderTwo>Personal Information</HeaderTwo>
              <p>
                Your submission of personal information through the site is governed
                by our Privacy Policy.
              </p>
              <p>
                We are able to provide you with information we collect. We also within
                legal limits allow you to remove all your personal information at any
                time; simply email help@hashingmart.com or contact us at the address
                below.
              </p>
              <br />
              <p>HASHINGMART</p>
              <p>1629 K Street NW, Suite 300,</p>
              <p>Washington, DC 20006</p>
              <p>US: Tel: +1 (760) 935-5809</p>
              <p>Email: help@hashingmart.com</p>
              <br />
              <br />
              <HeaderTwo>Errors, Inaccuracies and Omissions</HeaderTwo>
              <p>
                We undertake no obligation to update, amend or clarify information in
                the Services or on any related website, including without limitation,
                pricing information, except as required by law. No specified update or
                refresh date applied in the Services or any related website,
                should be taken to indicate that all information in the Services or related website has been modified or updated.
              </p>
              <p>
                We undertake no obligation to update, amend or clarify information in
                the Services or on any related website, including without limitation,
                pricing information, except as required by law. No specified update or
                refresh date applied in the Services or any related website,
                should be taken to indicate that all information in the Services or related website has been modified or updated.
              </p>
              <br />
              <HeaderTwo>Prohibited Uses</HeaderTwo>
              <p>
                In addition to other prohibitions as set forth in the Terms of Use,
                you are prohibited from using the site or its content: (a) for any
                unlawful purpose; (b) to solicit others to perform or participate in
                any unlawful acts; (c) to violate any international, federal,
                provincial or state regulations, rules, laws, or local ordinances; (d)
                to infringe upon or violate our intellectual property rights or the
                intellectual property rights of others; (e) to harass, abuse, insult,
                harm, defame, slander, disparage, intimidate, or discriminate based on
                gender, sexual orientation, religion, ethnicity, race, age, national
                origin, or disability; (f) to submit false or misleading information;
                (g) to upload or transmit viruses or any other type of malicious code
                that will or may be used in any way that will affect the functionality
                or operation of the Services or of any related website, other
                websites, or the internet; (h) to collect or track the personal
                information of others; (i) to spam, phish, pharm, pretext, spider,
                crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to
                interfere with or circumvent the security features of the Services or
                any related website, other websites, or the Internet. We reserve the
                right to terminate your use of the Services or any related website for
                violating any of the prohibited uses.
              </p>
              <br />
              <HeaderTwo>Disclaimer of Warranties; Limitation of Liability</HeaderTwo>
              <p>
                With respect to any conditions, warranties or guarantees that cannot
                be excluded under applicable statues, to the extent permitted by
                applicable law, our liability is limited (at our option) to the
                resupply or refund of the cost of the relevant portion of the
                services.
              </p>
              <p>
                TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, THE SERVICES ARE
                MADE AVAILABLE TO YOU ON AN "AS IS" AND "WHERE AVAILABLE" BASIS,
                WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER EXPRESS,
                IMPLIED OR STATUTORY.
              </p>
              <p>
                TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, AND SUBJECT TO
                ANY APPLICABLE TERMS AND CONDITIONS OR POLICIES APPLICABLE TO THE USE
                OF THIRD PARTY PRODUCTS AS SET OUT IN THESE TERMS OF USE, THIRD PARTY
                PRODUCTS ARE MADE AVAILABLE TO YOU ON AN "AS IS," "WHERE IS" AND
                "WHERE AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, WE DISCLAIM ALL WARRANTIES WITH RESPECT TO THIRD
                PARTY PRODUCTS.
              </p>
              <p>
                WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, TO THE FULLEST
                EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE MAKE NO REPRESENTATION OR
                WARRANTY THAT THE SERVICES WILL BE SECURE, THAT ANY EMAIL, PASSWORD OR
                OTHER SECURITY MEASURE THAT YOU MAY USE OR ALLOW OTHERS USE IN
                CONNECTION WITH THE SERVICES WILL PREVENT UNAUTHORIZED ACCESS TO YOUR
                SERVICES ACCOUNT OR RELATED INFORMATION, OR THAT YOUR SERVICES ACCOUNT
                OR RELATED INFORMATION WILL NOT BE ACCESSED OR MISUSED BY ANY THIRD
                PARTY.
              </p>
              <p>
                You expressly agree that your use of, or inability to use, the
                Services is at your sole risk. The Services and all products and
                services delivered to you through the Services are (except as
                expressly stated by us) provided "as is" and "as available" for your
                use, without any representation, warranties or conditions of any kind,
                either express or implied, including all implied warranties or
                conditions or merchantability, merchantable quality, fitness for a
                particular purpose, durability, title, and non-infringment.
              </p>
              <p>
                In no case shall Hashingmart, our directors, officers, employees,
                affiliates, agents, contractors, interns, suppliers, service providers
                or licensors be liable for any injury, loss, claim, or any direct,
                indirect, incidental, punitive, special, or consequential damages of
                any kind, including, without limitation lost profits, lost revenue,
                lost savings, loss of date, replacement costs, or any similar damages,
                whether based in contract, tort (including negligence), strict
                liability or otherwise, arising from your use of our site, or for any
                other claim related in any way to your use of the site, including, but
                not limited to, any errors or omissions in any content, or any loss or
                damage of any kind incurred as a result of the use of the site or any
                content (or product) posted, transmitted, or otherwise made available
                via the site, even if advised of their possibility. Because some
                states or jurisdictions do not allow the exclusion or the limitation
                of liability for consequential or incidental damages, in such states
                or jurisdictions, our liability shall be limited to the maximum extent
                permitted by law.
              </p>
              <br />
              <HeaderTwo>Indemnification</HeaderTwo>
              <p>
                You agree to indemnify, defend and hold harmless Hashingmart and our
                parent, subsidiaries, affiliates, partners, officers, directors,
                agents, contractors, licensors, service providers, subcontractors,
                supplier, interns and employees, harmless from any claim or demand,
                including reasonable attorneys' fees, made by third-party due to or
                arising out of your breach of these Terms of Use or the documents they
                incorporate by reference, or your violation of any law or the rights
                of a third-party.
              </p>
              <br />
              <HeaderTwo>Agreement to Arbitration</HeaderTwo>
              <p>
                PLEASE READ THIS SECTION CAREFULLY. IT MAY SIGNIFICANTLY AFFECT YOUR
                LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT. Using
                or accessing the Hashingmart site constitutes your acceptance of this
                Arbitration provision. Please read it carefully as it povides that you
                and Hashingmart will waive any right to file a lawsuit in court or
                participate in a class action for matters within the terms of the
                Arbitration provision.
              </p>
              <p>
                EXCEPT FOR DISPUTES THAT QUALIFY FOR SMALL CLAIMS COURT, ALL DISPUTES
                ARISING OUT OF OR RELATED TO THESE TERMS OF USE OR ANY ASPECT OF THE
                RELATIONSHIP BETWEEN YOU AND HASHINGMART, WHETHER BASED IN CONTRACT,
                TORT, STATUTE, FRAUD, MISREPRESENTATION, OR ANY OTHER LEGAL THEORY, WILL
                BE RESOLVED THROUGH FINAL AND BINDING ARBITRATION BEFORE A NEUTRAL
                ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY, AND YOU AGREE
                THAT HASHINGMART AND YOU ARE EACH WAVING THE RIGHT TO SUE IN COURT AND
                TO HAVE A TRIAL BY A JURY. YOU AGREE THAT ANY ARBITRATION WILL TAKE
                PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE
                NOT PERMITTED AND YOU ARE AGREEING TO GIVE UP THE ABILITY TO
                PARTICIPATE IN A CLASS ACTION. The arbitration will be administered by
                Judicial Arbitration Mediation Services, Inc. (JAMS) pursuant to the
                JAMS Streamlined Arbitration Rules &amp; Procedures effective July 1, 2014
                (the JAMS Rules) and as modified by this agreement to arbitrate. The
                JAMS Rules, including instructions for bringing arbitration, are
                available on the JAMS website
                <Link to="http://www.jamsadr.com/rules-streamlined-arbitration"><PLink>http://www.jamsadr.com/rules-streamlined-arbitration</PLink></Link>. The Minimum Standards are available at
                <Link to="https://www.jamsadr.com/consumer-minimum-standards/"><PLink>https://www.jamsadr.com/consumer-minimum-standards/</PLink></Link>.
              </p>
              <p>
                The arbitrator will decide the rights and liabilities, if any, of you
                and Hashingmart, and the dispute will not be consolidated with any
                other matters or joined with any other cases or parties. The
                arbitrator shall have the authority to grant motions dispositive of
                all or part of any claim. The arbitrator shall have the authority to
                award monetary damages and to grant any non-monetary remedy or relief
                available to an individual under applicable law, the Arbitration
                Rules, and the Terms. The arbitrator shall issue a written award and
                statement of decision describing the essential findings and
                conclusions on which the award is based including the calculation of
                any damages awarded. The arbitrator has the same authority to award
                relief on an individual basis that a judge in a court of law would
                have. The award of the arbitrator is final and binding upon you and
                Hashingmart.
              </p>
              <p>
                These Terms of Use will be governed by and construed under the laws of
                the United States (including federal arbitration law) and the State of
                Kentucky, without regard to conflicts of law principles.
              </p>
              <br />
              <HeaderTwo>Opt-Out of Agreement to Arbitrate</HeaderTwo>
              <p>
                You can decline this agreement to arbitrate by emailing Hashingmart at
                help@hashingmart.com and providing the requested information as
                follows: Your Name; the URL of the Terms of Use and Agreement to
                Arbitrate Disputes; Your Address; Your Phone Number; Your Email; and
                clear statement that you wish to opt out of this arbitration provision
                in the Terms of Use. The opt-out notice must be emailed no later than
                30 days after the date you first accept the Terms of Use by using our
                website.
              </p>
              <br />
              <HeaderTwo>Class Action Waiver</HeaderTwo>
              <p>
                You may only resolve disputes with us on an individual basis and may
                not bring a claim as a plaintiff or a class member in a class,
                consolidated, or representative action, Class arbitrations, class
                actions, private attorney general actions, and consolidated with other
                arbitrations are not allowed.
              </p>
              <br />
              <HeaderTwo>Third Party Claims</HeaderTwo>
              <p>
                If we are sued by a third-party as a result of your breach of this
                Agreement or your infringement of any third-party right, then, to the
                fullest extent permitted by applicable law, you will be responsible
                for all liabilities, damages, judgements, awards, losses, costs,
                expenses and fees (including attorneys' fees) incurred by Hashingmart.
              </p>
              <br />
              <HeaderTwo>No Guarantees</HeaderTwo>
              <p>
                While we absolutely love our customers and site users, we offer no
                guarantees about the contents displayed on our site. We will not be
                responsible for any inaccuracies. We cannot guarantee any success or
                failure of any product and/or service due to action or inaction based
                on any information provided on this site, content whatsoever.
              </p>
              <br />
              <HeaderTwo>Changes to Terms of Use</HeaderTwo>
              <p>
                You can review the most current version of the Terms of Use at any
                time on this page.
              </p>
              <p>
                We reserve the right, at our sole discretion, to update, change or
                replace any part of these Terms of Use by posting updates and changes
                to our website without liability. It is your responsibility to check
                our website periodically for changes. Your continued use of or access
                to our website or the service following the posting of any changes to
                these Terms of Use constitutes acceptance of those changes.
              </p>
              <br />
              <HeaderTwo>Contact Information</HeaderTwo>
              <p>
                Questions about the Terms of Use or your personal information can be
                emailed to us at help@hashingmart.com
              </p>
            </TermsBody>
          </TermsColumns>
        </Container>
      </TermsSection>
      <Footer />
    </Wrapper>
  )
}

export default Terms