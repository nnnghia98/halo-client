import React from "react";
import { useRouter } from "next/router";

import { Breadcrumb } from "components";
import {
  ProductDetailRecommend,
  ProductDetailSubscribe,
  ProductDetailMobileContent,
  WebContent,
} from "modules";
import { PRODUCT_DETAIL_PATHS, WIDTH_BREAKPOINT } from "utils/constants";
import { useWindowDimensions } from "utils/window";

import styles from "./index.module.scss";

const ProductDetail = (props) => {
  const router = useRouter();
  const { category } = router.query;
  const { width } = useWindowDimensions();

  return (
    <div className={styles.productDetail}>
      <Breadcrumb paths={PRODUCT_DETAIL_PATHS} />

      <div className={styles.productDetail__content}>
        {width < WIDTH_BREAKPOINT ? (
          <ProductDetailMobileContent />
        ) : (
          <WebContent />
        )}
      </div>

      <ProductDetailRecommend />
      <ProductDetailSubscribe />
    </div>
  );
};

export default ProductDetail;
