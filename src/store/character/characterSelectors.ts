import { RootState } from "../store";

export const selectCharactersList = (state: RootState) =>
  state.character.characters;

export const selectSelectedCharacter = (state: RootState) =>
  state.character.selectedCharacter;
