import { Navigate } from "react-router-dom";
import { useAuth } from "../services/authContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/" />;

  return <>{children}</>;
}