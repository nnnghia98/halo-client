import React from "react";
import Image from "next/image";
import Link from "next/link";
import project1 from "assets/img/project1.jpg";
import styles from "./ProjectGallery.module.scss";
import isEmpty from "lodash/isEmpty";
import { PROJECT_PAGE } from "utils/constants";

const ProjectGallery = ({ postsProject = [] }) => {
  return (
    <div className={styles.productGallery}>
      <div className={styles.productGallery__list}>
        {
          !isEmpty(postsProject) && postsProject.map(post => (
            <Link key={post.title} href={`${PROJECT_PAGE.slug}/${post.slug}`}>
              <div className={styles.productGallery__itemWrap}>
                <Image src={post.thumbnail ?? project1} alt={post.thumbnail_name ?? "project-1"} 
                  width={1000}
                  height={750}
                />
                <div className={styles.productGallery__itemName}>
                  <div>{post.title}</div>
                  <div>{post.description}</div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
};

export default ProjectGallery;
