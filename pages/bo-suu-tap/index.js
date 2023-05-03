import { PostHeader, PostGallery } from "modules";

import publicRequest from "utils/requests";

const Collections = ({ collections }) => (
  <>
    <PostHeader />
    <PostGallery items={collections} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const res = await publicRequest.get("/post/fetch-posts-by-type/collection");
    const collections = await res.data;

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
