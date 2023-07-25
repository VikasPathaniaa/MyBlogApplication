import { configureStore, combineReducers } from "@reduxjs/toolkit";
import BlogsSlice from "../Redux/Slices/BlogsSlice/index";

const rootReducer = combineReducers({
  blogsSlice: BlogsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
