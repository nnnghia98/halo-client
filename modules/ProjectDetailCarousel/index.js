import React from "react";

import Image from "../ProjectDetailImage";

import arrow from "assets/svg/arrow.svg";

import styles from "./ProjectDetailCarousel.module.scss";

const Carousel = () => (
  <div className={styles.carousel}>
    <Image width="500px" />

    <div className={styles.carousel__navigation}>
      <div className={styles.carousel__leftArrow}>
        <img src={arrow} alt="leftArrow" />
      </div>
      <div className={styles.carousel__rightArrow}>
        <img src={arrow} alt="rightArrow" />
      </div>
    </div>
  </div>
);

export default Carousel;
