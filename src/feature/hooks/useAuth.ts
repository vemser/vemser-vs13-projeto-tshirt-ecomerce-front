import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/auth";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, { isLoading: isLoadingLogin, isError: isErrorLogin }] =
    useLoginMutation();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("token", token);
    }
  }, []);

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const loginUser = (email: string, password: string) => {
    login({ email, password })
      .unwrap()
      .then((res) => {
        setToken(res);
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch(() => {});
  };

  return {
    loginUser,
    logout,
    isLoadingLogin,
    isErrorLogin,
    isAuthenticated,
  };
}
