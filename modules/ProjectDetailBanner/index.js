import React from "react";
import Image from "next/image";

import videoPlayerThumb from "assets/img/videoPlayerThumb.jpg";
import arrow from "assets/svg/arrow.svg";

import styles from "./ProjectDetailBanner.module.scss";

const Banner = () => (
  <div className={styles.banner}>
    <Image
      className={styles.banner__image}
      src={videoPlayerThumb}
      alt="banner"
    />
    <div className={styles.banner__detail}>
      <div className={styles.banner__name}>CÁ CHÉP VƯỢT VŨ MÔN HÓA RỒNG</div>
      <div className={styles.banner__location}>La Vela Saigon Hotel, TPHCM</div>
      <div className={styles.banner__arrowDown}>
        <Image src={arrow} alt="down-arrow" />
      </div>
    </div>
  </div>
);

export default Banner;
