import React from "react";
import { first } from "lodash";

import Layout from "../../components/Layout";
import { Heading1 } from "./../../components/PageElements";
import BlogRoll from "../../components/BlogRoll";
import SEO from "./../../components/SEO";
import RetrieveSiteMetadata from "./../../components/SiteMetadata";

import styles from "./index.module.scss";

const BlogIndexPage = () => {
  const {
    navigation: { pages }
  } = RetrieveSiteMetadata();
  const blogPageMetadata = first(pages.filter(p => p.key === "blog"));

  return (
    <Layout>
      <SEO
        title={blogPageMetadata.title}
        description={blogPageMetadata.description}
        image={blogPageMetadata.image}
        pathname={blogPageMetadata.slug}
      />
      <div>
        <Heading1>{blogPageMetadata.title}</Heading1>
      </div>
      <section className={styles.section}>
        <BlogRoll />
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
