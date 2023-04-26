import { HeadTitle } from "components/";
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
    const res = await publicRequest.get("/page/get-page-by-name/product");
    const res1 = await publicRequest.get("/category/main-category");

    const data = await res.data;
    const data1 = await res1.data;

    return {
      props: { product: data, category: data1 },
    };
  } catch (e) {
    console.log(e);
  }
};

export default Products;
