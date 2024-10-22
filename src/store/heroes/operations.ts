import { createAsyncThunk } from "@reduxjs/toolkit";
import { heroesApi } from "../../api/api";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchHeroes",
  async (_, thunkAPI) => {
    try {
      const response = await heroesApi.get(`/`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
