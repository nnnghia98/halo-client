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

    const productApis = categories.data.map((category) =>
      publicRequest.get(`/product/get-product-by-category/${category.slug}`)
    );

    // const [products1, products2] = await Promise.all(productApis);

    return {
      props: { page: page.data, categories: categories.data },
    };
  } catch (e) {
    return {
      props: { page: {}, categories: {} },
    };
  }
};

export default Products;
