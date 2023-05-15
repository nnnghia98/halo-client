import { HeadTitle } from "components";
import { ProductHeader, ProductList } from "modules";

import { getHotProduct } from "apis/product";
import { getPageDetail } from "apis/page";
import { getMainCategories } from "apis/category";

const Products = ({ page, categories, products = [] }) => (
  <>
    <HeadTitle title={page.title} />
    <ProductHeader title={page.title} description={page.description} />
    <ProductList categories={categories} products={products} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const [page, categories, productsHot] = await Promise.all([
      getPageDetail("product"),
      getMainCategories(),
      getHotProduct(),
    ]);

    return {
      props: {
        page: page.data,
        categories: categories.data,
        products: productsHot.data,
      },
    };
  } catch (e) {
    return {
      props: {
        page: {},
        categories: [],
        products: [],
      },
    };
  }
};

export default Products;
