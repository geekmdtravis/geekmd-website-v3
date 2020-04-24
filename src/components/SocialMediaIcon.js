import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const parseKey = key => {
  switch (key) {
    case "facebook":
      return faFacebook;
    case "linkedin":
      return faLinkedin;
    case "twitter":
      return faTwitter;
    case "instagram":
      return faInstagram;
    case "github":
      return faGithub;
    case "kaggle":
      return faKaggle
    default:
      return faQuestion;
  }
};

const SocialMediaIcon = ({ iconKey }) => {
  return <FontAwesomeIcon icon={parseKey(iconKey)} />;
};

SocialMediaIcon.propTypes = {
  iconKey: PropTypes.string.isRequired
};

export default SocialMediaIcon;
