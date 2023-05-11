import React from "react";
import styles from "./ProductDetailDescription.module.scss";
import { useRouter } from "next/router";
import { CONTACT_PAGE } from "utils/constants";

const Description = ({ product }) => {
  const router = useRouter();
  return (
    <div className={styles.description}>
      <div className={styles.description__name}>{product.title}</div>
      <div className={styles.description__productCode}>
        MÃ SẢN PHẨM: {product.sku}
      </div>
      <div className={styles.description__buttonWrapper}>
        <div onClick={() => {
          router.push(`/${CONTACT_PAGE.slug}`)
        }} className={styles.description__orderContactButton}>
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
      <div className={styles.description__break}>. . .</div>
      <div className={styles.description__sectionTitle}>MÔ TẢ SẢN PHẨM</div>
      <div className={styles.description__productDescription}>
        <p>
          {product.description}
        </p>
      </div>
      <div className={styles.description__sectionTitle}>CHI TIẾT SẢN PHẨM</div>
      <ul className={styles.description__productDetail}>
        <div dangerouslySetInnerHTML={{__html: product.content}}/>
      </ul>
    </div>
  )
};

export default Description;
