import React from "react";
import { Image } from "react-bootstrap";

function PosterCard({ imageUrl, ...props }) {
  return <Image src={imageUrl} {...props}></Image>;
}
export default PosterCard;
