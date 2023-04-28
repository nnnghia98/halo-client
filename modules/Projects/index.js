import React, { useState, useEffect } from "react";

import { Breadcrumb } from "components";
import WebContent from "../WebContent";
import { ProductRecommend, Subscribe, MobileContent } from "modules";

import styles from "./Projects.module.scss";

const Projects = () => (
  <div className={styles.projects}>
    <div className={styles.projects__container}>
      <h3>DỰ ÁN THƯƠNG HIỆU</h3>
      <div className={styles.projects__list}>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
        <div className={styles.projects__itemWrap}>
          <div className={styles.projects__itemName}>PRIVATE VILLA</div>
          <div className={styles.projects__itemLocation}>
            Ecopark Green City - Hà Nội
          </div>
        </div>
      </div>
      <div className={styles.projects__more}>XEM THÊM</div>
    </div>
  </div>
);

export default Projects;
