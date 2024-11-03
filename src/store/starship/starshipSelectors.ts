import { RootState } from "../store";

export const selectCharacterStarshipList = (state: RootState) =>
  state.starship.characterStarshipsInFilmsInfo;

export const selectStarshipNodes = (state: RootState) =>
  state.starship.starshipsNodes;
