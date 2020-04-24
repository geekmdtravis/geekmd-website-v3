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
  Heading1,
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
      <header>
        <PreviewCompatibleImage imageInfo={{ alt: "Hero", image: heroImage }} />
        <Heading1>
          geek<em>md</em> == competence
        </Heading1>
      </header>
      <section className={styles.section}>
        <SuperLead>
          You've got health data and health IT challenges. Travis Nesbit, MD
          (GeekMD) brings you the competence you need.
        </SuperLead>
        <Paragraph>
          It really doesn't matter what the task is. When you've got a question
          or a problem that lives on the interface of information technology and
          medicine, GeekMD brings the <em>range</em> and <em>depth</em> of
          knowledge necessary to get things done.{" "}
        </Paragraph>
      </section>
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  query IndexPageQuery {
    heroImage: file(relativePath: { eq: "home_hero.jpg" }) {
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
