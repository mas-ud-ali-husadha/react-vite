import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { authenticated } = useAuth();

  if (authenticated) {
    return <Navigate to={`/`} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
