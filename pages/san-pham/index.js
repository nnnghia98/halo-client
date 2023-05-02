import { HeadTitle } from "components";
import { ProductHeader, ProductList } from "modules";

import publicRequest from "utils/requests";

const Products = ({ page, categories, products = [] }) => (
  <>
    <HeadTitle title={page.title} />
    <ProductHeader header={page.title} />
    <ProductList categories={categories} products={products} />
  </>
);

export const getStaticProps = async () => {
  try {
    const [page, categories] = await Promise.all([
      publicRequest.get("/page/get-page-by-name/product"),
      publicRequest.get("/category/main-category"),
    ]);

    const promise = [];

    categories.data.map((category) => {
      promise.push(
        publicRequest.get(`/product/get-product-by-category/${category.slug}`)
      );
    });

    const result = await Promise.all(promise);

    const products = [];

    result.forEach((product) => products.push(...product.data));

    return {
      props: {
        page: page.data,
        categories: categories.data,
        products: products,
      },
    };
  } catch (e) {
    return {
      props: { page: {}, categories: {} },
    };
  }
};

export default Products;
