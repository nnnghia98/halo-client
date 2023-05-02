import React, { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";

import { HeadTitle } from "components";
import { ProductCategoryFilterBar, ProductList } from "modules";

import publicRequest from "utils/requests";

import styles from "./index.module.scss";

const ProductDetail = ({ category, products }) => {
  const a = [];
  const router = useRouter();

  delete router.query.category;

  useLayoutEffect(() => {
    if (!isEmpty(router.query)) {
      console.log("bbbb", router);
      //call product api
    }
  }, [JSON.stringify(router.query)]);

  return (
    <div className={styles.productDetail}>
      <HeadTitle title={category.title} />
      <div className={styles.productDetail__content}>
        <div className={styles.productDetail__filterBarWrapper}>
          <ProductCategoryFilterBar />
        </div>
        <div className={styles.productDetail__productListWrapper}>
          <ProductList products={a.length > 0 ? a : products} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { category } = params;

  try {
    const [categoryData, products] = await Promise.all([
      publicRequest.get(`/category/d/${category}`),
      publicRequest.get(`/product/get-product-by-category/${category}`, {
        query: {
          color: ["white", "blue"],
        },
      }),
    ]);

    return { props: { category: categoryData.data, products: products.data } };
  } catch (e) {
    return { props: {} };
  }
};

export default ProductDetail;
