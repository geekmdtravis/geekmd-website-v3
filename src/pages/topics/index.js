import React from "react";
import { kebabCase } from "lodash";
import { graphql } from "gatsby";
import { orderBy, first } from "lodash";

import Layout from "../../components/Layout";
import SEO from "./../../components/SEO";
import { Heading1, Link } from "./../../components/PageElements";
import RetrieveSiteMetadata from "./../../components/SiteMetadata";

import styles from "./index.module.scss";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group: tagFields }
  }
}) => {
  const totalTagCount = () => {
    let count = 0;
    tagFields.forEach(tf => {
      count += tf.totalCount;
    });
    return count;
  };
  const calculateFontSize = tagCount => {
    const total = totalTagCount();
    const baseFontSizeRem = 1.6;
    const modifer = (5 * tagCount) / total;
    return baseFontSizeRem + modifer;
  };
  const {
    navigation: { pages }
  } = RetrieveSiteMetadata();
  const topicsPageMetadata = first(pages.filter(p => p.key === "topics"));
  return (
    <Layout>
      <SEO
        title={topicsPageMetadata.title}
        description={topicsPageMetadata.description}
        pathname={topicsPageMetadata.slug}
        image={topicsPageMetadata.ogImage}
      />
      <section>
        <Heading1>{topicsPageMetadata.title}</Heading1>
        <div className={styles.content}>
          <ul className={styles.tags_list}>
            {orderBy(tagFields, ["fieldValue"], ["desc"]).map(tag => {
              const { fieldValue: value, totalCount: count } = tag;
              const fontSize = `${calculateFontSize(count)}rem`;
              const lineHeight = `${calculateFontSize(count) + 1}rem`;
              return (
                <li
                  style={{ fontSize: fontSize, lineHeight: lineHeight }}
                  className={styles.tags_list_item}
                  key={tag.fieldValue}
                >
                  <Link to={`/topics/${kebabCase(value)}/`}>
                    {value} ({count})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
