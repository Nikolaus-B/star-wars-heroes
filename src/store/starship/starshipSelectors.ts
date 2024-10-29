import { RootState } from "../store";

export const selectStarshipList = (state: RootState) =>
  state.starship.starshipFilmInfo;
