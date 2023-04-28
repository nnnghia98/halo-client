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
      {/* <HeadTitle title={props.title} /> */}
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

// export const getStaticPaths = async () => {
//   try {
//     // call api get all product and pass to paths

//     const paths = { params: { detail: "detail" } };

//     return { paths, fallback: false };
//   } catch (e) {
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }
// };

// export const getStaticProps = async ({ params }) => {
//   const { category } = params;

//   try {
//     const res = await publicRequest.get(`d/${category}`);
//     const categoryData = await res.data;

//     return { props: categoryData };
//   } catch (e) {
//     return { props: {} };
//   }
// };

export default ProductDetail;
