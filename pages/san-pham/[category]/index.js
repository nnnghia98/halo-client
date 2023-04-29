import React from "react";

import { HeadTitle } from "components";
import { ProductCategoryFilterBar, ProductList } from "modules";

import publicRequest from "utils/requests";

import styles from "./index.module.scss";

const ProductDetail = (props) => {
  return (
    <div className={styles.productDetail}>
      <HeadTitle title={props.title} />
      <div className={styles.productDetail__content}>
        <div className={styles.productDetail__filterBarWrapper}>
          <ProductCategoryFilterBar />
        </div>
        <div className={styles.productDetail__productListWrapper}>
          <ProductList />
        </div>
      </div>
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
    const res = await publicRequest.get(`/category/d/${category}`);
    const categoryData = await res.data;

    return { props: categoryData };
  } catch (e) {
    return { props: {} };
  }
};

export default ProductDetail;
