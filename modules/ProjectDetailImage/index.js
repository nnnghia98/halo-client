import React from "react";
import Image from "next/image";

import collectionDetailImage from "assets/img/collectionDetailImage.png";

import styles from "./ProjectDetailImage.module.scss";

const ProjectDetailImage = () => (
  <div className={styles.image}>
    <Image src={collectionDetailImage} alt="collection detail" />
  </div>
);

export default ProjectDetailImage;
