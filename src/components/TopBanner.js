import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";

import styles from "./topBanner.module.scss";

export const BannerNotificationType = {
  DANGER: "danger",
  WARN: "warn",
  OKAY: "okay"
};

const TopBanner = ({ children, notificationType }) => {
  const [getBannerState, setBannerState] = useState({
    banner: { hidden: false }
  });
  const [cookies, setCookie /*, removeCookie*/] = useCookies([]);
  const handleCloseButtonClick = () => {
    setBannerState({ banner: { hidden: true } });
    setCookie("banner_is_hidden", true);
  };

  const parseNotificationType = notificationType => {
    switch (notificationType) {
      case BannerNotificationType.DANGER:
        return styles.banner__danger;
      case BannerNotificationType.WARN:
        return styles.banner__warn;
      case BannerNotificationType.OKAY:
        return styles.banner__okay;
      default:
        console.log("Unable to parse banner notification type.");
    }
  };

  return (
    <div
      className={`${styles.banner} ${parseNotificationType(notificationType)} ${
        getBannerState.banner.hidden || cookies.banner_is_hidden
          ? styles.banner__hidden
          : ``
      }`}
    >
      <div className={styles.end_cap} />
      <div>{children}</div>
      <div className={styles.close_button}>
        <button
          onClick={handleCloseButtonClick}
          onKeyDown={handleCloseButtonClick}
          className={styles.close_button}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;

TopBanner.propTypes = {
  notificationType: PropTypes.oneOf([
    BannerNotificationType.DANGER,
    BannerNotificationType.WARN,
    BannerNotificationType.OKAY
  ])
};
