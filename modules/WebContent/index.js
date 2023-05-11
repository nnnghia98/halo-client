import React from "react";

import Images from "../ProductDetailImages";
import Description from "../ProductDetailDescription";

const WebContent = ({ product }) => (
  <>
    <Images
      thumbnail={{ path: product.thumbnail, name: product.thumbnail_name }}
      sliders={product.sliders}
    />
    <Description product={product} />
  </>
);

export default WebContent;
