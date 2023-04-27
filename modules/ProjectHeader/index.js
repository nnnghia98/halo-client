import React from "react";

import styles from "./ProjectHeader.module.scss";

const ProjectHeader = () => (
  <div className={styles.header}>
    <div className={styles.header__container}>
      <div className={styles.header__paragraphWrapper}>
        <h1>Các dự án</h1>
        <p>
          “<br /> Khám phá sản phẩm của chúng tôi qua các dự án cho Dịch vụ,
          Không gian công cộng, Villa, Duplex, Penthouse, căn hộ, nhà riêng trên
          khắp cả nước <br />”
        </p>
      </div>
    </div>
  </div>
);

export default ProjectHeader;
