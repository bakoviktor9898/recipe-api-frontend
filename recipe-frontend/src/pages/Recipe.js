import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findRecipe } from "../features/recipe/recipeSlice";
import { Spinner } from "../components/Spinner";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

const Recipe = () => {
  const { id } = useParams();
  const { recipe, isLoading } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findRecipe(id));
  }, [dispatch, id]);
  if (isLoading) return <Spinner />;

  return (
    <div className="mt-24 flex items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-[115px] py-2 flex justify-center gap-1 items-center left-3  bg-teal-700 w-[127px] text-center text-white rounded-md"
      >
        <ArrowCircleLeftIcon className="w-7 h-7" />
        Vissza
      </button>
      <div className="w-[90%] max-w-[1100px] flex flex-col items-center gap-4 bg-white rounded-lg">
        <h1 className="text-3xl pb-5 pt-8 text-center">{recipe?.name}</h1>
        <div className="text-xl">Kcal : {recipe?.kcal}</div>
        <div className="text-xl">
          Elkészítési idő: {recipe?.preparation_time}
        </div>
        <div className="text-xl">Recept</div>
        <div className="max-w-[85%] leading-7 pt-2 pb-10 text-lg">
          {recipe?.preparation}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
