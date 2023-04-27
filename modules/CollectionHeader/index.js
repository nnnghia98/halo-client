import React from "react";

import styles from "./CollectionHeader.module.scss";

const CollectionHeader = () => (
  <div className={styles.header}>
    <div className={styles.header__container}>
      <div className={styles.header__paragraphWrapper}>
        <h1>Bộ sưu tập</h1>
        <p>
          “<br /> Mang đến những cung bậc sắc màu và thổi hồn nghệ thuật cho
          không gian là sứ mệnh của chúng tôi. <br />”
        </p>
      </div>
    </div>
  </div>
);

export default CollectionHeader;
