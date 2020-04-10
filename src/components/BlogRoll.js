import React from "react";
import PropTypes from "prop-types";
import { Link, Paragraph } from "./../components/PageElements";
import { graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import RetrieveSiteMetadata from "./SiteMetadata";
import Tag from "./Tag";
import { kebabCase, first } from "lodash";

import styles from "./blogRoll.module.scss";

const BlogRoll = ({ data, count = null }) => {
  const queryData = useStaticQuery(query);
  const preferredData = !!data ? data : queryData;
  const { edges } = preferredData.allMarkdownRemark;
  const posts = count !== null ? edges.slice(0, count) : edges;
  const {
    navigation: { pages }
  } = RetrieveSiteMetadata();
  const blogSlug = first(pages.filter(p => p.key === "topics")).slug;

  return (
    <div className={styles.blogroll}>
      {posts &&
        posts.map(({ node: post }) => {
          const {
            frontmatter: { featuredimage: image, title, date, tags },
            fields: { slug },
            excerpt
          } = post;
          return (
            <div className={styles.post} key={post.id}>
              {image ? (
                <div className={styles.image}>
                  <Link to={slug}>
                    <PreviewCompatibleImage imageInfo={image} />
                  </Link>
                </div>
              ) : null}
              <div className={styles.heading_container}>
                <div>
                  <h2 className={styles.post_heading}>
                    <span className={styles.post_date}>{date}</span>
                    <Link className={styles.post_link} to={slug}>
                      {title}
                    </Link>
                  </h2>
                  <Paragraph>{excerpt}</Paragraph>
                </div>
                <div className={styles.tags}>
                  {tags.map(tag => {
                    return (
                      <Tag to={`${blogSlug}/${kebabCase(tag)}`}>{tag}</Tag>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default BlogRoll;

const query = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              alt
              caption
              image {
                childImageSharp {
                  fluid(maxWidth: 1200, maxHeight: 630, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;
