import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

import {
  UserIcon,
  LogoutIcon,
  LoginIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import { Spinner } from "./Spinner";

const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  if (isLoading) return <Spinner />;
  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
  };

  return (
    <header className="bg-teal-600">
      <div className="flex justify-between items-center py-4 text-white text-lg ">
        <div className=" flex items-center pl-5">
          <NavLink
            to="/"
            className=" hover:bg-teal-700 p-2 flex items-center justify-center hover:rounded-md"
          >
            <img
              src={require("../images/recipesLogo.png")}
              width={100}
              height={200}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex gap-5 pr-6">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className=" hover:rounded-md p-2 hover:bg-teal-700 flex items-center justify-center px-2 gap-[7px]"
              >
                <LoginIcon className="w-6 h-6" />
                Login
              </NavLink>
              <NavLink
                to="/register"
                className=" hover:rounded-md p-2 hover:bg-teal-700 flex items-center justify-center px-2 gap-[7px]"
              >
                <UserAddIcon className="w-6 h-6" />
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="p-2 hover:bg-teal-700 hover:rounded-md flex items-center justify-center px-2 gap-[7px]"
              >
                <UserIcon className="w-6 h-6" />
                Profile
              </NavLink>

              <button
                onClick={(e) => handleLogout(e)}
                className="hover:rounded-md p-2 hover:bg-teal-700 flex items-center justify-center px-2 gap-[7px]"
              >
                <LogoutIcon className="w-6 h-6" />
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
