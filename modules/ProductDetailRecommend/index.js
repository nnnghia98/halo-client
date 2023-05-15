import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Item } from "react-grid-carousel";
import { HorizontalCarousel } from "components";
import { useWindowDimensions } from "utils/window";
import { PRODUCT_PAGE, WIDTH_BREAKPOINT } from "utils/constants";
import defaultProductImg from "assets/img/default_product.png";
import styles from "./ProductDetailRecommend.module.scss";

const ProductRecommend = ({ relatedProducts }) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const renderRelatedProducts = () => (
    <HorizontalCarousel
      cols={width < WIDTH_BREAKPOINT ? 2 : 4}
      rows={1}
      loop
      autoplay={3000}
    >
      {relatedProducts.map((product) => (
        <Item
          key={product.title}
          className={styles.productRecommend__imgWrapper}
        >
          <Image
            src={product.thumbnail ?? defaultProductImg}
            width="250"
            height="250"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/${PRODUCT_PAGE.slug}/${product.slug}`);
            }}
          />
          <p
            className={styles.productRecommend__relatedProductName}
            onClick={() => {
              router.push(`/${PRODUCT_PAGE.slug}/${product.slug}`);
            }}
          >
            {product.title}
          </p>
        </Item>
      ))}
    </HorizontalCarousel>
  );

  return relatedProducts.length > 0 ? (
    <div className={styles.productRecommend}>
      <h2>ĐỀ XUẤT SẢN PHẨM</h2>

      <div className={styles.productRecommend__slideshow}>
        {renderRelatedProducts()}
      </div>
    </div>
  ) : null;
};

export default ProductRecommend;
