import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { UserRole, User } from "./AuthContext";
import AuthContext from "./AuthContext";
import { login as apiLogin } from "../../apis/auth.api";


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>("guest");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jwt, setJwt] = useState<string>("");
  const [user, setUser] = useState<User>({} as User);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setUserRole(parsedUser.permission);
      setJwt(parsedUser.token);
    }

    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const loginData = await apiLogin(email, password);
    const userInfo: User = loginData;
    if (!("errmsg" in userInfo)) {
      const newStoredUser = {
        ...userInfo,
      };
      localStorage.setItem("user", JSON.stringify(newStoredUser));
      setUser(newStoredUser);
      setIsAuthenticated(true);
      setJwt(userInfo.token);
      setUserRole(userInfo.permission);
    }
  };
  const logout = async () => {
    localStorage.removeItem("user");
    setUser({} as User);
    setIsAuthenticated(false);
    setJwt("");
    setUserRole("guest");
  };
  return (
    <AuthContext.Provider
      value={{ userRole, isAuthenticated, jwt, user, login, logout, isLoading }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
