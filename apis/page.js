import requests from "../utils/requests";

export const getPageDetail = (pageSlug) => requests({
  url: `/page/get-page-by-name/${pageSlug}`
})
