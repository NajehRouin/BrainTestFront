import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { MDBIcon } from 'mdb-react-ui-kit';

const QuizList = ({ setSearsh, searsh, setCatSearch, catSearch="" }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setCatSearch("")
  }, []);
  const [quizs, setQuizs] = useState([]);
 // console.log(catSearch);


  useEffect(() => {
    async function fetchData() {
      // You can await here
      await axios.get("http://localhost:5000/quiz").then((data, err) => {
        setQuizs(data.data.quiz);
        console.log("data",data.data.quiz)
      });
      // ...
    }
    fetchData();
  }, []);

  async function getbyid( id  ){
    await axios.get("http://localhost:5000/quiz/"+id).then((data, err) => {
     // setQuizs(data.data.quiz);
      console.log("data by id ",data.data)
    });


  }

  async function deleteQuiz(id){

    await axios.delete("http://localhost:5000/quiz/"+id).then((data, err) => {
      // setQuizs(data.data.quiz);
       console.log("data by id ",data)
       navigate("/")
     });

  }
    // const handleSearch = () => {
    //   !searsh.length
    //     ? setQuizs(
    //         quizs.filter((el) =>
    //           el.Name.toLocaleLowerCase().includes(searsh.toLocaleLowerCase())
    //         )
    //       )
    //     : setQuiz(quizs);
  return (
    <div className="SQContainer">
     
      {quizs
        .filter((el) =>
          catSearch === ""
            ? el
            : el?.Category.toLowerCase() === catSearch.toLowerCase()
        )
        .filter((el) => el.Name.toLowerCase().includes(searsh?.toLowerCase()))
        .map((el, i) => (
          <div
          
              
            className="SmallCard"
            key={el._id}
          >
            <div className="smallbtn">
              
            <button     onClick={
              () => {
                getbyid(el._id)
                //console.log("ID",el._id)
                //navigate("/quizzes", { state: el })
              }}style={{backgroundColor:'green',borderRadius:10}} >Modifier</button>
            <button 
              onClick={
                () => {
                  deleteQuiz(el._id)
                 // console.log("ID",el._id)
                
                }}   
            
            
            style={{backgroundColor:'red',borderRadius:10}}>Supprimer</button>
      
</div>
<div className="smallc">
            <h3   onClick={
              () => {
                navigate("/quizzes", { state: el })
              }} >{el.Name}</h3>
            <h5>{el.Questions.length} Questions</h5>
            </div>
          </div>
        ))}
    </div>
  );
};

export default QuizList;
