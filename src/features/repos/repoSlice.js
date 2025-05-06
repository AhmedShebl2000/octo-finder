import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRepos } from "./reposAPI";

const initialState = {
  reposData: [],
  status: "idle",
  error: null,
};

export const fetchAllRepos = createAsyncThunk(
  "repo/fetchAllRepos",
  async (query) => await getRepos(query)
);

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRepos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRepos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reposData = action.payload;
      })
      .addCase(fetchAllRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default repoSlice.reducer;
