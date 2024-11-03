import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStarshipDetailsByFilm } from "./operations";
import { StarshipsInFilmInfo, StarshipState } from "../../models/Starship";
import { createStarshipNodes } from "../../helpers/flowUtils";

const initialState: StarshipState = {
  characterStarshipsInFilmsInfo: [],
  starshipsNodes: null,
};

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {
    setStarshipsInFilmsInfo: (
      state,
      action: PayloadAction<StarshipsInFilmInfo[]>
    ) => {
      state.characterStarshipsInFilmsInfo = action.payload;
      state.starshipsNodes = createStarshipNodes(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStarshipDetailsByFilm.fulfilled, (state, action) => {
      state.characterStarshipsInFilmsInfo = action.payload;
      state.starshipsNodes = createStarshipNodes(action.payload);
    });
  },
});

export const { setStarshipsInFilmsInfo } = starshipSlice.actions;
const starshipReducer = starshipSlice.reducer;
export default starshipReducer;
