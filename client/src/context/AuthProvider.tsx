import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user: null, login: () => {}, logout: () => {} }}
    >
      {children}
    </AuthContext.Provider>
  );
}
