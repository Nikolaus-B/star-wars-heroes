import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import characterReducer from "./character/characterSlice";
import filmReducer from "./film/filmSlice";
import starshipReducer from "./starship/starshipSlice";

const rootReducer = combineReducers({
  character: characterReducer,
  film: filmReducer,
  starship: starshipReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const appSelector: TypedUseSelectorHook<RootState> = useSelector;
