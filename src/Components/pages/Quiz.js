import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import useQuestionsList from "../../hooks/useQuestionsList";
import Answers from "../QuizComponent/Answers";
import MiniPlayer from "../QuizComponent/MiniPlayer";
import ProgressBar from "../QuizComponent/ProgressBar";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answers":
      const questions = _.cloneDeep(state);
      questions[action.qID].options[action.index].checked = action.value;
      return questions;

    default:
      return state;
  }
};
export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestionsList(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);

  const { currentUser } = useAuth();
  const history = useHistory();

  const { videoTitle } = history.location.state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handlechange(e, index) {
    dispatch({
      type: "answers",
      qID: currentQuestion,
      index: index,
      value: e.target.checked,
    });
  }
  function nextQuestion() {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((perv) => perv + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((perv) => perv - 1);
    }
  }

  const submit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    history.push({
      pathname: `/result/${id}`,
      state: { qna },
    });
  };

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error occured</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handlechange={handlechange}
            input={true}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            percentage={percentage}
            submit={submit}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </>
  );
}
