import React, { useState, useMemo } from "react";

import { Checkbox } from "components";

import styles from "./ProductCategoryFilterPanel.module.scss";

const MyCheckBoxList = [
  {
    order: 0,
    name: "Red",
  },
  {
    order: 1,
    name: "Blue",
  },
  {
    order: 2,
    name: "Green",
  },
];

const FilterPanel = (props) => {
  const { title, type, isDefaultOpen } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(isDefaultOpen || false);
  const [data, setData] = useState(
    MyCheckBoxList.sort((a, b) => a.order - b.order)
  );

  const isVerified = useMemo(() => {
    return data.every((d) => d.checked);
  }, [data]);

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
        {data.map((obj, index) => (
          <li key={index} className={styles.filterPanel__checkboxWrapper}>
            <Checkbox
              obj={obj}
              onChange={(item) => {
                setData(data.map((d) => (d.order === item.order ? item : d)));
              }}
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
        {renderBody(type, data)}
      </div>
    </div>
  );
};

export default FilterPanel;
