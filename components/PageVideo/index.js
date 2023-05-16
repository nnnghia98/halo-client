import React from "react";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";

import videoPlayerThumb from "assets/img/videoPlayerThumb.jpg";

import styles from "./PageVideo.module.scss";

const PageVideo = ({ src }) => (
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
      <video style={{width: "100%"}} autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    )}
  </>
);

export default PageVideo;
