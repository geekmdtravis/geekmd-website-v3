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
        <Heading1>
          Geek<em>MD</em>
        </Heading1>
        <div className={styles.hero}>
          <PreviewCompatibleImage
            imageInfo={{ alt: "Hero", image: heroImage }}
          />
        </div>
      </header>
      <section className={styles.section}>
        <SuperLead>
          Health is hard. Technology is hard. Bringing the two together has
          proven monumentally challenging. But, those challenges can be overcome
          with the right skillset. Travis Nesbit, MD (the <i>Geek MD</i>) brings
          the <em>range of skills</em> and <em>depth of knowledge</em> necessary
          to solve complex problems at scale.
        </SuperLead>
      </section>
      <section className={styles.section}>
        <Heading2 centered={true}>Contact GeekMD</Heading2>
        <div className={styles.contact_content}>
          <ContactForm></ContactForm>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.newsletter_content}>
          <Heading2 centered={true}>Sign Up For the Newsletter</Heading2>
        </div>
        <Newsletter />
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
