import React from "react";
import ImageCarousel from "../ProductDetailImageCarousel";
import styles from "./ProductDetailMobileContent.module.scss";
import { useRouter } from "next/router";
import { CONTACT_PAGE } from "utils/constants";
import { getSetting } from "utils/common";

const MobileContent = ({product}) => {
  const router = useRouter();
  return (
    <div className={styles.mobileContent}>
    <div className={styles.mobileContent__name}>
      {product.title}
    </div>
    <div className={styles.mobileContent__productCode}>
      MÃ SẢN PHẨM: {product.sku}
    </div>
    <div className={styles.mobileContent__imageCarousel}>
      <ImageCarousel />
    </div>
    <div className={styles.mobileContent__buttonWrapper}>
      <div onClick={() => {
          router.push(`/${CONTACT_PAGE.slug}`)
        }} className={styles.mobileContent__orderContactButton}>
        LIÊN HỆ ĐẶT HÀNG
      </div>
    </div>
    <div className={styles.mobileContent__additionalRequire}>
      TƯ VẤN THÊM VỀ SẢN PHẨM
    </div>
    <div className={styles.mobileContent__additionalRequire}>
      YÊU CẦU THIẾT KẾ RIÊNG
    </div>
    <div className={styles.mobileContent__additionalRequire}>
      VÌ SAO CHÚNG TÔI KHÁC BIỆT?
    </div>
    <div className={styles.mobileContent__aboutUsDetail}>
      {getSetting('product_about_us')}
    </div>
    <div className={styles.mobileContent__break}>. . .</div>
    <div className={styles.mobileContent__sectionTitle}>MÔ TẢ SẢN PHẨM</div>
    <div className={styles.mobileContent__productDescription}>
      {product.description}
    </div>
    <div className={styles.mobileContent__sectionTitle}>CHI TIẾT SẢN PHẨM</div>
    <ul className={styles.mobileContent__productDetail}>
      <div style={{maxWidth: "100%", overflow: "hidden"}} dangerouslySetInnerHTML={{__html: product.content}}/>
    </ul>
  </div>
  )
};

export default MobileContent;
