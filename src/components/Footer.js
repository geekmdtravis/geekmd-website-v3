import React from "react"
import { Link } from "./../components/PageElements"
import RetrieveSiteMetadata from "./../components/SiteMetadata"
import SocialMediaIcon from "./SocialMediaIcon"

import styles from "./footer.module.scss"

const Footer = () => {
  const {
    site: { title: siteTitle },
    social,
    contact: {
      email,
      phone,
      address: { street, city, state, zip },
    },
    navigation,
  } = RetrieveSiteMetadata()

  return (
    <footer className={styles.footer}>
      <div className={styles.social_container}>
        <div className={styles.social_heading}>
          <h2>Let's connect!</h2>
        </div>
        <ul className={styles.social_list}>
          {social
            .filter(s => s.active)
            .map(s => {
              return (
                <li key={s.key} className={styles.social_icon}>
                  <Link to={s.url} style={styles.social_link}>
                    <SocialMediaIcon iconKey={s.key} />
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.heading}>Pages</p>
          <ul>
            {navigation.pages
              .filter(p => p.active)
              .map(p => {
                return (
                  <li className={styles.social_link_item} key={p.key}>
                    <Link to={p.slug}>{p.title}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>Contact</p>
          <p>
            {/* <span className={styles.address_line}>{street}</span>
            <span className={styles.address_line}>
              {`${city}, ${state} ${zip}`}
            </span>
            <span className={styles.address_line}>
              <Link to={`tel:${phone}`}>{phone}</Link>
            </span> */}
            <span className={styles.address_line}>
              <Link to={`mailto:${email}`}>{email}</Link>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.copy}>
        Copyright {new Date().getFullYear()} <Link to="/">{siteTitle}</Link>.
        Site developed in association with{" "}
        <Link to="https://spectertechnology.com/">Specter Technology</Link>
      </div>
    </footer>
  )
}

export default Footer
