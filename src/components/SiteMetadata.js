import { graphql, useStaticQuery } from "gatsby"

const RetrieveSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetadataQeury {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            url
            image
            twitterUsername
          }
        }
        contact: dataYaml(data: { key: { eq: "company-contact" } }) {
          data {
            email
            phone
            name
            address {
              street1
              street2
              city
              state
              zip
            }
          }
        }
        social: dataYaml(data: { key: { eq: "social-media" } }) {
          data {
            entries {
              key
              name
              active
              url
            }
          }
        }
        navigation: dataYaml(data: { key: { eq: "navigation" } }) {
          data {
            pages {
              key
              title
              description
              ogImage
              slug
              active
            }
          }
        }
      }
    `
  )
  const { site, contact, social, navigation } = data
  return {
    site: site.siteMetadata,
    contact: contact.data,
    social: social.data.entries,
    navigation: navigation.data,
  }
}

export default RetrieveSiteMetadata
