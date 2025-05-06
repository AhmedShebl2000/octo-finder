import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "../features/repos/repoSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    repo: repoReducer,
    user: userReducer,
  },
});
