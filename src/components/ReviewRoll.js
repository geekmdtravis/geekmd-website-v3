import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { orderBy } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faStar,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

import { SuperLead, Link } from "./PageElements";

import styles from "./reviewRoll.module.scss";

const ReviewRoll = ({
  count = 5,
  featuredOnly = false,
  hideAverage = false
}) => {
  const {
    dataYaml: {
      data: { reviews }
    }
  } = useStaticQuery(query);

  const getAverageReview = () => {
    const count = reviews.length;
    let sum = 0;

    reviews.forEach(r => {
      sum += r.stars;
    });

    return (sum / count).toFixed(1);
  };

  const filteredReviews = orderBy(
    featuredOnly ? reviews.filter(r => r.featured) : reviews,
    ["stars"],
    ["desc"]
  ).splice(0, count != null ? count : 100);

  return (
    <div className={styles.reviews}>
      <div className={styles.average} hidden={hideAverage}>
        <SuperLead>
          Drt. T's average review is <em>{getAverageReview()} stars</em>. If you
          get the opportunity to work with him on optimizing your lifestyle, we
          think you'll understand why.
        </SuperLead>
      </div>
      {filteredReviews.map(r => {
        return (
          <div key={r.name} className={styles.review_container}>
            <h2 className={styles.review_heading}>
              <em>{r.name}</em> <RenderStars count={r.stars} />{" "}
              <RenderSocialMediaIcon templateKey={r.templateKey} />
            </h2>

            <div
              className={styles.review_subtext}
              hidden={r.organizationKey === "precision-wellness"}
            >
              This review was written regarding Dr. T when he was at{" "}
              <RenderOrganizationLink organizationKey={r.organizationKey} />
            </div>

            <blockquote>
              <p className={styles.review_paragraph}>{r.review}</p>
            </blockquote>
            <p className={styles.review_url}>
              <Link to={r.url}>
                Read Full Review{` `}
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

ReviewRoll.propTypes = {
  count: PropTypes.number,
  featuredOnly: PropTypes.bool,
  hideAverage: PropTypes.bool
};

export default ReviewRoll;

const RenderStars = ({ count }) => {
  const boundedCount = count >= 5 ? 5 : count;
  let stars = [];
  for (let i = 0; i < boundedCount; i++) {
    stars.push(
      <span key={i}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }
  return <div className={styles.review_stars}>{stars}</div>;
};

const RenderOrganizationLink = ({ organizationKey }) => {
  switch (organizationKey) {
    case "forward":
      return <Link to="https://goforward.com">Forward</Link>;
    default:
      return <Link to="/">Unknown Organization</Link>;
  }
};

const RenderSocialMediaIcon = ({ templateKey }) => {
  let faIcon = null;
  let socialMediaPlatform = "Unknown";
  switch (templateKey) {
    case "yelp-review":
      faIcon = faYelp;
      socialMediaPlatform = "yelp";
      break;
    default:
      faIcon = faQuestion;
      break;
  }
  return (
    <span className={styles.review_social_platform}>
      <span className={styles.yelp_logo}>
        <FontAwesomeIcon icon={faIcon} />
      </span>
      {` ${socialMediaPlatform}`}
    </span>
  );
};

const query = graphql`
  query ReviewRollQuery {
    dataYaml(data: { key: { eq: "reviews" } }) {
      data {
        reviews {
          templateKey
          organizationKey
          featured
          name
          stars
          url
          review
        }
      }
    }
  }
`;
