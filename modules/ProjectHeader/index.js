import React from "react";
import isEmpty from "lodash/isEmpty";

import styles from "./ProjectHeader.module.scss";

const ProjectHeader = ({ title, description }) => (
  <div className={styles.header}>
    <div className={styles.header__container}>
      <div className={styles.header__paragraphWrapper}>
        <h1>{title}</h1>
        {!isEmpty(description) && (
          <p>
            “<br /> {description} <br />”
          </p>
        )}
      </div>
    </div>
  </div>
);

export default ProjectHeader;
