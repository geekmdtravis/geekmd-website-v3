import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { first } from "lodash"
import Layout from "./../../components/Layout"
import { Heading1, SuperLead, Paragraph } from "./../../components/PageElements"
import SEO from "./../../components/SEO"
import RetrieveSiteMetadata from "./../../components/SiteMetadata"
import styles from "./index.module.scss"

const AboutPage = () => {
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
      <section className={styles.section}>
        <Paragraph>
          This section is under development, so here's a copy-paste from my
          LinkedIn page.
        </Paragraph>
      </section>
      <SuperLead>
        <section className={styles.section}>
          <blockquote>
            I am an ABIM certified internal medicine physician with an intense
            passion for medicine, information technology, fitness and the
            intersection of those fields. Despite my long clinical hours, I am
            reasonably proficient in several popular programming languages,
            full-stack software development, network and IT administration, have
            some experience in reverse engineering (primarily in capture the
            flag events) and am actively involved in acquiring a professional
            data scientist certification through IBM. I enjoy clinical medicine,
            but I’m interested in leveraging my intense passion, a broad range
            of experiences, and a unique skill set to bolster the creation of
            valuable products that solve major health problems at scale.{" "}
          </blockquote>
        </section>
      </SuperLead>
    </Layout>
  )
}

export default AboutPage
