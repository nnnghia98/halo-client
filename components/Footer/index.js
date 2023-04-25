import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div className="styles.footer__container">
      <div className={styles.footer__site}>
        <span className={styles.footer__quote}>Delighting your home</span>
        <ul>
          <li>Về chúng tôi</li>
          <li>Các dự án</li>
          <li>Bộ sưu tập</li>
          <li>Sản phẩm</li>
        </ul>
        <p>
          <span className={styles.footer__brandName}>HALO lighting</span>{" "}
          <span>
            là đội ngũ thiết kế và sản xuất đèn trang trí nội thất, mang đến các
            giá trị tinh thần và vẻ đẹp nghệ thuật cho không gian.
          </span>
        </p>
      </div>
      <div className={styles.footer__info}>
        <span className={styles.footer__info__brandName}>HALO lighting</span>
        <p>
          <span className={styles.footer__info__company}>
            FLAGSHIP SHOWROOM - TPHCM
          </span>
          <br />
          0898.22.40.78 <br />
          14 Nguyễn Quý Đức, p. An Phú, TP. Thủ Đức <br />
          <br />
          <span className={styles.footer__info__company}>SHOWROOM - HANOI</span>
          <br />
          0898.22.40.78 <br />
          The Manor Central Park - Số 11 - Block 14TM1 - Nguyễn Xiển, P. Đại
          Kim, Q. Hoàng Mai, Hà Nội
        </p>
        <ul>
          <li>Đăng ký bản tin mới</li>
          <li>Thông tin liên hệ</li>
          <li>Profile công ty</li>
        </ul>
      </div>
      <div className={styles.footer__copyright}>
        Copyright © 2018 Halolighting Design. All Rights Reserved.
      </div>
    </div>
  </div>
);

export default Footer;
