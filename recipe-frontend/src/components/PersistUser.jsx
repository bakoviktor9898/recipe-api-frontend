import React from "react";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, reset } from "../features/auth/authSlice";
import { Spinner } from "./Spinner";

const PersistUser = () => {
  // Select user from state
  const { user } = useSelector((state) => state.auth);
  // Create a loading state
  const [loading, setLoading] = useState(true);
  const dispatcth = useDispatch();

  useEffect(() => {
    const persistUser = async () => {
      try {
        // Request to the api if user is logged in
        await dispatcth(getUser());
        // Then reset the auth state
        // await dispatcth(reset());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    // If auth state user is null then get the user if user set the loading state to false
    !user ? persistUser() : setLoading(false);
  }, [user, dispatcth]);
  // Until the loading state is true show spinner if is false then show the route children
  return <>{loading ? <Spinner /> : <Outlet />}</>;
};

export default PersistUser;
