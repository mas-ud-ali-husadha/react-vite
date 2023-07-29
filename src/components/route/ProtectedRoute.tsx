import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const { authenticated } = useAuth();

  // if (!authenticated) {
  //   return <Navigate to={`/`} replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;