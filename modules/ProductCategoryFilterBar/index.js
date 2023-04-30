import React, { useState } from "react";

import FilterPanel from "../ProductCategoryFilterPanel";

import styles from "./ProductCategoryFilterBar.module.scss";

const ProductCategoryFilterBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles.filterSideBar}>
      <h4>FILTER</h4>

      <div className={styles.filterSideBar__wrapper}>
        <FilterPanel
          title="CATEGORIES"
          type="categories"
          isDefaultOpen={true}
        />
        <FilterPanel title="MATERIAL" type="material" />
        <FilterPanel title="COLOR" type="color" />
        <FilterPanel title="DIMENSIONS" type="dimensions" />
        <FilterPanel title="SHIPPING TIME" type="shipping_time" />
        <FilterPanel title="PRICE" type="price" />
        <FilterPanel title="ARTISAN" type="artisan" />
        <FilterPanel title="DESIGNER" type="designer" />
      </div>
    </div>
  );
};

export default ProductCategoryFilterBar;
