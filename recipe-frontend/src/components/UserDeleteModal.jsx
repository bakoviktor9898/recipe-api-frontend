import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { deleteUser, logout, reset } from "../features/auth/authSlice";
import { Spinner } from "./Spinner";

const UserDeleteModal = ({ show, onClose }) => {
  const { isLoading, user, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      dispatch(logout());
      navigate("/login");
    }
  }, [isError, dispatch, message, user, isSuccess, navigate]);

  if (isLoading) return <Spinner />;
  if (!show) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    dispatch(deleteUser(user.id));
  };

  return (
    <div
      id="container"
      onClick={(e) => handleOnClose(e)}
      className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50
    flex items-center justify-center"
    >
      <div className="bg-white p-2 h-[350px] w-[90%] max-w-[600px] flex items-center justify-center gap-[30px] flex-col">
        <h1 className="text-xl w-full text-center">
          Are you sure you want delete your profile?
        </h1>
        <div>
          <div className="flex items-center justify-center">
            <button
              onClick={onClose}
              className="rounded-md text-white bg-teal-600 px-4 py-2 m-2"
            >
              Cancel
            </button>
            <button
              onClick={(e) => handleDeleteUser(e)}
              className="rounded-md text-white bg-red-600 px-4 py-2 m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteModal;
