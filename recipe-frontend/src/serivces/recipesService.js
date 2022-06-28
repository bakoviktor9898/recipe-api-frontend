import axios from "axios";

const recipeClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

const getAllRecipes = async () => {
  return await recipeClient.get("/api/recipe");
};

const recipeService = {
  getAllRecipes,
};

export default recipeService;
