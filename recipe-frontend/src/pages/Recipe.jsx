import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findRecipe, reset } from "../features/recipe/recipeSlice";
import { Spinner } from "../components/Spinner";

const Recipe = () => {
  const { id } = useParams();
  const { recipe, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatch(findRecipe(id));
  }, [dispatch]);
  if (isLoading) return <Spinner />;
  if (message.includes("404"))
    return (
      <h1 className="text-2xl text-center h-[90vh] flex items-center justify-center">
        404 <br /> not found
      </h1>
    );
  return <div>Recipe name: {recipe?.name}</div>;
};

export default Recipe;
