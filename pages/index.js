import Head from "next/head";

import { VideoPlayer } from "components";
import {
  AboutUs,
  BespokeProjects,
  ResidentalCollections,
  Projects,
  Collaborators,
  SpecialProducts,
} from "modules";

import styles from "./index.module.scss";

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
