import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";
import { Navigate } from "react-router-dom";

const PrivateLayout = ({ children }) => {
  const { user, loader } = useAuth();

  if (loader) {
    return <Loader />;
  }

  if (user) return children;
  return <Navigate to={"/login"} />;
};

export default PrivateLayout;
