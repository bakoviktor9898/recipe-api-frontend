import { Card, CardBody, CardHeader } from "@material-tailwind/react";
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
    </Card>
  );
};

export default UserRecipeItem;
