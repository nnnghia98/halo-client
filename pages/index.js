import { HeadTitle } from "components";
import {
  AboutUs,
  BespokeProjects,
  ResidentialCollections,
  Projects,
  Collaborators,
  SpecialProducts,
} from "modules";
import styles from "./index.module.scss";
import { getPageDetail } from "apis/page";
import { getPostsByType } from "apis/post";
import get from "lodash/get";
import PageVideo from "components/PageVideo";

const Home = ({ homePage, postsProject }) => {
  const videoPath = get(homePage, "video.path");
  return (
    <div className={styles.home}>
      <HeadTitle title={homePage.title} />
      <PageVideo src={videoPath} />
      <AboutUs />
      <BespokeProjects />
      <ResidentialCollections />
      <SpecialProducts />
      <Projects postsProject={postsProject} />
      <Collaborators />
    </div>
  )
};

export const getServerSideProps = async () => {
  try {
    const [homePage, postsProject] = await Promise.all([
      getPageDetail("home"),
      getPostsByType("project", { limit: 9 }),
    ])

    return {
      props: {
        homePage: homePage.data,
        postsProject: postsProject.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
