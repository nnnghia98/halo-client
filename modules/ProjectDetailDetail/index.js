import React from "react";

import styles from "./ProjectDetailDetail.module.scss";

const Detail = () => (
  <div className={styles.detail}>
    <div className={styles.detail__location}>
      La Vela Saigon Hotel tại Nam Kì Khởi Nghĩa, Quận 3, TPHCM
    </div>
    <div className={styles.detail__introduction}>
      <span className={styles.detail__introduction__yellow}>
        CÁ CHÉP VƯỢT VŨ MÔN HÓA RỒNG{` `}
      </span>
      LÀ 1 HUYỀN THOẠI CỔ Á CHÂU, TÍCH CÁ CHÉP VƯỢT VŨ MÔN HÓA RỒNG LÀ BÀI HỌC
      NHÂN SINH QUAN SÂU SẮC. TƯ CHẤT KHÁC BIỆT, SỰ HI SINH, TÍNH KIÊN TRÌ VÀ
      BẢN LĨNH, CHÍNH LÀ SỰ KẾT TINH ĐẾN THÀNH CÔNG.
    </div>
  </div>
);

export default Detail;
