import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, reset } from "../features/recipe/recipeSlice";
import { Spinner } from "../components/Spinner";
import RecipeItem from "../components/RecipeItem";

const Home = () => {
  const { recipes, isLoading, isError, message } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    if (isError) console.log(message);

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="text-center text-2xl mt-6 mb-3">Recipes</h1>
      <div className="flex h-full flex-wrap items-center justify-center">
        {recipes?.length > 0 ? (
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
