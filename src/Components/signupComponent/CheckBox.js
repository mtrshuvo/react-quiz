import React from "react";

export default function CheckBox({ className, text, ...rest }) {
  return (
    <div>
      <label className={className}>
        <input type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </div>
  );
}
