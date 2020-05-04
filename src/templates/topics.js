import React from "react"
import { Heading1, Link } from "./../components/PageElements"
import { first, kebabCase } from "lodash"
import BlogRoll from "./../components/BlogRoll"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import GetSiteMetadata from "./../components/SiteMetadata"
import SEO from "./../components/SEO"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "./topics.module.scss"

const TagRoute = ({ data, pageContext }) => {
  const {
    navigation: { pages },
  } = GetSiteMetadata()
  const tag = pageContext.tag
  const totalCount = data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`

  return (
    <Layout>
      <SEO
        title={tagHeader}
        description={`View all of the blog posts on the GeekMD website which are related to the topic "${tag.toLowerCase()}".`}
        pathname={`${
          first(pages.filter(p => p.key === "topics")).slug
        }/${kebabCase(tag)}`}
      />
      <header>
        <Heading1>{tagHeader}</Heading1>
      </header>
      <section className={styles.section}>
        <div className={styles.content}>
          <BlogRoll data={data} />
          <p className={styles.go_back}>
            <Link to={first(pages.filter(p => p.key === "topics")).slug}>
              <FontAwesomeIcon icon={faChevronLeft} /> All Tags
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`
