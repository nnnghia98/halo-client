import React from "react";
import Image from "next/image";
import {Item} from "react-grid-carousel";
import isEmpty from "lodash/isEmpty";

import {VideoPlayer, HorizontalCarousel} from "components";
import {
  ProjectDetailBanner,
  ProjectDetailImage,
  ProjectDetailDetail,
  ProjectDetailStory,
  ProjectDetailCarousel,
  ProjectDetailContact,
} from "modules";

import {getPostDetailBySlug} from "apis/post";
import {WIDTH_BREAKPOINT} from "utils/constants";
import {useWindowDimensions} from "utils/window";
import {getSpecificSliders} from "utils/sliders";
import {SLIDER} from "utils/constants";

import arrow from "assets/svg/arrow.svg";
import defaultBanner from "assets/img/thumb2.jpg";

import styles from "./detail.module.scss";

const CollectionDetail = ({item}) => {
  const {width} = useWindowDimensions();

  const renderBannerContent = () => {
    if (isEmpty(item.video_banner_url)) {
      return (
        <div className={styles.collectionDetail__bannerCarousel}>
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
      )
    }

    return <VideoPlayer src={item.video_banner_url}/>;
  };

  const getSliders = (group) => getSpecificSliders(item.sliders, group);

  return (
    <div className={styles.collectionDetail}>
      <ProjectDetailBanner title={item.title} location={item.description}/>
      {renderBannerContent()}

      <div className={styles.collectionDetail__imgDetail}>
        <div
          dangerouslySetInnerHTML={{__html: item.video_banner_description}}
        />
      </div>

      <div className={styles.collectionDetail__imgDetail}>
        <div
          dangerouslySetInnerHTML={{__html: item.video_detail_description}}
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
          <ProjectDetailImage/>
        </div>
        <div className={styles.collectionDetail__imgCarousel__carouselWrapper}>
          <ProjectDetailCarousel/>
        </div>
      </div>

      <div className={styles.collectionDetail__carousel}>
        <div className={styles.collectionDetail__carousel__image}>
          <Image src={defaultBanner} alt="collection detail"/>
        </div>
        <div className={styles.collectionDetail__carousel__navigation}>
          <div className={styles.collectionDetail__carousel__leftArrow}>
            <Image src={arrow} alt="leftArrow"/>
          </div>
          <div className={styles.collectionDetail__carousel__rightArrow}>
            <Image src={arrow} alt="rightArrow"/>
          </div>
        </div>
      </div>

      <div className={styles.collectionDetail__contact}>
        <ProjectDetailContact/>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) => {
  const {detail} = params;

  try {
    const res = await getPostDetailBySlug(detail);
    const data = res.data;

    return {props: {item: data}};
  } catch (e) {
    return {props: {item: {}}};
  }
};

export default CollectionDetail;
