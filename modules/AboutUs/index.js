import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { ABOUT_US_HEIGHT_BREAKPOINT } from "utils/constants";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__wrapper}>
        <div className={styles.aboutUs__background} />
        <div className={styles.aboutUs__container}>
          <AnimationOnScroll
            animateIn={styles.aboutUs__brandWrapper}
            offset={ABOUT_US_HEIGHT_BREAKPOINT}
            animateOnce={true}
          >
            <h2>
              <strong className={styles.aboutUs__brandName}>
                HALOLIGHTING
              </strong>{" "}
              <span className={styles.aboutUs__brandBusiness}>
                LÀ ĐỘI NGŨ THIẾT KẾ ĐÈN TRANG TRÍ NỘI THẤT CHO KHÔNG GIAN VÀ
                CUNG CẤP CÁC SẢN PHẨM CHẤT LƯỢNG TOP ĐẦU THỊ TRƯỜNG
              </span>
            </h2>
          </AnimationOnScroll>
          <div>
            <span className={styles.aboutUs__moreBtn}>
              TÌM HIỂU THÊM
              <span className={styles.aboutUs__moreBtn__arrow} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
