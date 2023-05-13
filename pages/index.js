import { VideoPlayer, HeadTitle } from "components";
import {
  AboutUs,
  BespokeProjects,
  ResidentalCollections,
  Projects,
  Collaborators,
  SpecialProducts,
} from "modules";
import styles from "./index.module.scss";
import {getPageDetail} from "apis/page";
import {getPostsByType} from "apis/post";
import get from "lodash/get";

const Home = ({homePage, postsCollection}) => {
  const videoPath = get(homePage, "video.path");
  return (
    <div className={styles.home}>
      <HeadTitle title={homePage.title} />
      <VideoPlayer src={videoPath} />
      <AboutUs />
      <BespokeProjects />
      <ResidentalCollections />
      <SpecialProducts />
      <Projects postsCollection={postsCollection} />
      <Collaborators />
    </div>
  )
};

export const getServerSideProps = async () => {
  try {
    const [homePage, postsCollection] = await Promise.all([
      getPageDetail("home"),
      getPostsByType("collection"),
    ])
    
    return {
      props: {
        homePage: homePage.data,
        postsCollection: postsCollection.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
