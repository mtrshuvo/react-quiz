import React from "react";
import useFetch from "../hooks/useFetch";
import summaryImage from "./assets/images/success.png";
import classes from "./styles/Summary.module.css";

export default function Summary({ score, noq }) {
  const getPhotoQuery = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  };
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getPhotoQuery()}&per_page=1`,
    "GET",
    { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
  );

  const image = result ? result?.photos[0].src.medium : summaryImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={classes.badge}>Loading badge...</div>}
      {error && <div className={classes.badge}>Error fetching badge</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="success" />
        </div>
      )}
    </div>
  );
}
