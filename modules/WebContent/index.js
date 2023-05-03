import React from "react";

import Images from "../ProductDetailImages";
import Description from "../ProductDetailDescription";

const WebContent = ({ product }) => (
  <>
    <Images />
    <Description product={product} />
  </>
);

export default WebContent;
