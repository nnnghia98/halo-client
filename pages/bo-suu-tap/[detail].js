import React from "react";
import Image from "next/image";

import { VideoPlayer } from "components";
import {
  ProjectDetailBanner,
  ProjectDetailImage,
  ProjectDetailDetail,
  ProjectDetailStory,
  ProjectDetailCarousel,
  ProjectDetailContact,
} from "modules";

import arrow from "assets/svg/arrow.svg";
import thumb2 from "assets/img/thumb2.jpg";

import styles from "./detail.module.scss";
import {getPostDetailBySlug} from "apis/post";

const CollectionDetail = ({ item }) => {
  return (
    <div className={styles.collectionDetail}>
      {/* <ProjectDetailBanner title={item.title} /> */}
      <VideoPlayer />

      <div className={styles.collectionDetail__imgDetail}>
        <div className={styles.collectionDetail__img}>
          <ProjectDetailImage />
        </div>
        <div className={styles.collectionDetail__videoPlayer}>
          <ProjectDetailDetail />
        </div>
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
          <Image src={thumb2} alt="collection detail" />
        </div>
        <div className={styles.collectionDetail__carousel__navigation}>
          <div className={styles.collectionDetail__carousel__leftArrow}>
            <Image src={arrow} alt="leftArrow" />
          </div>
          <div className={styles.collectionDetail__carousel__rightArrow}>
            <Image src={arrow} alt="rightArrow" />
          </div>
        </div>
      </div>

      <div className={styles.collectionDetail__contact}>
        <ProjectDetailContact />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { detail } = params;

  try {
    const res = await getPostDetailBySlug(detail);
    const data = res.data;

    return { props: { item: data } };
  } catch (e) {
    return { props: { item: {} } };
  }
};

export default CollectionDetail;
