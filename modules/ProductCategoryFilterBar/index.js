import React from "react";

import FilterPanel from "../ProductCategoryFilterPanel";

import styles from "./ProductCategoryFilterBar.module.scss";
import getConfig from "next/config";
import get from "lodash/get";

const ProductCategoryFilterBar = ({ category }) => {
  const config = getConfig();
  const productAttributes = get(
    config,
    "publicRuntimeConfig.productAttributes",
    []
  );

  return (
    <div className={styles.filterSideBar}>
      <h4>FILTER</h4>

      <div className={styles.filterSideBar__wrapper}>
        {productAttributes.length > 0 &&
          productAttributes
            .filter((p) => {
              if (p.category_id && p.category_id !== category.id) {
                return null;
              }
              return p;
            })
            .filter((p) => p)
            .map((productAttribute) => (
              <FilterPanel
                key={productAttribute.name}
                title={productAttribute.title}
                type={productAttribute.slug}
                category={category}
                productAttributeValues={
                  productAttribute.product_attribute_values
                }
              />
            ))}
      </div>
    </div>
  );
};

export default ProductCategoryFilterBar;
