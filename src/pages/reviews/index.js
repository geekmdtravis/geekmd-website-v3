import React from "react";

import Layout from "./../../components/Layout";
import ReviewRoll from "./../../components/ReviewRoll";
import { first } from "lodash";
import SEO from "./../../components/SEO";
import RetrieveSiteMetadata from "./../../components/SiteMetadata";
import { Heading1 } from "./../../components/PageElements";

import styles from "./index.module.scss";

const ReviewsPage = () => {
  const {
    navigation: { pages }
  } = RetrieveSiteMetadata();
  const reviewsMd = first(pages.filter(p => p.key === "reviews"));

  return (
    <Layout>
      <SEO
        title={reviewsMd.title}
        description={reviewsMd.description}
        pathname={reviewsMd.slug}
      />
      <Heading1>{reviewsMd.title}</Heading1>
      <section className={styles.section}>
        <ReviewRoll />
      </section>
    </Layout>
  );
};

export default ReviewsPage;
