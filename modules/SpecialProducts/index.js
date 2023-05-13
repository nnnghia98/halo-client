import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { HEIGHT_BREAKPOINT, PRODUCT_PAGE } from "utils/constants";

import styles from "./SpecialProducts.module.scss";
import { useRouter } from "next/router";

const SpecialProducts = () => {
  const router = useRouter();
  return (
    <div className={styles.specialProducts}>
      <div className={styles.specialProducts__container}>
        <div className={styles.specialProducts__textWrap}>
          <AnimationOnScroll
            animateIn={styles.specialProducts__animated}
            offset={HEIGHT_BREAKPOINT.SPECIAL_PRODUCTS}
            animateOnce={true}
          >
            <h2>SẢN PHẨM ĐẶC BIỆT</h2>
            <div className={styles.specialProducts__des}>
              Những sản phẩm được phát triển độc quyền, với chất lượng được kiểm
              soát đến từng chi tiết nhỏ nhất.
            </div>
            <div onClick={() => {
              router.push(`/${PRODUCT_PAGE.slug}/thuong-hieu`)
            }}>
              <span className={styles.specialProducts__moreBtn}>
                TÌM HIỂU THÊM
                <span className={styles.specialProducts__moreBtn__arrow} />
              </span>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  )
};

export default SpecialProducts;
