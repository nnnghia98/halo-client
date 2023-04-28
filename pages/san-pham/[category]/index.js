import React from "react";

import publicRequest from "utils/requests";

import styles from "./index.module.scss";

const ProductDetail = (props) => {
  return <div>{console.log(props)}</div>;
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
