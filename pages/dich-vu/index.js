import { PostHeader, PostGallery } from "modules";

import { HeadTitle } from "components";

const TITLE = "Dịch vụ";
const Service = () => (
  <>
    <HeadTitle title={TITLE} />
    <PostHeader title={TITLE} />
    <PostGallery items={[]} categories={[]} />
  </>
);

export default Service;
