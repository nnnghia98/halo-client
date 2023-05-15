import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";

import { Breadcrumb } from "components";
import WebContent from "../WebContent";
import { ProductRecommend, Subscribe, MobileContent } from "modules";
import { PROJECT_PAGE } from "utils/constants";

import defaultProductImg from "assets/img/default_product.png";
import styles from "./Projects.module.scss";

const Projects = ({ postsProject = [] }) => {
  const router = useRouter();

  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        <h3>DỰ ÁN THƯƠNG HIỆU</h3>
        {!isEmpty(postsProject) && (
          <div className={styles.projects__list}>
            {postsProject.map((post) => (
              <Link
                key={post.slug}
                href={`/${PROJECT_PAGE.slug}/${post.slug}`}
              >
                <div className={styles.projects__itemWrap}>
                  <Image
                    className={styles.projects__itemImg}
                    src={post.thumbnail ?? defaultProductImg}
                    alt={post.thumbnail_name ?? "Projects image"}
                    layout="fill"
                  />
                  <div className={styles.projects__itemName}>{post.title}</div>
                  <div className={styles.projects__itemLocation}>
                    {post.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className={styles.projects__more}>XEM THÊM</div>
      </div>
    </div>
  );
};

export default Projects;
