
import React, {  useState } from "react";


import QuizList from "./QuizList";

const Home = ({ setSearsh, searsh }) => {
  const Cat = [
    "IT",
    "Mathematics",
    "History Geography",
    "Physical",
    "Sport",
    "Countries and capitals",
    "Wild world",
    "Cinema and series",
    "Astronomy",
    "Languages",
    "Cars and bikes",
  ];
  const [catSearch, setCatSearch] = useState("");

  return (
    <div className="linding">
      {/* <div className="list-categories">
        <ul>
          {Cat.map((el) => (
            <li
              onClick={() => {
                setCatSearch(el);
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </div> */}
      <div>
        <div className="map-list">
          <div id="nahed">
            <h1>
              Test your general culture <br />and<br /> enrich  your information background
            </h1>
          </div>
          <img src="https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="dezfezfz" />

        </div>
        <QuizList
       
          setSearsh={setSearsh}
          searsh={searsh}
          catSearch={catSearch}
          setCatSearch={setCatSearch}
        />
      </div>
    </div>
  );
};

export default Home;
