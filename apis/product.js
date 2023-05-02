import requests from "../utils/requests";

export const getProductsByCategory = (categorySlug, options = {
  params: {}
}) => requests({
  url: `/product/get-product-by-category/${categorySlug}`,
  params: options.params
})
