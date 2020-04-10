import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "./../components/Layout"
import PreviewCompatibleImage from "./../components/PreviewCompatibleImage"
import SEO from "./../components/SEO"
import ReviewRoll from "./../components/ReviewRoll"
import {
  Heading2,
  Heading3,
  ButtonLink,
  Lead,
  SuperLead,
  Paragraph,
} from "./../components/PageElements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeartbeat,
  faCapsules,
  faSyringe,
  faXRay,
  faVials,
  faRunning,
  faDumbbell,
  faAppleAlt,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"
import RetrieveSiteMetadata from "./../components/SiteMetadata"
import styles from "./index.module.scss"
import ContactForm from "../components/ContactForm"
import Newsletter from "../components/Newsletter"
import { first } from "lodash"

const IndexPage = () => {
  const { heroImage, heroImageMobile, doctorHeadshot } = useStaticQuery(query)
  const {
    navigation: { pages },
  } = RetrieveSiteMetadata()
  const homeMetadata = first(pages.filter(n => n.key === "home"))
  const lifestyleTransformationMetadata = first(
    pages.filter(n => n.key === "lifestyle-transformation-boot-camp")
  )
  const comprehensiveHealthConsultationMetadata = first(
    pages.filter(n => n.key === "comprehensive-health-consultation")
  )

  return (
    <Layout>
      <SEO
        title={homeMetadata.title}
        description={homeMetadata.description}
        image={homeMetadata.ogImage}
      />
      <header className={styles.header}>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_image_desktop}>
            <PreviewCompatibleImage
              imageInfo={{
                alt: "Hero image. A woman and man running happily together.",
                image: heroImage,
              }}
            />
          </div>
          <div className={styles.hero_image_mobile}>
            <PreviewCompatibleImage
              imageInfo={{
                alt: "Hero image. A woman and man running happily together.",
                image: heroImageMobile,
              }}
            />
          </div>
          <div className={styles.hero_overlay}>
            <div className={styles.cta_wrapper}>
              <div className={styles.cta}>
                <h1 className={styles.hero_heading}>
                  Your pathway to fitness, longevity, and vitality.
                </h1>
                <div className={styles.cta_button}>
                  <ButtonLink
                    to={
                      "https://squareup.com/appointments/book/1bf614ad-0c45-47cc-af1c-b39946849b62/4D59CZS9NRZJF/date"
                    }
                  >
                    FREE CONSULTATION!
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.superlead_content}>
          <Heading2 centered={true}>Precision Wellness by Dr. T</Heading2>
          <SuperLead>
            Travis Nesbit, MD (Dr. T) brings{" "}
            <em>holistic lifestyle and cutting-edge medical knowledge</em>{" "}
            together to empower you to live a stronger, longer, and healther
            life. The services offered include consultation and health coaching,
            and are extended to both <em>online and local clients</em>. The
            service delivery includes{" "}
            <em>many hours of time dedicated to you</em>, and most importantly,{" "}
            <em>
              easy-to-digest, explicit health and fitness summaries and
              instructions
            </em>
            .
          </SuperLead>
        </div>
      </section>
      <section className={styles.section}>
        <Heading2 centered={true}>
          Dr. T's Precision Wellness Program Offers two categories of services
        </Heading2>
        <div className={styles.headshot}>
          <PreviewCompatibleImage
            imageInfo={{
              alt: "Headshot of Travis Nesbit, MD (Dr. T) smiling.",
              image: doctorHeadshot,
            }}
          />
        </div>
        <div className={styles.services_container_narrow}>
          <div className={styles.service}>
            <Heading3>1. Comprehensive Health Consultation Services</Heading3>
            <Paragraph>
              A one-time consultation that is designed to{" "}
              <em>
                cover every conceivable element of your health and fitness
              </em>
              . You'll have a hand-written, precision, customized roadmap with
              all of the steps necessary to improve your health, fitness, and
              longevity.
            </Paragraph>
            <div className={styles.button_container}>
              <Paragraph>
                <ButtonLink to={comprehensiveHealthConsultationMetadata.slug}>
                  See More
                </ButtonLink>
              </Paragraph>
            </div>
          </div>
          <div className={styles.service}>
            <Heading3>2. Intensive Health Coaching Programs</Heading3>
            <Paragraph>
              As part of the onboarding process,{" "}
              <em>
                all clients who are enrolled in a health coaching program will
                recieve a complimentary comprehensive health consultation.
              </em>
            </Paragraph>
            <Paragraph>
              After the consultation there are <em>three month</em> and{" "}
              <em>six month</em> programs designed to help you implement the
              plans from the consultation, but with constant updates where
              obstracles are met.
            </Paragraph>
            <Paragraph>
              You'll have <em>weekly meetings with Dr. T</em> to ensure you stay
              on track with your goals. And, <em>in addition</em> to the
              on-boarding health consultation there is{" "}
              <em>an off-boarding health follow-up</em> as well.
            </Paragraph>
            <div className={styles.button_container}>
              <Paragraph>
                <ButtonLink to={lifestyleTransformationMetadata.slug}>
                  See More
                </ButtonLink>
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <Heading2 centered={true}>
          Dr. T is well Reviewed by his Precision Wellness clients and his
          medical patients.{" "}
        </Heading2>

        <ReviewRoll featuredOnly={true} count={3} />
      </section>
      <section className={styles.section}>
        <Heading2 centered={true}>
          We will perform a comprehensive review of all of your health data, and
          empower you by helping you understand what it means and what you can
          do about it
        </Heading2>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>
              Learn to Understand and Take Control of Your Own Health
            </Heading3>
            <Lead>
              You are, and will always be, your best health advocate. Having
              powerful health information distilled into easily-digested
              portions is incredibly empowering.
            </Lead>
            <Paragraph>
              Dr. T will empower you with an incredibly deep knowledge of your
              current state of health, and where your health is headed. With
              this information you can work together with Dr. T to change it and
              leave a longer, healthier, more fit life.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_icon}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>Improve Your Blood Pressure and Cholesterol</Heading3>
            <Lead>
              Chronic medical diseases such as elevated blood pressure and
              elevated cholesterol are extremely lifestyle responsive. Most
              people just need the right guidance.
            </Lead>
            <Paragraph>
              Dr. T can help you leverage lifestyle, diet, and natural
              supplements (where appropriate) to improve your blood pressure and
              cholesterol.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_icon}>
              <FontAwesomeIcon icon={faHeartbeat} />
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>
              Improve Your Blood Sugar, Possibly Even Reverse Diabetes
            </Heading3>
            <Lead>
              Blood sugar elevations are bad, and the higher the elevation the
              worse it is. If you've got insulin resistance, whether you know it
              or not, it should be a top priority in your life. If you've got
              diabetes, your life has to change now.
            </Lead>
            <Paragraph>
              You can absolutely avoid diabetes even if you have the
              predisposition, and some people with it can even beat it. Dr. T
              will help show you how.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_icon}>
              <FontAwesomeIcon icon={faSyringe} />
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>Get Off or Reduce Medications</Heading3>
            <Lead>
              Dr. T believes strongly that people should take necessary
              medications; they can be life saving. But, there are times where
              lifestyle optimization can completely eliminate the need.
            </Lead>
            <Paragraph>
              Blood pressure and cholesterol elevations are chief among those
              chronic medical disease that can often by treated by lifestyle
              alone. It's not uncommon for a person who underwent a powerful
              lifestyle change to eliminate the need for those medications
              altogether.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_icon}>
              <FontAwesomeIcon icon={faCapsules} />
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>Learn More from Imaging</Heading3>
            <Lead>
              Excellent and inexpensive technologies that few people know about
              can easily be leveraged to improve the precision understanding of
              your current state of health.
            </Lead>
            <Paragraph>
              Dr. T can help you locate excellent technologies of this sort and
              at an excellent price. You'll need your doctor to put in the
              request, but Dr. T will help you interpret the results and guide
              you on what next steps should be taken if abnormalities are
              discovered.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_icon}>
              <FontAwesomeIcon icon={faXRay} />
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>Understand your Laboratory Data</Heading3>
            <Lead>
              Peer into the microscopic world and discover risk factors not
              revealed to you by standard testing.
            </Lead>
            <Paragraph>
              There are a plethora of easily accessible laboratory tests that
              are also relatively inexpensive that people don't know about and
              insurance-dependent doctors don't order. Some of them can help
              identify very dangerous chronic medical disease risks at an early
              stage, such as approaching diabetes (even if your A1c is normal)
              and heart disease risk (even if your regular cholesterol panel is
              normal). Dr. T will help you find these tests at a center near you
              and interpret them. An action plan will be created for you based
              on these results.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_image}>
              <div className={styles.display_icon}>
                <FontAwesomeIcon icon={faVials} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>Quantify Your Cardiovascular Fitness</Heading3>
            <Lead>
              Your cardiovascular fitness can be quantified and categorized in a
              way that strongly predicts your 10-year risk of death.
            </Lead>
            <Paragraph>
              There are ways to test your cardiovascular fitness and even
              produce a 10-year mortality prediction! It's a bit morbid to
              predict your risk of death in the next 10 years, but it's
              decidedly useful information and with the right guidance this
              information can be made avaialble to you with little effort and no
              special referrals to doctors required.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_image}>
              <div className={styles.display_icon}>
                <FontAwesomeIcon icon={faRunning} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>
              Improve Your Muscular Fitness and Boost your Metabolism
            </Heading3>
            <Lead>
              In addition to health benefits, the real secret to a lean physique
              is in the metabolism-boosting benefits of muscle.
            </Lead>
            <Paragraph>
              Muscular fitness is greatly under appreciated. Not only does it
              work wonders for your quality of life by boosting metabolism and
              keeping you leaner, it also has been recently demonstrated to
              potentially have a stronger predictive value than cardiovascular
              fitness. Dr. T will help you establish a metabolism-boosting,
              life-improving muscular fitness regimen.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_image}>
              <div className={styles.display_icon}>
                <FontAwesomeIcon icon={faDumbbell} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.display_content}>
            <Heading3>Optimize Your Diet for Sustainability</Heading3>
            <Lead>
              Diet programs routinely fail miserably. And, the reason why is
              simple: they're not sustainable.
            </Lead>
            <Paragraph>
              There is no way around it, your health is probably mostly your
              diet. However, not necessarily in the way people think. With Dr.
              T's guidance you can learn how to have an enjoyable relationship
              with food while improving health, fitness, and body composition.
            </Paragraph>
          </div>
          <div className={styles.display_content}>
            <div className={styles.display_image}>
              <div className={styles.display_icon}>
                <FontAwesomeIcon icon={faAppleAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.get_started_content}>
          <h2 className={styles.get_started_heading}>Get Started Now!</h2>
          <ContactForm />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.newsletter_content}>
          <Heading2 centered={true}>
            Don't Forget to Signup for Our Newsletter!
          </Heading2>
          <Newsletter />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  query IndexPageQuery {
    heroImage: file(relativePath: { eq: "hero_background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    heroImageMobile: file(relativePath: { eq: "hero_background_mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    doctorHeadshot: file(relativePath: { eq: "drt_headshot_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
