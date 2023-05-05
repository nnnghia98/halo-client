import React from "react";
import { Item } from "react-grid-carousel";
import Image from "next/image";

import { HorizontalCarousel } from "components";
import { WIDTH_BREAKPOINT } from "utils/constants";
import { useWindowDimensions } from "utils/window";

import project1 from "assets/img/project1.jpg";
import styles from "./Collaborators.module.scss";

const Collaborators = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.collaborators}>
      <div className={styles.collaborators__container}>
        <h3>ĐƠN VỊ HỢP TÁC</h3>
        <div className={styles.collaborators__list}>
          <HorizontalCarousel
            cols={width < WIDTH_BREAKPOINT ? 2 : 4}
            rows={1}
            loop
            autoplay={3000}
            gap={20}
          >
            <Item className={styles.collaborators__itemWrap}>
              <Image src={project1} width="150" height="150" />
            </Item>
            <Item className={styles.collaborators__itemWrap}>
              <Image src={project1} width="150" height="150" />
            </Item>
            <Item className={styles.collaborators__itemWrap}>
              <Image src={project1} width="150" height="150" />
            </Item>
            <Item className={styles.collaborators__itemWrap}>
              <Image src={project1} width="150" height="150" />
            </Item>
          </HorizontalCarousel>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
