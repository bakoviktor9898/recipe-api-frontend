import axios from "axios";

const recipeClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

const getAllRecipes = async () => {
  return await recipeClient.get("/api/recipe");
};
const findRecipe = async (id) => {
  return await recipeClient.get(`/api/recipe/${id}`);
};

const recipeService = {
  getAllRecipes,
  findRecipe,
};

export default recipeService;
