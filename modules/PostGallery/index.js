import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import project1 from "assets/img/project1.jpg";

import styles from "./PostGallery.module.scss";

const FILTER_BAR_ITEMS = [
  { id: 0, name: "TẤT CẢ" },
  { id: 1, name: "HIỆN ĐẠI" },
  { id: 2, name: "HÌNH HỌC" },
  { id: 3, name: "TỰ NHIÊN" },
];

const PostGallery = ({ items }) => {
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
        {items.map((item) => (
          <Link key={item.id} href={`/bo-suu-tap/${item.slug}`}>
            <div className={styles.gallery__itemWrap}>
              <Image src={project1} alt="project-1" />
              <div className={styles.gallery__itemName}>
                CÁ CHÉP VƯỢT VŨ MÔN HÓA RỒNG
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostGallery;
