import React from "react";
import { first } from "lodash";

import Layout from "./../../components/Layout";
import {
  Paragraph,
  Heading1,
  SuperLead,
  Link
} from "./../../components/PageElements";
import SEO from "./../../components/SEO";
import RetrieveSiteMetadata from "./../../components/SiteMetadata";

import styles from "./index.module.scss";

const DisclaimerPage = () => {
  const {
    navigation: { pages }
  } = RetrieveSiteMetadata();
  const disclaimerPageMetadata = first(
    pages.filter(p => p.key === "disclaimer")
  );
  return (
    <Layout>
      <SEO
        title={disclaimerPageMetadata.title}
        description={disclaimerPageMetadata.description}
        pathname={disclaimerPageMetadata.slug}
        image={disclaimerPageMetadata.ogImage}
      />
      <header className={styles.header}>
        <Heading1>{disclaimerPageMetadata.title}</Heading1>
      </header>
      <section className={styles.section}>
        <div>
          <SuperLead>
            {" "}
            If you have a medical emergency, call your doctor or{" "}
            <Link to={`tel:${911}`} htmlAnchor={true}>
              911
            </Link>{" "}
            immediately.
          </SuperLead>
          <Paragraph>
            The information contained on this website is compiled from a variety
            of sources and is not considered complete. The information accessed
            through <em>this website is provided “AS IS”</em> and without any
            warranties, whether expressed or implied.
          </Paragraph>
          <Paragraph>
            To the Fullest extent permitted by law, GeekMD{" "}
            <em>
              DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESSED OR IMPLIED
            </em>
            , regarding any information or other material displayed on this
            website, whether authored by GeekMD or others; and the
            operation of this website, including any warranty of merchantability
            and/or fitness for a particular purpose.
          </Paragraph>
          <Paragraph>
            GeekMD makes no representation or warranty as to the
            reliability, accuracy, timeliness, usefulness, adequacy or
            suitability of the information contained in this website and does
            not represent and/or warrant against human or machine error,
            omissions, delays, interruptions or losses, including the loss of
            any data.
          </Paragraph>
          <Paragraph>
            The information contained in this website is{" "}
            <em>
              not intended to recommend the self management of health problems
              or wellness
            </em>
            . It is not intended to endorse or recommend any particular type of
            medical treatment.{" "}
            <em>
              Should any reader have any health care related questions, promptly
              call or consult your physician or healthcare provider
            </em>
            . No information contained in this website should be used by any
            reader to disregard medical and/or health related advice or provide
            a basis to delay consultation with a physician or a qualified
            healthcare provider.
          </Paragraph>
          <Paragraph>
            <em>
              You should not use any information contained in this website to
              initiate use of dietary supplements, vitamins, herbal and
              nutritional products or homeopathic medicine, and other described
              products prior to consulting first with a physician or healthcare
              provider.
            </em>{" "}
            GeekMD disclaims any liability based on information
            provided in this website.
          </Paragraph>
        </div>
      </section>
    </Layout>
  );
};

export default DisclaimerPage;
