import { createSlice } from "@reduxjs/toolkit";
import { FilmState } from "../../models/Film";
import { fetchFilmsByIds } from "./operations";

const initialState: FilmState = {
  films: [],
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsByIds.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

// export const {  } = filmSlice.actions;
const filmReducer = filmSlice.reducer;
export default filmReducer;
