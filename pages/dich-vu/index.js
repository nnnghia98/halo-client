import { PostHeader, PostGallery } from "modules";

import { HeadTitle } from "components";

import { getPostsByType } from "apis/post";
import { getPageDetail } from "apis/page";
import { getCategoriesByPageSlug } from "apis/category";

const Service = ({ pageDetail, postsService }) => (
  <>
    <HeadTitle title={pageDetail.title} />
    <PostHeader title={pageDetail.title} description={pageDetail.description} />
    <PostGallery items={postsService} categories={[]} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const [pageDetail, postsService] = await Promise.all([
      getPageDetail("service"),
      getPostsByType("service"),
    ]);

    const categories = await getCategoriesByPageSlug(pageDetail.data.slug);

    return {
      props: {
        pageDetail: pageDetail.data,
        postsService: postsService.data,
        categories: categories.data,
      },
    };
  } catch (e) {
    return {
      props: { pageDetail: {}, postsService: [] },
    };
  }
};

export default Service;
