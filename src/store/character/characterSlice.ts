import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterState } from "../../models/Character";
import { fetchCharacterByName, fetchCharacters } from "./operations";

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
  searchedCharacters: null,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setSelectedCharacter: (state, action: PayloadAction<Character | null>) => {
      state.selectedCharacter = action.payload;
      state.searchedCharacters = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      if (action.payload.previous === null) {
        state.characters = action.payload.results;
        return;
      }
      state.characters = [...state.characters, ...action.payload.results];
    });
    builder.addCase(fetchCharacterByName.fulfilled, (state, action) => {
      state.searchedCharacters = action.payload.results;
    });
  },
});

export const { setSelectedCharacter } = characterSlice.actions;
const characterReducer = characterSlice.reducer;
export default characterReducer;
