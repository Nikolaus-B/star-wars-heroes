import { RootState } from "../store";

export const selectIsLoading = (state: RootState) => state.service.isLoading;

export const selectError = (state: RootState) => state.service.error;

export const selectCurrentPage = (state: RootState) =>
  state.service.currentPage;
