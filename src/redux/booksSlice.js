import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch books from API
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch("https://api.itbook.store/1.0/search/mongodb"); // Replace with actual API URL
  const data = await response.json();
  return data.books || []; // Ensure the payload is an array
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [], // Store fetched books
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload); // Add the new book to the list
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addBook } = booksSlice.actions; // Export the action
export default booksSlice.reducer;
