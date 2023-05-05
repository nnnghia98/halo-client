import React from "react";
import Image from "next/image";
import Carousel from 'react-grid-carousel'
import { useWindowDimensions } from "utils/window";
import { PRODUCT_PAGE, WIDTH_BREAKPOINT } from "utils/constants";
import thumb2 from "assets/img/thumb2.jpg";
import styles from "./ProductDetailRecommend.module.scss";
import { useRouter } from "next/router";

const ProductRecommend = ({ relatedProducts }) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const renderRelatedProducts = () => (
    <Carousel
      cols={width < WIDTH_BREAKPOINT ? 2 : 4} rows={1} loop autoplay={3000}
    >
      {
        relatedProducts.map(product => (
          <Carousel.Item
            key={product.title}
            className={styles.productRecommend__imgWrapper}
          >
            <Image
              src={product.thumbnail ?? thumb2}
              width="250"
              height="250"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/${PRODUCT_PAGE.slug}/${product.slug}`)
              }}
            />
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/${PRODUCT_PAGE.slug}/${product.slug}`)
              }}
            >{product.title}</p>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );

  return (
    relatedProducts.length > 0 ? (
      <div className={styles.productRecommend}>
        <h2>ĐỀ XUẤT SẢN PHẨM</h2>

        <div className={styles.productRecommend__slideshow}>
          {renderRelatedProducts()}
        </div>
      </div>
    ) : null
  );
};

export default ProductRecommend;
