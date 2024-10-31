import { createAsyncThunk } from "@reduxjs/toolkit";
import { starshipApi } from "../../api/api";
import { MatchingStarships } from "../../models/Starship";

const starshipCache: Record<string, any> = {};
const pendingRequests: Record<string, Promise<any>> = {};

export const fetchStarshipDetailsByFilm = createAsyncThunk(
  "starship/fetchStarshipDetailsByFilm",
  async (matchingStarships: MatchingStarships[], thunkAPI) => {
    try {
      const results = await Promise.all(
        matchingStarships.map(async ({ filmTitle, filmID, starshipIds }) => {
          const starshipPromises = starshipIds.map(async (id) => {
            if (starshipCache[id]) {
              // If data is in cache return it
              return starshipCache[id];
            }

            if (!pendingRequests[id]) {
              // If the request not started, create it and add it to pendingRequests
              pendingRequests[id] = starshipApi
                .get(`/${id}/`)
                .then((response) => {
                  starshipCache[id] = response.data; // Store the result in cache
                  delete pendingRequests[id]; // Remove from pendingRequests
                  return response.data;
                });
            }

            // Return the promise from pendingRequests
            return pendingRequests[id];
          });

          const starshipResponses = await Promise.all(starshipPromises);

          return {
            filmTitle,
            filmID,
            starships: starshipResponses,
          };
        })
      );

      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
