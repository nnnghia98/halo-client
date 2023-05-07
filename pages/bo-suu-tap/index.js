import React from "react";
import { PostHeader, PostGallery } from "modules";

import { HeadTitle } from "components";

import { getPostsByType } from "apis/post";
import { getPageDetail } from "apis/page";
import { getCategoriesByPageSlug } from "apis/category";

const Collections = ({ pageDetail, postsCollection, categories }) => (
  <>
    <HeadTitle title={pageDetail.title} />
    <PostHeader title={pageDetail.title} description={pageDetail.description} />
    <PostGallery items={postsCollection} categories={categories} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const [pageDetail, postsCollection] = await Promise.all([
      getPageDetail("collection"),
      getPostsByType("collection"),
    ]);

    const categories = await getCategoriesByPageSlug(pageDetail.data.slug);

    return {
      props: {
        pageDetail: pageDetail.data,
        postsCollection: postsCollection.data,
        categories: categories.data,
      },
    };
  } catch (e) {
    return {
      props: { pageDetail: {}, postsCollection: [] },
    };
  }
};

export default Collections;
