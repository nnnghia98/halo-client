import React from "react";
import { useRouter } from "next/router";

const ProductBrandDetail = () => {
  const router = useRouter();
  const { brand } = router.query;

  return <>brand: {brand}</>;
};

export default ProductBrandDetail;
