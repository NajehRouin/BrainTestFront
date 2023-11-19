// import { Button } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./play.css";

const QuestionCard = () => {
  const location = useLocation();
  const questions = location.state;
  const [Questions, setQuestions] = useState(questions);

  const [cureentQ, setCurrentQ] = useState(0);
  const [showresult, setshowresult] = useState(false);
  const [score, setscore] = useState(0);
  const [act, setAct] = useState(false);
  const [valid, setValid] = useState("");

  const handleAnswerBtnClick = (correct, ind) => {
    // console.log(":::" + correct + "...." + ind);
    if (correct === ind) {
      // alert("correct answer");
      setValid("Nice !!");
      setscore(score + 1);
    } else {
      setValid("oooooooooooooooooooopssssss !!");
    }
    setAct(!act);
  };
  const handleNext = () => {
    const nextQuestion = cureentQ + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQ(nextQuestion);
      setValid("");
      setAct(!act);
    } else {
      setshowresult(true);
    }
  };

  return (
    <>
      {showresult ? (
        <div style={{ marginTop: 120 }} className="result">
          <div className="result-header">
            <img src="https://cdn-icons-png.flaticon.com/512/338/338337.png" alt="bbbb" />
            <img src="https://cdn-icons-png.flaticon.com/512/338/338337.png" alt="bbbb" />
            <img src="https://cdn-icons-png.flaticon.com/512/338/338337.png" alt="bbbb" />
          </div>
          <h1>
            your score is
            <span className="space">
              {score} / {Questions.length}
            </span>
          </h1>
          <h2>See you next time !</h2>
          <br />
          <Link to="/">
            <button className="botton">Home</button>
          </Link>
        </div>
      ) : (
        <div className="ques-card" style={{ marginTop: 100 }}>
          <div className="head-card">
            <h1>
              Question
              <span className="space">
                {cureentQ + 1}/{Questions?.length}
              </span>
            </h1>
            <h3>{Questions[cureentQ]?.Title}</h3>
          </div>
          <div className="options ">
            <button
              className={
                act
                  ? 0 === Questions[cureentQ]?.rightIndex - 1
                    ? "a5dharyalma3"
                    : "rougecha3cha3i"
                  : null
              }
              disabled={act}
              onClick={() => {
                console.log(Questions[cureentQ]?.rightIndex)
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 1);
              }}
            >
              <span>1-</span> {Questions[cureentQ]?.answers[0]}
            </button>
            <button
              className={
                act
                  ? 1 === Questions[cureentQ]?.rightIndex - 1
                    ? "a5dharyalma3"
                    : "rougecha3cha3i"
                  : null
              }
              disabled={act}
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 2);
              }}
            >
              <span>2-</span> {Questions[cureentQ]?.answers[1]}
            </button>
            <button
              className={
                act
                  ? 2 === Questions[cureentQ]?.rightIndex - 1
                    ? "a5dharyalma3"
                    : "rougecha3cha3i"
                  : null
              }
              disabled={act}
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 3);
              }}
            >
              <span>3-</span> {Questions[cureentQ]?.answers[2]}
            </button>
            <button
              className={
                act
                  ? 3 === Questions[cureentQ]?.rightIndex - 1
                    ? "a5dharyalma3"
                    : "rougecha3cha3i"
                  : null
              }
              disabled={act}
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 4);

                // console.log(Questions?.answers[Questions.rightIndex-1]);
              }}
            >
              <span>4-</span> {Questions[cureentQ]?.answers[3]}
            </button>
          </div>
          <br />
          <span className="oops-nice">{valid}</span>
          <br />
          <button
            disabled={!act}
            className="next"
            onClick={() => {
              handleNext();
            }}
          >
            next
          </button>
        </div>
      )}
    </>
  );
};

export default QuestionCard;
