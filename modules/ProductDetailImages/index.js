import React from "react";
import Image from "next/image";
import defaultProductImg from "assets/img/default_product.png";
import styles from "./ProductDetailImages.module.scss";

const Images = ({thumbnail = null, sliders = []}) => (
  <div className={styles.images}>
    <div className={styles.images__mainImage}>
      <Image priority src={thumbnail ?? defaultProductImg} alt="" />
    </div>
    <div className={styles.images__slideshow}>
      {
        sliders.length > 0 && sliders.map(slide => (
          <div key={slide.name} className={styles.images__smImage}>
            <Image src={slide.thumbnail} width="200" height="200" alt={slide.name} />
          </div>
        ))
      }
    </div>
  </div>
);

export default Images;
