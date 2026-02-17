import { api } from './api';

export const loginUser = async (credentials: any) => {
  // Chamada para @PostMapping("/login")
  const response = await api.post('/auth/login', credentials);
  
  // Como o seu amigo retorna uma String (o token) diretamente:
  const token = response.data;
  
  if (token) {
    localStorage.setItem('token', token);
  }
  return token;
};

export const registerUser = async (userData: any) => {
  // Chamada para @PostMapping("/register")
  const response = await api.post('/auth/register', userData);
  return response.data;
};