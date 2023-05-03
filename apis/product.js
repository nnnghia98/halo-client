import requests from "../utils/requests";

export const getProductsByCategory = (
  categorySlug,
  options = {
    params: {},
  }
) =>
  requests({
    url: `/product/get-product-by-category/${categorySlug}`,
    params: options.params,
  });

export const getHotProduct = () =>
  requests({
    url: "/special-product-display/fetch-product-by-type/hot",
  });

export const getProductBySlug = (slug) =>
  requests({
    url: `product/d/fetch-product-detail-by-slug/${slug}`,
  });
