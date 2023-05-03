import React from "react";
import Image from "next/image";

import videoPlayerThumb from "assets/img/videoPlayerThumb.jpg";
import arrow from "assets/svg/arrow.svg";

import styles from "./ProjectDetailBanner.module.scss";

const Banner = ({ title }) => (
  <div className={styles.banner}>
    <Image
      className={styles.banner__image}
      src={videoPlayerThumb}
      alt="banner"
    />
    <div className={styles.banner__detail}>
      <div className={styles.banner__name}>{title}</div>
      <div className={styles.banner__location}>La Vela Saigon Hotel, TPHCM</div>
      <div className={styles.banner__arrowDown}>
        <Image src={arrow} alt="down-arrow" height="8px" width="42px" />
      </div>
    </div>
  </div>
);

export default Banner;
