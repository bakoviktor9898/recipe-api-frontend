import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import "../style/nav.css";
import { Spinner } from "./Spinner";

const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  if (isLoading) return <Spinner />;

  return (
    <header className="bg-indigo-700">
      <div className="flex justify-between items-center py-4 text-white text-lg ">
        <div className=" flex items-center pl-5">
          <NavLink
            to="/"
            className="hover:bg-indigo-900 p-2 flex items-center justify-center hover:rounded-md"
          >
            Home
          </NavLink>
        </div>
        <div className="flex gap-10 pr-6">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="hover:rounded-md p-2 hover:bg-indigo-900 "
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="hover:rounded-md p-2 hover:bg-indigo-900"
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={(e) => handleLogout(e)}
              className="hover:rounded-md p-2 hover:bg-indigo-900"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
