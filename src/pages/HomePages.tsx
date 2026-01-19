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
      </div>
    </div>
  );
}

export default HomePage;
