import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createQuestion = createAsyncThunk(
  "question/createQuestion",
  async (Question) => {
    try {
      let response = await axios.post(
        "http://localhost:5000/question/createQ",
        Question
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getQuestion = createAsyncThunk(
  "question/getQuestions",
  async () => {
    try {
      let response = await axios.get(
        "http://localhost:5000/question/getQuestions"
      );
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  Question: null,
  status: null,
  msg: null,
};
export const questionSlice = createSlice({
  name: "Question",
  initialState,
  reducers: {},
  extraReducers: {
    [createQuestion.pending]: (state, action) => {
      state.status = "pinding";
    },
    [createQuestion.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.Question = action.payload.data.Question;
    },
    [createQuestion.rejected]: (state, action) => {
      state.status = "Fail";
    },
    [getQuestion.pending]: (state, action) => {
      state.status = "pinding";
    },
    [getQuestion.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.Question = action.payload.data.Question;
    },
    [getQuestion.rejected]: (state, action) => {
      state.status = "Fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default questionSlice.reducer;
