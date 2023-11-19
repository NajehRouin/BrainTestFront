import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Search from "../component/Search"

const Navbar = ({ setSearsh, searsh }) => {
  const [isAuth, setIsAuth] = useState();
  useEffect(() => {
    setIsAuth(localStorage.getItem("token"));
  }, [isAuth]);

  return (
    <div className="navigation">
      {/*  <img
        src="https://img.freepik.com/vecteurs-libre/quiz-logo_2728-12.jpg"
        alt=""
      /> */}
      <h1 className="logo1" style={{ color: "white" }}>
        <Link to="/">
          Brain Test
        </Link>
      </h1>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/quizlist">Quiz List</Link>
          </li>
          <li>
            <Link to="/addquiz">Add Quiz</Link>
          </li>
        </ul>
      </div>

      <div className="sign">
        <Search setSearsh={setSearsh} />
        {isAuth ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Log Out
          </button>
        ) : (
          <>  
          <Link to="login">
            <button>
              Login
            </button>
            </Link>
            <Link to="register">
              <button>
              Register
            </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
