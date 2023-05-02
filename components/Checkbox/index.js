import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ obj, onChange, checked = false }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        checked={checked}
        onChange={onChange}
      />
      <span />
      {obj.name}
    </div>
  );
};

export default Checkbox;
