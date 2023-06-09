import React from "react";
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
import { PRODUCT_PAGE, WIDTH_BREAKPOINT } from "utils/constants";
import { useWindowDimensions } from "utils/window";

import styles from "./index.module.scss";

const ProductDetail = ({ category, products, product }) => {
  const { width } = useWindowDimensions();

  const renderCategoryContent = () => (
    <>
      <HeadTitle title={category.title} />
      <div className={styles.productDetail__content}>
        <div className={styles.productDetail__filterButtonWrapper}>
          <h4>FILTER +</h4>
        </div>
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
      <Breadcrumb paths={product.breadcrumb} />

      <div className={styles.productDetail__content}>
        {width < WIDTH_BREAKPOINT ? (
          <ProductDetailMobileContent product={product} />
        ) : (
          <WebContent product={product} />
        )}
      </div>

      <ProductDetailRecommend relatedProducts={product.related_products} />
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

export const getServerSideProps = ({ params, query }) => {
  const { slug } = params;
  let buildQuery = {};

  if (query.slug) {
    delete query.slug;
    buildQuery = query;
  }
  return getProductBySlug(slug)
    .then((res) => {
      return {
        props: {
          product: res.data,
        },
      };
    })
    .catch(async (err) => {
      if (err.response.data.code === 404) {
        const [categoryData, products] = await Promise.all([
          getCategoryDetail(slug),
          getProductsByCategory(slug, { params: buildQuery }),
        ]);
        return {
          props: {
            category: categoryData.data,
            products: products.data,
          },
        };
      }
      return {
        redirect: {
          destination: `/${PRODUCT_PAGE.slug}`,
          permanent: false,
        },
      };
    })
    .finally(() => {
      return {
        redirect: {
          destination: `/${PRODUCT_PAGE.slug}`,
          permanent: false,
        },
      };
    });
};

export default ProductDetail;
