import React from "react";
import Image from "next/image";

import ProjectDetailImage from "../ProjectDetailImage";

import arrow from "assets/svg/arrow.svg";

import styles from "./ProjectDetailCarousel.module.scss";

const Carousel = () => (
  <div className={styles.carousel}>
    <ProjectDetailImage />

    <div className={styles.carousel__navigation}>
      <div className={styles.carousel__leftArrow}>
        <Image src={arrow} alt="leftArrow" />
      </div>
      <div className={styles.carousel__rightArrow}>
        <Image src={arrow} alt="rightArrow" />
      </div>
    </div>
  </div>
);

export default Carousel;
