import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Checkbox} from "components";
import styles from "./ProductCategoryFilterPanel.module.scss";
import {PRODUCT_PAGE} from "utils/constants";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import cloneDeep from "lodash/cloneDeep";


const FilterPanel = (props) => {
  const router = useRouter();
  const query = React.useMemo(() => cloneDeep(router.query), []);

  const {title, type, isDefaultOpen, productAttributeValues} = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(isDefaultOpen || false);

  useEffect(() => {
    if (!isEmpty(productAttributeValues)) {
      map(productAttributeValues, item => {
        if (Object.values(router.query).join(",").includes(item.name)) {
          setIsDropdownOpen(true);
        }
      })
    }
  }, [productAttributeValues]);

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOnChange = (item) => {
    if (query[props.type]) {
      if (query[props.type].includes(item.name)) {
        const arr = query[props.type].split(",");
        const index = arr.findIndex(v => v === item.name);
        arr.splice(index, 1);
        query[props.type] = arr.join(",");
      } else {
        const arr = query[props.type].split(",");
        arr.push(item.name);
        query[props.type] = arr.join(",");
      }
    } else {
      query[props.type] = item.name;
    }
    const {category} = props;
    if (query.category) {
      delete query.category;
    }
    router.replace(
      `/${PRODUCT_PAGE.slug}/${category.slug}?` +
      new URLSearchParams(query).toString()
    );
  };

  const renderBody = () => {
    if (type === "categories") {
      return (
        <>
          <div className={styles.filterPanel__categoryName}>Thương hiệu</div>
          <ul>
            <li className={styles.filterPanel__selectWrapper}>New</li>
            <li className={styles.filterPanel__selectWrapper}>Test</li>
            <li className={styles.filterPanel__selectWrapper}>Temp</li>
            <li className={styles.filterPanel__selectWrapper}>Quick</li>
            <li className={styles.filterPanel__selectWrapper}>Thin</li>
          </ul>
        </>
      );
    }

    return (
      <ul>
        {productAttributeValues.map((obj) => (
          <li key={obj.name} className={styles.filterPanel__checkboxWrapper}>
            <Checkbox
              checked={Object.values(router.query).join(",").includes(obj.name)}
              obj={obj}
              onChange={() => handleOnChange(obj)}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.filterPanel__panel}>
      <div className={styles.filterPanel__top} onClick={triggerDropdown}>
        <h5>{title}</h5>
        <div>{isDropdownOpen ? "-" : "+"}</div>
      </div>
      <div
        className={
          isDropdownOpen
            ? styles.filterPanel__body__active
            : styles.filterPanel__body
        }
      >
        {renderBody(type)}
      </div>
    </div>
  );
};

export default FilterPanel;
