import { createSlice } from "@reduxjs/toolkit";
import { fetchStarshipDetailsByFilm } from "./operations";
import { StarshipState } from "../../interfaces/Starship";

const initialState: StarshipState = {
  starshipFilmInfo: [],
};

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStarshipDetailsByFilm.fulfilled, (state, action) => {
      state.starshipFilmInfo = action.payload;
    });
  },
});

// export const {  } = starshipSlice.actions;
const starshipReducer = starshipSlice.reducer;
export default starshipReducer;
