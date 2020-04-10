import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import RetrieveSiteMetadata from "./SiteMetadata";
const SEO = ({ title, description, image, pathname, article }) => {
  const {
    site: {
      title: defaultTitle,
      titleTemplate,
      description: defaultDescription,
      image: defaultImage,
      url: siteUrl,
      twitterUsername
    }
  } = RetrieveSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/img/${image || defaultImage}`,
    url: `${siteUrl}${pathname || "/"}`
  };
  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        {seo.url && <link rel="canonical" href={seo.url} />}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {(!article ? true : null) && (
          <meta property="og:type" content="website" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  );
};
export default SEO;
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
};
