import { createAsyncThunk } from "@reduxjs/toolkit";
import { filmApi } from "../../api/api";

// Thunks for fetching Star Wars film data

// Get list of all films by character
export const fetchFilmsByIds = createAsyncThunk(
  "film/fetchFilmsByIds",
  async (filmIds: number[], thunkAPI) => {
    try {
      if (!filmIds.length) {
        return [];
      }

      // Using Promise.all to make parallel requests to the API for each id
      const responses = await Promise.all(
        filmIds.map((id) => filmApi.get(`/${id}/`))
      );

      return responses.map((response) => response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
