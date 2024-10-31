import { createSlice } from "@reduxjs/toolkit";
import { fetchStarshipDetailsByFilm } from "./operations";
import { StarshipState } from "../../models/Starship";

const initialState: StarshipState = {
  characterStarshipsInFilmsInfo: [],
};

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStarshipDetailsByFilm.fulfilled, (state, action) => {
      state.characterStarshipsInFilmsInfo = action.payload;
    });
  },
});

// export const {  } = starshipSlice.actions;
const starshipReducer = starshipSlice.reducer;
export default starshipReducer;
