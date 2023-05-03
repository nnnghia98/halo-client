import requests from "../utils/requests";

export const getPageDetail = (pageName) => requests({
  url: `/page/get-page-by-name/${pageName}`
})
