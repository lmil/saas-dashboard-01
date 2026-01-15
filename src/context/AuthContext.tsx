import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; username: string } | null;
  login: (email: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState<{ email: string; username: string } | null>(
    null
  );

  function login(email: string, username: string) {
    const userData = { email, username };
    setUser(userData);
    setIsAuthenticated(true);
    console.log("✅ User logged in: ", userData);
  }

  // Logout function: Clear everything
  function logout() {
    setUser(null);
    setIsAuthenticated(false);
    console.log("🚪 User logged out");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {/* TEMPORARY TEST BUTTON - We'll remove this later! */}
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
