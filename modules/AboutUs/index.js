import React, { useState, useEffect, useCallback } from "react";

import { useWindowScrollingY } from "utils/window";
import { ABOUT_US_HEIGHT_BREAKPOINT } from "utils/constants";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const scrollY = useWindowScrollingY();

  return (
    <div className={styles.aboutUs} onScroll={() => console.log(height)}>
      <div className={styles.aboutUs__wrapper}>
        <div className={styles.aboutUs__background} />
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__brandWrapper}>
            <h2>
              <strong className={styles.aboutUs__brandName}>
                HALOLIGHTING
              </strong>{" "}
              <span className={styles.aboutUs__brandBusiness}>
                LÀ ĐỘI NGŨ THIẾT KẾ ĐÈN TRANG TRÍ NỘI THẤT CHO KHÔNG GIAN VÀ
                CUNG CẤP CÁC SẢN PHẨM CHẤT LƯỢNG TOP ĐẦU THỊ TRƯỜNG
              </span>
            </h2>
          </div>
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
