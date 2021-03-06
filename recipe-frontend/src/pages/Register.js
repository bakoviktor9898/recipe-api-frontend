import { LockClosedIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "../components/Spinner";

export const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      message.forEach((element) => {
        toast.error(element);
      });
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spinner />;

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.password_confirmation) {
      toast.error("Password do not match");
    } else {
      await dispatch(register(registerForm));
      await dispatch(reset());
    }
  };

  return (
    <div className="h-[90vh]">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register a new account
            </h2>
            <div className="text-center text-xl">
              Or{" "}
              <NavLink
                className="text-teal-500 uppercase font-medium"
                to={"/login"}
              >
                Sign in
              </NavLink>{" "}
              into your account
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 sm:py-3 border border-grey-400 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  onChange={(e) => {
                    setRegisterForm({ ...registerForm, name: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 sm:py-3 border border-grey-400 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => {
                    setRegisterForm({ ...registerForm, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 sm:py-3 border border-grey-400 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => {
                    setRegisterForm({
                      ...registerForm,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password_confirmation" className="sr-only">
                  Password Confirmation
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 sm:py-3 border border-grey-400 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Password Confirm"
                  onChange={(e) => {
                    setRegisterForm({
                      ...registerForm,
                      password_confirmation: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleRegister}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
