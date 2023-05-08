import React from "react";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";

import videoPlayerThumb from "assets/img/videoPlayerThumb.jpg";

import styles from "./VideoPlayer.module.scss";

const VideoPlayer = ({ src }) => (
  <>
    {isEmpty(src) ? (
      <div className={styles.videoPlayer}>
        <Image
          className={styles.videoPlayer__thumb}
          src={videoPlayerThumb}
          alt="thumbnail"
          priority
        />
      </div>
    ) : (
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        className={styles.videoPlayer}
      >
        <source src={src} type="video/mp4" />
      </video>
    )}
  </>
);

export default VideoPlayer;
