import React from "react";
import classes from "../styles/TextInput.module.css";

export default function TexInput({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} required />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
}
