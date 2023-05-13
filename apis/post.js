import requests from "../utils/requests";

export const getPostDetailBySlug = (slug) => requests({
  url: `/post/d/fetch-post-detail-by-slug/${slug}`
})

export const getPostsByType = (type, params = {}) => requests({
  url: `/post/fetch-posts-by-type/${type}`,
  params
})
