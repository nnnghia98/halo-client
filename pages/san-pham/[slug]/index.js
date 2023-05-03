import React from "react";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";

import { HeadTitle, Breadcrumb } from "components";
import {
  ProductCategoryFilterBar,
  ProductList,
  ProductDetailRecommend,
  ProductDetailSubscribe,
  ProductDetailMobileContent,
  WebContent,
} from "modules";

import { getProductsByCategory, getProductBySlug } from "apis/product";
import { getCategoryDetail } from "apis/category";
import { PRODUCT_DETAIL_PATHS, WIDTH_BREAKPOINT } from "utils/constants";
import { useWindowDimensions } from "utils/window";

import styles from "./index.module.scss";

const ProductDetail = ({ category, products, product }) => {
  const { width } = useWindowDimensions();

  const renderCategoryContent = () => (
    <>
      <HeadTitle title={category.title} />
      <div className={styles.productDetail__content}>
        <div className={styles.productDetail__filterBarWrapper}>
          <ProductCategoryFilterBar category={category} />
        </div>
        <div className={styles.productDetail__productListWrapper}>
          <ProductList products={products} />
        </div>
      </div>
    </>
  );

  const renderProductDetailContent = () => (
    <>
      <HeadTitle title={product.title} />
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
    </>
  );

  return (
    <div className={styles.productDetail}>
      {isEmpty(product)
        ? renderCategoryContent()
        : renderProductDetailContent()}
    </div>
  );
};

export const getServerSideProps = async ({ params, query }) => {
  const { slug } = params;
  let buildQuery = {};

  if (query.category) {
    delete query.category;
    buildQuery = query;
  }

  const result = { category: {}, products: [], product: {} };

  try {
    if (isEqual(slug, "thuong-hieu") || isEqual(slug, "thi-truong")) {
      const [categoryData, products] = await Promise.all([
        getCategoryDetail(slug),
        getProductsByCategory(slug, { params: buildQuery }),
      ]);

      result.category = categoryData.data;
      result.products = products.data;
    } else {
      const productRes = await getProductBySlug(slug);
      const product = await productRes.data;

      result.product = product;
    }

    return {
      props: result,
    };
  } catch (e) {
    return {
      props: result,
    };
  }
};

export default ProductDetail;
