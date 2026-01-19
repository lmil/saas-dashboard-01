import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navigation() {
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">SaaS Dashboard</div>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold pb-1"
                : "text-gray-600 hover:text-blue-600 transition pb-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600 border-b-2 pb-1 border-blue-600"
                : "text-gray-600 pb-1 hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>
          {isAuthenticated ? (
            // When LOGGED IN: Show Dashboard and Logout
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-600 border-b-2 pb-1 border-blue-600"
                    : "text-gray-600 pb-1 hover:text-blue-600 transition"
                }
              >
                Dashboard
              </NavLink>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-red-600 transition pb-1 cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            // When LOGGED OUT: Show Login and Sign Up
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-600 border-b-2 pb-1 border-blue-600"
                    : "text-gray-600 pb-1 hover:text-blue-600 transition"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-600 border-b-2 pb-1 border-blue-600"
                    : "text-gray-600 pb-1 hover:text-blue-600 transition"
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
