import React from "react";

import styles from "./SpecialProducts.module.scss";

const SpecialProducts = () => (
  <div className={styles.specialProducts}>
    <div className={styles.specialProducts__container}>
      <div className={styles.specialProducts__textWrap}>
        <h2>SẢN PHẨM ĐẶC BIỆT</h2>
        <div className={styles.specialProducts__des}>
          Những sản phẩm được phát triển độc quyền, với chất lượng được kiểm
          soát đến từng chi tiết nhỏ nhất.
        </div>
        <span className={styles.specialProducts__moreBtn}>
          TÌM HIỂU THÊM
          <span className={styles.specialProducts__moreBtn__arrow} />
        </span>
      </div>
    </div>
  </div>
);

export default SpecialProducts;
