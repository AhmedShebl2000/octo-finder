import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "./userAPI";

const initialState = {
  userData: [],
  status: "idle",
  error: null,
};

export const getUserRepos = createAsyncThunk(
  "user/getUserRepos",
  async (username) => await getUserDetails(username)
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserRepos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserRepos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(getUserRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
