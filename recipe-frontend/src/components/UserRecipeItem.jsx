import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import React from "react";

const UserRecipeItem = ({ recipe }) => {
  return (
    <Card
      shadow={false}
      className="mt-6 rounded-xl bg-white font-medium m-4 w-[400px] text-center items-center justify-start"
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="text-2xl mb-4 font-semibold"
      >
        <span>{recipe.name}</span>
      </CardHeader>
      <CardBody className="text-center mt-0 text-lg">
        <div>Elkészitesi idő: {recipe.preparation_time} perc</div>
        <div className="text-center text-xl mt-2">Elkészítés</div>
        <div className="text-lg mt-2">{recipe.preparation}</div>
      </CardBody>
      <CardFooter>
        <div className="flex gap-3">
          <button className="bg-red-800 text-white p-3 rounded-md">
            Delete recipe
          </button>
          <button className="bg-yellow-800 text-white p-3 rounded-md">
            Update recipe
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserRecipeItem;
