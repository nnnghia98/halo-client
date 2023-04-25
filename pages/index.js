import { VideoPlayer } from "components";

import styles from "./index.module.scss";

import {
  AboutUs,
  BespokeProjects,
  ResidentalCollections,
  Projects,
  Collaborators,
  SpecialProducts,
} from "./modules";

const Home = () => (
  <div className={styles.home}>
    <VideoPlayer />
    <AboutUs />
    <BespokeProjects />
    <ResidentalCollections />
    <SpecialProducts />
    <Projects />
    <Collaborators />
  </div>
);

export default Home;
