import { createSlice } from "@reduxjs/toolkit";
import { HeroesState } from "../../interfaces/Heroes";
import { fetchHeroes } from "./operations";

const initialState: HeroesState = {
  heroes: [],
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.heroes = action.payload.results;
    });
  },
});

// export const {  } = heroesSlice.actions;
const heroesReducer = heroesSlice.reducer;
export default heroesReducer;
