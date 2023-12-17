import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { QUOTES_URL } from "../../utils/Api";

//add initialstates
const initialState = {
  loading: false,
  error: null,
  quotes: [],
  user: JSON.parse(localStorage.getItem("user")) || {},
  books: [],
  favorites: [],
  toRead: [],
};
const baseUrl = "http://localhost:3030/users";

export const getQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  try {
    const response = await fetch(QUOTES_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getAll = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(baseUrl);
    const result = await response.json();
    return result.users;
  } catch (error) {
    throw error;
  }
});

export const getOne = createAsyncThunk(
  "users/getOneUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/${userId}`);
      const result = await response.data;
      return result.user;
    } catch (error) {
      return rejectWithValue({ message: "Error fetching user", error });
    }
  }
);
export const createUser = createAsyncThunk(
  "user/create",
  async ({ email, password }) => {
    const response = await axios.post(`${baseUrl}/register`, {
      email,
      password,
    });

    return response.data;
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      const result = await response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get(`${baseUrl}/logout`);
  } catch (error) {
    throw error;
  }
});

export const clearUserData = () => {
  sessionStorage.removeItem("userData");
};
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await fetch(BOOKS_URL);
    const data = await response.json();
    return Object.keys(data).map((id) => ({ id, ...data[id] }));
  } catch (error) {
    throw error;
  }
});
/*
export const addToFavorites = createAsyncThunk(
  "books/addToFavorites",
  async (book) => {
    try {
      

      return book;
    } catch (error) {
      throw error;
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "books/removeFromFavorites",
  async (bookId) => {
    try {
      

      return bookId;
    } catch (error) {
      throw error;
    }
  }
);

export const addToRead = createAsyncThunk("books/addToRead", async (title) => {
  try {
 

    return title;
  } catch (error) {
    throw error;
  }
});
*/
const booksSlice = createSlice({
  name: "booksVoyage",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
      clearUserData();
    },
    updateBooks: (state, action) => {
      state.books = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (book) => book.id !== action.payload
      );
    },
    addToRead: (state, action) => {
      state.toRead = [...state.toRead, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getOne.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Access the message from rejectWithValue
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload];
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (book) => book.id !== action.payload
        );
      })
      .addCase(addToRead.fulfilled, (state, action) => {
        state.toRead = [...state.toRead, action.payload];
      });
  },
});

export const {
  setUser,
  clearUser,
  updateBooks,
  addToFavorites,
  removeFromFavorites,
  addToRead,
} = booksSlice.actions;

export default booksSlice.reducer;
