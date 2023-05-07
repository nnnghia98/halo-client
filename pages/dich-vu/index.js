import { PostHeader, PostGallery } from "modules";

import { HeadTitle } from "components";

import { getPostsByType } from "apis/post";
import { getPageDetail } from "apis/page";
import { getCategoriesByPageSlug } from "apis/category";

const Service = ({ pageDetail }) => (
  <>
    <HeadTitle title={pageDetail.title} />
    <PostHeader title={pageDetail.title} description={pageDetail.description} />
    <PostGallery items={[]} categories={[]} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const [pageDetail, postsCollection] = await Promise.all([
      getPageDetail("service"),
      getPostsByType("service"),
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

export default Service;
