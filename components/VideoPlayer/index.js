import React from "react";
import Image from "next/image";

import videoPlayerThumb from "assets/img/videoPlayerThumb.jpg";

import styles from "./VideoPlayer.module.scss";

const VideoPlayer = () => (
  <div className={styles.videoPlayer}>
    <Image
      className={styles.videoPlayer__thumb}
      src={videoPlayerThumb}
      alt="thumbnail"
      priority
    />
  </div>
);

export default VideoPlayer;
