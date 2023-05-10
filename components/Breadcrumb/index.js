import React from "react";
import styles from "./Breadcrumb.module.scss";
import {PRODUCT_PAGE} from "utils/constants";
import Link from "next/link";
import cloneDeep from "lodash/cloneDeep";

const Breadcrumb = ({paths}) => {
  const breadcrumbs = cloneDeep(paths);
  breadcrumbs.unshift({
    title: PRODUCT_PAGE.title,
    slug: "/"
  });
  return (
    <div className={styles.breadcrumb}>
      {breadcrumbs && breadcrumbs.map((path, index) => (
        <span className={styles.breadcrumb__path} key={path.title}
              style={{color: index < breadcrumbs.length - 1 ? "#999999" : ""}}>
        {path.slug ? (<Link href={`/${PRODUCT_PAGE.slug}/${path.slug}`}>
          <a> {path.title} / </a>
        </Link>) : path.title}
      </span>))}
    </div>
  )
};

export default Breadcrumb;
