import React from "react";

import styles from "./validation.module.scss";

export const ValidationField = ({ children, isHidden = false }) => {
  return (
    <div className={styles.validation_field} hidden={isHidden}>
      {children}
    </div>
  );
};
