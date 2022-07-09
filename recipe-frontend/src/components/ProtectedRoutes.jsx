import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoutes;
