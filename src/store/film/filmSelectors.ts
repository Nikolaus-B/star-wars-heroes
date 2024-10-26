import { RootState } from "../store";

export const selectFilmsList = (state: RootState) => state.film.films;
