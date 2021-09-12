import React from "react";
import classes from "../styles/Illustration.module.css";

export default function Illustration({ image, alternateName }) {
  return (
    <div className={classes.illustration}>
      <img src={image} alt={alternateName} />
    </div>
  );
}
