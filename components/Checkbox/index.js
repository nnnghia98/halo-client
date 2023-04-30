import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ obj, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        value={obj.checked}
        onChange={() => onChange({ ...obj, checked: !obj.checked })}
      />
      <span />
      {obj.name}
    </div>
  );
};

export default Checkbox;
