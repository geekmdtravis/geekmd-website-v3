import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { first } from "lodash"
import Layout from "./../../components/Layout"
import PreviewCompatibleImage from "./../../components/PreviewCompatibleImage"
import {
  Heading1,
  Heading2,
  Heading3,
  Link,
  Lead,
  SuperLead,
  Paragraph,
} from "./../../components/PageElements"
import SEO from "./../../components/SEO"
import RetrieveSiteMetadata from "./../../components/SiteMetadata"
import styles from "./index.module.scss"

const AboutPage = () => {
  const { headshot: drtHeadshot, bodyshot: drtBodyShot } = useStaticQuery(query)
  const {
    navigation: { pages },
  } = RetrieveSiteMetadata()
  const aboutMetadata = first(pages.filter(p => p.key === "about"))
  return (
    <Layout>
      <SEO
        title={aboutMetadata.title}
        description={aboutMetadata.description}
        pathname={aboutMetadata.slug}
        image={aboutMetadata.ogImage}
      />
      <Heading1>About Page</Heading1>
    </Layout>
  )
}

export default AboutPage
const query = graphql`
  query AboutDrTQuery {
    headshot: file(relativePath: { eq: "drt_headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bodyshot: file(relativePath: { eq: "drt_with_jay_cutler.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
