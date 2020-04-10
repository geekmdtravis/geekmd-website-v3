import React from "react";
import PropTypes from "prop-types";
import { Link } from "./PageElements";
import styles from "./tag.module.scss";

const Tag = ({ children, to }) => {
  return (
    <span className={styles.tag_wrapper}>
      <Link to={to}>
        <div className={styles.tag}>{children}</div>
      </Link>
    </span>
  );
};

export default Tag;

Tag.propTypes = {
  to: PropTypes.string.isRequired
};
