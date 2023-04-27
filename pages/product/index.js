import React from 'react';
import { HeadTitle } from "components";
import { ProductHeader, ProductList } from "modules";

import publicRequest from "utils/requests";

const Products = ({ product, category }) => (
  <>
    <HeadTitle title={product.title} />
    <ProductHeader header={product.title} />
    <ProductList category={category} />
  </>
);

export const getStaticProps = async () => {
  try {
    const [product, category] = await Promise.all([
      publicRequest.get("/page/get-page-by-name/product"),
      publicRequest.get("/category/main-category")
    ])

    return {
      props: { product: product.data, category: category.data },
    };
  } catch (e) {
    console.log(e);
  }
};

export default Products;
