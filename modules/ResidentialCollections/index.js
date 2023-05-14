import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { COLLECTION_PAGE, HEIGHT_BREAKPOINT } from "utils/constants";

import styles from "./ResidentalCollections.module.scss";
import { useRouter } from "next/router";

const ResidentialCollections = () => {
  const router = useRouter();
  return (
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
            <div onClick={() => {
              router.push(`/${COLLECTION_PAGE.slug}`)
            }}>
              <span className={styles.residentalCollections__moreBtn}>
                TÌM HIỂU THÊM
                <span className={styles.residentalCollections__moreBtn__arrow} />
              </span>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  )
};

export default ResidentialCollections;
