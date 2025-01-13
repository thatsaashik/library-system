import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer, // Register books slice
  },
});

export default store;
