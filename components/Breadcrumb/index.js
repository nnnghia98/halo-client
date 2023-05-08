import React from "react";

// import "./styles.scss";
import styles from "./Breadcrumb.module.scss";
import {PRODUCT_PAGE} from "utils/constants";
import Link from "next/link";

const Breadcrumb = ({paths}) => (
  <div className={styles.breadcrumb}>
    <span className={styles.breadcrumb__path}>
      <Link href={`/${PRODUCT_PAGE.slug}`}>
        <a>{PRODUCT_PAGE.title} /</a>
      </Link>
    </span>
    {paths &&
      paths.map((path) => (
        <span className={styles.breadcrumb__path} key={path.title}>
          {
            path.slug ? (
              <Link href={`/${PRODUCT_PAGE.slug}/${path.slug}`}>
                <a> {path.title} / </a>
              </Link>
            ) : path.title
          }
        </span>
      ))}
  </div>
);

export default Breadcrumb;
