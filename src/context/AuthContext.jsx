import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";
import FirebaseAuth from "../handlers/auth";

const { signIn, signOut, getCurrentUser } = FirebaseAuth;
const Context = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = () => signIn().then(setCurrentUser);
  const logout = () => signOut().then(() => setCurrentUser(null));
  const authenticate = () => getCurrentUser().then(setCurrentUser);

  const value = useMemo(() => {
    return { login, logout, authenticate, currentUser };
  }, [login, logout, authenticate, currentUser]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuthContext = () => {
  return useContext(Context);
};

export default AuthProvider;
