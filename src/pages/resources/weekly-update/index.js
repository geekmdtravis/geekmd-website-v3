import React from "react";
import { first } from "lodash";

import Layout from "./../../../components/Layout";
import SEO from "./../../../components/SEO";
import { Heading1 } from "../../../components/PageElements";
import RetrieveSiteMetadata from "./../../../components/SiteMetadata";

import styles from "./index.module.scss";

const WeeklyUpdatePage = () => {
  const {
    navigation: { resources }
  } = RetrieveSiteMetadata();
  const weeklyUpdatePageMetadata = first(
    resources.filter(r => r.key === "weekly-update")
  );
  return (
    <Layout>
      <SEO
        title={weeklyUpdatePageMetadata.title}
        description={weeklyUpdatePageMetadata.description}
        pathname={weeklyUpdatePageMetadata.slug}
        image={weeklyUpdatePageMetadata.ogImage}
      />
      <header className={styles.head}>
        <Heading1>{weeklyUpdatePageMetadata.title}</Heading1>
        <p>Please be sure to scroll down on the form to complete everything.</p>
      </header>
      <iframe
        title="Weekly Update - Google Forms"
        className={styles.iframe}
        src="https://docs.google.com/forms/d/e/1FAIpQLSdkJlvTWMQa_uwtNnUAynAXHWwlYJscfIqqpHZzeqhPNcHnaw/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Layout>
  );
};

export default WeeklyUpdatePage;
