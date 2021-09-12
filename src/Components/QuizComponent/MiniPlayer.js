import React, { useRef, useState } from "react";
import classes from "../styles/MiniPlayer.module.css";
import ReactPlayer from "react-player";

export default function MiniPlayer({ id, title }) {
  const [status, setStatus] = useState(false);

  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  const toogleButton = () => {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  };
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toogleButton}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toogleButton}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}
