import React from "react";

import styles from "./ProductCategoryFilterPanel.module.scss";

const FilterPanel = () => {
  return (
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
        <div className={styles.filterSideBar__categoryName}>Thương hiệu</div>
        <ul>
          <li>New</li>
          <li>Test</li>
          <li>Temp</li>
          <li>Quick</li>
          <li>Thin</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPanel;
