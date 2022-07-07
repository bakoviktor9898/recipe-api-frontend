import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeService from "../../serivces/recipesService";

const initialState = {
  recipes: [],
  recipe: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllRecipes = createAsyncThunk(
  "recipe/recipes",
  async (_, thunkAPI) => {
    try {
      return await (
        await recipeService.getAllRecipes()
      ).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const findRecipe = createAsyncThunk(
  "recipe/recipe",
  async (id, thunkAPI) => {
    try {
      return await recipeService.findRecipe(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    resetRecipes: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.recipes = [];
      state.recipe = null;
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
        state.message = action.payload;
      })
      .addCase(findRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = [];
        state.recipe = action.payload.data;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(findRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.recipes = [];
        state.recipe = null;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
