import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { first } from "lodash";

import Layout from "./../../../components/Layout";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Lead,
  SuperLead,
  Link,
  ButtonLink
} from "./../../../components/PageElements";
import Newsletter from "./../../../components/Newsletter";
import PreviewCompatibleImage from "./../../../components/PreviewCompatibleImage";
import RetrieveSiteMetadata from "./../../../components/SiteMetadata";
import SEO from "./../../../components/SEO";

import styles from "./index.module.scss";

const LifestyleTransformationBootCampPage = () => {
  const { femaleBeforeAfter, maleBeforeAfter } = useStaticQuery(query);
  const {
    navigation: { pages: allPages, resources }
  } = RetrieveSiteMetadata();
  const pageMetadata = first(
    allPages.filter(p => p.key === "lifestyle-transformation-boot-camp")
  );
  const comprehensiveWellnessMetadata = first(
    allPages.filter(p => p.key === "comprehensive-health-consultation")
  );
  const labPageMetadata = first(resources.filter(r => r.key === "health-labs"));
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
        <Heading2>Program Overview</Heading2>
        <Paragraph>
          This is a comprehensive plan that includes a full health review during
          on-boarding, a health coaching plan, and an off-boarding health
          review. Dr. T brings his experience in providing world-class health
          assessments right to you.
        </Paragraph>
        <Paragraph>
          <PreviewCompatibleImage
            imageInfo={{
              alt: "Before and after picture of a woman",
              image: femaleBeforeAfter
            }}
          />
          <div className={styles.subtext}>
            While excellent results should be achieved when putting in effort
            and following the plan, the before and after state demonstrated in
            this stock photo should not be taken as an expectation of results.
            Results are not guaranteed. This photo was chosen to represent the{" "}
            {pageMetadata.title} to represent a realistic approximation of what
            most clients may see with sufficient effort.
          </div>
        </Paragraph>
        <SuperLead>
          <blockquote>
            In three months with Dr. T you will learn more about your health,
            your body, and how to take control of both than you will have in
            your entire life previously.
          </blockquote>
        </SuperLead>
        <SignUp />
      </section>
      <div className={styles.program}>
        <section className={styles.section}>
          <Heading3>Stage 1: On-boarding</Heading3>
          <Paragraph>
            The onboarding process includes the entire{" "}
            <Link to={comprehensiveWellnessMetadata.slug}>
              {comprehensiveWellnessMetadata.title}
            </Link>
            . We <em>highly recommend reviewing that page in detail</em> to
            understand what you're getting. The{" "}
            {comprehensiveWellnessMetadata.title} will serve as the foundational
            knowledge from which to build out your customized three-month boot
            camp program.
          </Paragraph>
          <Paragraph>
            A brief overview of some of what comes with this portion is as
            follows:
            <ul className={styles.display_list}>
              {[
                "Three-part, 2-3 hour, in-depth client interview with Dr. T",
                "Medication review",
                "Supplement review",
                "Laboratory data review",
                "Imaging data review",
                "Biometric data review",
                "Health records review",
                "Gender appropriate health screening review",
                "Age appropriate health screening review",
                "Routine vaccination review",
                "Travel vaccination review",
                "A custom, comprehensive, written health assessment",
                "A precision action-plan for improving your health and fitness",
                "And more..."
              ].map(li => {
                return <li className={styles.display_list_item}>{li}</li>;
              })}
            </ul>
          </Paragraph>
        </section>
        <section className={styles.section}>
          <Heading3>Stage 2: Lifestyle Transformation Boot Camp</Heading3>
          <Paragraph>
            The lifestyle transformation itself has less moving parts, but it's
            a lot more work. It's a constant effort for both the client and Dr.
            T. However, that work is well worth it. This is guidance and
            accountabililty, and it will take the knowledge gained during the{" "}
            {comprehensiveWellnessMetadata.title} and turn it into life-changing
            progress.
          </Paragraph>
          <Paragraph>
            <ul className={styles.display_list}>
              {[
                "One hour of phone or webcam discussion every week with Dr. T for either thirteen weeks (3 month) or twenty-six weeks (6 month).",
                "Dynamic, customized dietary plan",
                "Dynamic, customized cardiovascular training plan that responds to your progress",
                "Dynamic, customized resistance training plan that responds to your progress",
                "A weekly progress report."
              ].map(li => {
                return <li className={styles.display_list_item}>{li}</li>;
              })}
            </ul>
          </Paragraph>
        </section>
        <section className={styles.section}>
          <Heading3>Stage 3: Off-boarding</Heading3>
          <ul className={styles.display_list}>
            <li className={styles.display_list_item}>
              One hour of discussion with Dr. T
            </li>
            <li className={styles.display_list_item}>Medication review</li>
            <li className={styles.display_list_item}>Supplement review</li>
            <li className={styles.display_list_item}>Laboratory data review</li>
            <li className={styles.display_list_item}>Biometric data review</li>
            <li className={styles.display_list_item}>
              Gender appropriate health screening review{" "}
            </li>
            <li className={styles.display_list_item}>
              A precision action-plan for improving your health and fitness
            </li>
          </ul>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.client_obligations}>
          <Heading2>Client Obligations</Heading2>
          <Lead>
            Make no mistake about it, this is an intensive program. It is for
            people who want to make serious changes in their lives{" "}
            <em>and keep them</em> forever. So, let it come as no surprise that
            you will be expected to meet certain obligations.
          </Lead>
        </div>
      </section>
      <section className={styles.section}>
        <Heading3>Pre-onboarding Stage</Heading3>
        <Paragraph>
          Before you can be successfully on-boarded as a client, we'll need to
          ensure you can take care of the following prerequisites.{" "}
          <em>
            Anybody who cannot commit to these prerequisites will be dropped
            from the program
          </em>
          !
        </Paragraph>
        <Heading4>Laboratory Tests</Heading4>
        <Paragraph>
          <ul className={styles.display_list}>
            <li className={styles.display_list_item}>
              Complete Blood consultation
            </li>
            <li className={styles.display_list_item}>
              Comprehensive metabolic panel
            </li>
            <li className={styles.display_list_item}>Hemoglobin A1c</li>
            <li className={styles.display_list_item}>Lipid Panel</li>
            <li className={styles.display_list_item}>Urinalysis</li>
            <li className={styles.display_list_item}>Insulin</li>
            <li className={styles.display_list_item}>Testosterone</li>
            <li className={styles.display_list_item}>Estradiol</li>
            <li className={styles.display_list_item}>
              TSH with Reflex to T4 (thyroid)
            </li>
            <li className={styles.display_list_item}>Lipoprotein (a)</li>
          </ul>
        </Paragraph>
        <Paragraph>
          <em>You can acquire these in whatever means you prefer</em>, including
          through your primary doctor. If you do not have a primary doctor or
          would prefer to purchase these lab tests without going through your
          doctor, then you can do so using the links in our{" "}
          <Link to={labPageMetadata.slug}>{labPageMetadata.title}</Link> page.
          We do not sell labs, we have an affiliate link. At the time of writing
          this the <em>on-boarding labs cost roughly $379</em> when acquired
          through the links we provided.
        </Paragraph>
        <Heading4>Health Equipment</Heading4>
        <Paragraph>
          You'll be required to check your blood pressure under using proper
          technique at least once per week. For this, we highly suggest
          acquiring a blood pressure cuff.
        </Paragraph>
        <Heading4>Health Information</Heading4>
        <Paragraph>
          You'll want to gather as much health information about yourself as you
          can, including medications, family history of illness or disease,
          current diagnoses, past diagnoses, past hospitalizations, past
          surgeries, past procedures, vaccination records and travel plans, and
          have it prepared for submission.
        </Paragraph>
      </section>
      <section className={styles.section}>
        <Heading3>On-boarding Stage</Heading3>
        <Paragraph>
          The on-boarding process is time consuming. We will spend about 90 to
          120 minutes together discussing your health, life, and fitness in
          great detail. For every hour Dr. T spends with you, he'll spend 1-2
          more hours reviewing and preparing on his own time! So,{" "}
          <em>
            you must allocate an appropriate amount of time and schedule with us
          </em>{" "}
          and be able to commit to it!
        </Paragraph>
      </section>
      <section className={styles.section}>
        <Heading3>Active Client Stage</Heading3>
        <Paragraph>
          While you're actively enrolled as a client of Dr. T's Precision
          Wellness program you'll be required to do the following:
          <ul className={styles.display_list}>
            <li className={styles.display_list_item}>
              Schedule a weekly phone or video conference and stick to it
            </li>
            <li className={styles.display_list_item}>
              Perform all planned exercises
            </li>
            <li className={styles.display_list_item}>Keep a food log</li>
            <li className={styles.display_list_item}>
              Journal any troubles or concerns you have with the current plan
            </li>
          </ul>
        </Paragraph>
      </section>
      <section className={styles.section}>
        <Heading3>Off-boarding Stage</Heading3>
        <Paragraph>
          Upon successfully completing the program, we'll want to ensure that
          the changes we made have resulted in improvements in biomarkers.{" "}
          <em>This is not always the case</em> for a number of reasons. For
          example, most people will have improvements in their cholesterol when
          using a calorie-balanced diet that may contain higher saturated fat
          content. But, some may actually see an increase despite the fact that
          they are calorie and lifestyle balance due to their physiology. So, we
          want to catch it if it happens. If it does happen, we'll revise the
          dietary component for you <em>at no additional charge</em>.
        </Paragraph>
        <Heading4>Laboratory Tests</Heading4>
        <Paragraph>
          The lab data that is most likely to change as a result of lifestyle
          optimization is outlined below. Many clients will want to trend this
          data. The off-boarding lab data that would benefit and individual may
          vary, and if so the recommendations will too, but anticipate these as
          the likely tests to check at the end of the program:
        </Paragraph>
        <Paragraph>
          <ul className={styles.display_list}>
            <li className={styles.display_list_item}>
              Complete Blood consultation
            </li>
            <li className={styles.display_list_item}>
              Comprehensive metabolic panel
            </li>
            <li className={styles.display_list_item}>Hemoglobin A1c</li>
            <li className={styles.display_list_item}>Lipid Panel</li>
            <li className={styles.display_list_item}>Urinalysis</li>
            <li className={styles.display_list_item}>Insulin</li>
          </ul>
        </Paragraph>
      </section>
      <section className={styles.section}>
        <SignUp />
        <Paragraph>
          <PreviewCompatibleImage
            imageInfo={{
              alt: "Before and after picture of a man",
              image: maleBeforeAfter
            }}
          />
          <div className={styles.subtext}>
            While excellent results should be achieved when putting in effort
            and following the plan, the before and after state demonstrated in
            this stock photo should not be taken as an expectation of results.
            Results are not guaranteed. This photo was chosen to represent the{" "}
            {pageMetadata.title} to represent a realistic approximation of what
            most clients may see with sufficient effort.
          </div>
        </Paragraph>
      </section>
      <section className={styles.section}>
        <div className={styles.bonus}>
          <Heading2>
            <span style={{ textTransform: "uppercase" }}>
              Successful Completion Bonus!!
            </span>{" "}
            We want to take care of people who work hard and represent our
            service well.
          </Heading2>
          <SuperLead>
            If you complete our program successfully complying with all of our
            requirements, ordered labs through our affiliate link, and if you
            leave a review &mdash;doesn't have to be a good review although we
            have confidence you'll be pleased &mdash;{" "}
            <em>we will reimburse you for all of your lab expenses</em> that
            were incurred through our affiliate link. That is a value of{" "}
            <em>over $500</em> at the time this page was created. If you
            acquired your labs through your primary care provider or some other
            means, we'll cover up to $250.{" "}
            <em>
              Please keep your laboratory receipts and be prepared to submit
              them for review
            </em>
          </SuperLead>
          <Paragraph>
            Some people may wonder why we don't extend this to all lab costs.
            And, the reason is simple. Labs acquired through a traditional
            route, even with insurance, often have astronomical bills. We just
            can't afford that.
          </Paragraph>
        </div>
      </section>
      <section className={styles.section}>
        <Heading2 centered={true}>
          Take a moment to signup for our newsletter!
        </Heading2>
        <Newsletter />
      </section>
    </Layout>
  );
};

