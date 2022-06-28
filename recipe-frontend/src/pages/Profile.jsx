import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return <div>Welcome {user && user.name}</div>;
};

export default Profile;
