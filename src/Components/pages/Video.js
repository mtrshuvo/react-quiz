import React from "react";
import classes from "../styles/Video.module.css";

export default function Video({ title, noq, id }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq}</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
