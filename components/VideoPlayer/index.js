import React from "react";

import videoPlayerThumb from "assets/img/videoPlayerThumb.jpg";

import styles from "./VideoPlayer.module.scss";

const VideoPlayer = () => (
  <div className={styles.videoPlayer}>
    <img
      className={styles.videoPlayer__thumb}
      src={videoPlayerThumb}
      alt="thumbnail"
    />
  </div>
);

export default VideoPlayer;
