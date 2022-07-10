import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, resetRecipes } from "../features/recipe/recipeSlice";
import { Spinner } from "../components/Spinner";
import RecipeItem from "../components/RecipeItem";
import { useNavigate } from "react-router";

const Home = () => {
  const { recipes, isLoading, isError, message } = useSelector(
    (state) => state.recipe
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllRecipes());
    if (isError) console.log(message);

    return () => {
      dispatch(resetRecipes());
    };
  }, [isError, message, dispatch, user]);

  if (isLoading) return <Spinner />;

  return (
    <div className="relative">
      <h1 className="text-center text-2xl mt-6 mb-7">Recipes</h1>
      <button
        onClick={() => navigate("/recipe/create")}
        className="bg-teal-700 rounded-md text-white absolute p-2 top-8 left-5"
      >
        Add new recipes
      </button>
      <div className="flex h-full flex-wrap items-center justify-center">
        {recipes.length > 0 ? (
          recipes.map((recipe) => {
            return <RecipeItem key={recipe.id} recipe={recipe} />;
          })
        ) : (
          <h1>0 recipe</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
