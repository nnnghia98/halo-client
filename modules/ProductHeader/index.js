import React from "react";
import isEmpty from "lodash/isEmpty";

import styles from "./ProductHeader.module.scss";

const ProductHeader = ({ title, description }) => (
  <div className={styles.productHeader}>
    <div className={styles.productHeader__container}>
      <div className={styles.productHeader__paragraphWrapper}>
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

export default ProductHeader;
