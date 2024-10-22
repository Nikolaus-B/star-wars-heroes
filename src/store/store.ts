import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import heroesReducer from "./heroes/heroesSlice";

const rootReducer = combineReducers({
  heroes: heroesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const appSelector: TypedUseSelectorHook<RootState> = useSelector;
