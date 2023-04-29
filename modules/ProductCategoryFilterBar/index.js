import React, { useState } from "react";

import styles from "./index.module.scss";

const ProductCategoryFilterBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles.filterSideBar}>
      <h4>FILTER</h4>

      <div className={styles.filterSideBar__wrapper}>
        <div className={styles.filterSideBar__panel}>
          <div className={styles.filterSideBar__top} onClick={triggerDropdown}>
            <h5>CATEGORIES</h5>
            <div>{isDropdownOpen ? "-" : "+"}</div>
          </div>
          <div
            className={
              isDropdownOpen
                ? styles.filterSideBar__body__active
                : styles.filterSideBar__body
            }
          >
            <div className={styles.filterSideBar__categoryName}>
              Thương hiệu
            </div>
            <ul>
              <li>New</li>
              <li>Test</li>
              <li>Temp</li>
              <li>Quick</li>
              <li>Thin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryFilterBar;
