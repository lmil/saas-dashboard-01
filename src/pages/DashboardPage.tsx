import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <h1>Welcome to your Dashboard!</h1>
        <p>
          You are loggedf in as:<strong>{user?.email}</strong>
        </p>
        <div>
          <h2>Protected Content</h2>
          <p>
            This page is only visible to authenticated users. If you weren't
            logged in, you would be redirected to the login page automatically!
          </p>
        </div>
        <a>← Back to Home</a>
      </div>
    </div>
  );
}

export default DashboardPage;
