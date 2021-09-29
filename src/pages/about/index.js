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
          My name is <em>Travis Nesbit</em> and I am a software developer and
          medical doctor specializing in internal medicine.{" "}
        </Paragraph>
        <Paragraph>
          At present, I do not see too many patients. I am a full-time, full
          stack software engineer helping to revolutionize the way we solve
          health problems inside of the California Department of
          Corrections'(CDCR) healthcare limb, the California Correctional Health
          Care Services (CCHCS). Not to brag, but our team is doing some cool
          stuff. We're <em>improving quality of care</em> for patients,
          improving <em>quality of life</em> for providers, and{" "}
          <em>saving big bucks for tax payers</em>. ^_^
        </Paragraph>
        <Paragraph>
          I'm also currently enrolled in a MS of computer science and
          maintaining a 4.0 GPA at Georgia Tech. I really enjoy software
          engineering and plan to continue to self-educate to improve my
          capabilities so that I can continue to drive innovation in the health
          tech space.
        </Paragraph>
        <Paragraph>
          In my free time I lift heavy weights, ride dirt bikes, practice
          brazilian jiu jitsu (less often these days due to time constraints),
          and keep a ton of pets. How many is a ton? Its kind of a small zoo: 3
          dogs, 3 parakeets, 3 snakes, 6 poison dart frogs, a tortoise, and a
          Halloween Moon Crab.
        </Paragraph>
        <Paragraph>
          This website is effectively on hold. I am quite busy and not currently
          performing any consultation or development work. But, I wanted to
          leave this up for anybody who would like to reach and out connect.
        </Paragraph>
      </section>
    </Layout>
  )
}

export default AboutPage
