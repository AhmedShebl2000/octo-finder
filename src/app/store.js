import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "../features/repos/repoSlice";

export const store = configureStore({
  reducer: {
    repo: repoReducer,
  },
});
