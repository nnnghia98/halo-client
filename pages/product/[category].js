import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { category } = router.query;

  return <>category: {category}</>;
};

export default ProductDetail;
