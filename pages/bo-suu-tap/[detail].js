import React from "react";
import Image from "next/image";
import { Item } from "react-grid-carousel";
import isEmpty from "lodash/isEmpty";

import { VideoPlayer, HorizontalCarousel, HeadTitle } from "components";
import {
  ProjectDetailBanner,
  ProjectDetailImage,
  ProjectDetailDetail,
  ProjectDetailStory,
  ProjectDetailCarousel,
  ProjectDetailContact,
} from "modules";

import { getPostDetailBySlug } from "apis/post";
import { WIDTH_BREAKPOINT } from "utils/constants";
import { useWindowDimensions } from "utils/window";
import { getSpecificSliders } from "utils/sliders";
import { SLIDER } from "utils/constants";

import arrow from "assets/svg/arrow.svg";
import defaultBanner from "assets/img/thumb2.jpg";

import styles from "./detail.module.scss";

const CollectionDetail = ({ post }) => {
  const { width } = useWindowDimensions();

  const renderBannerContent = () => {
    if (isEmpty(post.video_banner_url)) {
      return (
        <div className={styles.collectionDetail__carouselWrapper}>
          <HorizontalCarousel cols={2} rows={1} loop autoplay={3000} gap={20}>
            {getSliders(SLIDER.SPECIAL_SLIDER).map((slider) => (
              <Item key={slider.id}>
                <Image
                  src={slider.thumbnail}
                  alt={slider.name}
                  width="500"
                  height="700"
                />
              </Item>
            ))}
          </HorizontalCarousel>
        </div>
      );
    }

    return <VideoPlayer src={post.video_banner_path} />;
  };

  const getSliders = (group) => getSpecificSliders(post.sliders, group);

  return (
    <>
      <HeadTitle title={post.title} /> 
      <div className={styles.collectionDetail}>
        <ProjectDetailBanner title={post.title} location={post.description} />
        {renderBannerContent()}

        <div className={styles.collectionDetail__contentWrapper}>
          <div
            dangerouslySetInnerHTML={{ __html: post.video_banner_description }}
          />
        </div>

        <div className={styles.collectionDetail__contentWrapper}>
          <div
            dangerouslySetInnerHTML={{ __html: post.video_detail_description }}
          />
        </div>

        {/* <div className={styles.collectionDetail__storyCarousel}>
        <ProjectDetailStory />
        <div
          className={styles.collectionDetail__storyCarousel__carouselWrapper}
        >
          <ProjectDetailCarousel />
        </div>
      </div> */}

        <div className={styles.collectionDetail__imgCarousel}>
          <div className={styles.collectionDetail__imgCarousel__imageWrapper}>
            <ProjectDetailImage />
          </div>
          <div className={styles.collectionDetail__imgCarousel__carouselWrapper}>
            <ProjectDetailCarousel />
          </div>
        </div>

        <div className={styles.collectionDetail__carouselWrapper}>
          <HorizontalCarousel cols={2} rows={1} loop autoplay={3000} gap={20}>
            {getSliders(SLIDER.BOTTOM_SLIDER).map((slider) => (
              <Item key={slider.id}>
                <Image
                  src={slider.thumbnail}
                  alt={slider.name}
                  width="500"
                  height="700"
                />
              </Item>
            ))}
          </HorizontalCarousel>
        </div>

        <div className={styles.collectionDetail__contact}>
          <ProjectDetailContact />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { detail } = params;

  try {
    const res = await getPostDetailBySlug(detail);
    const data = res.data;

    return { props: { post: data } };
  } catch (e) {
    return { props: { post: {} } };
  }
};

export default CollectionDetail;
