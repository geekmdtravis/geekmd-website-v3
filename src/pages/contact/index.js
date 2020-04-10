import React from "react";
import { first } from "lodash";

import Layout from "./../../components/Layout";
import ContactForm from "./../../components/ContactForm";
import { Heading1, SuperLead } from "./../../components/PageElements";
import SEO from "./../../components/SEO";
import RetrieveSiteMetadata from "./../../components/SiteMetadata";

import styles from "./index.module.scss";

const ContactPage = () => {
  const {
    navigation: { pages }
  } = RetrieveSiteMetadata();
  const contactPageMetadata = first(pages.filter(p => p.key === "contact"));

  return (
    <Layout>
      <SEO
        title={contactPageMetadata.title}
        description={contactPageMetadata.description}
        pathname={contactPageMetadata.slug}
        image={contactPageMetadata.ogImage}
      />
      <header className={styles.header}>
        <Heading1>{contactPageMetadata.title}</Heading1>
        <SuperLead>
          Please send us a message. We'd love to hear from you.
        </SuperLead>
      </header>
      <section className={styles.section}>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
