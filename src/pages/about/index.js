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
      <header className={styles.header}>
        <Heading1>{aboutMetadata.title}</Heading1>
      </header>
      <section className={styles.section}>
        <SuperLead>
          <Paragraph>
            <PreviewCompatibleImage
              imageInfo={{
                alt: "Dr. Travis Nesbit (Dr. T) headshot)",
                image: drtHeadshot,
              }}
            />
          </Paragraph>
          <Paragraph>
            <blockquote>
              <em>
                I want to help motivated people live the lives they deserve
              </em>
              . Longer, stronger, healthier lives of greater quality and higher
              vitality. If that's you, and you bring the motivation,{" "}
              <em>we will get the results</em>! &mdash; Travis Nesbit, MD (Dr.
              T)
            </blockquote>
          </Paragraph>
        </SuperLead>
      </section>
      <section className={styles.section}>
        <Heading2>Summary</Heading2>
        <Paragraph>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              ISSA Certified <em>Personal Trainer</em> (certification allowed to
              lapse)
            </li>
            <li className={styles.list_item}>
              <em>Bachelors of Science (B.S.) in Biology</em> from California
              State University, San Marcos
            </li>
            <li className={styles.list_item}>
              <em>Medical Doctorate (M.D.)</em> from the University of
              California, Irvine
            </li>
            <li className={styles.list_item}>
              Internal Medicine Trained at the University of California, Irvine
            </li>
            <li className={styles.list_item}>
              <em>Board Certified in Internal Medicine</em> by the American
              Board of Internal Medicine
            </li>
            <li className={styles.list_item}>
              Assistant Professor of Medicine at the{" "}
              <em>
                University of California Irvine's Executive Health Program
              </em>{" "}
              at the Susan Samueli Integrative Health Institute
            </li>
            <li className={styles.list_item}>
              Physician, Forward (GoForward LLC)
            </li>
            <li className={styles.list_item}>Physician, Concentra</li>
            <li className={styles.list_item}>
              <em>NRCME Certified</em> Medical Examiner (Department of
              Transportation)
            </li>
            <li className={styles.list_item}>
              Health Technology Consultant to the American Medical Association
            </li>
          </ul>
        </Paragraph>
        <Heading2>The Early Years</Heading2>
        <Lead>
          <blockquote>
            ...the obvious one that stands out in this context is his history as
            an ISSA Certified Personal Trainer.{" "}
            <em>This job was literally life-redefining for him</em>.
          </blockquote>
        </Lead>
        <Paragraph>
          Dr. T is the{" "}
          <em>first and only of six children to attend and graduate</em>{" "}
          college. <em>He was driven to it by a natural curiosity</em>, and the
          desire to understand and improve, especially in areas where the human
          condition is improved.
        </Paragraph>
        <Paragraph>
          Surprisingly, Dr. T's <em> first intellectual love</em> was{" "}
          <em>computer science</em>. He initially signed up for college courses
          with the intent of becoming a computer programmer. After acquiring his
          first computer at around the age of sixteen,{" "}
          <em>he immediately fell in love with understanding how they work</em>.
          It wasn't long before he was taking PC's apart and putting them
          together again. And, not much longer beyond that he began teaching
          himself how to program. However,{" "}
          <em>
            he was effectively chased out of the field by fear-mongers in the
            news media
          </em>
          . As a young, naive person, he bought into the claim that developer
          jobs would be entirely outsourced in a short matter of time.{" "}
          <em>That would have been a rough way to start out life</em> as an
          adult. So, he started branching out.
        </Paragraph>
        <Paragraph>
          After quite a bit of introspection and exploration,{" "}
          <em>
            he eventually determined that he might like to become a physician
          </em>
          . So, he ultimately went to college with the plan to earn a B.S. in
          biology and complete all necessary pre-medical prerequisites as he
          explored that further.
        </Paragraph>
        <Paragraph>
          During this time, he had to find ways to make ends meet. Dr. T was
          blessed with a loving family, but{" "}
          <em>wasn't in the position to benefit from financial support</em>. So,
          he started out doing what any other reasonable kid just north of 18
          might&mdash;he started looking for jobs to earn some income,{" "}
          <em>but also where he could eat for free</em>.
        </Paragraph>
        <Paragraph>
          He ultimately found a great job making just north of minimum wage at
          the Hometown Buffet. And, while he meals were a major benefit,{" "}
          <em>
            he quickly realized that minimum wage wasn't doing as much for him
            as he had hoped
          </em>
          . So, he began to think a little bit more like an entrepreneur.
        </Paragraph>
        <Paragraph>
          <em>
            He was an avid weightlifter, loved computers, and typically learned
            things fairly quickly
          </em>
          . So, he combined those personal strengths to create many sources of
          income that were able to support his life as a commuting college
          student.{" "}
          <em>
            He began fixing computers, teaching physics, working in an
            immunology and virology lab, and personal training.
          </em>{" "}
          We're pretty sure that fits at least one{" "}
          <Link to="https://www.urbandictionary.com/define.php?term=hustling">
            Urban Dictionary
          </Link>{" "}
          definition of "hustling".
        </Paragraph>
        <Paragraph>
          While he really loved all of those ventures, the one that really
          shaped his future was his history as an ISSA Certified Personal
          Trainer. <em>This job was literally life-redefining for him</em>. It
          was here that{" "}
          <em>
            he had his first glimpse of what it was life to truly work together
            with motivated clients to achieve life-changing results
          </em>{" "}
          in their physiques, their life quality, and in the reports they were
          bringing home from their doctors offices.
        </Paragraph>
        <Heading2>The First Big Step</Heading2>
        <Lead>
          <blockquote>
            <em>Dr. T went on to earn his Medical Doctorate (MD)</em> from the
            University of California Irvine{" "}
            <em>and subsequently specialized in internal medicine</em>...
          </blockquote>
        </Lead>
        <Paragraph>
          <em>
            Because he absolutely loved the experience he had as a personal
            trainer
          </em>
          , Dr. T doubled down on his decision to change directions.{" "}
          <em>He fortified his efforts toward medical school</em> and move away
          from computer science. It was clear that medical school provided both
          job security and an incredible privilege and opportunity to work with
          people to achieve life-changing results.
        </Paragraph>
        <Paragraph>
          <em>Dr. T went on to earn his Medical Doctorate (MD)</em> from the
          University of California Irvine{" "}
          <em>and subsequently to specialized in internal medicine</em>.
          Internal medicine doctors, or internists, are really the front-line
          for adult healthcare. They{" "}
          <em>train to handle complicated cases of multi-organ derangement</em>{" "}
          in both the inpatient and outpatient settings It is this
          specialization that allows people to live with medical conditions
          that, not long in the past, would have been a swifth death sentence.
          Similar to pediatricians and family practitioners,{" "}
          <em>
            internal medicine doctors are traditionally the type of doctor a
            person will have the opportunity to know and develop a relationship
            with over years
          </em>
          . And, Dr. T loved that idea.
        </Paragraph>
        <Heading2>The Epiphany</Heading2>
        <Lead>
          <blockquote>
            ...Dr. T didn't want to keep diabetics from losing their feet, he
            wanted to prevent his fellow humans from getting diabetes in the
            first place.
          </blockquote>
        </Lead>
        <Paragraph>
          Unfortunately,{" "}
          <em>
            there were two critical elements of life as an internist that
            frankly drove Dr. T up the wall
          </em>
          .
        </Paragraph>
        <Paragraph>
          First, spending time with patients was a thing of the past! Modern
          primary care can be summarized as: do more faster, for less money, and
          with a much greater regulatory burden. And,{" "}
          <Link to="https://www.forbes.com/sites/brucelee/">Bruce Y. Lee</Link>,
          a senior contributor at{" "}
          <Link to="https://www.forbes.com">Forbes</Link>, summed up research on
          the topic wonderfully with the following:
        </Paragraph>
        <Paragraph>
          {" "}
          <blockquote>
            <em>
              Physicians spent 27% of their time in their offices seeing
              patients
            </em>{" "}
            and 49.2% of their time doing paperwork, which includes using the
            electric health record (EHR) system.{" "}
            <em>
              Even when the doctors were in the examination room with patients,
              they were spending only 52.9% of the time talking to or examining
              the patients and 37.0% doing...you guessed it... paperwork
            </em>
            . Moreover, the doctors who completed the after-hours diaries
            indicated that they were spending one to two hours each night doing
            -- drum roll please -- paperwork (or the EHR){" "}
            <Link to="https://www.forbes.com/sites/brucelee/2016/09/07/doctors-wasting-over-two-thirds-of-their-time-doing-paperwork/#542b30c15d7b">
              (link)
            </Link>
          </blockquote>
        </Paragraph>
        <Paragraph>
          Primary care is frankly miserable for both patient and provider, and
          it's ability to help patients is drastically limited as a result of
          the circumstances. We promise, most of your primary care doctors are
          not evil jerks. Your doctors want to help and wish they could do more,
          but they've just been battered into a state of defeat by the
          circumstances.
        </Paragraph>
        <Paragraph>
          Second, and it's really a consequence of the former to a large degree,{" "}
          <em>primary care is simply so incredibly reactive!</em> Most of the
          time <em>we're treating our patients way too late!</em> Excuse the
          crude analogy, but Dr. T didn't want to keep diabetics from losing
          their feet, he wanted to prevent his fellow humans from getting
          diabetes in the first place.
        </Paragraph>
        <Paragraph>
          It was unequivocal at this point, not only did something in medicine
          need to change, Dr. T's path had to change if he were to accomplish
          his goal in life:
        </Paragraph>
        <Paragraph>
          <blockquote>
            <em>I want to help motivated people live the lives they deserve</em>
            . Longer, stronger, healthier lives of greater quality and higher
            vitality. &mdash; Travis Nesbit, MD (Dr. T)
          </blockquote>
        </Paragraph>
        <Heading2>The Path Forward - Work Experience with a Purpose</Heading2>
        <Paragraph>
          With the intimate knowledge gained that healthcare was more backward
          and broken than most critics claim it is,{" "}
          <em>Dr. T set out to make a difference</em>. So,{" "}
          <em>
            he rekindled his passion for his two intellectual loves outside of
            medicine, fitness and computer science
          </em>
          . Dr. T went on to teach himself everything he could about practical
          lifestyle change in the context of modern western medicine. He
          branched out to include some non-western medicine. And, he became a
          reasonably competent full-stack programmer. With that set of skills,
          he began to seek out job opportunities which would allow him to expand
          his competence in those domains.
        </Paragraph>
        <Heading3>The UC Irvine Executive Health Program</Heading3>
        <Lead>
          <blockquote>
            ...he learned hidden value in a number of medical procedures and
            studies that are unappreciated at best, and known to few at worst.
          </blockquote>
        </Lead>
        <Paragraph>
          Dr. T finished his residency in internal medicine and immediately took
          a position at the nation's oldest&mdash;and one of it's most
          esteemed&mdash;executive healthcare programs.{" "}
          <em>
            He joined the University of California, Irvine Executive Health
            program at the Susan Samueli Integrative Health Institute as an
            Assistant Professor of Medicine
          </em>
          . An executive health program is a unique program. While there is no
          specific format they must follow, in general they're extremely
          comprehensive examinations packed into one or two visit and often
          enormous price tags. They tend to attract business executives, hence
          the name.
        </Paragraph>
        <Paragraph>
          It was at the UCI Executive Health Program (UCI EHP) that he learned
          hidden value in a number of medical procedures and studies that are
          unappreciated at best, and known to few at worst. However,{" "}
          <em>
            much of the testing and the information gleaned from it could be
            acquired at a much lower price &mdash;and even without needing their
            primary doctors prescription pad&mdash;when leveraging the right
            tools and approached thoughtfully
          </em>
          . He saw an opportunity to extend these services to a larger audience
          of motivated individuals.
        </Paragraph>
        <Paragraph>
          As much as Dr. T loved his work at UCI EHP, he struggled with the idea
          of limited access to motivated people saw several other major
          limitations that would commit him to endless mounds of paperwork
          indefinitely. These problems aren't specific to UCI EHP&mdash;it's a
          great program, and patients get a lot more time with doctors than is
          typical. These are common problems with medical offices in general.
          UCI EHP was just simply not an exception to the rule. The information
          technology in medical systems is often decades behind the times at it
          was a roadblock. It was time to move forward (pun intended).
        </Paragraph>
        <Heading3>Forward (GoForward, Inc)</Heading3>
        <Paragraph>
          <em>
            Dr. T was approached by a large, well-funded healthcare startup
            aptly named Forward
          </em>
          , of GoForward, Inc. Forward was moved by an ambitious,
          forward-thinking team of very-smart tech experts from the Silicon
          Valley. And,{" "}
          <em>
            given his interests as a hobbyist hacker and programmer, he simply
            could not pass up an opportunity to see a powerful attempt to
            rebuild medicine from the ground-up
          </em>
          . So, Dr. T joined Forward as a physician.
        </Paragraph>
        <Paragraph>
          Dr. T was able to learn many very useful things during his time at
          Forward. And, they were a fantastic bunch with a praiseworthy mission.
          Using technology to redefine healthcare isn't just cool, it's quite
          literally essential. However, it was a membership-based system with
          rigid visit durations and limited resources. Each person's monthly
          contribution to the system was roughly the same, so the degree of
          individualization of care was still limited.
        </Paragraph>
        <Paragraph>
          To be fair, this is unavoidable in any healthcare system at the
          moment. They did a better job managing it than most. And, they're
          still rapidly learning and growing. However, when you've got a limited
          number of providers and billions of people to services, something's
          got to give. And, that's currently individualized care.
        </Paragraph>
        <Paragraph>
          Realistically, however, the above in addition to some personal
          considerations Dr. T had to keep in mind, meant that{" "}
          <em>
            their vision for the world was not currently compatible with his
            vision of delivering precision wellness to motivated individuals
          </em>
          .
        </Paragraph>
        <Heading3>The Solution</Heading3>
        <Lead>
          <blockquote>
            Clients get access to most of the same information about their
            health as can be acquired through an executive health program at a
            fraction of the cost. And, most of all, they get valuable time,
            attention, and a thorough and enthusiastic explanation for all of
            their questions and problems.
          </blockquote>
        </Lead>
        <Paragraph>
          After realizing Dr. T's vision didn't align with Forward's vision, and
          that UCI EHP would leave him bogged down in paperwork and couldn't
          reach as many of the motivated individuals as he would like, he
          again decided to become entrepreneurial.{" "}
          <em>Dr. T founded Precision Wellness</em>, a DBA of GeekMD.
        </Paragraph>
        <Paragraph>
          <em>
            Precision Wellness allows for access to clients without concern of
            boundary or border
          </em>
          . Precision Wellness allows for the{" "}
          <em>
            fusion of health coaching, personal training, and internal medicine
            knowledge
          </em>{" "}
          into a hybrid system that has less overhead, and far more time through
          leveraging 21st century technology.{" "}
          <em>
            Clients get access to most of the same information about their
            health as can be acquired through an executive health program at a
            fraction of the cost
          </em>
          . And, most of all,{" "}
          <em>
            they get valuable time, attention, and a thorough and enthusiastic
            explanation for all of their questions and problems
          </em>
          . Even where the lack of a physical doctor may limit the ability to
          provide orders, the information gathered from one-on-one discussions
          of incredible detail with personalized action plans means you're
          likely to get directions toward a better outcome you wouldn't have
          otherwise had access to.
          <em>
            Without a doubt, the most powerful weapon a motivated individual has
            in the quest for optimized health is knowledge.
          </em>{" "}
          The knowledge and information you get from a Precision Wellness
          consultation or health coaching plan is what separates us.
        </Paragraph>
        <Heading2>What Dr. T is Doing Now</Heading2>
        <Paragraph>
          <em>
            Currently Dr. T is seeing clients on a part-time basis through the
            Precision Wellness program
          </em>
          . Precision Wellness is <em>not a medical practice</em> and therefore
          he has to work as a physician to keep his license current and skillset
          sharp. He is currently tending to his clinical skills in traditional
          medicine at the nation's largest occupational medicine provider,{" "}
          <Link to="https://www.concentra.com/">Concentra</Link>, as a per diem
          provider where he treats occupational work injuries, performs
          clearance exams for commercial vehicle drivers, urgent care visits,
          and some primary care. And, because his technololgy skill set is mission
          critical to Precision Wellness, he is tending to his tech skill set as
          a health-tech consultant, most recently consulting for the{" "}
          <Link to="https://www.ama-assn.org/">
            American Medicine Association (AMA)
          </Link>{" "}
          on a new, exciting project that represents the evolution of the AMA.
        </Paragraph>
        <Paragraph>
          Additionally, Dr. T works hard to keep up on his own health and
          fitness. He, like everyone else, struggles with the day-to-day
          challenges of balancing work obligation and lifestyle. So, there are
          ups and downs. But, in general he works to lead by example. Below is
          Dr. T (far right) with some gym friends and four-time{" "}
          <Link to="https://mrolympia.com/">Mr. Olympia</Link> winner,{" "}
          <Link to="https://jaycutler.com/">Jay Cutler</Link>, at the Anaheim
          Fit Expo in July of 2018.
        </Paragraph>
        <Paragraph>
          <PreviewCompatibleImage
            imageInfo={{
              alt:
                "Dr. Travis Nesbit (Dr. T) with Jennifer Nesbit, gym friends, and Jay Cutler.",
              image: drtBodyShot,
            }}
          />
        </Paragraph>
      </section>
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
