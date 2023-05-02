import React from "react";
import Image from "next/image";

import project2 from "assets/img/project2.jpg";

import styles from "./AboutUs.module.scss";

const AboutUs = () => (
  // <div className={styles.aboutUs}>
  //   <div className={styles.aboutUs__container}>
  //     <div className={styles.aboutUs__brandWrapper}>
  //       <h2>
  //         <strong className={styles.aboutUs__brandName}>HALOLIGHTING</strong>{" "}
  //         <span className={styles.aboutUs__brandBusiness}>
  //           LÀ ĐỘI NGŨ THIẾT KẾ ĐÈN TRANG TRÍ NỘI THẤT CHO KHÔNG GIAN VÀ CUNG
  //           CẤP CÁC SẢN PHẨM CHẤT LƯỢNG TOP ĐẦU THỊ TRƯỜNG
  //         </span>
  //       </h2>
  //     </div>
  //     <div>
  //       <span className={styles.aboutUs__moreBtn}>
  //         TÌM HIỂU THÊM
  //         <span className={styles.aboutUs__moreBtn__arrow} />
  //       </span>
  //     </div>
  //   </div>
  // </div>
  <div className={styles.aboutUs}>
    <div className={styles.aboutUs__wrapper}>
      <div className={styles.aboutUs__background} />
      {/* <Image
          src={project2}
          alt="project2"
          // className={styles.aboutUs__background}
        /> */}
      {/* </div> */}

      <h1 className={styles.aboutUs__title}>Welcome!</h1>
    </div>
  </div>
);

export default AboutUs;
