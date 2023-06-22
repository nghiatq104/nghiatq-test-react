import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../context/authContext";

const ProtectRoute = () => {
  const { isAuthenticated, isChecking } = useContext(authContext);
  if (isChecking) {
    // user is not authenticated
    return <div />;
  }
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectRoute;
