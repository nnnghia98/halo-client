import React from "react";

import { VideoPlayer } from "components";
import {
  ProjectDetailBanner,
  ProjectDetailImage,
  ProjectDetailDetail,
  ProjectDetailStory,
  ProjectDetailCarousel,
  ProjectDetailContact,
} from "modules";

import { useWindowDimensions } from "utils/window";

import { WIDTH_BREAKPOINT } from "utils/constants";

import arrow from "assets/svg/arrow.svg";
import thumb2 from "assets/img/thumb2.jpg";

import styles from "./detail.module.scss";

const CollectionDetail = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.collectionDetail}>
      <ProjectDetailBanner />
      <VideoPlayer />

      <div className={styles.collectionDetail__imgDetail}>
        <div className={styles.collectionDetail__imgDetail__imageWrapper}>
          <ProjectDetailImage />
        </div>
        <ProjectDetailDetail />
      </div>

      <div className={styles.collectionDetail__storyCarousel}>
        <ProjectDetailStory />
        <div
          className={styles.collectionDetail__storyCarousel__carouselWrapper}
        >
          <ProjectDetailCarousel />
        </div>
      </div>

      <div className={styles.collectionDetail__imgCarousel}>
        <div className={styles.collectionDetail__imgCarousel__imageWrapper}>
          <ProjectDetailImage />
        </div>
        <div className={styles.collectionDetail__imgCarousel__carouselWrapper}>
          <ProjectDetailCarousel />
        </div>
      </div>

      <div className={styles.collectionDetail__carousel}>
        <div className={styles.collectionDetail__carousel__image}>
          <img src={thumb2} alt="collection detail" />
        </div>
        <div className={styles.collectionDetail__carousel__navigation}>
          <div className={styles.collectionDetail__carousel__leftArrow}>
            <img src={arrow} alt="leftArrow" />
          </div>
          <div className={styles.collectionDetail__carousel__rightArrow}>
            <img src={arrow} alt="rightArrow" />
          </div>
        </div>
      </div>

      <div className={styles.collectionDetail__contact}>
        <ProjectDetailContact />
      </div>
    </div>
  );
};

export default CollectionDetail;
