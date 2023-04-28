import getConfig from "next/config";

import { HeadTitle } from "components";
import { ProductHeader, ProductList } from "modules";

import publicRequest from "utils/requests";

const Products = ({ page, categories }) => (
  <>
    <HeadTitle title={page.title} />
    <ProductHeader header={page.title} />
    <ProductList categories={categories} />
  </>
);

export const getStaticProps = async () => {
  try {
    const [page, categories] = await Promise.all([
      publicRequest.get("/page/get-page-by-name/product"),
      publicRequest.get("/category/main-category"),
    ]);

    return {
      props: { page: page.data, categories: categories.data },
    };
  } catch (e) {
    console.log(e);
  }
};

export default Products;
