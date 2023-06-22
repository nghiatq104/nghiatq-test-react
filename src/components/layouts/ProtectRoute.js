import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../context/authContext";

const ProtectRoute = () => {
  const { isAuthenticated, isChecking } = useContext(authContext);
  if (isChecking) {
    return <div />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectRoute;
