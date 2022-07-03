import React from "react";
import { Input } from "@material-tailwind/react";

const UserUpdateModal = ({ show, onClose, user }) => {
  if (!show) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
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
                <Input label="Name" defaultValue={user?.name} />
              </div>
              <div className="my-2 w-full">
                <Input label="Email" defaultValue={user?.email} />
              </div>
              <div className="my-2 w-full">
                <Input label="Password" />
              </div>
              <div className="my-2 w-full">
                <Input label="Password Confirmation" />
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
            <button className="rounded-md bg-yellow-800  text-white px-4 py-2 m-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdateModal;
