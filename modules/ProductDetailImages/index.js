import React from "react";
import Image from "next/image";

import thumb2 from "assets/img/thumb2.jpg";

import styles from "./ProductDetailImages.module.scss";

const Images = () => (
  <div className={styles.images}>
    <div className={styles.images__mainImage}>
      <Image priority src={thumb2} alt="" />
    </div>
    <div className={styles.images__slideshow}>
      <div className={styles.images__smImage}>
        <Image priority src={thumb2} alt="" />
      </div>
      <div className={styles.images__smImage}>
        <Image priority src={thumb2} alt="" />
      </div>
      <div className={styles.images__smImage}>
        <Image priority src={thumb2} alt="" />
      </div>
      <div className={styles.images__smImage}>
        <Image priority src={thumb2} alt="" />
      </div>
    </div>
  </div>
);

export default Images;
