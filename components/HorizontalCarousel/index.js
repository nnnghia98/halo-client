import React from "react";
import Carousel from "react-grid-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./HorizontalCarousel.module.scss";

const HorizontalCarousel = (props) => {
  return (
    <Carousel
      {...props}
      containerStyle={{ display: "flex", alignItems: "center" }}
      arrowLeft={
        <div className={styles.carousel__arrowWrapper}>
          <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#babec4" }} />
        </div>
      }
      arrowRight={
        <div className={styles.carousel__arrowWrapper}>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: "#babec4" }} />
        </div>
      }
    >
      {props.children}
    </Carousel>
  );
};

export default HorizontalCarousel;
