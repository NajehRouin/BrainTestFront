import React, { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import { useDispatch } from "react-redux";
import { createQuiz } from "../js/quizSlice/QuizSlice";
const AddQuiz = () => {
  const [quest, setQuest] = useState(<AddQuestion nbr={2} />);
  const [show, setShow] = useState(true);
  const [nbr, setNbr] = useState(2);
  const dispatch = useDispatch();
  const CurrentUserName=JSON.parse(localStorage.getItem("UserName"));

  const [quizz, setQuizz] = useState({
    Name: "",
    Subject: "",
    Category: "",
    Questions: [],
    createdBy:CurrentUserName

  });
  const [nameErr, setNameErr] = useState("");
  const [categorieErr, setCategorieErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const createModals = async (nbr) => {
    await setQuest(<AddQuestion nbr={nbr} quizz={quizz} setQuizz={setQuizz} />);
    await setShow(!show);
  };
  useEffect(() => {
    console.log(quizz);
  }, [quizz]);
  const validate = () => {
    if (quizz.Name === "") {
      setNameErr("Champ obligatoire");
    } else {
      setNameErr("");
    }
    if (quizz.Category === "") {
      setCategorieErr("Champ obligatoire");
    } else {
      setCategorieErr("");
    }
    if (quizz.Subject === "") {
      setSubjectErr("Champ obligatoire");
    } else {
      setSubjectErr("");
    }

    if (quizz.Name !== "" && quizz.Category !== "" && quizz.Subject !== "") {
      dispatch(createQuiz(quizz));
      createModals(nbr);
    }
  };

  return show ? (
    <div className="Quiz">
      <h1>Quiz</h1>
      <div className="QuizInputs">
        <input
          type="text"
          placeholder="Quiz Name"
          onChange={(e) => setQuizz({ ...quizz, Name: e.target.value })}
        />
        <p>{nameErr}</p>
        {/* <input
          type="text"
          placeholder="Quiz Categorie"
          onChange={(e) => setQuizz({ ...quizz, Categorie: e.target.value })}
        /> */}
        <select
          onChange={(e) => setQuizz({ ...quizz, Category: e.target.value })}
        >
          <option value="">Quiz Categorie</option>
          <option value="IT">IT</option>
          <option value="Mathematics">Mathematics</option>
          <option value="History Geography">History Geography</option>
          <option value="Physical">Physical</option>
          <option value="Sport">Sport</option>
          <option value="Countries and capitals">Countries and capitals</option>
          <option value="Wild world">Wild world</option>
          <option value="Cinema and series">Cinema and series</option>
          <option value="Astronomy">Astronomy</option>
          <option value="Languages">Languages</option>
          <option value="Cars and bikes">Cars and bikes</option>
          onChange={(e) => setQuizz({ ...quizz, Category: e.target.value })}
        </select>
        <p>{categorieErr}</p>
        <input
          type="text"
          placeholder="Quiz Subject"
          onChange={(e) => setQuizz({ ...quizz, Subject: e.target.value })}
        />
        <p>{subjectErr}</p>
        <input
          type="text"
          placeholder="Quiz Overview"
          onChange={(e) => setQuizz({ ...quizz, Overview: e.target.value })}
        />

        <input
          className="INP1"
          type="number"
          min="2"
          max="15"
          defaultValue={2}
          onChange={(e) => setNbr(e.target.value)}
        />
      </div>

      <button className="btn-next" onClick={() => validate()}>
        NEXT
      </button>
    </div>
  ) : (
    quest
  );
};

export default AddQuiz;
