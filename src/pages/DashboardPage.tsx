import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Welcome to Your Dashboard!
        </h1>
        <p className="text-gray-600 mb-6">
          You're logged in as:{" "}
          <strong className="text-blue-600">{user?.email}</strong>
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            Protected Content
          </h2>
          <p className="text-blue-700">
            This page is only visible to authenticated users. If you weren't
            logged in, you would be redirected to the login page automatically!
          </p>
        </div>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default DashboardPage;
