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
      <div className={styles.videoIFrame}>
        <iframe width="100%" height="100%" src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    )}
  </>
);

export default VideoPlayer;
