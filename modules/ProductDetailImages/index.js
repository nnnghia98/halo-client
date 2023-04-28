import React from "react";
import Image from "next/image";

import thumb2 from "assets/img/thumb2.jpg";

import styles from "./ProductDetailImages.module.scss";

const Images = () => (
  <div className={styles.images}>
    <div className={styles.images__main}>
      <Image src={thumb2} alt="" />
    </div>
    <div className={styles.images__slideshow}>
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
    </div>
  </div>
);

export default Images;
