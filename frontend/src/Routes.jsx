import { useRoutes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import CreateRepo from "./components/repo/CreateRepo";

import { useAuth } from "./authContext";

const ProjectRoutes = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId && !currentUser) {
      setCurrentUser(userId);
    }

    if (!userId && !["/auth", "/signup"].includes(window.location.pathname)) {
      navigate("/auth");
    }
  }, [currentUser, navigate, setCurrentUser]);

  return useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/auth", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/create", element: <CreateRepo /> }, // 🔥 THIS FIXES BLANK SCREEN
  ]);
};

export default ProjectRoutes;
