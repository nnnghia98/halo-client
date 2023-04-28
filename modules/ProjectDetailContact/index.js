import React from "react";

import arrow from "assets/svg/arrow.svg";

import styles from "./ProjectDetailContact.module.scss";

const Contact = () => (
  <div className={styles.contact}>
    <h3>Liên hệ chúng tôi để tìm hiểu thêm thông tin dự án</h3>
    <input
      className={styles.contact__input__borderTop}
      placeholder="Họ và tên"
    />
    <input placeholder="Điện thoại" />
    <input placeholder="Email" />
    <div className={styles.contact__sendButtonWrapper}>
      GỬI
      <span className={styles.contact__rightArrow}>
        <img src={arrow} alt="right-arrow" />
      </span>
    </div>
  </div>
);

export default Contact;
