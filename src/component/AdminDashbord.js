import React , { useEffect, useState } from "react";
import axios from "axios";
const AdminDashbord = () => {
  const [User,setUser]= useState([]);



  useEffect(() => {
    async function fetchData() {
      // You can await here
      await axios.get("http://localhost:5000/user/getAll").then((data, err) => {
        setUser(data.data.user);
        console.log("List of User",data.data.user)
        
      });
      // ...
    }
    fetchData();
  }, []);

  return (
    <div className="dash-admin">
      <div className="userList">
        <h1>THE LIST OF USERS</h1>
        <ul>
        {User.map(user => <li key={user._id}>{user.name}</li>)}
      </ul>
     
      </div>
      <div className="quizlist">
        <h1>THE LIST OF QUIZZES</h1>
        <ul>
          <li>QUIZ N:1</li>
          <li>QUIZ N:2</li>
          <li>QUIZ N:3</li>
          <li>QUIZ N:4</li>
          <li>QUIZ N:5</li>
          <li>QUIZ N:6</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashbord;
