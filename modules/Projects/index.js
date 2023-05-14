import React, { useState, useEffect } from "react";

import { Breadcrumb } from "components";
import WebContent from "../WebContent";
import { ProductRecommend, Subscribe, MobileContent } from "modules";

import styles from "./Projects.module.scss";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { PROJECT_PAGE } from "utils/constants";

const Projects = ({ postsProject = [] }) => {
  const router = useRouter();
  const handleNavigate = (post) => {
    router.push(`/${PROJECT_PAGE.slug}/${post.slug}`)
  }
  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        <h3>DỰ ÁN THƯƠNG HIỆU</h3>
        {
          !isEmpty(postsProject) && postsProject.map(post => (
            <div key={post.title} className={styles.projects__itemWrap} onClick={() => handleNavigate(post)}>
              <div className={styles.projects__itemName}>{post.title}</div>
            </div>
          ))
        }
        {/* <div className={styles.projects__list}>
          <div className={styles.projects__itemWrap}>
            <div className={styles.projects__itemName}>PRIVATE VILLA</div>
            <div className={styles.projects__itemLocation}>
              Ecopark Green City - Hà Nội
            </div>
          </div>
        </div> */}
        <div className={styles.projects__more}>XEM THÊM</div>
      </div>
    </div>
  )
};

export default Projects;
