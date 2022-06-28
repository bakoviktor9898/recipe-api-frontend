import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeService from "../../serivces/recipesService";

const initialState = {
  recipes: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllRecipes = createAsyncThunk("recipe/recipe", async () => {
  try {
    return await (
      await recipeService.getAllRecipes()
    ).data;
  } catch (error) {
    return error.message;
  }
});

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.recipes = [];
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export const { reset } = recipeSlice.actions;

export default recipeSlice.reducer;
