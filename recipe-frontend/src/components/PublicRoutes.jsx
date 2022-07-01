import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const PublicRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PublicRoutes;
