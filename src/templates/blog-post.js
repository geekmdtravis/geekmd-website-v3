import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { graphql } from "gatsby"
import { Link, Lead } from "./../components/PageElements"
import { first } from "lodash"
import GetSiteMetadata from "./../components/SiteMetadata"
import Tag from "./../components/Tag"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import SEO from "./../components/SEO"
import { BlogHeading1 } from "../components/PageElements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "./blog-post.module.scss"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  featuredImageName,
  slug,
}) => {
  const PostContent = contentComponent || Content
  const {
    navigation: { pages },
  } = GetSiteMetadata()

  return (
    <section className={styles.section}>
      <SEO
        title={title}
        description={description}
        image={featuredImageName}
        pathname={slug}
        article={true}
      />
      <header>
        <BlogHeading1>{title}</BlogHeading1>
        <div className={styles.date}>
          {date} by{" "}
          <Link to={first(pages.filter(p => p.key === "about")).slug}>
            Travis Nesbit, MD (GeekMD)
          </Link>
        </div>
        <div className={styles.lead}>
          <Lead>
            <blockquote>{description}</blockquote>
          </Lead>
        </div>
      </header>
      <div className={styles.content}>
        <article>
          <div className={styles.post_content}>
            <PostContent content={content} />
          </div>
          {tags && tags.length ? (
            <div>
              <h2>Tags</h2>
              <ul className={styles.tags_list}>
                {tags.map(tag => (
                  <Tag title={tag} to={`/topics/${kebabCase(tag)}/`}>
                    {tag}
                  </Tag>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
        <p className={styles.go_back}>
          <Link to={first(pages.filter(p => p.key === "blog")).slug}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </Link>
        </p>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      fields: { slug },
      html,
      frontmatter: {
        description,
        tags,
        title,
        date,
        featuredimage: {
          image: {
            childImageSharp: {
              fluid: { originalName: featuredImageName },
            },
          },
        },
      },
    },
  } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={html}
        contentComponent={HTMLContent}
        description={description}
        tags={tags}
        title={title}
        date={date}
        featuredImageName={featuredImageName}
        slug={slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          image {
            childImageSharp {
              fluid {
                originalName
              }
            }
          }
        }
      }
    }
  }
`
