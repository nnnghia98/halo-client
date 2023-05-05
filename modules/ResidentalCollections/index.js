import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { HEIGHT_BREAKPOINT } from "utils/constants";

import styles from "./ResidentalCollections.module.scss";

const ResidentalCollections = () => (
  <div className={styles.residentalCollections}>
    <div className={styles.residentalCollections__container}>
      <div className={styles.residentalCollections__textWrap}>
        <AnimationOnScroll
          animateIn={styles.residentalCollections__animated}
          offset={HEIGHT_BREAKPOINT.RESIDENTAL_COLLECTIONS}
          animateOnce={true}
        >
          <h2>BỘ SƯU TẬP</h2>
          <div className={styles.residentalCollections__des}>
            Mang ánh sáng và nét đẹp hình thái đến không gian cùng giá trị tinh
            thần là điều chúng tôi hướng đến.
          </div>
          <span className={styles.residentalCollections__moreBtn}>
            TÌM HIỂU THÊM
            <span className={styles.residentalCollections__moreBtn__arrow} />
          </span>
        </AnimationOnScroll>
      </div>
    </div>
  </div>
);

export default ResidentalCollections;
