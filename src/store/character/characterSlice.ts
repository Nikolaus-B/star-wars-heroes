import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterState } from "../../models/Character";
import { fetchCharacters } from "./operations";

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setSelectedCharacter: (state, action: PayloadAction<Character | null>) => {
      state.selectedCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      console.log("action", action.payload);
      if (action.payload.previous === null) {
        state.characters = action.payload.results;
        return;
      }
      state.characters = [...state.characters, ...action.payload.results];
    });
  },
});

export const { setSelectedCharacter } = characterSlice.actions;
const characterReducer = characterSlice.reducer;
export default characterReducer;
