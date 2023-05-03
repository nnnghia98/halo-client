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

const Home = ({ title }) => (
  <div className={styles.home}>
    <HeadTitle title={title} />
    <VideoPlayer />
    <AboutUs />
    <BespokeProjects />
    <ResidentalCollections />
    <SpecialProducts />
    <Projects />
    <Collaborators />
  </div>
);

export const getServerSideProps = async () => {
  try {
    const res = await getPageDetail("home");
    const data = await res.data;

    return {
      props: data,
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
