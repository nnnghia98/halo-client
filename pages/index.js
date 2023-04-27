import { VideoPlayer, HeadTitle } from "components";
import {
  AboutUs,
  BespokeProjects,
  ResidentalCollections,
  Projects,
  Collaborators,
  SpecialProducts,
} from "modules";

import publicRequest from "utils/requests";

import styles from "./index.module.scss";

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

export const getStaticProps = async () => {
  try {
    const res = await publicRequest.get("/page/get-page-by-name/home");
    const data = res.data;

    return {
      props: data,
    };
  } catch (e) {
    console.log(e);
  }
};

export default Home;
