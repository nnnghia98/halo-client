import React, { useState } from "react";
import { Link } from "next/link";
import Image from "next/image";

import project1 from "assets/img/project1.jpg";

import styles from "./CollectionGallery.module.scss";

const FILTER_BAR_ITEMS = [
  { id: 0, name: "TẤT CẢ" },
  { id: 1, name: "HIỆN ĐẠI" },
  { id: 2, name: "HÌNH HỌC" },
  { id: 3, name: "TỰ NHIÊN" },
];

const CollectionGallery = () => {
  const [isSelected, setIsSelected] = useState(0);

  const renderFilterBar = () =>
    FILTER_BAR_ITEMS.map((item) => (
      <div
        key={item.id}
        className={
          isSelected === item.id
            ? styles.gallery__filterBar__item__active
            : styles.gallery__filterBar__item
        }
        onClick={() => setIsSelected(item.id)}
      >
        {item.name}
      </div>
    ));

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__filterBar}>{renderFilterBar()}</div>
      <div className={styles.gallery__list}>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>
              CÁ CHÉP VƯỢT VŨ MÔN HÓA RỒNG
            </div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>AQUARIUS AND VIRGO</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>ABSTRACTION</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>ELEMENTS OF NATURE</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>JEWELRY BOX</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>STARRY SKY</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>AUTUMN LEAVES</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>PRECIOUS STONES</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>KALEIDOSCOPES</div>
          </div>
        </Link>
        <Link href="/collection">
          <div className={styles.gallery__itemWrap}>
            <Image src={project1} alt="project-1" width="100%" />
            <div className={styles.gallery__itemName}>CRYSTAL WAVES</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CollectionGallery;
