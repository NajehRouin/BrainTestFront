import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion, questionSlice } from "../js/userSlice/questionSlice";
function QuestionsList() {
  const dispatch = useDispatch();
  const quesion= useSelector((state) => state.Question);
  useEffect(() => {
    dispatch(getQuestion())
}, []);

  return <div></div>;
}

export default QuestionsList;
