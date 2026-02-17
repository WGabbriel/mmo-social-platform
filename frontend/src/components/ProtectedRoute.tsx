import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Verificamos se o token que salvamos no Login existe
  const token = localStorage.getItem("token");

  if (!token) {
    // Se não houver token, mandamos para o login
    return <Navigate to="/login" replace />;
  }

  // Se houver, permitimos o acesso ao conteúdo (children)
  return <>{children}</>;
};