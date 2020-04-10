import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { first } from "lodash"

import Layout from "./../../../components/Layout"
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  SuperLead,
  Link,
  ButtonLink,
} from "./../../../components/PageElements"
import Newsletter from "./../../../components/Newsletter"
import PreviewCompatibleImage from "./../../../components/PreviewCompatibleImage"
import RetrieveSiteMetadata from "./../../../components/SiteMetadata"
import SEO from "./../../../components/SEO"

import styles from "./index.module.scss"

const ComprehensiveHealthConsultationPage = () => {
  const { docReviewingLabs, maleBeforeAfter } = useStaticQuery(query)
  const {
    navigation: { pages: allPages, resources },
  } = RetrieveSiteMetadata()
  const pageMetadata = first(
    allPages.filter(p => p.key === "comprehensive-health-consultation")
  )
  const labPageMetadata = first(resources.filter(r => r.key === "health-labs"))
  const bootCampMetadata = first(
    allPages.filter(p => p.key === "lifestyle-transformation-boot-camp")
  )

  return (
    <Layout>
      <SEO
        title={pageMetadata.title}
        description={pageMetadata.description}
        pathname={pageMetadata.slug}
        image={pageMetadata.ogImage}
      />
      <header>
        <Heading1>{pageMetadata.title}</Heading1>
        <div className={styles.lead_container}></div>
      </header>
      <section className={styles.section}>
        <Paragraph>
          <PreviewCompatibleImage
            imageInfo={{
              alt:
                "Picture of a doctor writing notes and many overlayed graphs and charts.",
              image: docReviewingLabs,
            }}
          />
        </Paragraph>
        <SuperLead>
          <blockquote>
            The process is simple. There is a quick introductory call, a
            detailed interview, and then a follow-up. At the end of this
            process, you'll understand your current state of health better than
            you ever thought possible and have an invaluable, precision roadmap
            for the future.
          </blockquote>
        </SuperLead>
      </section>

      <section className={styles.section}>
        <Heading2>Program Overview</Heading2>
        <Paragraph>
          The {pageMetadata.title} is a truly excellent, fully comprehensive,
          and unique health-review. The process is simple. There is a quick
          introductory call, a detailed interview, and then a follow-up. At the
          end of this process, you'll understand your current state of health
          better than you ever thought possible and have an invaluable,
          precision roadmap for the future.
        </Paragraph>
        <Paragraph>
          The consultation itself consists of three parts: a quick introductory
          discussion, a detailed interview, and a follow-up discussion where the
          information gathered is turned into a great discussion and a roadmap
          for better health and fitness in the future.
        </Paragraph>
        <SignUp />
      </section>
      <section className={styles.section}>
        <Heading3>Stage 1: Introductory Phone Call</Heading3>
        <Paragraph>
          The {pageMetadata.title} is kind of a big deal. And, as a result, it
          requires a bit of work even on the clients end. Dr. T wants to be able
          to provide the best service possible for every one of his clients, and
          in order to do that he needs the right information at his disposal.
          So, the introductory call is intended specifically to help the client
          properly prepare for their health evaluation.
        </Paragraph>
        <Paragraph>
          At this point the client will need to start thinking about, and
          gathering information about:
          <ul className={styles.display_list}>
            {[
              "Health Goals",
              "Fitness Goals",
              "Current Life Routine",
              "Fitness Routine",
              "Exercise equipment availability",
              "Dietary Habits",
              "Dietary Preferences",
              "Supplements",
              "Medical records",
              "Vaccination Records",
              "Surgical Records",
              "Health Screening History",
              "Medications",
              "Imaging",
              "And More...",
            ].map(li => {
              return <li className={styles.display_list_item}>{li}</li>
            })}
          </ul>
        </Paragraph>
        <Paragraph>
          Where there are deficiencies in information, Dr. T will help the
          client access the proper lab tests, imaging tests, fitness tests, and
          more so that the formal client interview at a future date is as
          productive as possible. Of note, if you need assistance in acquiring
          updated lab data, then you can use our direct-to-consumer affiliate
          purchase links on our{" "}
          <Link to={labPageMetadata.slug}>{labPageMetadata.title}</Link> page.{" "}
          <em>NOTE: </em>At the time this was written, an extremely
          comprehensive set of labs &mdash; well beyond what you've ever seen
          from your primary care doctor in almost all cases &mdash; will cost
          about $300 without any insurance.{" "}
          <em>Yes, it's a really good deal.</em> No, we don't fully understand
          why labs run through insurance are often so incredibly expensive. But,
          that rant will ultimately land itself in a blog post at some point.
        </Paragraph>
        <Paragraph>
          Once this information is put together, it must be submitted to Dr. T{" "}
          <em>before the formal client interview takes place.</em>
        </Paragraph>
      </section>
      <section className={styles.section}>
        <Heading3>Stage 2: Client Interview</Heading3>
        <Paragraph>
          The client interview is the first formal meeting of significance.{" "}
        </Paragraph>
        <Paragraph>
          Using the information gathered by the client and submit to Dr. T as a
          foundation for our discussion, an incredibly detailed client interview
          will commence. Up to two uninterrupted hours are dedicated to the
          client interview. This interview will serve as the foundation of Dr.
          T's behind-the-scenes work.
        </Paragraph>
        <Paragraph>
          The data and history collected during the interview will then be
          further leveraged by Dr. T. He will use that information to generate a
          detailed report on the client's current state of health, and an
          easy-to-follow action plan on how to improve health and fitness to
          improve life quality and longevity.
        </Paragraph>
      </section>
      <section className={styles.section}>
        <Heading3>Stage 3 (Final): Follow-Up Discussion</Heading3>
        <Paragraph>
          The follow-up discussion is the final formal meeting of significance.
        </Paragraph>
        <Paragraph>
          This is where the client and Dr. T put it all together as a team. The
          large set of health data, fitness data, lifestyle data, and history
          will have been condensed into a concise picture of the clients current
          overall state of health and health trajectory, including fitness.
        </Paragraph>
        <Paragraph>
          Health and fitness issues identified will be laid out clearly. Where
          they are identified, an action plan that the client can use to guide
          them to a better state of health and fitness will accompany the
          identified issues.
        </Paragraph>
      </section>
      <section className={styles.section}>
        <SignUp />
        <div className={styles.beyond_stage_3}>
          <Heading3>Beyond Stage 3</Heading3>
          <Paragraph>
            It's not uncommon for clients to develop questions or to need
            additional guidance after they've had their formal follow-up
            discussion. We have ways to easily accommodate that.
          </Paragraph>
          <Paragraph>
            Any test or results specifically recommended by Dr. T at the time of
            the follow-up discussion will be reviewed for <em>free</em> and your
            report will be updated.
          </Paragraph>
          <Paragraph>
            Inquiries and requests for additional consultation for any client
            who has been seen within the last year can be handled through an a
            la carte 1-hour follow-up visit. People who have not been seen in
            the last year or who are new clients do not have access to these
            1-hour consultations.
          </Paragraph>
          <Paragraph>
            <PreviewCompatibleImage
              imageInfo={{
                alt: "Before and after picture of a man",
                image: maleBeforeAfter,
              }}
            />
            <div className={styles.subtext}>
              While excellent results should be achieved when putting in effort
              and following the plan, the before and after state demonstrated in
              this stock photo should not be taken as an expectation of results.
              Results are not guaranteed. This photo was chosen to represent the{" "}
              {bootCampMetadata.title} to represent a realistic approximation of
              what most clients may see with sufficient effort.
            </div>
          </Paragraph>
          <Paragraph>
            Clients who decide they want a partner to hold them accountable and
            an expert to help them navigate the nuances of lifestyle change can
            apply the entire total of their {pageMetadata.title} toward one of
            our <Link to={bootCampMetadata.slug}>{bootCampMetadata.title}</Link>{" "}
            packages.
          </Paragraph>
          <Paragraph>
            If any of the above scenarios describes your current situation
            well, please contact us directly.
          </Paragraph>
        </div>
      </section>

      <section className={styles.section}>
        <Heading2>Take a moment to signup for our newsletter!</Heading2>
        <Newsletter />
      </section>
    </Layout>
  )
}

const PriceDisplay = ({ price }) => {
  return (
    <div className={styles.price}>
      <em>${price.toFixed(2)}</em>
    </div>
  )
}

const SignUp = () => {
  return (
    <div className={styles.sign_up}>
      <div>
        <h2 style={{ textAlign: "center" }}>
          Comprehensive Health Consultation
        </h2>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <Paragraph>
            An introductory call, a two-hour interview, a detailed report
            created by Dr. T, and a powerful follow-up discussion.
          </Paragraph>
        </div>
        <PriceDisplay price={1140} />
        <div className={styles.sign_up_button}>
          <ButtonLink to="https://checkout.square.site/buy/MXWTPZ2DZNRSD6JAHMGRCXNA">
            Sign-up Now!
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

const query = graphql`
  query ComprehensiveHealthReviewPageQuery {
    docReviewingLabs: file(relativePath: { eq: "og_doc_reviewing_labs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    maleBeforeAfter: file(relativePath: { eq: "og_before_after_male.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ComprehensiveHealthConsultationPage
