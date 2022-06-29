import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <Card className="mt-6 bg-white font-medium m-4 w-[400px] h-96 flex-col items-center justify-around text-center">
      <CardHeader className="text-2xl ">
        <span>{recipe.name}</span>
      </CardHeader>
      <CardBody className="text-center">
        <div>Az elkészitesi idő csupán</div>
        <span>{recipe.preparation_time} perc</span>
      </CardBody>
      <CardFooter className="text-center ">
        <div>Ha szeretne megtudni hogyan tudja elkésziteni</div>
        <button
          className="bg-teal-700 p-2 rounded-md text-white my-4"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          Kattintson ide
        </button>
      </CardFooter>
    </Card>
  );
};

export default RecipeItem;
