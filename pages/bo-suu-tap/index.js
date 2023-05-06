import React from "react";
import { PostHeader, PostGallery } from "modules";
import {getPostsByType} from "apis/post";
import {getPageDetail} from "apis/page";
import HeadTitle from "../../components/HeadTitle";

const Collections = ({ pageDetail, postsCollection }) => (
  <>
    <HeadTitle title={pageDetail.title} />
    <PostHeader />
    <PostGallery items={postsCollection} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const [pageDetail, postsCollection] = await Promise.all([
      getPageDetail("collection"),
      getPostsByType("collection")
    ]);

    return {
      props: {
        pageDetail: pageDetail.data,
        postsCollection: postsCollection.data
      },
    };
  } catch (e) {
    return {
      props: { pageDetail: {}, postsCollection: [] },
    };
  }
};

export default Collections;
