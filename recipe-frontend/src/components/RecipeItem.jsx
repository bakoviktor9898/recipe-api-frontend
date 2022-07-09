import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <Card
      shadow={false}
      className="mt-6 rounded-xl bg-white font-medium m-4 flex-col justify-center text-center"
    >
      <CardHeader shadow={false} className="text-2xl" floated={false}>
        <span>{recipe.name}</span>
      </CardHeader>
      <CardBody className="text-center">
        <div>Az elkészitesi idő csupán</div>
        <span>{recipe.preparation_time} perc</span>
      </CardBody>
      <CardFooter className="text-center">
        <div>Ha szeretne megtudni hogyan tudja elkésziteni</div>
        <button
          className="bg-teal-700 p-2 rounded-md text-white mt-2"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          Kattintson ide
        </button>
      </CardFooter>
    </Card>
  );
};

export default RecipeItem;
