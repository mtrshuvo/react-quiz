import React, { useState, useRef } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "../signupComponent/Button";

export default function ProgressBar({ next, prev, percentage, submit }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  const toggleTooltip = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${percentage}% - 65px`;
      tooltipRef.current.style.display = "block";
    }
  };
  return (
    <div className={classes.progressBar}>
      <Button className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Button>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {percentage}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
            className={classes.progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={percentage === 100 ? submit : next}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
