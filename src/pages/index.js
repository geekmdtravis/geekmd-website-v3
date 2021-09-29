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
          Hello, world! <em>^_^</em>
        </Heading1>
      </header>
      <section className={styles.section}>
        <SuperLead>
          I don't have much to talk about at this time. Quite busy with{" "}
          <em>life stuff</em>. So, take a peek at my About page and look me up
          on LinkedIn to say hi!
        </SuperLead>
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
