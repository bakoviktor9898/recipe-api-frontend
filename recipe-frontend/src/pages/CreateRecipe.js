import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import authService, { authClient } from "../serivces/authService";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    name: "",
    kcal: "",
    preparation_time: "",
    preparation: "",
  });

  const createRecipe = async (e) => {
    e.preventDefault();
    // if (recipeData.name === "") toast.error("name field is required");
    // if (recipeData.preparation === "")
    //   toast.error("preparation field is required");
    // if (recipeData.preparation_time === "")
    //   toast.error("preparation time field is required");
    // if (recipeData.kcal === "") toast.error("kcal field is required");
    // else {
    //   const { name, kcal, preparation_time, preparation } = recipeData;
    //   console.log(name, parseInt(kcal), preparation, preparation_time);
    // }

    // await authClient
    //   .post("/api/recipe/create", data)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="text-xl text-center mt-10 mb-3">Create a new recipe</h1>
      <form
        action=""
        className="max-w-[500px] mx-auto flex flex-col gap-3 px-4 md:px-0"
      >
        <Input
          color="teal"
          label="Name"
          onChange={(e) =>
            setRecipeData({ ...recipeData, name: e.target.value })
          }
        />
        <Input
          color="teal"
          label="Kcal"
          type="number"
          onChange={(e) =>
            setRecipeData({ ...recipeData, kcal: e.target.value })
          }
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <Input
          color="teal"
          label="Preparation time"
          type="number"
          onChange={(e) =>
            setRecipeData({
              ...recipeData,
              preparation_time: parseInt(e.target.value),
            })
          }
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <Textarea
          size="lg"
          color="teal"
          label="Preparation"
          onChange={(e) =>
            setRecipeData({
              ...recipeData,
              preparation: e.target.value,
            })
          }
        />
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 ml-2 w-20 py-2 rounded-lg  text-white"
          >
            Cancel
          </button>
          <button
            onClick={(e) => createRecipe(e)}
            className="bg-teal-500 mr-2 w-20 py-2 rounded-lg text-white"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateRecipe;
