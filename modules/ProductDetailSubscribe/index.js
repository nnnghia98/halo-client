import React from "react";

import styles from "./ProductDetailSubscribe.module.scss";

const Subscribe = () => (
  <div className={styles.subscsribe}>
    <input type="email" placeholder="Địa chỉ e-mail" />
    <div className={styles.subscsribe__horizontalLine} />
    <div className={styles.subscsribe__button}>
      ĐĂNG KÝ NHẬN BẢN TIN MỚI {`>`}
    </div>
  </div>
);

export default Subscribe;
