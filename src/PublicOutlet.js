import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const PublicOutlet = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/secure/profile" /> : <Outlet />;
};
export default PublicOutlet;
