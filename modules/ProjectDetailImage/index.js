import React from "react";

import collectionDetailImage from "assets/img/collectionDetailImage.png";

import styles from "./ProjectDetailImage.module.scss";

const Image = ({ width }) => (
  <div className={styles.image}>
    <img
      src={collectionDetailImage}
      width={width || "auto"}
      alt="collection detail"
    />
  </div>
);

export default Image;
