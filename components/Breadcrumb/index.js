import React from "react";
import Link from "next/link";
import isEqual from "lodash/isEqual";
import cloneDeep from "lodash/cloneDeep";

import { PRODUCT_PAGE } from "utils/constants";

import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ paths }) => {
  const breadcrumbs = cloneDeep(paths);

  breadcrumbs.unshift({
    title: PRODUCT_PAGE.title,
    slug: "/",
  });

  return (
    <div className={styles.breadcrumb}>
      {breadcrumbs &&
        breadcrumbs.map((path, index) => (
          <span
            className={styles.breadcrumb__path}
            key={path.title}
            style={{ color: index < breadcrumbs.length - 1 ? "#999999" : "" }}
          >
            {path.slug ? (
              <Link
                href={`/${PRODUCT_PAGE.slug}${
                  isEqual(path.slug, "/") ? "/" : `/${path.slug}`
                }`}
              >
                <a> {path.title} / </a>
              </Link>
            ) : (
              path.title
            )}
          </span>
        ))}
    </div>
  );
};

export default Breadcrumb;
