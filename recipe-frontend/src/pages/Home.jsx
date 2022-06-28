import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