export default LifestyleTransformationBootCampPage;

const PriceDisplay = ({ price }) => {
  return (
    <div className={styles.price}>
      <em>${price.toFixed(2)}</em>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className={styles.sign_up}>
      <div className={styles.sign_up_service}>
        <h2 style={{ textAlign: "center" }}>3 Months</h2>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <Paragraph>
            Intensive consultation plus health coaching over 13 follow-up
            sessions with Dr. T
          </Paragraph>
        </div>
        <PriceDisplay price={4590} />
        <div className={styles.sign_up_button}>
          <ButtonLink to="https://checkout.square.site/buy/36VM4YQ2GGEKJBCR76RZV6FV">
            Sign-up Now!
          </ButtonLink>
        </div>
      </div>
      <div className={styles.sign_up_service}>
        <h2 style={{ textAlign: "center" }}>6 Months</h2>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <Paragraph>
            Intensive consultation plus health coaching over 26 follow-up
            sessions with Dr. T
          </Paragraph>
        </div>
        <PriceDisplay price={7200} />
        <div className={styles.sign_up_button}>
          <ButtonLink to="https://checkout.square.site/buy/F4HNRBK7VFYEIESCYA55RL6V">
            Sign-up Now!
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

const query = graphql`
  query LifestyleTransformationBootCampPageQuery {
    femaleBeforeAfter: file(
      relativePath: { eq: "og_before_after_female.jpg" }
    ) {
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
`;
