import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PATHS } from "utils/constants";

import project1 from "assets/img/project1.jpg";

import styles from "./ProductList.module.scss";

const ProductList = ({ categories, products }) => {
  const [isSelected, setIsSelected] = useState(0);

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
          {products.map((product) => (
            <Link key={product.slug} href={`/san-pham/${product.slug}`}>
              <div className={styles.productList__itemWrap}>
                <Image
                  className={styles.productsList__itemImage}
                  priority
                  src={project1}
                  alt="project-1"
                />
                <div className={styles.productList__itemName}>
                  {product.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
