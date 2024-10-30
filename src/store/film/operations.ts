import { createAsyncThunk } from "@reduxjs/toolkit";
import { filmApi } from "../../api/api";

// Thunks for fetching Star Wars film data

// Get list of all films by character
export const fetchFilmsByIds = createAsyncThunk(
  "film/fetchFilmsByIds",
  async (characterId: number, thunkAPI) => {
    try {
      const response = await filmApi.get(`?characters=${characterId}`);

      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
