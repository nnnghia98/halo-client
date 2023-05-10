import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import cloneDeep from "lodash/cloneDeep";
import { Checkbox } from "components";
import { PRODUCT_PAGE } from "utils/constants";
import styles from "./ProductCategoryFilterPanel.module.scss";

const FilterPanel = (props) => {
  const router = useRouter();
  const query = React.useMemo(() => cloneDeep(router.query), []);

  const { title, type, isDefaultOpen, productAttributeValues, category } =
    props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(isDefaultOpen || false);

  useEffect(() => {
    if (!isEmpty(productAttributeValues)) {
      map(productAttributeValues, (item) => {
        if (Object.values(router.query).join(",").includes(item.name)) {
          setIsDropdownOpen(true);
        }
      });
    }
  }, [productAttributeValues, JSON.stringify(router.query)]);

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOnChange = (item) => {
    if (query[props.type]) {
      if (query[props.type].includes(item.name)) {
        const arr = query[props.type].split(",");
        const index = arr.findIndex((v) => v === item.name);
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
    const { category } = props;
    if (query.slug) {
      delete query.slug;
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
          <div className={styles.filterPanel__categoryName}>
            {category.title}
          </div>
          {!isEmpty(category.children) && (
            <ul>
              {category.children.map((brand) => (
                <li
                  key={brand.id}
                  className={styles.filterPanel__selectWrapper}
                  onClick={() => {
                    router.push(`/${PRODUCT_PAGE.slug}/${brand.slug}`)
                  }}
                >
                  <span>{brand.title}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    }

    return (
      !isEmpty(productAttributeValues) && (
        <ul>
          {productAttributeValues.map((obj) => (
            <li key={obj.name} className={styles.filterPanel__checkboxWrapper}>
              <Checkbox
                checked={Object.values(router.query)
                  .join(",")
                  .includes(obj.name)}
                obj={obj}
                onChange={() => handleOnChange(obj)}
              />
            </li>
          ))}
        </ul>
      )
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
