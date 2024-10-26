import { createAsyncThunk } from "@reduxjs/toolkit";
import { starshipApi } from "../../api/api";
import { MatchingStarships } from "../../interfaces/Starship";
import debounce from "../../helpers/debounce";

// Get list of all starships by film which character uses
export const fetchStarshipDetailsByFilm = createAsyncThunk(
  "starship/fetchStarshipDetailsByFilm",
  async (matchingStarships: MatchingStarships[], thunkAPI) => {
    try {
      // Create a Set to track unique starship IDs
      // const uniqueStarshipIds = new Set<number>();

      const results = await Promise.all(
        matchingStarships.map(async ({ filmTitle, filmID, starshipIds }) => {
          const starshipPromises = starshipIds
            // .filter((id) => {
            //   // Only fetch if ID is not already in the set
            //   if (!uniqueStarshipIds.has(id)) {
            //     uniqueStarshipIds.add(id);
            //     return true;
            //   }
            //   return false;
            // })
            .map((id) =>
              // Debounced fetch function with error handling
              debounce(async () => {
                try {
                  return await starshipApi.get(`/${id}/`);
                } catch (error: any) {
                  // Check for rate limiting (HTTP status 429)
                  if (error.response && error.response.status === 429) {
                    // Wait for a second before retrying
                    return new Promise((resolve) =>
                      setTimeout(
                        () => resolve(starshipApi.get(`/${id}/`)),
                        1000
                      )
                    );
                  }
                  return thunkAPI.rejectWithValue((error as Error).message);
                }
              }, 300)()
            );

          const starshipResponses = await Promise.all(starshipPromises);

          return {
            filmTitle,
            filmID,
            starships: starshipResponses.map((response) => response.data),
          };
        })
      );

      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
