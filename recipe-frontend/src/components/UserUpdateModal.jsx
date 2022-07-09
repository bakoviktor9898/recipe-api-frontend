import React from "react";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "../features/auth/authSlice";

const UserUpdateModal = ({ show, onClose, user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  if (!show) return null;

  let userData = {
    name,
    email,
  };
  if (password !== "") {
    userData.password = password;
    userData.password_confirmation = password;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const handleUpdateUser = async () => {
    if (password !== passwordConfirmation) return toast.error;
    await dispatch(updateUser(userData));
    onClose();
  };

  return (
    <div
      id="container"
      onClick={(e) => handleOnClose(e)}
      className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50
    flex items-center justify-center"
    >
      <div className="bg-grey-200 p-2 w-[90%] h-[50%] sm:w-[90%] lg:w-[60%] max-w-3xl flex items-center justify-center gap-16 flex-col">
        <h1 className="text-xl tex-center">Update Profile</h1>
        <div className="w-[95%] md:w-[80%] max-w-lg">
          <div>
            <div>
              <div className="my-2 w-full">
                <Input
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={user.name}
                />
              </div>
              <div className="my-2 w-full">
                <Input
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={user.email}
                />
              </div>
              <div className="my-2 w-full">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                />
              </div>
              <div className="my-2 w-full">
                <Input
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  label="Password Confirmation"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-10">
            <button
              onClick={onClose}
              className="rounded-md bg-teal-600 text-white px-4 py-2 m-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleUpdateUser}
              className="rounded-md bg-yellow-800  text-white px-4 py-2 m-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdateModal;
