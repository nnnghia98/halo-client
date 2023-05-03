import React from "react";

import { HeadTitle, Breadcrumb } from "components";
import {
  ProductDetailRecommend,
  ProductDetailSubscribe,
  ProductDetailMobileContent,
  WebContent,
} from "modules";
import { PRODUCT_DETAIL_PATHS, WIDTH_BREAKPOINT } from "utils/constants";
import { useWindowDimensions } from "utils/window";
import publicRequest from "utils/requests";

import styles from "./detail.module.scss";

const ProductDetail = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.productDetail}>
      <HeadTitle title={props.title} />
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

export const getServerSideProps = async ({ params }) => {
  const { detail } = params;

  try {
    const res = await publicRequest.get(
      `/product/d/fetch-product-detail-by-slug/${detail}`
    );
    const data = await res.data;

    return { props: { product: data } };
  } catch (e) {
    return { props: { product: {} } };
  }
};

export default ProductDetail;
