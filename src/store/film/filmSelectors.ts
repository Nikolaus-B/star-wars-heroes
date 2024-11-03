import { RootState } from "../store";

export const selectFilmsList = (state: RootState) => state.film.films;

export const selectFilmNodes = (state: RootState) => state.film.filmNodes;
