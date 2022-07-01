import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return <div>Welcome {user && user.name}</div>;
};

export default Profile;
