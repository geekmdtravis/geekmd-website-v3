import React from "react";

import Layout from "./../../components/Layout";
import { Heading1, SuperLead } from "./../../components/PageElements";
import SEO from "./../../components/SEO";

import styles from "./index.module.scss";

const ThankYouPage = () => {
  return (
    <Layout>
      <SEO
        title="Thank you!"
        description="A thank you page for form submissions"
        pathname="/thank-you"
      />
      <header className={styles.header}>
        <Heading1>Thank You!</Heading1>
      </header>
      <div className={styles.content}>
        <SuperLead>
          Thank you very much for connecting! We value each and every connection
          we make and look forward to having the opportunity to give back to
          you.
        </SuperLead>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
