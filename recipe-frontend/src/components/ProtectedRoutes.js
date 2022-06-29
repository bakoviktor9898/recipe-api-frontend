import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
