import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Item } from "react-grid-carousel";

import { HorizontalCarousel } from "components";

import defaultProductImg from "assets/img/default_product.png";
import styles from "./ProductDetailImages.module.scss";

const Images = ({ thumbnail, sliders = [] }) => {
  const [currentImage, setCurrentImage] = useState(
    thumbnail.path ?? defaultProductImg
  );
  const [currentSlider, setCurrentSlider] = useState(sliders);

  const handleCarouselItemClick = (thumbnailUrl) => {
    setCurrentImage(thumbnailUrl);
  };

  useEffect(() => {
    setCurrentSlider([
      { thumbnail: thumbnail.path, name: thumbnail.name },
      ...sliders,
    ]);
  }, []);

  return (
    <div className={styles.images}>
      <div className={styles.images__mainImage}>
        <Image priority src={currentImage} alt="" width="600" height="450" />
      </div>
      <div className={styles.images__slideshow}>
        <HorizontalCarousel cols={4} rows={1} loop autoplay={3000} gap={20}>
          {currentSlider.map((slider) => (
            <Item key={slider.name} className={styles.images__smImage}>
              <Image
                src={slider.thumbnail}
                style={{ cursor: "pointer" }}
                width="250"
                height="190"
                alt={slider.name}
                onClick={() => handleCarouselItemClick(slider.thumbnail)}
              />
            </Item>
          ))}
        </HorizontalCarousel>
      </div>
    </div>
  );
};

export default Images;
