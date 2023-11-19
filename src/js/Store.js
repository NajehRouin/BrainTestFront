import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice/QuizSlice";
import questionSlice from "./userSlice/questionSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,

    Questions: questionSlice,

    Quiz: quizSlice,
  },
});
