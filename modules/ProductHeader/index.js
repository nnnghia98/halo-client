import React from "react";

import styles from "./ProductHeader.module.scss";

const ProductHeader = ({ header }) => (
  <div className={styles.productHeader}>
    <div className={styles.productHeader__container}>
      <div className={styles.productHeader__paragraphWrapper}>
        <h1>{header}</h1>
        <p>
          “<br /> Chúng tôi luôn chú trọng giá trị và chất lượng sản phẩm, mang
          đến trải nghiệm tốt nhất đến quý khách hàng. <br />”
        </p>
      </div>
    </div>
  </div>
);

export default ProductHeader;
