import React, { useState } from "react";
import type { ReactNode } from "react";
import type { UserRole } from "./AuthContext";
import AuthContext from "./AuthContext";
import { login as apiLogin } from "../../apis/authApis";

// type User = {
//   id: string;
//   name: string;
//   permission: string;
// };

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>("guest");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jwt, setJwt] = useState<string>("");

  const storedUser  = localStorage.getItem("user");
  const storedJWT = localStorage.getItem("jwt");

  if (storedUser && storedJWT) {
    const storedUserAsJSON = JSON.parse(storedUser)
    setIsAuthenticated(true);
    setUserRole(storedUserAsJSON.permission);
    setJwt(storedUserAsJSON.token);
  }

  const login = async (email: string, password: string) => {
    const userInfo = await apiLogin(email, password);
    if (!("errmsg" in userInfo)) {

    }
  };
  const logout = () => setUserRole("guest");
  return (
    <AuthContext.Provider value={{ userRole, isAuthenticated, jwt, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
