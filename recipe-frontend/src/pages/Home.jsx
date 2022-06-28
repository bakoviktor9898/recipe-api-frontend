import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllRecipes } from "../features/recipe/recipeSlice";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { recipes } = useSelector((state) => state.recipe);
  const [re, setRe] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
    dispatch(getAllRecipes());
  }, [navigate, user, dispatch]);

  useEffect(() => {
    setRe(recipes);
  }, [recipes]);

  return (
    <div>
      <h1>Home page</h1>
      <div></div>
    </div>
  );
};

export default Home;
