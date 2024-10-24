import { createSlice } from "@reduxjs/toolkit";
import { CharacterState } from "../../interfaces/Character";
import { fetchCharacters } from "./operations";

const initialState: CharacterState = {
  characters: [],
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.results;
    });
  },
});

// export const {  } = characterSlice.actions;
const characterReducer = characterSlice.reducer;
export default characterReducer;
