import React from "react";

import styles from "./ProductDetailDescription.module.scss";

const Description = ({ product }) => (
  <div className={styles.description}>
    <div className={styles.description__name}>{product.title}</div>
    <div className={styles.description__productCode}>
      MÃ SẢN PHẨM: {product.sku}
    </div>
    <div className={styles.description__buttonWrapper}>
      <div className={styles.description__orderContactButton}>
        LIÊN HỆ ĐẶT HÀNG
      </div>
    </div>
    <div className={styles.description__additionalRequire}>
      TƯ VẤN THÊM VỀ SẢN PHẨM
    </div>
    <div className={styles.description__additionalRequire}>
      YÊU CẦU THIẾT KẾ RIÊNG
    </div>
    <div className={styles.description__additionalRequire}>
      VÌ SAO CHÚNG TÔI KHÁC BIỆT?
    </div>
    <div className={styles.description__aboutUsDetail}>
      {product.description}
    </div>
    <div className={styles.description__break}>. . .</div>
    <div className={styles.description__sectionTitle}>MÔ TẢ SẢN PHẨM</div>
    <div className={styles.description__productDescription}>
      <div dangerouslySetInnerHTML={{ __html: product.content }} />
    </div>
    <div className={styles.description__sectionTitle}>CHI TIẾT SẢN PHẨM</div>
    <ul className={styles.description__productDetail}>
      <li>Chất liệu: </li>
      <li>Màu sắc:</li>
      <li>Kích thước (mm):</li>
    </ul>
  </div>
);

export default Description;
