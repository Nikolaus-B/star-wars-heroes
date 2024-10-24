import { RootState } from "../store";

export const selectCharactersList = (state: RootState) =>
  state.character.characters;
