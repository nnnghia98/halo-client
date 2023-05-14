import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";

import { Breadcrumb } from "components";
import WebContent from "../WebContent";
import { ProductRecommend, Subscribe, MobileContent } from "modules";

import styles from "./Projects.module.scss";
import { PROJECT_PAGE, PRODUCT_PAGE } from "utils/constants";

const Projects = ({ postsProject = [] }) => {
  const router = useRouter();

  const handleNavigate = (post) => {
    router.push(`/${PROJECT_PAGE.slug}/${post.slug}`);
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        <h3>DỰ ÁN THƯƠNG HIỆU</h3>
        {!isEmpty(postsProject) && (
          <div className={styles.projects__list}>
            {postsProject.map((post) => (
              <Link key={post.slug} href={`/${PROJECT_PAGE.slug}/${post.slug}`}>
                <div className={styles.projects__itemWrap}>
                  {/* <Image
                  className={styles.productsList__itemImg}
                  src={product.thumbnail ?? defaultProductImg}
                  alt={product.thumbnail_name ?? "Product image"}
                  layout="fill"
                /> */}
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
