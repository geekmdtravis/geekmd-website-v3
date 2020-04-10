import React from "react";
import Layout from "../components/Layout";
import SEO from "./../components/SEO";
import { Heading1, Heading2, Lead } from "./../components/PageElements";
import BlogRoll from "./../components/BlogRoll";

import styles from "./404.module.scss";

const NotFoundPage = () => {
  const seo = {
    title: "404: Page Not Found",
    description: "You've attempted to access a page that does not exist."
  };
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <header>
        <Heading1>{seo.title}</Heading1>
        <div className={styles.container}>
          <Lead>{seo.description}</Lead>
        </div>
      </header>
      <Heading2>Try Reading Some of Our Blog Posts Instead</Heading2>
      <BlogRoll count={3} />
    </Layout>
  );
};

export default NotFoundPage;
