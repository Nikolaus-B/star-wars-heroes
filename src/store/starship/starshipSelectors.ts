import { RootState } from "../store";

export const selectCharacterStarshipList = (state: RootState) =>
  state.starship.characterStarshipsInFilmsInfo;
