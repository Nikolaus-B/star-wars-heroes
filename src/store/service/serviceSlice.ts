import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ServiceState } from "../../models/Service";
import { fetchFilmsByIds } from "../film/operations";
import { fetchCharacters } from "../character/operations";
import { fetchStarshipDetailsByFilm } from "../starship/operations";

const initialState: ServiceState = {
  isLoading: false,
  currentPage: 1,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        fetchCharacters.pending,
        fetchFilmsByIds.pending,
        fetchStarshipDetailsByFilm.pending
      ),
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(
        fetchCharacters.fulfilled,
        fetchFilmsByIds.fulfilled,
        fetchStarshipDetailsByFilm.fulfilled
      ),
      (state) => {
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(
        fetchCharacters.rejected,
        fetchFilmsByIds.rejected,
        fetchStarshipDetailsByFilm.rejected
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }
    );
  },
});

const serviceReducer = serviceSlice.reducer;
export default serviceReducer;
