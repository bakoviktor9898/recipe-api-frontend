import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Recipe from "./pages/Recipe";
import NoMatch from "./pages/NoMatch";
import PersistUser from "./components/PersistUser";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  return (
    <div className="App font-sans max-h-max min-h-screen bg-grey-200">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PersistUser />}>
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoutes>
                  <Register />
                </PublicRoutes>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/recipe/create"
              element={
                <ProtectedRoutes>
                  <CreateRecipe />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <ProtectedRoutes>
                  <Recipe />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
