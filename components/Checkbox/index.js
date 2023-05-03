import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ obj, onChange, checked = false }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.name}`}
        name={obj.name}
        checked={checked}
        onChange={onChange}
      />
      <span />
      <label htmlFor={`custom-checkbox-${obj.name}`}>{obj.name}</label>
    </div>
  );
};

export default Checkbox;
