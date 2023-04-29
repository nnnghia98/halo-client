import React from "react";
import Image from "next/image";

import { useWindowDimensions } from "utils/window";
import { WIDTH_BREAKPOINT } from "utils/constants";

import thumb2 from "assets/img/thumb2.jpg";

import styles from "./ProductDetailRecommend.module.scss";

const ProductRecommend = () => {
  const { width } = useWindowDimensions();

  const renderWebLayout = () => (
    <>
      <div className={styles.productRecommend__imgWrapper}>
        <Image src={thumb2} alt="" />
      </div>
      <div className={styles.productRecommend__imgWrapper}>
        <Image src={thumb2} alt="" />
      </div>
      <div className={styles.productRecommend__imgWrapper}>
        <Image src={thumb2} alt="" />
      </div>
      <div className={styles.productRecommend__imgWrapper}>
        <Image src={thumb2} alt="" />
      </div>
    </>
  );

  const renderMobileLayout = () => (
    <>
      <div className={styles.productRecommend__imgWrapper}>
        <Image src={thumb2} alt="" />
      </div>
      <div className={styles.productRecommend__imgWrapper}>
        <Image src={thumb2} alt="" />
      </div>
    </>
  );

  return (
    <div className={styles.productRecommend}>
      <h2>ĐỀ XUẤT SẢN PHẨM</h2>

      <div className={styles.productRecommend__slideshow}>
        <div>{"<"}</div>
        {width < WIDTH_BREAKPOINT ? renderMobileLayout() : renderWebLayout()}
        <div>{">"}</div>
      </div>
    </div>
  );
};

export default ProductRecommend;
