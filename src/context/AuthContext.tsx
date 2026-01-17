import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; username: string } | null;
  login: (email: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getInitialUser() {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    return JSON.parse(savedUser);
  }
  return null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string; username: string } | null>(
    getInitialUser
  );
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("user") !== null;
  });
  const [loading, setLoading] = useState(true); // Add this!

  function login(email: string, username: string) {
    const userData = { email, username };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("✅ User logged in: ", userData);
  }

  // Logout function: Clear everything
  function logout() {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
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
