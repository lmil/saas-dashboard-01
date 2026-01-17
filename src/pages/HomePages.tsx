import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          SaaS Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Week 5 - Forms & Validation Mastery
        </p>

        {/* TEMPORARY TEST BUTTON - Remove in Chunk 4! */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
          <p className="text-sm text-gray-600 mb-4">
            🧪 Testing Tools (Remove in Chunk 4)
          </p>
          {isAuthenticated ? (
            <div>
              <p className="text-green-600 mb-2">
                ✅ Logged in as: <strong>{user?.email}</strong>
              </p>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Test Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => login("test@example.com", "TestUser")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Test Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
