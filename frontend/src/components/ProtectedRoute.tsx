import React from "react";
import { useAuth } from "../contexts/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

type AllowedRole = "admin" | "employee";

interface ProtectedRouteProps {
  allowedRoles?: ("employee" | "admin")[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, userRole, isLoading } = useAuth();

  if(isLoading) {
    return <div> Loading ...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    const userHasPermission = allowedRoles
      ? allowedRoles.includes(userRole as AllowedRole)
      : true;

    if (!userHasPermission) {
      return <Navigate to="/" replace />;
    }
  }
  return <Outlet />;
};

export default ProtectedRoute;
