import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProductDetailSubscribe.module.scss";

const Subscribe = () => (
  <div className={styles.subscsribe}>
    <input type="email" placeholder="Địa chỉ e-mail" />
    <div className={styles.subscsribe__horizontalLine} />
    <div className={styles.subscsribe__button}>
      ĐĂNG KÝ NHẬN BẢN TIN MỚI{" "}
      <div className={styles.subscsribe__arrowWrapper}>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: "#000000" }} />
      </div>
    </div>
  </div>
);

export default Subscribe;
