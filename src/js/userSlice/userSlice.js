import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
  
    localStorage.setItem("UserName",  JSON.stringify(response.data.user.name))
 
   
   
    return response.data;

  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  user: null,
  status: null,
  msg: null,
  token:null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: {
    [userRegister.pending]: (state, action) => {
      state.status = "pinding";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state, action) => {
      state.status = "Fail";
    },
    [userLogin.pending]: (state, action) => {
      state.status = "pinding";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      //state.msg = action.payload.data.msg;
      console.log("msg",action.payload.msg)
      //state.user = action.payload.data.user;
      
      localStorage.setItem("token", action.payload.token);
     
      
    },
    [userLogin.rejected]: (state, action) => {
      state.status = "Fail";
    },
    [userCurrent.pending]: (state, action) => {
      state.status = "pinding";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      // state.msg = action.payload.data.msg;
      console.log("msg",action)
      state.user = action.payload.user;
    },
    [userCurrent.rejected]: (state, action) => {
      state.status = "Fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
