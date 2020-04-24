import React, { useState } from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import SocialMediaIcon from "./SocialMediaIcon";
import RetrieveSiteMetadata from "./SiteMetadata";
import { Link } from "./../components/PageElements";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const { file: brandLogo } = useStaticQuery(query);
  const [getNavState, setNavState] = useState({ expanded: false });
  const handleMenuClick = () =>
    setNavState({ expanded: !getNavState.expanded });
  const {
    social,
    navigation: { pages }
  } = RetrieveSiteMetadata();

  const RenderTopBar = () => (
    <div className={styles.nav_container}>
      <div className={styles.brand_icon}>
        <Link to={"/"}>
          <PreviewCompatibleImage
            imageInfo={{
              alt: "GeekMD brand logo",
              image: brandLogo
            }}
          />
        </Link>
      </div>
      <div className={styles.middle_section}>
        <ul className={styles.social_list}>
          {social
            .filter(e => e.active)
            .map(e => {
              return (
                <li key={e.key} className={styles.social_icon}>
                  <Link to={e.url} style={styles.social_link}>
                    <SocialMediaIcon iconKey={e.key} />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <button onClick={handleMenuClick} className={styles.navigation}>
          <FontAwesomeIcon icon={getNavState.expanded ? faTimes : faBars} />
        </button>
      </div>
    </div>
  );

  return (
    <nav className={styles.nav}>
      <RenderTopBar />
      <div className={styles.expanded_menu} hidden={!getNavState.expanded}>
        <div
          className={styles.expanded_menu_container}
          hidden={!getNavState.expanded}
        >
          <RenderTopBar />

          <div className={styles.expanded_content}>
            <div className={styles.content_column}>
              <p className={styles.column_heading}>Pages</p>
              <ul className={styles.column_list}>
                {pages
                  .filter(p => p.active)
                  .filter(e => e.key !== "disclaimer")
                  .map(p => {
                    return (
                      <li key={p.key} className={styles.column_list_item}>
                        <Link to={p.slug} className={styles.column_list_link}>
                          {p.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const query = graphql`
  query NavbarQuery {
    file(relativePath: { eq: "geek_md_logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
