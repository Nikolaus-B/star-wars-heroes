import { createAsyncThunk } from "@reduxjs/toolkit";
import { characterApi } from "../../api/api";

// Thunks for fetching Star Wars characters data

// Get list of all characters
export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",
  async (page: number, thunkAPI) => {
    try {
      const response = await characterApi.get(`/?page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

// Get details about a specific character by their ID
export const fetchCharacterById = createAsyncThunk(
  "character/fetchCharacterById",
  async (id: number, thunkAPI) => {
    try {
      const response = await characterApi.get(`/${id}/`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

// Get details about a specific character by their name
export const fetchCharacterByName = createAsyncThunk(
  "character/fetchCharacterByName",
  async (name: string, thunkAPI) => {
    try {
      const response = await characterApi.get(`/?search=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
