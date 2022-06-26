import { Navigate, useNavigate } from "react-router";

const PublicRoutes = ({ user, children }) => {
  if (!user) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PublicRoutes;
