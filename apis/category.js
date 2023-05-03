import requests from "../utils/requests";

export const getCategoryDetail = (categorySlug) => requests({
  url: `category/d/${categorySlug}`
})

export const getMainCategories = () => requests({
  url: "/category/main-category"
})
