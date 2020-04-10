import React from "react";
import PropTypes from "prop-types";
import styles from "./pageElements.module.scss";
import { Link as GatsbyLink } from "gatsby";

export const Paragraph = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export const Lead = ({ children }) => {
  return <p className={styles.lead}>{children}</p>;
};

export const SuperLead = ({ children }) => {
  return <p className={styles.super_lead}>{children}</p>;
};

export const Heading1 = ({ children, centered = true }) => {
  return (
    <h1
      style={{ textAlign: `${centered ? "center" : "left"}` }}
      className={styles.h1}
    >
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, centered = false }) => {
  return (
    <h2
      style={{ textAlign: `${centered ? "center" : "left"}` }}
      className={styles.h2}
    >
      {children}
    </h2>
  );
};

export const Heading3 = ({ children, centered = false }) => {
  return (
    <h3
      style={{ textAlign: `${centered ? "center" : "left"}` }}
      className={styles.h3}
    >
      {children}
    </h3>
  );
};

export const Heading4 = ({ children, centered = false }) => {
  return (
    <h4
      style={{ textAlign: `${centered ? "center" : "left"}` }}
      className={styles.h4}
    >
      {children}
    </h4>
  );
};

export const Heading5 = ({ children, centered = false }) => {
  return (
    <h5
      style={{ textAlign: `${centered ? "center" : "left"}` }}
      className={styles.h5}
    >
      {children}
    </h5>
  );
};

export const Heading6 = ({ children, centered = false }) => {
  return (
    <h6
      style={{ textAlign: `${centered ? "center" : "left"}` }}
      className={styles.h6}
    >
      {children}
    </h6>
  );
};

export const BlogHeading1 = ({ children }) => {
  return <Heading1>{children}</Heading1>;
};

export const Link = ({ children, to, style }) => {
  const shouldRenderAnchor =
    to.toLowerCase().startsWith("http") ||
    to.toLowerCase().startsWith("tel:") ||
    to.toLowerCase().startsWith("mailto:");
  return shouldRenderAnchor ? (
    <a className={style} href={to}>
      {children}
    </a>
  ) : (
    <GatsbyLink className={style} to={to}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export const ButtonLink = ({ children, to }) => {
  return (
    <Link style={styles.button} to={to}>
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired
};

export const ButtonLinkInverted = ({ children, to }) => {
  return (
    <Link style={styles.button_inverted} to={to}>
      {children}
    </Link>
  );
};

ButtonLinkInverted.propTypes = {
  to: PropTypes.string.isRequired
};

export const Button = ({ children, buttonType = "button" }) => {
  return (
    <button className={styles.button} type={buttonType}>
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string
};

export const ButtonInverted = ({ children, buttonType = "button" }) => {
  return (
    <button className={styles.button_inverted} type={buttonType}>
      {children}
    </button>
  );
};

ButtonInverted.propTypes = {
  buttonType: PropTypes.string
};

export const InputSubmitButton = ({ children, isDisabled }) => {
  return (
    <input
      type="submit"
      className={styles.button}
      value={children}
      disabled={isDisabled}
    />
  );
};

Button.propTypes = {
  buttonType: PropTypes.string
};

export const InputSubmitButtonInverted = ({ children, isDisabled }) => {
  return (
    <input
      type="submit"
      className={styles.button_inverted}
      value={children}
      disabled={isDisabled}
    />
  );
};

ButtonInverted.propTypes = {
  buttonType: PropTypes.string
};
