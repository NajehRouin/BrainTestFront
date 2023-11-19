import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddQuiz = createAsyncThunk("quiz/create", async (quiz) => {
  try {
    let response = await axios.post("http://localhost:5000/quiz/create", quiz);
    return response;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  quizz: {
    Name: " ",
    Subject: " ",
    Categorie: " ",
    Questions: [],
  },
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    createQuiz: (state, action) => {
      state.quizz = action.payload;
    },
    addQuestion: (state, action) => {
      state.quizz = {
        ...state.quizz,
        Questions: state.quizz.Questions.concat(action.payload),
      };
    },
  },
  extraReducers: {
    [AddQuiz.pending]: (state, action) => {
      state.status = "pinding";
    },
    [AddQuiz.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.msg = action.payload.data.msg;
      state.Quiz = action.payload.data;
    },
    [AddQuiz.rejected]: (state, action) => {
      state.status = "Fail";
    },
  },
});

export const { createQuiz, addQuestion } = quizSlice.actions;

export default quizSlice.reducer;
