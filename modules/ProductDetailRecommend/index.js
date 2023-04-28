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
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
    </>
  );

  const renderMobileLayout = () => (
    <>
      <Image src={thumb2} alt="" />
      <Image src={thumb2} alt="" />
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
