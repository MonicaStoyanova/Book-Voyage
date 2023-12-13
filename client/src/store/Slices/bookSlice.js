import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//add initialstates
const initialState = {};
const baseUrl = "http://localhost:3030/users";

export const getAll = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(baseUrl);
    const result = await response.json(); // Corrected line
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
      const result = await response.data; // Await the response.data
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

const booksSlice = createSlice({
  name: "booksVoyage",
  initialState,
  reducers: {
    //add reducers
  },
  extraReducers: (builder) => {
    builder
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
        state.user = null; // Reset user state after logout
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  updateQuestions,
  updateUserStatistics,
  updateDifficulty,
  updateCategory,
} = booksSlice.actions;

export default booksSlice.reducer;
