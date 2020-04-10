import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { orderBy, first } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import Layout from "./../../../components/Layout"
import SEO from "./../../../components/SEO"
import Newsletter from "./../../../components/Newsletter"
import {
  Heading1,
  Heading2,
  Lead,
  ButtonLink,
  Link,
  Paragraph,
} from "./../../../components/PageElements"
import RetrieveSiteMetadata from "./../../../components/SiteMetadata"

import styles from "./index.module.scss"

const RecommendedLabsPage = () => {
  const {
    dataYaml: {
      data: { entries: panels },
    },
  } = useStaticQuery(query)

  const {
    navigation: { resources },
  } = RetrieveSiteMetadata()
  const recommendedLabsPageMetadata = first(
    resources.filter(r => r.key === "health-labs")
  )

  return (
    <Layout>
      <SEO
        title={recommendedLabsPageMetadata.title}
        description={recommendedLabsPageMetadata.description}
        pathname={recommendedLabsPageMetadata.slug}
        image={recommendedLabsPageMetadata.ogImage}
      />
      <Heading1>{recommendedLabsPageMetadata.title}</Heading1>
      <div className={styles.disclaimer}>
        <Lead>
          <em>Disclaimer:</em> Precision Wellness does receive an affiliate fee
          for labs ordered through this page. If you find that objectionable,
          you are welcome to order these labs in whatever means you see fit. We
          also encourage you to compare prices to avoid over-paying. As always,
          our medical disclaimer, which can be found in the footer, applies.
        </Lead>
      </div>
      <ul className={styles.panels_list}>
        {orderBy(panels, ["recommended", "name"], ["desc", "asc"])
          .filter(panelItem => panelItem.active)
          .map(panelItem => {
            console.log(panelItem)
            return (
              <li key={panelItem.key}>
                <div className={styles.panel_list_item}>
                  <div className={styles.lab_header}>
                    <h2 className={styles.lab_heading}>
                      <Link to={panelItem.url}>{panelItem.name}</Link>
                    </h2>
                    <p className={styles.recommended}>
                      {panelItem.recommended ? "Recommended " : null}
                      {panelItem.recommended ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : null}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <Paragraph>{panelItem.description} </Paragraph>
                  </div>
                  <div className={styles.lab_list_container}>
                    <div className={styles.labs_list_heading}>
                      This panel contains the following lab tests:
                    </div>
                    <div className={styles.lab_contents}>
                      <ul className={styles.labs_list}>
                        {!!panelItem.labs
                          ? panelItem.labs.sort().map(lab => {
                              return (
                                <li className={styles.labs_list_item} key={lab}>
                                  {lab}
                                </li>
                              )
                            })
                          : null}
                      </ul>
                      <div>
                        <div className={styles.labs_list_heading}>
                          {!!panelItem.containedKeys
                            ? "This panel contains the following panels: "
                            : null}
                        </div>
                        <ul className={styles.labs_list}>
                          {!!panelItem.containedKeys
                            ? panelItem.containedKeys
                                .sort()
                                .map(containedPanelKey => {
                                  return (
                                    <li
                                      className={styles.labs_list_item}
                                      key={containedPanelKey}
                                    >
                                      <Link
                                        to={
                                          first(
                                            panels.filter(
                                              l => l.key === containedPanelKey
                                            )
                                          ).url
                                        }
                                      >
                                        {
                                          first(
                                            panels.filter(
                                              l => l.key === containedPanelKey
                                            )
                                          ).name
                                        }
                                      </Link>
                                    </li>
                                  )
                                })
                            : null}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.purchase_button}>
                    <ButtonLink to={panelItem.url}>Purchase</ButtonLink>
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
      <section className={styles.section_newsletter}>
        <Heading2 centered={true}>
          Don't Forget to Signup for Our Newsletter!
        </Heading2>
        <Newsletter />
      </section>
    </Layout>
  )
}

export default RecommendedLabsPage

const query = graphql`
  query LabPageQuery {
    dataYaml(data: { key: { eq: "labs" } }) {
      data {
        entries {
          key
          name
          active
          url
          description
          recommended
          panel
          labs
          containedKeys
        }
      }
    }
  }
`
