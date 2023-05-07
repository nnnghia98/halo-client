import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { COLLECTION_PAGE } from "utils/constants";

import project1 from "assets/img/project1.jpg";
import styles from "./PostGallery.module.scss";

const PostGallery = ({ items, categories }) => {
  const [isSelected, setIsSelected] = useState(0);
  const [posts, setPosts] = useState(items);

  const handleFilter = (id) => {
    setIsSelected(id);
    if (id === 0) {
      setPosts(items);
    } else {
      setPosts(() => items.filter((p) => p.category_id === id));
    }
  };

  const renderFilterBar = () =>
    categories.map((item) => (
      <div
        key={item.id}
        className={
          isSelected === item.id
            ? styles.gallery__filterBar__item__active
            : styles.gallery__filterBar__item
        }
        onClick={() => handleFilter(item.id)}
      >
        {item.title.toUpperCase()}
      </div>
    ));

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__filterBar}>
        <div
          className={
            isSelected === 0
              ? styles.gallery__filterBar__item__active
              : styles.gallery__filterBar__item
          }
          onClick={() => handleFilter(0)}
        >
          {"Tất cả".toUpperCase()}
        </div>
        {renderFilterBar()}
      </div>
      <div className={styles.gallery__list}>
        {posts.map((item) => (
          <Link key={item.id} href={`/${COLLECTION_PAGE.slug}/${item.slug}`}>
            <div className={styles.gallery__itemWrap}>
              <Image src={item.thumbnail ?? project1} alt="project-1" />
              <div className={styles.gallery__itemName}>
                {item.title.toUpperCase()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostGallery;
