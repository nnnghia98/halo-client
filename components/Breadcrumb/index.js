import React from "react";

// import "./styles.scss";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ paths }) => (
  <div className={styles.breadcrumb}>
    {paths &&
      paths.map((path, idx) => (
        <span className={styles.breadcrumb__path} key={idx}>
          {idx === paths.length - 1 ? `${path}` : `${path} / `}
        </span>
      ))}
  </div>
);

export default Breadcrumb;
