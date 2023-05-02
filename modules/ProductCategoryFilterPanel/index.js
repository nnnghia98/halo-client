import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";

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

const query = {};

const FilterPanel = (props) => {
  const router = useRouter();

  const { title, type, isDefaultOpen } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(isDefaultOpen || false);
  const [data, setData] = useState(
    MyCheckBoxList.sort((a, b) => a.order - b.order)
  );

  const isVerified = useMemo(() => {
    return data.every((d) => d.checked);
  }, [data]);

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOnChange = (item) => {
    setData(data.map((d) => (d.order === item.order ? item : d)));

    if (query[props.type]) {
      query[props.type].push(item.name);
    } else {
      query[props.type] = [item.name];
    }
    // save query from url to checked items
    router.push(
      "http://localhost:8000/san-pham/thuong-hieu?" +
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
        {data.map((obj, index) => (
          <li key={index} className={styles.filterPanel__checkboxWrapper}>
            <Checkbox obj={obj} onChange={(item) => handleOnChange(item)} />
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
