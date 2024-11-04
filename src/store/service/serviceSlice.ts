import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { ServiceState } from "../../models/Service";
import { fetchFilmsByIds } from "../film/operations";
import { fetchCharacters } from "../character/operations";
import { fetchStarshipDetailsByFilm } from "../starship/operations";

const initialState: ServiceState = {
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 9,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
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

export const { setCurrentPage } = serviceSlice.actions;
const serviceReducer = serviceSlice.reducer;
export default serviceReducer;
