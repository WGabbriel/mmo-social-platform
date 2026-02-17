import { api } from './api';
import axios, { AxiosError } from 'axios';

export const loginUser = async (credentials: { email: string; password: string }) => {
  // Chamada para @PostMapping("/login") que retorna o Token
  const response = await api.post('/auth/login', credentials);
  const token = response.data; 
  
  if (token) {
    localStorage.setItem('token', token);
  }
  return token;
};

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  // Chamada para @PostMapping("/register") conforme o UserRequestDto
  const response = await api.post('/auth/register', userData);
  return response.data;
};