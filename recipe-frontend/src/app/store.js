import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import recipeReducer from "../features/recipe/recipeSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
