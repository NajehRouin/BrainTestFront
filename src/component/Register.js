import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../js/userSlice/userSlice";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.user.msg);

  return (
    <div className="regContainer">
      <div className="register">
        <h1>You are welcome</h1>
        <div className="regInputs">
          <h2>Name</h2>
          <input
            type="text"
            placeholder="put your name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <h2>lastName</h2>
          <input
            type="text"
            placeholder="put your name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <h2>EMAIL</h2>
          <input
            type="email"
            placeholder="put your email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <h2>PASSWORD</h2>
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <h1>{msg}</h1>
        <Link to="/login">
          <button onClick={() =>{ console.log('User',{...user})
            dispatch(userRegister(user))
            }}>REGISTER</button>
        </Link>
        <h4>
          you already have a count <Link to="/login"> sign in</Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
