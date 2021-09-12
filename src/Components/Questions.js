import React from "react";
import Answers from "./QuizComponent/Answers";
import classes from "./styles/Summary.module.css";

export default function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div key={index} className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
