import React from "react";
import {HeadTitle} from "components";
import {ProductCategoryFilterBar, ProductList} from "modules";
import styles from "./index.module.scss";
import {getProductsByCategory} from "apis/product";
import {getCategoryDetail} from "apis/category";

const ProductDetail = ({category, products}) => {
  return (
    <div className={styles.productDetail}>
      <HeadTitle title={category.title}/>
      <div className={styles.productDetail__content}>
        <div className={styles.productDetail__filterBarWrapper}>
          <ProductCategoryFilterBar category={category}/>
        </div>
        <div className={styles.productDetail__productListWrapper}>
          <ProductList products={products}/>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params, query}) => {
  const {category} = params;
  let buildQuery = {}
  if (query.category) {
    delete query.category;
    buildQuery = query;
  }

  try {
    const [categoryData, products] = await Promise.all([
      getCategoryDetail(category),
      getProductsByCategory(category, {params: buildQuery}),
    ]);
    return {props: {category: categoryData.data, products: products.data}};
  } catch (e) {
    return {
      props: {
        category: {},
        products: []
      }
    };
  }
};

export default ProductDetail;
