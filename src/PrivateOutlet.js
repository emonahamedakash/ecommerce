import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const PrivateOutlet = () => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateOutlet;
