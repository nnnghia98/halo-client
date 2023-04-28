import React from "react";
import Image from "next/image";

import thumb2 from "assets/img/thumb2.jpg";

import styles from "./ProductDetailImageCarousel.module.scss";

const ImageCarousel = () => (
  <div className={styles.imageCarousel}>
    <Image src={thumb2} alt="" />
  </div>
);

export default ImageCarousel;
