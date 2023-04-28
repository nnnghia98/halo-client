import React from "react";
import { useRouter } from "next/router";

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

import styles from "./index.module.scss";

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

export const getStaticPaths = async () => {
  try {
    const res = await publicRequest.get("/category/main-category");
    const mainCategories = await res.data;

    const paths = mainCategories.map((category) => ({
      params: { category: category.slug },
    }));

    return { paths, fallback: false };
  } catch (e) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps = async ({ params }) => {
  const { category } = params;

  try {
    const res = await publicRequest.get(`d/${category}`);
    const categoryData = await res.data;

    return { props: categoryData };
  } catch (e) {
    return { props: {} };
  }
};

export default ProductDetail;
