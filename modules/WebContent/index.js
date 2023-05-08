import React from "react";

import Images from "../ProductDetailImages";
import Description from "../ProductDetailDescription";

const WebContent = ({ product }) => (
  <>
    <Images thumbnail={product.thumbnail} sliders={product.sliders} />
    <Description product={product} />
  </>
);

export default WebContent;
