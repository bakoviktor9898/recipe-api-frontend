import { Navigate } from "react-router";

const ProtectedRoutes = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
