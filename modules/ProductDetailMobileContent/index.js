import React from "react";
import ImageCarousel from "../ProductDetailImageCarousel";
import styles from "./ProductDetailMobileContent.module.scss";
import { useRouter } from "next/router";
import { CONTACT_PAGE } from "utils/constants";

const MobileContent = ({product}) => {
  const router = useRouter();
  return (
    <div className={styles.mobileContent}>
    <div className={styles.mobileContent__name}>
      ĐÈN CHÙM HALOLIGHTING EUROPEAN 01
    </div>
    <div className={styles.mobileContent__productCode}>
      MÃ SẢN PHẨM: HALOEU-01
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
      Chúng tôi sử dụng nguyên vật liệu cao cấp nhất và chú trọng từng chi tiết
      nhằm đảm bảo độ hoàn thiện của sản phẩm, mang nghệ thuật trang trí đến
      không gian
    </div>
    <div className={styles.mobileContent__break}>. . .</div>
    <div className={styles.mobileContent__sectionTitle}>MÔ TẢ SẢN PHẨM</div>
    <div className={styles.mobileContent__productDescription}>
      Các tán lá trúc mang sắc xanh cho không gian cùng vẻ đẹp nghệ thuật từ tạo
      hình con hươu, là nét đẹp thần thoại của nền văn hoá Châu Âu
    </div>
    <div className={styles.mobileContent__sectionTitle}>CHI TIẾT SẢN PHẨM</div>
    <ul className={styles.mobileContent__productDetail}>
      <div style={{maxWidth: "100%", overflow: "hidden"}} dangerouslySetInnerHTML={{__html: product.content}}/>
    </ul>
  </div>
  )
};

export default MobileContent;
