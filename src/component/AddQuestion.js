import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addQuestion, createQuiz, AddQuiz } from "../js/quizSlice/QuizSlice";

const AddQuestion = ({ nbr, quizz, setQuizz }) => {
  const [question, setQuestion] = useState({
    Title: "",
    answers: [],
    rightIndex: 1,
  });
  const [Q, setQ] = useState([]);
  const dispatch = useDispatch();
  const Quiz = useSelector((state) => state.Quiz.quizz);

  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [answer1, setAnswer1] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState([]);
  const [answer4, setAnswer4] = useState([]);
  let answers = [];
  useEffect(() => {
    answers = [answer1, answer2, answer3, answer4];
    setQuestion({ ...question, answers: answers });
  }, [answer1, answer2, answer3, answer4]);

  const handleNext = async (i) => {
    //  console.log("quiq"+question.answers)
    // let t=await Q
    // await t.push(qquestionuestion)
    // console.log(Q)
    setQ([...Q]);
    i < nbr && setIndex(index + 1);

    setQuizz({ ...quizz, Questions: Q });
    dispatch(addQuestion(question));

    i === nbr - 1 && setShow(!show);
  };

  const handleSend = () => {
    dispatch(AddQuiz(Quiz));
  };

  const handlePrevious = (i) => {
    i > 0 && setIndex(index - 1);
    i === nbr - 1 && setShow(!show);
  };

  // const createAnsewrs = (e, i) => {
  //   console.log(e.target.value);
  //   var s = answers;
  //   console.log(answers)
  //   // const s = answers;
  //   s[i] = e.target.value;
  //   console.log("======", s);
  //   setAnswers(s);
  //   console.log(answers);
  // };
  const navigate = useNavigate();

  return (
    <div className="QuestionInputs">
      {index < nbr ? (
        Array(Number(nbr))
          .fill(1)
          .map(
            (el, i) =>
              i === index && (
                <div key={i} className="QuestioContainer">
                  <button className="Num">{i + 1}</button>
                  <div className="questionInput">
                    <input
                      type="text"
                      placeholder="create a Question"
                      onChange={(e) =>
                        setQuestion({ ...question, Title: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="answer number 1"
                      onChange={(e, i) => setAnswer1(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="answer number 2"
                      onChange={(e, i) => setAnswer2(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="answer number 3"
                      onChange={(e, i) => setAnswer3(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="answer number 4"
                      onChange={(e, i) => setAnswer4(e.target.value)}
                    />
                    <input
                      type="number"
                      min={1}
                      max={4}
                      defaultValue={1}
                      placeholder="answer number 4"
                      onChange={(e, i) =>
                        setQuestion({
                          ...question,
                          rightIndex: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="buttons">
                    <button onClick={() => navigate("/")} className="Prev">
                      Cancel
                    </button>
                    {/* {show ? ( */}
                    <button className="Next" onClick={() => handleNext(i)}>
                      NEXT
                    </button>
                    {/* // ) : (
                  //   <button className="Fin" onClick={()=>{fini() }}>FINISH</button>
                  // )} */}
                  </div>
                </div>
              )
          )
      ) : (
        <div className="confirm">
          <h1 onClick={() => handleSend()}>
            you have successfully made your own quiz you can
            <br /> <Link to="/"> confirm it now</Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default AddQuestion;
