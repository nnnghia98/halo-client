import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
        <div className={styles.productRecommend__arrowWrapper}>
          <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#babec4" }} />
        </div>
        {width < WIDTH_BREAKPOINT ? renderMobileLayout() : renderWebLayout()}
        <div className={styles.productRecommend__arrowWrapper}>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: "#babec4" }} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommend;
