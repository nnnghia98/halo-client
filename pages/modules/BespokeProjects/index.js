import React from "react";

import styles from "./BespokeProjects.module.scss";

const BespokeProjects = () => (
  <div className={styles.bespokeProjects}>
    <div className={styles.bespokeProjects__container}>
      <div className={styles.bespokeProjects__textwrap}>
        <h2>CÁC DỰ ÁN</h2>
        <div className={styles.bespokeProjects__des}>
          Chúng tôi đã thắp sáng nghệ thuật cho hàng trăm Villa, Duplex,
          Penthouse, căn hộ, nhà riêng, khách sạn, dịch vụ, không gian công cộng
          và không gian riêng biệt trên khắp cả nước.
        </div>
        <span className={styles.bespokeProjects__moreBtn}>
          TÌM HIỂU THÊM
          <span className={styles.bespokeProjects__moreBtn__arrow} />
        </span>
      </div>
    </div>
  </div>
);

export default BespokeProjects;
