import { useContext } from "react";
import { AuthContext } from "../Pages/Login/PrivateRoute/PrivateRoute";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
