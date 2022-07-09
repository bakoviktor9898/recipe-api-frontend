// register

import axios from "axios";

export const authClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

const dataFromRegister = async (user) => {
  await authClient.get("/sanctum/csrf-cookie").then((res) => {
    return authClient.post("/register", user);
  });
};

const dataFromLogin = async (user) => {
  await authClient.get("/sanctum/csrf-cookie").then((res) => {
    return authClient.post("/login", user);
  });
};

const register = async (user) => {
  await dataFromRegister(user);
  return getUser();
};

const login = async (user) => {
  await dataFromLogin(user);
  return getUser();
};

const logout = async () => {
  await authClient.post("/logout");
};

const getUser = async () => {
  return await authClient.get("api/user").then((res) => res.data);
};

const updateUser = async (user) => {
  return await (
    await authClient.put("/api/user", user)
  ).data;
};

const deleteUser = async (id) => {
  return await authClient.delete(`api/user/${id}`);
};

const authService = {
  register,
  getUser,
  login,
  logout,
  deleteUser,
  updateUser,
};

export default authService;
