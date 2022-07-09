import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserDeleteModal from "../components/UserDeleteModal";
import UserUpdateModal from "../components/UserUpdateModal";

axios.defaults.withCredentials = true;

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [userRecipes, setUserRecipes] = useState([]);
  const [hideRecipes, setHideRecipes] = useState(false);
  const [showUserDeleteModal, setShowUserDeleteModal] = useState(false);
  const [showUserUpdateModal, setShowUserUpdateModal] = useState(false);

  useEffect(() => {
    myRecipes();
  }, []);

  const onCloseDeleteModal = () => setShowUserDeleteModal(false);
  const onCloseUpdateModal = () => setShowUserUpdateModal(false);

  const myRecipes = async () => {
    setUserRecipes(
      await (
        await axios.get("http://localhost:8000/api/my-recipes")
      ).data
    );
  };
  return (
    <div className="w-screen">
      <h1 className="text-center font-semibold text-2xl my-5">
        Personal Information
      </h1>
      <div className="rounded-md flex gap-10 md:gap-40 mx-auto justify-center w-[80%] sm:w-[50%] md:w-[500px] flex-wrap bg-white pt-7 pb-8 px-5">
        <div className="flex justify-center gap-6 flex-col">
          <div>Name</div>
          <div>Email</div>
          <div>Registered</div>
        </div>
        <div className="flex justify-center flex-col gap-6 ">
          <div>{user?.name}</div>
          <div>{user?.email}</div>
          <div>{user?.created_at.split("T")[0]}</div>
        </div>
      </div>
      <div className="flex w-screen items-center justify-center mt-7 gap-14">
        <div
          onClick={() => setShowUserDeleteModal(true)}
          className="hover:cursor-pointer flex items-center justify-center bg-red-600 rounded-md text-white w-max p-3"
        >
          Delete Profile
        </div>
        <div
          onClick={() => setShowUserUpdateModal(true)}
          className="hover:cursor-pointer flex items-center justify-center bg-yellow-800 rounded-md text-white w-max p-3"
        >
          Update Profile
        </div>
      </div>
      {userRecipes?.length > 0 && (
        <>
          <button
            onClick={() => setHideRecipes(!hideRecipes)}
            className="bg-teal-600 p-2"
          >
            {!hideRecipes ? (
              <div className="p-2 flex items-center justify-center px-2 gap-[7px]">
                <ArrowDownIcon className="w-5 h-5" />
                Show my recipes
              </div>
            ) : (
              <div className="p-2 flex items-center gap-[7px] justify-center px-2 ">
                <ArrowUpIcon className="h-5 w-5" />
                Hide my recipes
              </div>
            )}
          </button>
          <div>
            {hideRecipes &&
              userRecipes.map((recipe) => {
                return <div key={recipe.id}>{recipe.name}</div>;
              })}
          </div>
        </>
      )}
      <UserDeleteModal
        onClose={onCloseDeleteModal}
        show={showUserDeleteModal}
        user={user}
      />
      <UserUpdateModal
        onClose={onCloseUpdateModal}
        show={showUserUpdateModal}
        user={user}
      />
    </div>
  );
};

export default Profile;
