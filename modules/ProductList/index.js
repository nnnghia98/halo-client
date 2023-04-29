import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PATHS } from "utils/constants";

import project1 from "assets/img/project1.jpg";

import styles from "./ProductList.module.scss";

const ProductList = ({ categories }) => {
  const [isSelected, setIsSelected] = useState(0);
  // const [groupSelected, setGroupSelected] = useState([
  //   { id: 0, name: "HALOLIGHTING" },
  //   { id: 1, name: "ASFOUR" },
  //   { id: 2, name: "MASIERO" },
  //   { id: 3, name: "ARIZZI" },
  // ]);

  const renderGroupFilterBar = () =>
    categories.map((c) => (
      <Link
        href={{
          pathname: PATHS.PRODUCT_CATEGORY,
          query: { category: c.slug },
        }}
        key={c.id}
        className={
          isSelected === c.id
            ? styles.productList__filterBar__item__active
            : styles.productList__filterBar__item
        }
        onClick={() => {
          setIsSelected(c.id);
          setcSelected(c.items);
        }}
      >
        {c.title}
      </Link>
    ));

  return (
    <>
      <div className={styles.productList}>
        {categories && (
          <div className={styles.productList__filterBar}>
            {renderGroupFilterBar()}
          </div>
        )}
        <div className={styles.productList__list}>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>
                CÁ CHÉP VƯỢT VŨ MÔN HÓA RỒNG
              </div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>
                AQUARIUS AND VIRGO
              </div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>ABSTRACTION</div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>
                ELEMENTS OF NATURE
              </div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>JEWELRY BOX</div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>STARRY SKY</div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>AUTUMN LEAVES</div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>
                PRECIOUS ShrefNES
              </div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>KALEIDOSCOPES</div>
            </div>
          </Link>
          <Link href="/san-pham/detail">
            <div className={styles.productList__itemWrap}>
              <Image
                className={styles.productsList__itemImage}
                priority
                src={project1}
                alt="project-1"
              />
              <div className={styles.productList__itemName}>CRYSTAL WAVES</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductList;
