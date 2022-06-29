import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../serivces/authService";

// const user = localStorage.getItem("user");

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUser = createAsyncThunk(
  "auth/getuser",
  async (user, thunkAPI) => {
    try {
      return await authService.getUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      let messages = [];

      for (const value of Object.values(error.response.data.errors)) {
        messages = [...messages, value[0]];
      }
      if (messages.length > 0) return thunkAPI.rejectWithValue(messages);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    return error.message;
  }
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.message = "";
      state.isSuccess = false;
      state.isLoading = false;
    },
    // getUser: (state, action) => {
    //   state.isError = false;
    //   state.message = "";
    //   state.isSuccess = false;
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
    // getUserFail: (state, action) => {
    //   state.isError = true;
    //   state.message = action.payload;
    //   state.isSuccess = false;
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        // localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, acttion) => {
        state.isLoading = false;
        state.isError = true;
        state.message = acttion.payload;
        state.user = null;
        // localStorage.removeItem("user");
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        // localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        // localStorage.removeItem("user");
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        // localStorage.removeItem("user");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.message = action.error;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.message = action.error;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
