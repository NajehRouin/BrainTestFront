import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./routes/PrivateRoute";


import Index from "./screen/Play/Index";
import AddQuiz from "./component/AddQuiz";
import AdminDashbord from "./component/AdminDashbord";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Question from "./component/Question";
import QuizRules from "./component/QuizRules";
import Register from "./component/Register";
import About from "./screen/About";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "./js/userSlice/userSlice";
import QuestionCard from "./screen/Play/QuestionCard";
import QuizList from "./component/QuizList";
import Footer from "./component/Footer";

function App() {
  const [catSearch, setCatSearch] = useState("IT");
  const [searsh, setSearsh] = useState("");
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    // dispatch(quizzget());
  }, []);
  return (
    <div>
      <Navbar
        ping={ping}
        setping={setping}
        isAuth
        setSearsh={setSearsh}
        searsh={searsh}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearsh={setSearsh}
              searsh={searsh}
              catSearch={catSearch}
              setCatSearch={setCatSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/quizzes" element={<Index />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/addquiz" element={<AddQuiz />} />
        </Route>
        <Route
          path="/quizlist"
          element={
            <QuizList
              setSearsh={setSearsh}
              searsh={searsh}
              catSearch={catSearch}
              setCatSearch={setCatSearch}
            />
          }
        />
        {/* <Route path="/addquestion" element={<AddQuestion />} /> */}
        <Route path="/Question" element={<Question />} />
        <Route path="/card" element={<QuestionCard />} />
        <Route path="/Dash" element={<AdminDashbord />} />
        <Route path="/quizRules" element={<QuizRules />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
