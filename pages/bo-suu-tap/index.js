import React from "react";
import { PostHeader, PostGallery } from "modules";
import {getPostsByType} from "apis/post";

const Collections = ({ collections }) => (
  <>
    <PostHeader />
    <PostGallery items={collections} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const res = await getPostsByType("collection");
    const collections = res.data;

    return {
      props: {
        collections,
      },
    };
  } catch (e) {
    return {
      props: { collections: [] },
    };
  }
};

export default Collections;
